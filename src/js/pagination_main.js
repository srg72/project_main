import Pagination from 'tui-pagination';
import { getPopularMovies } from './movies-api-service';
export { createPagi, createPagiKey };
const container = document.getElementById('tui-pagination-container');
function createPagi(total) {
  const options = {
    totalItems: total,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
    dataSource: async function (pageNum, callback) {
      const response = await axios.get(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${pageNum}`
      );
      callback(response.data, response.totalCount);
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', function (eventData) {
    const currentPage = eventData.page;
    pagination.options.page = currentPage;
    pagination.movePageTo(currentPage);
    pagination.options.dataSource(currentPage, function (data, totalCount) {
      updateList(data);
    });
  });
}
function createPagiKey(searchQuery, total) {
  const options = {
    totalItems: total,
    page: 1,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">' +
        '<span class="tui-ico-page">{{page}}</span>' +
        '</strong > ',
      page:
        '<a href="1" class="tui-page-btn page"> ' +
        '<span class="tui-ico-page">{{page}}</span>' +
        '</a>',
      moveButton:
        '<a href="movebutton" class="tui-page-btn  tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">&#8592;</span>' +
        '</a>',
      moreButton:
        '<a href="moreButton" class="tui-page-btn  tui-{{type}}-is-ellip"> ' +
        '<span class="tui-ico-ellip moreButton">...</span>' +
        '</a>',

      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} disabledMoveButton">' +
        '<span class="tui-ico-{{type}} disabledMoveButton"></span>' +
        '</span>',
    },
  };
  const pagination = new Pagination(
    document.getElementById('tui-pagination-container'),
    options
  );
  pagination.on('afterMove', event => {
    galleryConteiner.innerHTML = '';
    const currentPage = event.page;

    createMoviesMarkupKey(searchQuery, currentPage);
  });
}
