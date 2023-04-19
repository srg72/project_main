!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n,i,o={};n=void 0===t?"undefined"==typeof window?o:window:t,i=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,n,i,o,r,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",d="Info",h={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",_={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",C="Hourglass",k="Circle",I="Arrows",E="Dots",N="Pulse",S="Custom",T="Notiflix",O={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",A="Hourglass",P="Circle",L="Arrows",D="Dots",M="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},B=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},U=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},z=function(e){return e||(e="head"),null!==t.document[e]||(B('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},j=function(e,n){if(!z("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},W=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?W(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},H=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},V=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},Y=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},G=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(n,i,o,r){if(!z("body"))return!1;e||ct.Notify.init({});var s=W(!0,e,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof r&&!Array.isArray(r)){var f={};"object"==typeof o?f=o:"object"==typeof r&&(f=r),e=W(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=H(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=W(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(h.wrapID)||t.document.createElement("div");if(m.id=h.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(h.overlayID)||t.document.createElement("div");g.id=h.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(h.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(h.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+J,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof o?"nx-with-close-button":"")+" "+("function"==typeof o?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof o&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===d&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(h.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(h.wrapID).appendChild(y);var _=t.document.getElementById(y.id);if(_){var x,C,k=function(){_.classList.add("nx-remove");var e=t.document.getElementById(h.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(x)},I=function(){if(_&&null!==_.parentNode&&_.parentNode.removeChild(_),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(h.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(C)};if(e.closeButton&&"function"!=typeof o&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){k();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof o||e.clickToClose)&&_.addEventListener("click",(function(){"function"==typeof o&&o(),k();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof o){var E=function(){x=setTimeout((function(){k()}),e.timeout),C=setTimeout((function(){I()}),e.timeout+e.cssAnimationDuration)};E(),e.pauseOnHover&&(_.addEventListener("mouseenter",(function(){_.classList.add("nx-paused"),clearTimeout(x),clearTimeout(C)})),_.addEventListener("mouseleave",(function(){_.classList.remove("nx-paused"),E()})))}}if(e.showOnlyTheLastOne&&0<J)for(var N,S=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+J+"])"),T=0;T<S.length;T++)null!==(N=S[T]).parentNode&&N.parentNode.removeChild(N);e=W(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,o,r,s,l){if(!z("body"))return!1;n||ct.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=W(!0,n,{}),n=W(!0,n,u)}var d=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof o&&(e===f?o='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?o='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?o='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(o='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof r&&(r="Okay"),n.plainText&&(i=H(i),o=H(o),r=H(r)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',r="Okay"),o.length>n.messageMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',r="Okay"),r.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',r="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),o.length>n.messageMaxLength&&(o=o.substring(0,n.messageMaxLength)+"..."),r.length>n.buttonMaxLength&&(r=r.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var h=t.document.createElement("div");h.id=y.ID,h.className=n.className,h.style.zIndex=n.zindex,h.style.borderRadius=n.borderRadius,h.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(d.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w="";if(e===f?w=function(t,e){return t||(t="110px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):e===p?w=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):e===m?w=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):e===g&&(w=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor)),h.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+w+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+d.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+d.messageColor+';">'+o+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+d.buttonBackground+"; color:"+d.buttonColor+';">'+r+"</a></div>",!t.document.getElementById(h.id)){t.document.body.appendChild(h);var _=function(){var e=t.document.getElementById(h.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),_()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}n=W(!0,n,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,o,r,s,l,c,u,d){if(!z("body"))return!1;i||ct.Confirm.init({});var h=W(!0,i,{});"object"!=typeof d||Array.isArray(d)||(i=W(!0,i,d)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof o&&(o="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=H(n),o=H(o),s=H(s),l=H(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),o.length>i.messageMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),o.length>i.messageMaxLength&&(o=o.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=_.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,x=void 0;if(e===b||e===w){v=r||"";var C=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+C+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+o+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var k=t.document.getElementById(f.id),I=t.document.getElementById("NXConfirmButtonOk"),E=t.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(e===b&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(t){if(e===b&&v&&E){if((E.value||"").toString()!==v)return E.focus(),E.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&E&&(x=E.value||""),c(x)),k.classList.add("nx-remove");var n=setTimeout((function(){null!==k.parentNode&&(k.parentNode.removeChild(k),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&E&&(x=E.value||""),u(x)),k.classList.add("nx-remove");var t=setTimeout((function(){null!==k.parentNode&&(k.parentNode.removeChild(k),clearTimeout(t))}),i.cssAnimationDuration)}))}i=W(!0,i,h)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ot=function(e,n,i,r,s){if(!z("body"))return!1;o||ct.Loading.init({});var l=W(!0,o,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),o=W(!0,o,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),r){var d="";0<(u=u.length>o.messageMaxLength?H(u).toString().substring(0,o.messageMaxLength)+"...":H(u).toString()).length&&(d='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+u+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var h="";if(e===x)h=q(o.svgSize,o.svgColor);else if(e===C)h=$(o.svgSize,o.svgColor);else if(e===k)h=X(o.svgSize,o.svgColor);else if(e===I)h=V(o.svgSize,o.svgColor);else if(e===E)h=Y(o.svgSize,o.svgColor);else if(e===N)h=K(o.svgSize,o.svgColor);else if(e===S&&null!==o.customSvgCode&&null===o.customSvgUrl)h=o.customSvgCode||"";else if(e===S&&null!==o.customSvgUrl&&null===o.customSvgCode)h='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(e===S&&(null===o.customSvgUrl||null===o.customSvgCode))return B('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;h=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(o.svgSize,"#f8f8f8","#32c682")}var f=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+o.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+h+"</div>",y=t.document.createElement("div");y.id=O.ID,y.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=o.zindex,y.style.background=o.backgroundColor,y.style.animationDuration=o.cssAnimationDuration+"ms",y.style.fontFamily='"'+o.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",o.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+d,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),o.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),o.cssAnimationDuration)}))}else if(t.document.getElementById(O.ID))var v=t.document.getElementById(O.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),o.cssAnimationDuration);clearTimeout(b)}),s);o=W(!0,o,l)},rt=function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(O.ID);if(n)if(0<e.length){e=e.length>o.messageMaxLength?H(e).substring(0,o.messageMaxLength)+"...":H(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var r=t.document.createElement("p");r.id=o.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=o.messageColor,r.style.fontSize=o.messageFontSize,r.innerHTML=e,n.appendChild(r)}}else B("Where is the new message?")},st=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},at=0,lt=function(e,n,i,o,s,l){var c;if(Array.isArray(i)){if(1>i.length)return B("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return B("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return B("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return B('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}r||ct.Block.init({});var d=W(!0,r,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof s&&!Array.isArray(s)){var h={};"object"==typeof o?h=o:"object"==typeof s&&(h=s),r=W(!0,r,h)}var f="";"string"==typeof o&&0<o.length&&(f=o),r.cssAnimation||(r.cssAnimationDuration=0);var p=F.className;"string"==typeof r.className&&(p=r.className.trim());var m="number"==typeof r.querySelectorLimit?r.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=c[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var _=v.querySelectorAll("[id^="+F.ID+"]");if(1>_.length){var x="";n&&(x=n===A?$(r.svgSize,r.svgColor):n===P?X(r.svgSize,r.svgColor):n===L?V(r.svgSize,r.svgColor):n===D?Y(r.svgSize,r.svgColor):n===M?K(r.svgSize,r.svgColor):q(r.svgSize,r.svgColor));var C='<span class="'+p+'-icon" style="width:'+r.svgSize+";height:"+r.svgSize+';">'+x+"</span>",k="";0<f.length&&(f=f.length>r.messageMaxLength?H(f).substring(0,r.messageMaxLength)+"...":H(f),k='<span style="font-size:'+r.messageFontSize+";color:"+r.messageColor+';" class="'+p+'-message">'+f+"</span>"),at++;var I=t.document.createElement("div");I.id=F.ID+"-"+at,I.className=p+(r.cssAnimation?" nx-with-animation":""),I.style.position=r.position,I.style.zIndex=r.zindex,I.style.background=r.backgroundColor,I.style.animationDuration=r.cssAnimationDuration+"ms",I.style.fontFamily='"'+r.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",r.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=C+k;var E,N=t.getComputedStyle(v).getPropertyValue("position"),S="string"==typeof N?N.toLocaleLowerCase("en"):"relative",T=Math.round(1.25*parseInt(r.svgSize))+40,O="";T>(v.offsetHeight||0)&&(O="min-height:"+T+"px;"),E=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(j||0<O.length){if(!z("head"))return!1;j&&(R="position:relative!important;");var G='<style id="Style-'+F.ID+"-"+at+'">'+E+"."+y+"{"+R+O+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Q=J.createContextualFragment(G);t.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),o=t.document.getElementById("Style-"+i);o&&null!==o.parentNode&&o.parentNode.removeChild(o),clearTimeout(n)}),r.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else U("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),r.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),_=t.querySelectorAll("[id^="+F.ID+"]"),tt(_));clearTimeout(nt)}),l);r=W(!0,r,d)},ct={Notify:{init:function(t){e=W(!0,h,t),j(G,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=W(!0,e,t)):(B("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Q(l,t,e,n)},failure:function(t,e,n){Q(c,t,e,n)},warning:function(t,e,n){Q(u,t,e,n)},info:function(t,e,n){Q(d,t,e,n)}},Report:{init:function(t){n=W(!0,y,t),j(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=W(!0,n,t)):(B("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,o){tt(f,t,e,n,i,o)},failure:function(t,e,n,i,o){tt(p,t,e,n,i,o)},warning:function(t,e,n,i,o){tt(m,t,e,n,i,o)},info:function(t,e,n,i,o){tt(g,t,e,n,i,o)}},Confirm:{init:function(t){i=W(!0,_,t),j(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=W(!0,i,t)):(B("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,o,r,s){nt(v,t,e,null,n,i,o,r,s)},ask:function(t,e,n,i,o,r,s,a){nt(b,t,e,n,i,o,r,s,a)},prompt:function(t,e,n,i,o,r,s,a){nt(w,t,e,n,i,o,r,s,a)}},Loading:{init:function(t){o=W(!0,O,t),j(it,"NotiflixLoadingInternalCSS")},merge:function(t){return o?void(o=W(!0,o,t)):(B("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){ot(x,t,e,!0,0)},hourglass:function(t,e){ot(C,t,e,!0,0)},circle:function(t,e){ot(k,t,e,!0,0)},arrows:function(t,e){ot(I,t,e,!0,0)},dots:function(t,e){ot(E,t,e,!0,0)},pulse:function(t,e){ot(N,t,e,!0,0)},custom:function(t,e){ot(S,t,e,!0,0)},notiflix:function(t,e){ot(T,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),ot(null,null,null,!1,t)},change:function(t){rt(t)}},Block:{init:function(t){r=W(!0,F,t),j(st,"NotiflixBlockInternalCSS")},merge:function(t){return r?void(r=W(!0,r,t)):(B('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){lt(!0,R,t,e,n)},hourglass:function(t,e,n){lt(!0,A,t,e,n)},circle:function(t,e,n){lt(!0,P,t,e,n)},arrows:function(t,e,n){lt(!0,L,t,e,n)},dots:function(t,e,n){lt(!0,D,t,e,n)},pulse:function(t,e,n){lt(!0,M,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),lt(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?W(!0,t.Notiflix,{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}):{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}},"function"==typeof define&&define.amd?define([],(function(){return i(n)})):"object"==typeof o?o=i(n):n.Notiflix=i(n);var r={};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.13.0
*/function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw r}}}}function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var f=function(){function t(e,n){var i=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5,download:!1}),h(this,"transitionPrefix",void 0),h(this,"isPassiveEventsSupported",void 0),h(this,"transitionCapable",!1),h(this,"isTouchDevice","ontouchstart"in window),h(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),h(this,"initialLocationHash",void 0),h(this,"pushStateSupport","pushState"in history),h(this,"isOpen",!1),h(this,"isAnimating",!1),h(this,"isClosing",!1),h(this,"isFadeIn",!1),h(this,"urlChangedOnce",!1),h(this,"hashReseted",!1),h(this,"historyHasChanges",!1),h(this,"historyUpdateTimeout",null),h(this,"currentImage",void 0),h(this,"eventNamespace","simplelightbox"),h(this,"domNodes",{}),h(this,"loadedImages",[]),h(this,"initialImageIndex",0),h(this,"currentImageIndex",0),h(this,"initialSelector",null),h(this,"globalScrollbarWidth",0),h(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof e?(this.initialSelector=e,this.elements=Array.from(document.querySelectorAll(e))):this.elements=void 0!==e.length&&e.length>0?Array.from(e):[e],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var o=[];this.elements=Array.from(this.elements).filter((function(t){var e=t.getAttribute(i.options.sourceAttr);return-1===o.indexOf(e)&&(o.push(e),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(t){if(i.isValidLink(t.currentTarget)){if(t.preventDefault(),i.isAnimating)return!1;i.initialImageIndex=i.elements.indexOf(t.currentTarget),i.openImage(t.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(t){i.isOpen&&t.target===t.currentTarget&&i.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(t){t.target.parentElement.classList.contains("sl-image")&&t.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(t){if(i.controlCoordinates.swipeDiff=0,i.isAnimating&&"Escape"===t.key)return i.currentImage.setAttribute("src",""),i.isAnimating=!1,void i.close();i.isOpen&&(t.preventDefault(),"Escape"===t.key&&i.close(),!i.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(t.key)>-1&&i.loadImage("ArrowRight"===t.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var e,n,i;return e=t,n=[{key:"checkPassiveEventsSupport",value:function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(t){}return t}},{key:"generateQuerySelector",value:function(t){var e=t.tagName,n=t.id,i=t.className,o=t.parentNode;if("HTML"===e)return"HTML";var r=e;if(r+=""!==n?"#".concat(n):"",i)for(var s=i.trim().split(/\s/),a=0;a<s.length;a++)r+=".".concat(s[a]);for(var l=1,c=t;c.previousElementSibling;c=c.previousElementSibling)l+=1;return r+=":nth-child(".concat(l,")"),"".concat(this.generateQuerySelector(o)," > ").concat(r)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.download=document.createElement("div"),this.domNodes.download.classList.add("sl-download"),this.domNodes.downloadLink=document.createElement("a"),this.domNodes.downloadLink.setAttribute("download",""),this.domNodes.downloadLink.textContent=this.options.download,this.domNodes.download.appendChild(this.domNodes.downloadLink),this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var t,e=this.options.captionClass.split(/[\s,]+/);(t=this.domNodes.caption.classList).add.apply(t,l(e))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(t,e){var n;return function(){n||(t.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),e))}}},{key:"isValidLink",value:function(t){return!this.options.fileExt||t.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")($|\\?.*$)","i").test(t.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var t=(document.body||document.documentElement).style;return"transition"in t?"":"WebkitTransition"in t?"-webkit-":"MozTransition"in t?"-moz-":"OTransition"in t&&"-o"}},{key:"getScrollbarWidth",value:function(){var t,e=document.createElement("div");return e.classList.add("sl-scrollbar-measure"),document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e),t}},{key:"toggleScrollbar",value:function(t){var e=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===t){var i=window.innerWidth;if(!i){var o=document.documentElement.getBoundingClientRect();i=o.right-Math.abs(o.left)}if(document.body.clientWidth<i||this.isAppleDevice){var r=parseInt(window.getComputedStyle(document.body).paddingRight||0,10);e=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=r,(e>0||0==e&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=r+e+"px",n.forEach((function(t){var n=t.style.paddingRight,i=window.getComputedStyle(t)["padding-right"];t.dataset.originalPaddingRight=n,t.style.paddingRight="".concat(parseFloat(i)+e,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight+"px",n.forEach((function(t){var e=t.dataset.originalPaddingRight;void 0!==e&&(t.style.paddingRight=e)}));return e}},{key:"close",value:function(){var t=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var e=this.relatedElements[this.currentImageIndex];for(var n in e.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){t.options.disableScroll&&t.toggleScrollbar("show"),t.options.htmlClass&&""!==t.options.htmlClass&&document.querySelector("html").classList.remove(t.options.htmlClass),document.body.removeChild(t.domNodes.wrapper),document.body.removeChild(t.domNodes.overlay),t.domNodes.additionalHtml=null,t.domNodes.download=null,e.dispatchEvent(new Event("closed.simplelightbox")),t.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var t=this,e=this.currentImageIndex,n=this.relatedElements.length,i=e+1<0?n-1:e+1>=n-1?0:e+1,o=e-1<0?n-1:e-1>=n-1?0:e-1,r=new Image,s=new Image;r.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===t.loadedImages.indexOf(i)&&t.loadedImages.push(i),t.relatedElements[e].dispatchEvent(new Event("nextImageLoaded."+t.eventNamespace))})),r.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr)),s.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===t.loadedImages.indexOf(i)&&t.loadedImages.push(i),t.relatedElements[e].dispatchEvent(new Event("prevImageLoaded."+t.eventNamespace))})),s.setAttribute("src",this.relatedElements[o].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(t){var e=this,n=t;this.options.rtl&&(t=-t),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===t?"next":"prev")+"."+this.eventNamespace));var i=this.currentImageIndex+t;if(this.isAnimating||(i<0||i>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=i<0?this.relatedElements.length-1:i>this.relatedElements.length-1?0:i,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){e.isAnimating=!0,e.isClosing?e.isAnimating=!1:setTimeout((function(){var t=e.relatedElements[e.currentImageIndex];e.currentImage&&(e.currentImage.setAttribute("src",t.getAttribute(e.options.sourceAttr)),-1===e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr))&&e.show(e.domNodes.spinner),e.domNodes.image.contains(e.domNodes.caption)&&e.domNodes.image.removeChild(e.domNodes.caption),e.adjustImage(n),e.options.preloading&&e.preload())}),100)}))}},{key:"adjustImage",value:function(t){var e=this;if(!this.currentImage)return!1;var n=new Image,i=window.innerWidth*this.options.widthRatio,o=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("error."+e.eventNamespace)),e.isAnimating=!1,e.isOpen=!0,e.domNodes.spinner.style.display="none";var i=1===t||-1===t;if(e.initialImageIndex===e.currentImageIndex&&i)return e.close();e.options.alertError&&alert(e.options.alertErrorMessage),e.loadImage(i?t:1)})),n.addEventListener("load",(function(n){void 0!==t&&(e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("changed."+e.eventNamespace)),e.relatedElements[e.currentImageIndex].dispatchEvent(new Event((1===t?"nextDone":"prevDone")+"."+e.eventNamespace))),e.options.history&&e.updateURL(),-1===e.loadedImages.indexOf(e.currentImage.getAttribute("src"))&&e.loadedImages.push(e.currentImage.getAttribute("src"));var r,s,a=n.target.width,l=n.target.height;if(e.options.scaleImageToRatio||a>i||l>o){var c=a/l>i/o?a/i:l/o;a/=c,l/=c}e.domNodes.image.style.top=(window.innerHeight-l)/2+"px",e.domNodes.image.style.left=(window.innerWidth-a-e.globalScrollbarWidth)/2+"px",e.domNodes.image.style.width=a+"px",e.domNodes.image.style.height=l+"px",e.domNodes.spinner.style.display="none",e.options.focus&&e.forceFocus(),e.fadeIn(e.currentImage,e.options.fadeSpeed,(function(){e.options.focus&&e.domNodes.wrapper.focus()})),e.isOpen=!0,"string"==typeof e.options.captionSelector?r="self"===e.options.captionSelector?e.relatedElements[e.currentImageIndex]:document.querySelector(e.generateQuerySelector(e.relatedElements[e.currentImageIndex])+" "+e.options.captionSelector):"function"==typeof e.options.captionSelector&&(r=e.options.captionSelector(e.relatedElements[e.currentImageIndex])),e.options.captions&&r&&(s="data"===e.options.captionType?r.dataset[e.options.captionsData]:"text"===e.options.captionType?r.innerHTML:r.getAttribute(e.options.captionsData)),e.options.loop?1===e.relatedElements.length?e.hide(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):e.show(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===e.currentImageIndex&&e.hide(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex>=e.relatedElements.length-1&&e.hide(e.domNodes.navigation.querySelector(".sl-next")),e.currentImageIndex>0&&e.show(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex<e.relatedElements.length-1&&e.show(e.domNodes.navigation.querySelector(".sl-next"))),1===t||-1===t?(e.options.animationSlide&&(e.slide(0,100*t+"px"),setTimeout((function(){e.slide(e.options.animationSpeed/1e3,"0px")}),50)),e.fadeIn(e.domNodes.image,e.options.fadeSpeed,(function(){e.isAnimating=!1,e.setCaption(s,a)}))):(e.isAnimating=!1,e.setCaption(s,a)),e.options.additionalHtml&&!e.domNodes.additionalHtml&&(e.domNodes.additionalHtml=document.createElement("div"),e.domNodes.additionalHtml.classList.add("sl-additional-html"),e.domNodes.additionalHtml.innerHTML=e.options.additionalHtml,e.domNodes.image.appendChild(e.domNodes.additionalHtml)),e.options.download&&e.domNodes.downloadLink.setAttribute("href",e.currentImage.getAttribute("src"))}))}},{key:"zoomPanElement",value:function(t,e,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+t+","+e+") scale("+n+")"}},{key:"minMax",value:function(t,e,n){return t<e?e:t>n?n:t}},{key:"setZoomData",value:function(t,e,n){this.currentImage.dataset.scale=t,this.currentImage.dataset.translateX=e,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var t=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(e){t.isOpen&&t.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){t.addEventListener(window,"hashchange."+t.eventNamespace,(function(e){t.isOpen&&t.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(e){if(!e.currentTarget.tagName.match(/button/i))return!0;e.preventDefault(),t.controlCoordinates.swipeDiff=0,t.loadImage(e.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var e=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(t.controlCoordinates.mousedown||t.isAnimating||t.isClosing||!t.isOpen)return!0;0==t.controlCoordinates.containerHeight&&(t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY));var i=n.delta||n.wheelDelta;void 0===i&&(i=n.detail),i=Math.max(-1,Math.min(1,i)),e+=i*t.options.scrollZoomFactor*e,e=Math.max(1,Math.min(t.options.maxZoom,e)),t.controlCoordinates.targetScale=e;var o=document.documentElement.scrollTop||document.body.scrollTop;t.controlCoordinates.pinchOffsetX=n.pageX,t.controlCoordinates.pinchOffsetY=n.pageY-o||0,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1?(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)):(1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.setZoomData(t.controlCoordinates.targetScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(e){if("A"===e.target.tagName&&"touchstart"===e.type)return!0;if("mousedown"===e.type)e.preventDefault(),t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.capture=!0;else{if(t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,1===t.controlCoordinates.touchCount){if(t.controlCoordinates.doubleTapped)return t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout((function(){t.currentImage&&t.currentImage.classList.remove("sl-transition")}),200),!1;t.controlCoordinates.doubleTapped=!0,setTimeout((function(){t.controlCoordinates.doubleTapped=!1}),300),t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY)}else 2===t.controlCoordinates.touchCount&&(t.controlCoordinates.initialPointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.initialPointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.pinchOffsetX=(t.controlCoordinates.initialPointerOffsetX+t.controlCoordinates.initialPointerOffsetX2)/2,t.controlCoordinates.pinchOffsetY=(t.controlCoordinates.initialPointerOffsetY+t.controlCoordinates.initialPointerOffsetY2)/2,t.controlCoordinates.initialPinchDistance=Math.sqrt((t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)*(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)+(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)*(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)));t.controlCoordinates.capture=!0}return!!t.controlCoordinates.mousedown||(t.transitionCapable&&(t.controlCoordinates.imageLeft=parseInt(t.domNodes.image.style.left,10)),t.controlCoordinates.mousedown=!0,t.controlCoordinates.swipeDiff=0,t.controlCoordinates.swipeYDiff=0,t.controlCoordinates.swipeStart=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYStart=e.pageY||e.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(e){if(!t.controlCoordinates.mousedown)return!0;if("touchmove"===e.type){if(!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.touches[0].clientX,t.controlCoordinates.pointerOffsetY=e.touches[0].clientY,t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.touchmoveCount++,t.controlCoordinates.touchCount>1?(t.controlCoordinates.pointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.pointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.targetPinchDistance=Math.sqrt((t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)*(t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)+(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)*(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)),null===t.controlCoordinates.initialPinchDistance&&(t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance),Math.abs(t.controlCoordinates.initialPinchDistance-t.controlCoordinates.targetPinchDistance)>=1&&(t.controlCoordinates.targetScale=t.minMax(t.controlCoordinates.targetPinchDistance/t.controlCoordinates.initialPinchDistance*t.controlCoordinates.initialScale,1,t.options.maxZoom),t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1&&(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY)):(t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale))}if("mousemove"===e.type&&t.controlCoordinates.mousedown){if("touchmove"==e.type)return!0;if(e.preventDefault(),!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.clientX,t.controlCoordinates.pointerOffsetY=e.clientY,t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)}t.controlCoordinates.zoomed||(t.controlCoordinates.swipeEnd=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYEnd=e.pageY||e.touches[0].pageY,t.controlCoordinates.swipeDiff=t.controlCoordinates.swipeStart-t.controlCoordinates.swipeEnd,t.controlCoordinates.swipeYDiff=t.controlCoordinates.swipeYStart-t.controlCoordinates.swipeYEnd,t.options.animationSlide&&t.slide(0,-t.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(e){if(t.isTouchDevice&&"touchend"===e.type&&(t.controlCoordinates.touchCount=e.touches.length,0===t.controlCoordinates.touchCount?(t.currentImage&&t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1):1===t.controlCoordinates.touchCount?(t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY):t.controlCoordinates.touchCount>1&&(t.controlCoordinates.initialPinchDistance=null)),t.controlCoordinates.mousedown){t.controlCoordinates.mousedown=!1;var n=!0;t.options.loop||(0===t.currentImageIndex&&t.controlCoordinates.swipeDiff<0&&(n=!1),t.currentImageIndex>=t.relatedElements.length-1&&t.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(t.controlCoordinates.swipeDiff)>t.options.swipeTolerance&&n?t.loadImage(t.controlCoordinates.swipeDiff>0?1:-1):t.options.animationSlide&&t.slide(t.options.animationSpeed/1e3,"0px"),t.options.swipeClose&&Math.abs(t.controlCoordinates.swipeYDiff)>50&&Math.abs(t.controlCoordinates.swipeDiff)<t.options.swipeTolerance&&t.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(e){if(!t.isTouchDevice)return t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout((function(){t.currentImage&&(t.currentImage.classList.remove("sl-transition"),t.currentImage.style[t.transitionPrefix+"transform-origin"]=null)}),200),t.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(t){var e=window.getComputedStyle(t),n=t.offsetHeight,i=t.offsetWidth,o=parseFloat(e.borderTopWidth);return{height:n-parseFloat(e.borderBottomWidth)-o-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom),width:i-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)}}},{key:"updateHash",value:function(){var t="pid="+(this.currentImageIndex+1),e=window.location.href.split("#")[0]+"#"+t;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,e):this.historyHasChanges?window.location.replace(e):window.location.hash=t,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(t,e){var n=this;this.options.captions&&t&&""!==t&&void 0!==t&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=e+"px",this.domNodes.caption.innerHTML=t,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(t,e){if(!this.transitionCapable)return this.domNodes.image.style.left=e;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+e+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+t+"s linear"}},{key:"getRelated",value:function(t){return t&&!1!==t&&"nofollow"!==t?Array.from(this.elements).filter((function(e){return e.getAttribute("rel")===t})):this.elements}},{key:"openImage",value:function(t){var e=this;t.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(t.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.options.download&&this.domNodes.download&&this.domNodes.wrapper.appendChild(this.domNodes.download),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(t);var n=t.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton,this.domNodes.download],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){t.dispatchEvent(new Event("shown."+e.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var t=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(e){document===e.target||t.domNodes.wrapper===e.target||t.domNodes.wrapper.contains(e.target)||t.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(t,e,n,i){t=this.wrap(t),e=this.wrap(e);var o,r=a(t);try{for(r.s();!(o=r.n()).done;){var l=o.value;l.namespaces||(l.namespaces={});var c,u=a(e);try{for(u.s();!(c=u.n()).done;){var d=c.value,h=i||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(d.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===s(h)?h.passive=!0:h={passive:!0}),l.namespaces[d]=n,l.addEventListener(d.split(".")[0],n,h)}}catch(t){u.e(t)}finally{u.f()}}}catch(t){r.e(t)}finally{r.f()}}},{key:"removeEventListener",value:function(t,e){t=this.wrap(t),e=this.wrap(e);var n,i=a(t);try{for(i.s();!(n=i.n()).done;){var o,r=n.value,s=a(e);try{for(s.s();!(o=s.n()).done;){var l=o.value;r.namespaces&&r.namespaces[l]&&(r.removeEventListener(l.split(".")[0],r.namespaces[l]),delete r.namespaces[l])}}catch(t){s.e(t)}finally{s.f()}}}catch(t){i.e(t)}finally{i.f()}}},{key:"fadeOut",value:function(t,e,n){var i,o=this,r=a(t=this.wrap(t));try{for(r.s();!(i=r.n()).done;){var s=i.value;s.style.opacity=parseFloat(s)||window.getComputedStyle(s).getPropertyValue("opacity")}}catch(t){r.e(t)}finally{r.f()}this.isFadeIn=!1;var l=16.66666/(e||this.options.fadeSpeed);!function e(){var i=parseFloat(t[0].style.opacity);if((i-=l)<0){var r,s=a(t);try{for(s.s();!(r=s.n()).done;){var c=r.value;c.style.display="none",c.style.opacity=1}}catch(t){s.e(t)}finally{s.f()}n&&n.call(o,t)}else{var u,d=a(t);try{for(d.s();!(u=d.n()).done;)u.value.style.opacity=i}catch(t){d.e(t)}finally{d.f()}requestAnimationFrame(e)}}()}},{key:"fadeIn",value:function(t,e,n,i){var o,r=this,s=a(t=this.wrap(t));try{for(s.s();!(o=s.n()).done;){var l=o.value;l&&(l.style.opacity=0,l.style.display=i||"block")}}catch(t){s.e(t)}finally{s.f()}this.isFadeIn=!0;var c=parseFloat(t[0].dataset.opacityTarget||1),u=16.66666*c/(e||this.options.fadeSpeed);!function e(){var i=parseFloat(t[0].style.opacity);if((i+=u)>c){var o,s=a(t);try{for(s.s();!(o=s.n()).done;){var l=o.value;l&&(l.style.opacity=c)}}catch(t){s.e(t)}finally{s.f()}n&&n.call(r,t)}else{var d,h=a(t);try{for(h.s();!(d=h.n()).done;){var f=d.value;f&&(f.style.opacity=i)}}catch(t){h.e(t)}finally{h.f()}if(!r.isFadeIn)return;requestAnimationFrame(e)}}()}},{key:"hide",value:function(t){var e,n=a(t=this.wrap(t));try{for(n.s();!(e=n.n()).done;){var i=e.value;"none"!=i.style.display&&(i.dataset.initialDisplay=i.style.display),i.style.display="none"}}catch(t){n.e(t)}finally{n.f()}}},{key:"show",value:function(t,e){var n,i=a(t=this.wrap(t));try{for(i.s();!(n=i.n()).done;){var o=n.value;o.style.display=o.dataset.initialDisplay||e||"block"}}catch(t){i.e(t)}finally{i.f()}}},{key:"wrap",value:function(t){return"function"==typeof t[Symbol.iterator]&&"string"!=typeof t?t:[t]}},{key:"on",value:function(t,e){t=this.wrap(t);var n,i=a(this.elements);try{for(i.s();!(n=i.n()).done;){var o=n.value;o.fullyNamespacedEvents||(o.fullyNamespacedEvents={});var r,s=a(t);try{for(s.s();!(r=s.n()).done;){var l=r.value;o.fullyNamespacedEvents[l]=e,o.addEventListener(l,e)}}catch(t){s.e(t)}finally{s.f()}}}catch(t){i.e(t)}finally{i.f()}return this}},{key:"off",value:function(t){t=this.wrap(t);var e,n=a(this.elements);try{for(n.s();!(e=n.n()).done;){var i,o=e.value,r=a(t);try{for(r.s();!(i=r.n()).done;){var s=i.value;void 0!==o.fullyNamespacedEvents&&s in o.fullyNamespacedEvents&&o.removeEventListener(s,o.fullyNamespacedEvents[s])}}catch(t){r.e(t)}finally{r.f()}}}catch(t){n.e(t)}finally{n.f()}return this}},{key:"open",value:function(t){t=t||this.elements[0],"undefined"!=typeof jQuery&&t instanceof jQuery&&(t=t.get(0)),this.initialImageIndex=this.elements.indexOf(t),this.initialImageIndex>-1&&this.openImage(t)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var t=this.options,e=this.initialSelector;return this.destroy(),this.constructor(e,t),this}}],n&&d(e.prototype,n),i&&d(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),p=f;r.default=p,t.SimpleLightbox=f;var m={};m=function t(e,n,i){function o(s,a){if(!n[s]){if(!e[s]){var l=void 0;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};e[s][0].call(u.exports,(function(t){return o(e[s][1][t]||t)}),u,u.exports,t,e,n,i)}return n[s].exports}for(var r=void 0,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=r,n.create=function(t,e){var n=function(t,e){var n=i('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var s=o(r,"IMG"),a=o(r,"VIDEO"),l=o(r,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(i(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),s=function(t){return!1!==e.onClose(a)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(a)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&s()}));var a={element:function(){return n},visible:function(){return r(n)},show:function(t){return!1!==e.onShow(a)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(a)}))},close:s};return a}},{}]},{},[1])(1);QUEUE="QueueFilms";class g{getAllQueue(){if(localStorage.getItem(QUEUE))return JSON.parse(localStorage.getItem(QUEUE))}setQueue(t){if(localStorage.getItem(QUEUE)){const e=this.getAllQueue();e.some((e=>e.id===t.id))||(e.push(t),localStorage.setItem(QUEUE,JSON.stringify(e)))}else localStorage.setItem(QUEUE,JSON.stringify([t]))}getQueueById(t){if(localStorage.getItem(QUEUE))return this.getAllQueue().filter((e=>e.id===t))[0]}getFirstItemFromQueue(){return this.getAllQueue()[0]}removeFirstItemFromQueue(){localStorage.getItem(QUEUE)&&this.removeFromQueue(this.getFirstItemFromQueue().id)}removeFromQueue(t){if(localStorage.getItem(QUEUE)){const e=this.getAllQueue().filter((e=>e.id!==t));localStorage.setItem(QUEUE,JSON.stringify(e))}}removeQueue(){localStorage.removeItem(QUEUE)}}function y(t,e){return function(){return t.apply(e,arguments)}}const{toString:v}=Object.prototype,{getPrototypeOf:b}=Object,w=(_=Object.create(null),t=>{const e=v.call(t);return _[e]||(_[e]=e.slice(8,-1).toLowerCase())});var _;const x=t=>(t=t.toLowerCase(),e=>w(e)===t),C=t=>e=>typeof e===t,{isArray:k}=Array,I=C("undefined");const E=x("ArrayBuffer");const N=C("string"),S=C("function"),T=C("number"),O=t=>null!==t&&"object"==typeof t,R=t=>{if("object"!==w(t))return!1;const e=b(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},A=x("Date"),P=x("File"),L=x("Blob"),D=x("FileList"),M=x("URLSearchParams");function F(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,o;if("object"!=typeof t&&(t=[t]),k(t))for(i=0,o=t.length;i<o;i++)e.call(null,t[i],i,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),r=o.length;let s;for(i=0;i<r;i++)s=o[i],e.call(null,t[s],s,t)}}function B(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,o=n.length;for(;o-- >0;)if(i=n[o],e===i.toLowerCase())return i;return null}const U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,z=t=>!I(t)&&t!==U;const j=(W="undefined"!=typeof Uint8Array&&b(Uint8Array),t=>W&&t instanceof W);var W;const H=x("HTMLFormElement"),q=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),$=x("RegExp"),X=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};F(n,((n,o)=>{!1!==e(n,o,t)&&(i[o]=n)})),Object.defineProperties(t,i)},V="abcdefghijklmnopqrstuvwxyz",Y="0123456789",K={DIGIT:Y,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+Y};var G={isArray:k,isArrayBuffer:E,isBuffer:function(t){return null!==t&&!I(t)&&null!==t.constructor&&!I(t.constructor)&&S(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||v.call(t)===e||S(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&E(t.buffer),e},isString:N,isNumber:T,isBoolean:t=>!0===t||!1===t,isObject:O,isPlainObject:R,isUndefined:I,isDate:A,isFile:P,isBlob:L,isRegExp:$,isFunction:S,isStream:t=>O(t)&&S(t.pipe),isURLSearchParams:M,isTypedArray:j,isFileList:D,forEach:F,merge:function t(){const{caseless:e}=z(this)&&this||{},n={},i=(i,o)=>{const r=e&&B(n,o)||o;R(n[r])&&R(i)?n[r]=t(n[r],i):R(i)?n[r]=t({},i):k(i)?n[r]=i.slice():n[r]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&F(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(F(e,((e,i)=>{n&&S(e)?t[i]=y(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let o,r,s;const a={};if(e=e||{},null==t)return e;do{for(o=Object.getOwnPropertyNames(t),r=o.length;r-- >0;)s=o[r],i&&!i(s,t,e)||a[s]||(e[s]=t[s],a[s]=!0);t=!1!==n&&b(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:w,kindOfTest:x,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(k(t))return t;let e=t.length;if(!T(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:H,hasOwnProperty:q,hasOwnProp:q,reduceDescriptors:X,freezeMethods:t=>{X(t,((e,n)=>{if(S(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];S(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return k(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:B,global:U,isContextDefined:z,ALPHABET:K,generateString:(t=16,e=K.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&S(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(O(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const o=k(t)?[]:{};return F(t,((t,e)=>{const r=n(t,i+1);!I(r)&&(o[e]=r)})),e[i]=void 0,o}}return t};return n(t,0)}};function J(t,e,n,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o)}G.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Q=J.prototype,Z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{Z[t]={value:t}})),Object.defineProperties(J,Z),Object.defineProperty(Q,"isAxiosError",{value:!0}),J.from=(t,e,n,i,o,r)=>{const s=Object.create(Q);return G.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),J.call(s,t.message,e,n,i,o),s.cause=t,s.name=t.name,r&&Object.assign(s,r),s};var tt,et,nt,it=J,ot=null;et=function(t){var e,n,i=ht(t),o=i[0],r=i[1],s=new ct(function(t,e,n){return 3*(e+n)/4-n}(0,o,r)),a=0,l=r>0?o-4:o;for(n=0;n<l;n+=4)e=lt[t.charCodeAt(n)]<<18|lt[t.charCodeAt(n+1)]<<12|lt[t.charCodeAt(n+2)]<<6|lt[t.charCodeAt(n+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;2===r&&(e=lt[t.charCodeAt(n)]<<2|lt[t.charCodeAt(n+1)]>>4,s[a++]=255&e);1===r&&(e=lt[t.charCodeAt(n)]<<10|lt[t.charCodeAt(n+1)]<<4|lt[t.charCodeAt(n+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e);return s},nt=function(t){for(var e,n=t.length,i=n%3,o=[],r=16383,s=0,a=n-i;s<a;s+=r)o.push(ft(t,s,s+r>a?a:s+r));1===i?(e=t[n-1],o.push(at[e>>2]+at[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(at[e>>10]+at[e>>4&63]+at[e<<2&63]+"="));return o.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var rt,st,at=[],lt=[],ct="undefined"!=typeof Uint8Array?Uint8Array:Array,ut="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",dt=0;dt<64;++dt)at[dt]=ut[dt],lt[ut.charCodeAt(dt)]=dt;function ht(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function ft(t,e,n){for(var i,o,r=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),r.push(at[(o=i)>>18&63]+at[o>>12&63]+at[o>>6&63]+at[63&o]);return r.join("")}lt["-".charCodeAt(0)]=62,lt["_".charCodeAt(0)]=63,rt=function(t,e,n,i,o){var r,s,a=8*o-i-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?o-1:0,h=n?-1:1,f=t[e+d];for(d+=h,r=f&(1<<-u)-1,f>>=-u,u+=a;u>0;r=256*r+t[e+d],d+=h,u-=8);for(s=r&(1<<-u)-1,r>>=-u,u+=i;u>0;s=256*s+t[e+d],d+=h,u-=8);if(0===r)r=1-c;else{if(r===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),r-=c}return(f?-1:1)*s*Math.pow(2,r-i)},st=function(t,e,n,i,o,r){var s,a,l,c=8*r-o-1,u=(1<<c)-1,d=u>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:r-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,o),s+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,o),s=0));o>=8;t[n+f]=255&a,f+=p,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[n+f]=255&s,f+=p,s/=256,c-=8);t[n+f-p]|=128*m};const pt="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;tt=yt;const mt=2147483647;function gt(t){if(t>mt)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,yt.prototype),e}function yt(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return wt(t)}return vt(t,e,n)}function vt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!yt.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|kt(t,e);let i=gt(n);const o=i.write(t,e);o!==n&&(i=i.slice(0,o));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(oe(t,Uint8Array)){const e=new Uint8Array(t);return xt(e.buffer,e.byteOffset,e.byteLength)}return _t(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(oe(t,ArrayBuffer)||t&&oe(t.buffer,ArrayBuffer))return xt(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(oe(t,SharedArrayBuffer)||t&&oe(t.buffer,SharedArrayBuffer)))return xt(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return yt.from(i,e,n);const o=function(t){if(yt.isBuffer(t)){const e=0|Ct(t.length),n=gt(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||re(t.length)?gt(0):_t(t);if("Buffer"===t.type&&Array.isArray(t.data))return _t(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return yt.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function bt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function wt(t){return bt(t),gt(t<0?0:0|Ct(t))}function _t(t){const e=t.length<0?0:0|Ct(t.length),n=gt(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function xt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,yt.prototype),i}function Ct(t){if(t>=mt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+mt.toString(16)+" bytes");return 0|t}function kt(t,e){if(yt.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||oe(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ee(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(t).length;default:if(o)return i?-1:ee(t).length;e=(""+e).toLowerCase(),o=!0}}function It(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ut(this,e,n);case"utf8":case"utf-8":return Dt(this,e,n);case"ascii":return Ft(this,e,n);case"latin1":case"binary":return Bt(this,e,n);case"base64":return Lt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return zt(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function Et(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function Nt(t,e,n,i,o){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),re(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=yt.from(e,i)),yt.isBuffer(e))return 0===e.length?-1:St(t,e,n,i,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):St(t,[e],n,i,o);throw new TypeError("val must be string, number or Buffer")}function St(t,e,n,i,o){let r,s=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let i=-1;for(r=n;r<a;r++)if(c(t,r)===c(e,-1===i?0:r-i)){if(-1===i&&(i=r),r-i+1===l)return i*s}else-1!==i&&(r-=r-i),i=-1}else for(n+l>a&&(n=a-l),r=n;r>=0;r--){let n=!0;for(let i=0;i<l;i++)if(c(t,r+i)!==c(e,i)){n=!1;break}if(n)return r}return-1}function Tt(t,e,n,i){n=Number(n)||0;const o=t.length-n;i?(i=Number(i))>o&&(i=o):i=o;const r=e.length;let s;for(i>r/2&&(i=r/2),s=0;s<i;++s){const i=parseInt(e.substr(2*s,2),16);if(re(i))return s;t[n+s]=i}return s}function Ot(t,e,n,i){return ie(ee(e,t.length-n),t,n,i)}function Rt(t,e,n,i){return ie(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function At(t,e,n,i){return ie(ne(e),t,n,i)}function Pt(t,e,n,i){return ie(function(t,e){let n,i,o;const r=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),i=n>>8,o=n%256,r.push(o),r.push(i);return r}(e,t.length-n),t,n,i)}function Lt(t,e,n){return 0===e&&n===t.length?nt(t):nt(t.slice(e,n))}function Dt(t,e,n){n=Math.min(t.length,n);const i=[];let o=e;for(;o<n;){const e=t[o];let r=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=n){let n,i,a,l;switch(s){case 1:e<128&&(r=e);break;case 2:n=t[o+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(r=l));break;case 3:n=t[o+1],i=t[o+2],128==(192&n)&&128==(192&i)&&(l=(15&e)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(r=l));break;case 4:n=t[o+1],i=t[o+2],a=t[o+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(r=l))}}null===r?(r=65533,s=1):r>65535&&(r-=65536,i.push(r>>>10&1023|55296),r=56320|1023&r),i.push(r),o+=s}return function(t){const e=t.length;if(e<=Mt)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=Mt));return n}(i)}yt.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),yt.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(yt.prototype,"parent",{enumerable:!0,get:function(){if(yt.isBuffer(this))return this.buffer}}),Object.defineProperty(yt.prototype,"offset",{enumerable:!0,get:function(){if(yt.isBuffer(this))return this.byteOffset}}),yt.poolSize=8192,yt.from=function(t,e,n){return vt(t,e,n)},Object.setPrototypeOf(yt.prototype,Uint8Array.prototype),Object.setPrototypeOf(yt,Uint8Array),yt.alloc=function(t,e,n){return function(t,e,n){return bt(t),t<=0?gt(t):void 0!==e?"string"==typeof n?gt(t).fill(e,n):gt(t).fill(e):gt(t)}(t,e,n)},yt.allocUnsafe=function(t){return wt(t)},yt.allocUnsafeSlow=function(t){return wt(t)},yt.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==yt.prototype},yt.compare=function(t,e){if(oe(t,Uint8Array)&&(t=yt.from(t,t.offset,t.byteLength)),oe(e,Uint8Array)&&(e=yt.from(e,e.offset,e.byteLength)),!yt.isBuffer(t)||!yt.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let o=0,r=Math.min(n,i);o<r;++o)if(t[o]!==e[o]){n=t[o],i=e[o];break}return n<i?-1:i<n?1:0},yt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},yt.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return yt.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=yt.allocUnsafe(e);let o=0;for(n=0;n<t.length;++n){let e=t[n];if(oe(e,Uint8Array))o+e.length>i.length?(yt.isBuffer(e)||(e=yt.from(e)),e.copy(i,o)):Uint8Array.prototype.set.call(i,e,o);else{if(!yt.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,o)}o+=e.length}return i},yt.byteLength=kt,yt.prototype._isBuffer=!0,yt.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)Et(this,e,e+1);return this},yt.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)Et(this,e,e+3),Et(this,e+1,e+2);return this},yt.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)Et(this,e,e+7),Et(this,e+1,e+6),Et(this,e+2,e+5),Et(this,e+3,e+4);return this},yt.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?Dt(this,0,t):It.apply(this,arguments)},yt.prototype.toLocaleString=yt.prototype.toString,yt.prototype.equals=function(t){if(!yt.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===yt.compare(this,t)},yt.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},pt&&(yt.prototype[pt]=yt.prototype.inspect),yt.prototype.compare=function(t,e,n,i,o){if(oe(t,Uint8Array)&&(t=yt.from(t,t.offset,t.byteLength)),!yt.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return-1;if(e>=n)return 1;if(this===t)return 0;let r=(o>>>=0)-(i>>>=0),s=(n>>>=0)-(e>>>=0);const a=Math.min(r,s),l=this.slice(i,o),c=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==c[t]){r=l[t],s=c[t];break}return r<s?-1:s<r?1:0},yt.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},yt.prototype.indexOf=function(t,e,n){return Nt(this,t,e,n,!0)},yt.prototype.lastIndexOf=function(t,e,n){return Nt(this,t,e,n,!1)},yt.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let r=!1;for(;;)switch(i){case"hex":return Tt(this,t,e,n);case"utf8":case"utf-8":return Ot(this,t,e,n);case"ascii":case"latin1":case"binary":return Rt(this,t,e,n);case"base64":return At(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pt(this,t,e,n);default:if(r)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),r=!0}},yt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Mt=4096;function Ft(t,e,n){let i="";n=Math.min(t.length,n);for(let o=e;o<n;++o)i+=String.fromCharCode(127&t[o]);return i}function Bt(t,e,n){let i="";n=Math.min(t.length,n);for(let o=e;o<n;++o)i+=String.fromCharCode(t[o]);return i}function Ut(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let o="";for(let i=e;i<n;++i)o+=se[t[i]];return o}function zt(t,e,n){const i=t.slice(e,n);let o="";for(let t=0;t<i.length-1;t+=2)o+=String.fromCharCode(i[t]+256*i[t+1]);return o}function jt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Wt(t,e,n,i,o,r){if(!yt.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<r)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function Ht(t,e,n,i,o){Jt(e,i,o,t,n,7);let r=Number(e&BigInt(4294967295));t[n++]=r,r>>=8,t[n++]=r,r>>=8,t[n++]=r,r>>=8,t[n++]=r;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function qt(t,e,n,i,o){Jt(e,i,o,t,n,7);let r=Number(e&BigInt(4294967295));t[n+7]=r,r>>=8,t[n+6]=r,r>>=8,t[n+5]=r,r>>=8,t[n+4]=r;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function $t(t,e,n,i,o,r){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Xt(t,e,n,i,o){return e=+e,n>>>=0,o||$t(t,0,n,4),st(t,e,n,i,23,4),n+4}function Vt(t,e,n,i,o){return e=+e,n>>>=0,o||$t(t,0,n,8),st(t,e,n,i,52,8),n+8}yt.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,yt.prototype),i},yt.prototype.readUintLE=yt.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||jt(t,e,this.length);let i=this[t],o=1,r=0;for(;++r<e&&(o*=256);)i+=this[t+r]*o;return i},yt.prototype.readUintBE=yt.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||jt(t,e,this.length);let i=this[t+--e],o=1;for(;e>0&&(o*=256);)i+=this[t+--e]*o;return i},yt.prototype.readUint8=yt.prototype.readUInt8=function(t,e){return t>>>=0,e||jt(t,1,this.length),this[t]},yt.prototype.readUint16LE=yt.prototype.readUInt16LE=function(t,e){return t>>>=0,e||jt(t,2,this.length),this[t]|this[t+1]<<8},yt.prototype.readUint16BE=yt.prototype.readUInt16BE=function(t,e){return t>>>=0,e||jt(t,2,this.length),this[t]<<8|this[t+1]},yt.prototype.readUint32LE=yt.prototype.readUInt32LE=function(t,e){return t>>>=0,e||jt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},yt.prototype.readUint32BE=yt.prototype.readUInt32BE=function(t,e){return t>>>=0,e||jt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},yt.prototype.readBigUInt64LE=ae((function(t){Qt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Zt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(o)<<BigInt(32))})),yt.prototype.readBigUInt64BE=ae((function(t){Qt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Zt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(o)})),yt.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||jt(t,e,this.length);let i=this[t],o=1,r=0;for(;++r<e&&(o*=256);)i+=this[t+r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},yt.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||jt(t,e,this.length);let i=e,o=1,r=this[t+--i];for(;i>0&&(o*=256);)r+=this[t+--i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},yt.prototype.readInt8=function(t,e){return t>>>=0,e||jt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},yt.prototype.readInt16LE=function(t,e){t>>>=0,e||jt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},yt.prototype.readInt16BE=function(t,e){t>>>=0,e||jt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},yt.prototype.readInt32LE=function(t,e){return t>>>=0,e||jt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},yt.prototype.readInt32BE=function(t,e){return t>>>=0,e||jt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},yt.prototype.readBigInt64LE=ae((function(t){Qt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Zt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),yt.prototype.readBigInt64BE=ae((function(t){Qt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Zt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),yt.prototype.readFloatLE=function(t,e){return t>>>=0,e||jt(t,4,this.length),rt(this,t,!0,23,4)},yt.prototype.readFloatBE=function(t,e){return t>>>=0,e||jt(t,4,this.length),rt(this,t,!1,23,4)},yt.prototype.readDoubleLE=function(t,e){return t>>>=0,e||jt(t,8,this.length),rt(this,t,!0,52,8)},yt.prototype.readDoubleBE=function(t,e){return t>>>=0,e||jt(t,8,this.length),rt(this,t,!1,52,8)},yt.prototype.writeUintLE=yt.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Wt(this,t,e,n,Math.pow(2,8*n)-1,0)}let o=1,r=0;for(this[e]=255&t;++r<n&&(o*=256);)this[e+r]=t/o&255;return e+n},yt.prototype.writeUintBE=yt.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Wt(this,t,e,n,Math.pow(2,8*n)-1,0)}let o=n-1,r=1;for(this[e+o]=255&t;--o>=0&&(r*=256);)this[e+o]=t/r&255;return e+n},yt.prototype.writeUint8=yt.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,1,255,0),this[e]=255&t,e+1},yt.prototype.writeUint16LE=yt.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},yt.prototype.writeUint16BE=yt.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},yt.prototype.writeUint32LE=yt.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},yt.prototype.writeUint32BE=yt.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},yt.prototype.writeBigUInt64LE=ae((function(t,e=0){return Ht(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),yt.prototype.writeBigUInt64BE=ae((function(t,e=0){return qt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),yt.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Wt(this,t,e,n,i-1,-i)}let o=0,r=1,s=0;for(this[e]=255&t;++o<n&&(r*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/r>>0)-s&255;return e+n},yt.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Wt(this,t,e,n,i-1,-i)}let o=n-1,r=1,s=0;for(this[e+o]=255&t;--o>=0&&(r*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/r>>0)-s&255;return e+n},yt.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},yt.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},yt.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},yt.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},yt.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Wt(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},yt.prototype.writeBigInt64LE=ae((function(t,e=0){return Ht(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),yt.prototype.writeBigInt64BE=ae((function(t,e=0){return qt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),yt.prototype.writeFloatLE=function(t,e,n){return Xt(this,t,e,!0,n)},yt.prototype.writeFloatBE=function(t,e,n){return Xt(this,t,e,!1,n)},yt.prototype.writeDoubleLE=function(t,e,n){return Vt(this,t,e,!0,n)},yt.prototype.writeDoubleBE=function(t,e,n){return Vt(this,t,e,!1,n)},yt.prototype.copy=function(t,e,n,i){if(!yt.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const o=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),o},yt.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!yt.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{const r=yt.isBuffer(t)?t:yt.from(t,i),s=r.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-e;++o)this[o+e]=r[o%s]}return this};const Yt={};function Kt(t,e,n){Yt[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Gt(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Jt(t,e,n,i,o,r){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let o;throw o=r>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(r+1)}${i}`:`>= -(2${i} ** ${8*(r+1)-1}${i}) and < 2 ** ${8*(r+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new Yt.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,n){Qt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Zt(e,t.length-(n+1))}(i,o,r)}function Qt(t,e){if("number"!=typeof t)throw new Yt.ERR_INVALID_ARG_TYPE(e,"number",t)}function Zt(t,e,n){if(Math.floor(t)!==t)throw Qt(t,n),new Yt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Yt.ERR_BUFFER_OUT_OF_BOUNDS;throw new Yt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Kt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Kt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Kt("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=Gt(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=Gt(o)),o+="n"),i+=` It must be ${e}. Received ${o}`,i}),RangeError);const te=/[^+/0-9A-Za-z-_]/g;function ee(t,e){let n;e=e||1/0;const i=t.length;let o=null;const r=[];for(let s=0;s<i;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&r.push(239,191,189);continue}if(s+1===i){(e-=3)>-1&&r.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&r.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&r.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;r.push(n)}else if(n<2048){if((e-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return r}function ne(t){return et(function(t){if((t=(t=t.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function ie(t,e,n,i){let o;for(o=0;o<i&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function oe(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function re(t){return t!=t}const se=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let o=0;o<16;++o)e[i+o]=t[n]+t[o]}return e}();function ae(t){return"undefined"==typeof BigInt?le:t}function le(){throw new Error("BigInt not supported")}var ce=tt;function ue(t){return G.isPlainObject(t)||G.isArray(t)}function de(t){return G.endsWith(t,"[]")?t.slice(0,-2):t}function he(t,e,n){return t?t.concat(e).map((function(t,e){return t=de(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const fe=G.toFlatObject(G,{},null,(function(t){return/^is[A-Z]/.test(t)}));var pe=function(t,e,n){if(!G.isObject(t))throw new TypeError("target must be an object");e=e||new(ot||FormData);const i=(n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!G.isUndefined(e[t])}))).metaTokens,o=n.visitor||c,r=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&G.isSpecCompliantForm(e);if(!G.isFunction(o))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(G.isDate(t))return t.toISOString();if(!a&&G.isBlob(t))throw new it("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(t)||G.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):ce.from(t):t}function c(t,n,o){let a=t;if(t&&!o&&"object"==typeof t)if(G.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(G.isArray(t)&&function(t){return G.isArray(t)&&!t.some(ue)}(t)||(G.isFileList(t)||G.endsWith(n,"[]"))&&(a=G.toArray(t)))return n=de(n),a.forEach((function(t,i){!G.isUndefined(t)&&null!==t&&e.append(!0===s?he([n],i,r):null===s?n:n+"[]",l(t))})),!1;return!!ue(t)||(e.append(he(o,n,r),l(t)),!1)}const u=[],d=Object.assign(fe,{defaultVisitor:c,convertValue:l,isVisitable:ue});if(!G.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!G.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),G.forEach(n,(function(n,r){!0===(!(G.isUndefined(n)||null===n)&&o.call(e,n,G.isString(r)?r.trim():r,i,d))&&t(n,i?i.concat(r):[r])})),u.pop()}}(t),e};function me(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function ge(t,e){this._pairs=[],t&&pe(t,this,e)}const ye=ge.prototype;ye.append=function(t,e){this._pairs.push([t,e])},ye.toString=function(t){const e=t?function(e){return t.call(this,e,me)}:me;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var ve=ge;function be(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function we(t,e,n){if(!e)return t;const i=n&&n.encode||be,o=n&&n.serialize;let r;if(r=o?o(e,n):G.isURLSearchParams(e)?e.toString():new ve(e,n).toString(i),r){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t}var _e=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){G.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Ce={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ve,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ke(t,e){return pe(t,new Ce.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return Ce.isNode&&G.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var Ie=function(t){function e(t,n,i,o){let r=t[o++];const s=Number.isFinite(+r),a=o>=t.length;if(r=!r&&G.isArray(i)?i.length:r,a)return G.hasOwnProp(i,r)?i[r]=[i[r],n]:i[r]=n,!s;i[r]&&G.isObject(i[r])||(i[r]=[]);return e(t,n,i[r],o)&&G.isArray(i[r])&&(i[r]=function(t){const e={},n=Object.keys(t);let i;const o=n.length;let r;for(i=0;i<o;i++)r=n[i],e[r]=t[r];return e}(i[r])),!s}if(G.isFormData(t)&&G.isFunction(t.entries)){const n={};return G.forEachEntry(t,((t,i)=>{e(function(t){return G.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const Ee={"Content-Type":void 0};const Ne={transitional:xe,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,o=G.isObject(t);o&&G.isHTMLForm(t)&&(t=new FormData(t));if(G.isFormData(t))return i&&i?JSON.stringify(Ie(t)):t;if(G.isArrayBuffer(t)||G.isBuffer(t)||G.isStream(t)||G.isFile(t)||G.isBlob(t))return t;if(G.isArrayBufferView(t))return t.buffer;if(G.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let r;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ke(t,this.formSerializer).toString();if((r=G.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return pe(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||i?(e.setContentType("application/json",!1),function(t,e,n){if(G.isString(t))try{return(e||JSON.parse)(t),G.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Ne.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&G.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw it.from(t,it.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ce.classes.FormData,Blob:Ce.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};G.forEach(["delete","get","head"],(function(t){Ne.headers[t]={}})),G.forEach(["post","put","patch"],(function(t){Ne.headers[t]=G.merge(Ee)}));var Se=Ne;const Te=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Oe=t=>{const e={};let n,i,o;return t&&t.split("\n").forEach((function(t){o=t.indexOf(":"),n=t.substring(0,o).trim().toLowerCase(),i=t.substring(o+1).trim(),!n||e[n]&&Te[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const Re=Symbol("internals");function Ae(t){return t&&String(t).trim().toLowerCase()}function Pe(t){return!1===t||null==t?t:G.isArray(t)?t.map(Pe):String(t)}function Le(t,e,n,i,o){return G.isFunction(i)?i.call(this,e,n):(o&&(e=n),G.isString(e)?G.isString(i)?-1!==e.indexOf(i):G.isRegExp(i)?i.test(e):void 0:void 0)}class De{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function o(t,e,n){const o=Ae(e);if(!o)throw new Error("header name must be a non-empty string");const r=G.findKey(i,o);(!r||void 0===i[r]||!0===n||void 0===n&&!1!==i[r])&&(i[r||e]=Pe(t))}const r=(t,e)=>G.forEach(t,((t,n)=>o(t,n,e)));return G.isPlainObject(t)||t instanceof this.constructor?r(t,e):G.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?r(Oe(t),e):null!=t&&o(e,t,n),this}get(t,e){if(t=Ae(t)){const n=G.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(G.isFunction(e))return e.call(this,t,n);if(G.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Ae(t)){const n=G.findKey(this,t);return!(!n||void 0===this[n]||e&&!Le(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function o(t){if(t=Ae(t)){const o=G.findKey(n,t);!o||e&&!Le(0,n[o],o,e)||(delete n[o],i=!0)}}return G.isArray(t)?t.forEach(o):o(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const o=e[n];t&&!Le(0,this[o],o,t,!0)||(delete this[o],i=!0)}return i}normalize(t){const e=this,n={};return G.forEach(this,((i,o)=>{const r=G.findKey(n,o);if(r)return e[r]=Pe(i),void delete e[o];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete e[o],e[s]=Pe(i),n[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return G.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&G.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[Re]=this[Re]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=Ae(t);e[i]||(!function(t,e){const n=G.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,o){return this[i].call(this,e,t,n,o)},configurable:!0})}))}(n,t),e[i]=!0)}return G.isArray(t)?t.forEach(i):i(t),this}}De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),G.freezeMethods(De.prototype),G.freezeMethods(De);var Me=De;function Fe(t,e){const n=this||Se,i=e||n,o=Me.from(i.headers);let r=i.data;return G.forEach(t,(function(t){r=t.call(n,r,o.normalize(),e?e.status:void 0)})),o.normalize(),r}function Be(t){return!(!t||!t.__CANCEL__)}function Ue(t,e,n){it.call(this,null==t?"canceled":t,it.ERR_CANCELED,e,n),this.name="CanceledError"}G.inherits(Ue,it,{__CANCEL__:!0});var ze=Ue;function je(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new it("Request failed with status code "+n.status,[it.ERR_BAD_REQUEST,it.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var We=Ce.isStandardBrowserEnv?{write:function(t,e,n,i,o,r){const s=[];s.push(t+"="+encodeURIComponent(e)),G.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),G.isString(i)&&s.push("path="+i),G.isString(o)&&s.push("domain="+o),!0===r&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function He(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function qe(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?He(t,e):e}var $e=Ce.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=G.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Xe(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Ve=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let o,r=0,s=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=i[s];o||(o=l),n[r]=a,i[r]=l;let u=s,d=0;for(;u!==r;)d+=n[u++],u%=t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),l-o<e)return;const h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function Ye(t,e){let n=0;const i=Ve(50,250);return o=>{const r=o.loaded,s=o.lengthComputable?o.total:void 0,a=r-n,l=i(a);n=r;const c={loaded:r,total:s,progress:s?r/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&r<=s?(s-r)/l:void 0,event:o};c[e?"download":"upload"]=!0,t(c)}}var Ke="undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const o=Me.from(t.headers).normalize(),r=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}G.isFormData(i)&&(Ce.isStandardBrowserEnv||Ce.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(e+":"+n))}const c=qe(t.baseURL,t.url);function u(){if(!l)return;const i=Me.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());je((function(t){e(t),a()}),(function(t){n(t),a()}),{data:r&&"text"!==r&&"json"!==r?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),we(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new it("Request aborted",it.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new it("Network Error",it.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||xe;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new it(e,i.clarifyTimeoutError?it.ETIMEDOUT:it.ECONNABORTED,t,l)),l=null},Ce.isStandardBrowserEnv){const e=(t.withCredentials||$e(c))&&t.xsrfCookieName&&We.read(t.xsrfCookieName);e&&o.set(t.xsrfHeaderName,e)}void 0===i&&o.setContentType(null),"setRequestHeader"in l&&G.forEach(o.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),G.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),r&&"json"!==r&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",Ye(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Ye(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{l&&(n(!e||e.type?new ze(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const d=Xe(c);d&&-1===Ce.protocols.indexOf(d)?n(new it("Unsupported protocol "+d+":",it.ERR_BAD_REQUEST,t)):l.send(i||null)}))};const Ge={http:ot,xhr:Ke};G.forEach(Ge,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Je={getAdapter:t=>{t=G.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let o=0;o<e&&(n=t[o],!(i=G.isString(n)?Ge[n.toLowerCase()]:n));o++);if(!i){if(!1===i)throw new it(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(G.hasOwnProp(Ge,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!G.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Ge};function Qe(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ze(null,t)}function Ze(t){Qe(t),t.headers=Me.from(t.headers),t.data=Fe.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Je.getAdapter(t.adapter||Se.adapter)(t).then((function(e){return Qe(t),e.data=Fe.call(t,t.transformResponse,e),e.headers=Me.from(e.headers),e}),(function(e){return Be(e)||(Qe(t),e&&e.response&&(e.response.data=Fe.call(t,t.transformResponse,e.response),e.response.headers=Me.from(e.response.headers))),Promise.reject(e)}))}const tn=t=>t instanceof Me?t.toJSON():t;function en(t,e){e=e||{};const n={};function i(t,e,n){return G.isPlainObject(t)&&G.isPlainObject(e)?G.merge.call({caseless:n},t,e):G.isPlainObject(e)?G.merge({},e):G.isArray(e)?e.slice():e}function o(t,e,n){return G.isUndefined(e)?G.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function r(t,e){if(!G.isUndefined(e))return i(void 0,e)}function s(t,e){return G.isUndefined(e)?G.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,o,r){return r in e?i(n,o):r in t?i(void 0,n):void 0}const l={url:r,method:r,data:r,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(tn(t),tn(e),!0)};return G.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const r=l[i]||o,s=r(t[i],e[i],i);G.isUndefined(s)&&r!==a||(n[i]=s)})),n}const nn="1.3.5",on={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{on[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const rn={};on.transitional=function(t,e,n){function i(t,e){return"[Axios v1.3.5] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,o,r)=>{if(!1===t)throw new it(i(o," has been removed"+(e?" in "+e:"")),it.ERR_DEPRECATED);return e&&!rn[o]&&(rn[o]=!0,console.warn(i(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,o,r)}};var sn={assertOptions:function(t,e,n){if("object"!=typeof t)throw new it("options must be an object",it.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let o=i.length;for(;o-- >0;){const r=i[o],s=e[r];if(s){const e=t[r],n=void 0===e||s(e,r,t);if(!0!==n)throw new it("option "+r+" must be "+n,it.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new it("Unknown option "+r,it.ERR_BAD_OPTION)}},validators:on};const an=sn.validators;class ln{constructor(t){this.defaults=t,this.interceptors={request:new _e,response:new _e}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=en(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:o}=e;let r;void 0!==n&&sn.assertOptions(n,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),null!=i&&(G.isFunction(i)?e.paramsSerializer={serialize:i}:sn.assertOptions(i,{encode:an.function,serialize:an.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),r=o&&G.merge(o.common,o[e.method]),r&&G.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete o[t]})),e.headers=Me.concat(r,o);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let u,d=0;if(!a){const t=[Ze.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,l),u=t.length,c=Promise.resolve(e);d<u;)c=c.then(t[d++],t[d++]);return c}u=s.length;let h=e;for(d=0;d<u;){const t=s[d++],e=s[d++];try{h=t(h)}catch(t){e.call(this,t);break}}try{c=Ze.call(this,h)}catch(t){return Promise.reject(t)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(t){return we(qe((t=en(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}G.forEach(["delete","get","head","options"],(function(t){ln.prototype[t]=function(e,n){return this.request(en(n||{},{method:t,url:e,data:(n||{}).data}))}})),G.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,o){return this.request(en(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}ln.prototype[t]=e(),ln.prototype[t+"Form"]=e(!0)}));var cn=ln;class un{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,o){n.reason||(n.reason=new ze(t,i,o),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new un((function(e){t=e})),cancel:t}}}var dn=un;const hn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hn).forEach((([t,e])=>{hn[e]=t}));var fn=hn;const pn=function t(e){const n=new cn(e),i=y(cn.prototype.request,n);return G.extend(i,cn.prototype,n,{allOwnKeys:!0}),G.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t(en(e,n))},i}(Se);pn.Axios=cn,pn.CanceledError=ze,pn.CancelToken=dn,pn.isCancel=Be,pn.VERSION=nn,pn.toFormData=pe,pn.AxiosError=it,pn.Cancel=pn.CanceledError,pn.all=function(t){return Promise.all(t)},pn.spread=function(t){return function(e){return t.apply(null,e)}},pn.isAxiosError=function(t){return G.isObject(t)&&!0===t.isAxiosError},pn.mergeConfig=en,pn.AxiosHeaders=Me,pn.formToJSON=t=>Ie(G.isHTMLForm(t)?new FormData(t):t),pn.HttpStatusCode=fn,pn.default=pn;var mn=pn;const{Axios:gn,AxiosError:yn,CanceledError:vn,isCancel:bn,CancelToken:wn,VERSION:_n,all:xn,Cancel:Cn,isAxiosError:kn,spread:In,toFormData:En,AxiosHeaders:Nn,HttpStatusCode:Sn,formToJSON:Tn,mergeConfig:On}=mn,Rn="https://api.themoviedb.org/3/",An="ea5def047bf208a64f0c5de401ac8330",Pn=async t=>await mn.get(`${Rn}trending/movie/day?api_key=${An}&page=${t}`),Ln=async()=>await mn.get(`${Rn}genre/movie/list?api_key=${An}`);async function Dn(t){const e=await fetch(`${Rn}movie/${t}?api_key=${An}`);return await e.json()}const Mn=async(t,e)=>await mn.get(`${Rn}search/movie?api_key=${An}&query=${t}&page=${e}`);var Fn,Bn={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,Fn=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o,r,s=Object.prototype.hasOwnProperty;for(o=1,r=arguments.length;o<r;o+=1)for(i in n=arguments[o])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),o=n(17),r=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):r(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var o,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,o=n;n>=0&&o<r;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){"use strict";var i=n(29),o=n(30),r=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=r(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),o=n(7),r=n(0),s=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=o({init:function(t,e){this._options=r({},c,e),this._currentPage=0,this._view=new a(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),r=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>o&&(e=Math.max(o-r+1,1),n=o)):(e=(s-1)*r+1,n=s*r,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){"use strict";var i=n(0),o=n(14),r=n(4),s=n(16),a=n(2),l=n(5),c=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(t){i(t.prototype,d.prototype)},d.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},d.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},d.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},d.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},d.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},d.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},d.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(u),c(t,(function(t){i._bindEvent(t,e,n)}))):s(t)&&(n=e,c(t,(function(t,e){i.on(e,t,n)})))},d.prototype.once=function(t,e,n){var i=this;if(s(t))return n=e,void c(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},d.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},d.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},d.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},d.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,r=e===i.context,s=o&&r;return s&&n._forgetContext(i.context),s}},d.prototype._offByEventName=function(t,e){var n=this,i=l(e),o=n._matchHandler(e);t=t.split(u),c(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},d.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},d.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,(function(t,e){i.off(e,t)})):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},d.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},d.prototype.fire=function(t){this.invoke.apply(this,arguments)},d.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},d.prototype.hasListener=function(t){return this.getListenerLength(t)>0},d.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=d},function(t,e,n){"use strict";var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),o=n(7),r=n(21),s=n(22),a=n(24),l=n(25),c=n(0),u=n(4),d=n(28),h=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!d(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(p,(function(t){this._buttons[t]=h.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(p,(function(t){var e="disabled"+h.capitalizeFirstLetter(t);this._buttons[e]=h.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=h.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=h.createElementByTemplate(this._template.currentPage,{page:n}):(e=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==o||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,i,o=r(e);a(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!h.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],h.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),o=n(3),r=n(23);function s(t,e,n,i){function s(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,i){var s=r(t,e),a=!1;o(s,(function(t){return t.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(t,e,n,s)}t.exports=function(t,e,n,r){i(e)?o(e.split(/\s+/g),(function(e){s(t,e,n,r)})):o(e,(function(e,i){s(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),o=n(8),r=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,l=[];a?i(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,l)<0&&l.push(t)})),s(t,l))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),o=n(3),r=n(2),s=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g=2,y={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,s=0;return o(e,(function(t,o){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,o)),s=o+1)})),i.push(e.slice(s)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,s="";return o(i.exps,(function(t,e){return(r=_(t,n))&&(s=x(i.sourcesInsideIf[e],n)),!r})),s},each:function(t,e,n){var i=_(t,n),s=r(i)?"@index":"@key",l={},c="";return o(i,(function(t,i){l[s]=i,l["@this"]=t,a(n,l),c+=x(e.slice(),n)})),c},with:function(t,e,n){var o=i("as",t),r=t[o+1],s=_(t.slice(0,o),n),l={};return l[r]=s,x(e,a(n,l))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return o.push(t.slice(r)),o};function b(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:f.test(t)?i=t.replace(p,""):c.test(t)?i=b((n=t.split(u))[0],e)[b(n[1],e)]:d.test(t)?i=b((n=t.split(h))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function w(t,e,n){for(var i,o,r,a,l=y[t],c=1,u=0+g,d=e[u];c&&s(d);)0===d.indexOf(t)?c+=1:0===d.indexOf("/"+t)&&(c-=1,i=u),d=e[u+=g];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(o=0,r=i,(a=e.splice(o+1,r-o)).pop(),a),n),e}function _(t,e){var n=b(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(b(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,o,r=1,a=t[r];s(a);)i=(n=a.split(" "))[0],y[i]?(o=w(i,t.splice(r,t.length-r),e),t=t.concat(o)):t[r]=_(n,e),a=t[r+=g];return t.join("")}t.exports=function(t,e){return x(v(t,l),e)}},function(t,e,n){"use strict";var i=n(1),o=n(31),r=6048e5;t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>r}(a)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},Bn=Fn();document.getElementById("tui-pagination-container");function Un(t,n){const i={totalItems:n,page:1,itemsPerPage:20,visiblePages:5,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{currentPage:'<strong class="tui-page-btn tui-is-selected"><span class="tui-ico-page">{{page}}</span></strong > ',page:'<a href="1" class="tui-page-btn page"> <span class="tui-ico-page">{{page}}</span></a>',moveButton:'<a href="movebutton" class="tui-page-btn  tui-{{type}}"><span class="tui-ico-{{type}}">&#8592;</span></a>',moreButton:'<a href="moreButton" class="tui-page-btn  tui-{{type}}-is-ellip"> <span class="tui-ico-ellip moreButton">...</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} disabledMoveButton"><span class="tui-ico-{{type}} disabledMoveButton"></span></span>'}};new(e(Bn))(document.getElementById("tui-pagination-container"),i).on("afterMove",(e=>{galleryConteiner.innerHTML="";const n=e.page;createMoviesMarkupKey(t,n)}))}const zn=document.querySelector(".movies__list");async function jn(t){if("Home"!==document.querySelector(".header__nav-link.active").textContent);else{const e=await Pn(t),n=e.data.results,i=e.data.results.map((t=>t.genre_ids));Yn((await Ln()).data.genres,i);const o=Hn(n);$n(o)}}async function Wn(t,e){const n=await Mn(t,e),i=n.data.results,o=n.data.results.map((t=>t.genre_ids));Yn((await Ln()).data.genres,o);const r=Hn(i);$n(r)}Pn(1).then((({data:t})=>{jn(1);const e=t.total_results;createPage(e)})).catch((t=>console.log(t)));const Hn=t=>t.map((({poster_path:t,title:e,id:n,release_date:i,genre_ids:o})=>{const r=o?o.join(", "):"";return`<li class="movies__card" id="${n}">\n    <img\n      class="movies__card-photo"\n      src="${Vn(t)}"\n      alt="${e}"\n      loading="lazy"\n      width="395px"\n      height="574px"\n    />\n    <h2 class="movies__card-title">${e}</h2>\n    <p class="movies__card-genres">${r} | ${Xn(i)}</p>\n  </li>`})).join(""),qn=()=>{zn.innerHTML=""},$n=t=>zn.insertAdjacentHTML("beforeend",t),Xn=t=>""+(t?`${t.slice(0,4)}`:"Unknown"),Vn=t=>""+(t?`https://image.tmdb.org/t/p/w500${t}`:"https://img.freepik.com/premium-vector/video-production-logo-fun-modern-black_434503-786.jpg?w=1060");function Yn(t,e){e.forEach((e=>{for(let n=0;n<e.length;n+=1)for(let i=0;i<t.length;i+=1)e[n]===t[i].id?e[n]=t[i].name:e[n]}))}const Kn=async t=>mn.get(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=2ac41627e60ee28ce7ee19eda978da51&language=en-US`),Gn={openModal:document.querySelector(".movies__list"),closeModalBtn:document.querySelector(".button-close"),backdrop:document.querySelector(".backdrop-movie"),movieCard:document.querySelector(".movie-card"),body:document.querySelector("[data-page]")},Jn=m.create(Gn.backdrop,{onShow:t=>{},onClose:t=>{document.querySelector(".backdrop-movie").style.overflowY="scroll",Gn.body.classList.remove("no-scroll")}});function Qn(){Gn.body.classList.remove("no-scroll"),Jn.close((()=>Gn.body.classList.remove("no-scroll"))),document.removeEventListener("keydown",(t=>Zn(t)))}function Zn(t){"Escape"===t.key&&Qn()}function ti(t){t.preventDefault();const e=document.querySelector('[data-add="wathced"]').dataset.id;Kn(e).then((t=>{t.data.results.length>0?window.open(`https://www.youtube.com/watch?v=${t.data.results[0].key}`,"_blank"):o.Notify.failure("Sorry, but there is no trailer for this movie")}))}function ei({poster_path:t,original_title:e,title:n,vote_average:i,vote_count:o,genres:r,overview:s,popularity:a,id:l}){const c=r.map((({name:t})=>t)).join(", "),u=`<div class="movie-card">\n  <div class="movie-card_request">\n    <div class="movie-card_img-cover">\n      <img\n      class="movie-card_photo"\n      src="${Vn(t)}"\n      alt="${n}"\n    />\n      <button type="button" class="button-open-trailer"></button>\n    </div>\n  </div>\n  <div class="movie-description">\n    <h2 class="movie-title">${n}</h2>\n    <table class="movie-table">\n      <tbody>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Vote/Votes</p>\n          </td>\n          <td>\n            <p>\n              <span class= "movie-table_vote"> <span class= "movie-table_vote_aver"> ${i.toFixed(1)} </span> / ${o}</span>\n            </p>\n          </td>\n        </tr>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Popularity</p>\n          </td>\n          <td>\n            <p class="movie-table_popularitynum">${a}</p>\n          </td>\n        </tr>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Original Title</p>\n          </td>\n          <td>\n             <p class="movie-table_title_ori">${e}</p>\n          </td>\n        </tr>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Genre</p>\n          </td>\n          <td>\n            <p class="movie-table_genrecat">${c}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class="movie-about_container">\n    <h3 class="movie-about">About</h3>\n    <p class="movie-about_text">${s}</p>\n  </div>\n    <ul class="movie-list">\n      <li class="movie-item">\n        <button type="button" class="movie-item_button" data-id=${l} data-add="wathced">Add to watched</button>\n      </li>\n      <li class="movie-item">\n        <button type="button" class="movie-item_button" data-id=${l} data-add="queue">Add to queue</button>\n       </li>\n    </ul>\n  </div>\n</div>`,d=`<div class="movie-card">\n  <div class="movie-card_request">\n    <div class="movie-card_img-cover">\n      <img\n      class="movie-card_photo"\n      src="${Vn(t)}"\n      alt="${n}"\n    />\n      <button type="button" class="button-open-trailer"></button>\n    </div>\n  </div>\n  <div class="movie-description">\n    <h2 class="movie-title">${n}</h2>\n    <table class="movie-table">\n      <tbody>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Vote/Votes</p>\n          </td>\n          <td>\n            <p>\n              <span class= "movie-table_vote"> <span class= "movie-table_vote_aver"> ${i.toFixed(1)} </span> / ${o}</span>\n            </p>\n          </td>\n        </tr>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Popularity</p>\n          </td>\n          <td>\n            <p>${a}</p>\n          </td>\n        </tr>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Original Title</p>\n          </td>\n          <td>\n             <p class="movie-table_title_ori">${e}</p>\n          </td>\n        </tr>\n        <tr class="movie-table_row">\n          <td>\n            <p class="movie-table_title">Genre</p>\n          </td>\n          <td>\n            <p>${c}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class="movie-about_container">\n    <h3 class="movie-about">About</h3>\n    <p class="movie-about_text">${s}</p>\n  </div>\n    <ul class="movie-list">\n\n            <li class="movie-item">\n        <button type="button" class="movie-item_button hover" data-id=${l} data-remove="wathced">Remove from watched</button>\n      </li>\n      <li class="movie-item">\n        <button type="button" class="movie-item_button hover" data-id=${l} data-remove="queue">Remove from queue</button>\n\n       </li>\n    </ul>\n  </div>\n</div>`;"Home"===document.querySelector(".header__nav-link.active").textContent?Gn.movieCard.innerHTML=u:Gn.movieCard.innerHTML=d}function ni(t){const n=document.querySelector('[data-add="wathced"]').dataset.id,i=JSON.parse(localStorage.getItem("WatchedFilms"));null===i&&(e(o).Report.success("","Film added to WATCHED"),localStorage.setItem("WatchedFilms",JSON.stringify([n]))),i.includes(n)?e(o).Report.failure("","The movie has already been added to the list!"):(i.push(n),e(o).Report.success("","Film added to WATCHED"),localStorage.setItem("WatchedFilms",JSON.stringify(i)))}function ii(){const t=document.querySelector('[data-add="queue"]').dataset.id,n=JSON.parse(localStorage.getItem("QueueFilms"));if(null===n&&localStorage.setItem("QueueFilms",JSON.stringify([t])),n.includes(t))return e(o).Report.failure("","The movie has already been added to the queue!");n.push(t),e(o).Report.success("","Film added to QUEUE"),localStorage.setItem("QueueFilms",JSON.stringify(n))}function oi(t){const n=document.querySelector('[data-remove="wathced"]').dataset.id,i=JSON.parse(localStorage.getItem("WatchedFilms"));i?i.includes(n)?(i.includes(n)&&(e(o).Report.success("","Movie is removed from watched"),localStorage.removeItem("WatchedFilms",JSON.stringify([n]))),i.splice(i.indexOf(n),1),e(o).Report.success("","Movie Del From WATCHED"),localStorage.setItem("WatchedFilms",JSON.stringify(i))):e(o).Report.failure("","There is no such movie in your watched list"):e(o).Report.failure("","The list of watched is empty")}function ri(){const t=document.querySelector('[data-remove="queue"]').dataset.id,n=JSON.parse(localStorage.getItem("QueueFilms"));n?n.includes(t)?(n.includes(t)&&(e(o).Report.success("","Movie is removed from queue"),localStorage.removeItem("QueueFilms",JSON.stringify([t]))),n.splice(n.indexOf(t),1),e(o).Report.success("","Movie DEL QUEUE"),localStorage.setItem("QueueFilms",JSON.stringify(n))):e(o).Report.failure("","There is no such movie in your queue list"):e(o).Report.failure("","The list of watched is empty")}Gn.openModal.addEventListener("click",(async function(t){if("LI"===t.target.nodeName){const e=t.target.id;ei(await Dn(e))}if("DIV"===t.target.nodeName||"IMG"===t.target.nodeName||"H2"===t.target.nodeName||"P"===t.target.nodeName){const e=t.target.parentElement.id;ei(await Dn(e)),Jn.show(),Gn.closeModalBtn.addEventListener("click",Qn),document.addEventListener("keydown",(t=>Zn(t))),"Home"===document.querySelector(".header__nav-link.active").textContent?(document.querySelector('[data-add="wathced"]').addEventListener("click",ni),document.querySelector('[data-add="queue"]').addEventListener("click",ii)):(document.querySelector('[data-remove="wathced"]').addEventListener("click",oi),document.querySelector('[data-remove="queue"]').addEventListener("click",ri));document.querySelector(".button-open-trailer").addEventListener("click",ti)}Gn.body.classList.add("no-scroll")}));const si="header-button-active",ai={libraryButton:document.querySelector('[data-action="library"]'),watchedButton:document.querySelector('[data-action="watched"]'),queueButton:document.querySelector('[data-action="queue"]')};ai.libraryButton.addEventListener("click",(t=>{t.preventDefault(),t.target.classList.add(si),ai.queueButton.style.visibility="visible",ai.watchedButton.style.visibility="visible"})),ai.queueButton.addEventListener("click",(async t=>{t.preventDefault(),toggleActiveButton(t),ai.watchedButton.classList.remove(si),qn();const e=Array.from((new g).getAllQueue());let n=await li(e);const i=Hn(n);$n(i)}));const li=async t=>{let e=[];for await(const n of t){const t=await Dn(n);e.push(t)}return e};ai.watchedButton.addEventListener("click",(async t=>{t.preventDefault(),toggleActiveButton(t),ai.queueButton.classList.remove(si),qn();const e=localStorage.getItem("WatchedFilms"),n=e?JSON.parse(e):[];let i=await li(n);const o=Hn(i);return $n(o)})),toggleActiveButton=t=>{t.target.classList.contains(si)?t.target.classList.remove(si):t.target.classList.add(si)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ci,ui,di={},hi=di={};function fi(){throw new Error("setTimeout has not been defined")}function pi(){throw new Error("clearTimeout has not been defined")}function mi(t){if(ci===setTimeout)return setTimeout(t,0);if((ci===fi||!ci)&&setTimeout)return ci=setTimeout,setTimeout(t,0);try{return ci(t,0)}catch(e){try{return ci.call(null,t,0)}catch(e){return ci.call(this,t,0)}}}!function(){try{ci="function"==typeof setTimeout?setTimeout:fi}catch(t){ci=fi}try{ui="function"==typeof clearTimeout?clearTimeout:pi}catch(t){ui=pi}}();var gi,yi=[],vi=!1,bi=-1;function wi(){vi&&gi&&(vi=!1,gi.length?yi=gi.concat(yi):bi=-1,yi.length&&_i())}function _i(){if(!vi){var t=mi(wi);vi=!0;for(var e=yi.length;e;){for(gi=yi,yi=[];++bi<e;)gi&&gi[bi].run();bi=-1,e=yi.length}gi=null,vi=!1,function(t){if(ui===clearTimeout)return clearTimeout(t);if((ui===pi||!ui)&&clearTimeout)return ui=clearTimeout,clearTimeout(t);try{return ui(t)}catch(e){try{return ui.call(null,t)}catch(e){return ui.call(this,t)}}}(t)}}function xi(t,e){this.fun=t,this.array=e}function Ci(){}hi.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];yi.push(new xi(t,e)),1!==yi.length||vi||mi(_i)},xi.prototype.run=function(){this.fun.apply(null,this.array)},hi.title="browser",hi.browser=!0,hi.env={},hi.argv=[],hi.version="",hi.versions={},hi.on=Ci,hi.addListener=Ci,hi.once=Ci,hi.off=Ci,hi.removeListener=Ci,hi.removeAllListeners=Ci,hi.emit=Ci,hi.prependListener=Ci,hi.prependOnceListener=Ci,hi.listeners=function(t){return[]},hi.binding=function(t){throw new Error("process.binding is not supported")},hi.cwd=function(){return"/"},hi.chdir=function(t){throw new Error("process.chdir is not supported")},hi.umask=function(){return 0};const ki=!1,Ii=!1,Ei="${JSCORE_VERSION}",Ni=function(t,e){if(!t)throw Si(e)},Si=function(t){return new Error("Firebase Database ("+Ei+") INTERNAL ASSERT FAILED: "+t)},Ti=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):55296==(64512&o)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++i)),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const o=t[e],r=e+1<t.length,s=r?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=o>>2,u=(3&o)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,r||(d=64)),i.push(n[c],n[u],n[d],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ti(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=t[n++];e[i++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=((7&o)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],s=t[n++];e[i++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const o=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const s=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==o||null==r||null==s||null==a)throw new Ri;const l=o<<2|r>>4;if(i.push(l),64!==s){const t=r<<4&240|s>>2;if(i.push(t),64!==a){const t=s<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ai=function(t){const e=Ti(t);return Oi.encodeByteArray(e,!0)},Pi=function(t){return Ai(t).replace(/\./g,"")},Li=function(t){try{return Oi.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Di(t){return Mi(void 0,t)}function Mi(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=Mi(t[n],e[n]));return t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fi=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Bi=()=>{try{return Fi()||(()=>{if(void 0===di||void 0===di.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Li(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Ui=t=>{var e,n;return null===(n=null===(e=Bi())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},zi=t=>{const e=Ui(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ji=()=>{var t;return null===(t=Bi())||void 0===t?void 0:t.config},Wi=t=>{var e;return null===(e=Bi())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Pi(JSON.stringify({alg:"none",type:"JWT"})),Pi(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Xi(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($i())}function Vi(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function Yi(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ki(){const t=$i();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gi(){return!0===ki||!0===Ii}function Ji(){try{return"object"==typeof indexedDB}catch(t){return!1}}function Qi(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}function Zi(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,to.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],r=o?function(t,e){return t.replace(no,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${r} (${i}).`;return new to(i,s,n)}}const no=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return JSON.parse(t)}function oo(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=function(t){let e={},n={},i={},o="";try{const r=t.split(".");e=io(Li(r[0])||""),n=io(Li(r[1])||""),o=r[2],i=n.d||{},delete n.d}catch(t){}return{header:e,claims:n,data:i,signature:o}},so=function(t){const e=ro(t).claims;return!!e&&"object"==typeof e&&e.hasOwnProperty("iat")},ao=function(t){const e=ro(t).claims;return"object"==typeof e&&!0===e.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lo(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function co(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function uo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e,n){const i={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=e.call(n,t[o],o,t));return i}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const n=t[o],r=e[o];if(po(n)&&po(r)){if(!fo(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function po(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function go(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"==typeof t)for(let i=0;i<16;i++)n[i]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let i=0;i<16;i++)n[i]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let t=16;t<80;t++){const e=n[t-3]^n[t-8]^n[t-14]^n[t-16];n[t]=4294967295&(e<<1|e>>>31)}let i,o,r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(i=l^s&(a^l),o=1518500249):(i=s^a^l,o=1859775393):t<60?(i=s&a|l&(s|a),o=2400959708):(i=s^a^l,o=3395469782);const e=(r<<5|r>>>27)+i+c+o+n[t]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const o=this.buf_;let r=this.inbuf_;for(;i<e;){if(0===r)for(;i<=n;)this.compress_(t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(o[r]=t.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}else for(;i<e;)if(o[r]=t[i],++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}this.inbuf_=r,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let e=0;e<5;e++)for(let i=24;i>=0;i-=8)t[n]=this.chain_[e]>>i&255,++n;return t}}function bo(t,e){const n=new wo(t,e);return n.subscribe.bind(n)}class wo{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=_o),void 0===i.error&&(i.error=_o),void 0===i.complete&&(i.complete=_o);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),o}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function _o(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Co=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);if(o>=55296&&o<=56319){const e=o-55296;i++,Ni(i<t.length,"Surrogate pair missing trail surrogate.");o=65536+(e<<10)+(t.charCodeAt(i)-56320)}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},ko=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e},Io=1e3,Eo=2,No=144e5,So=.5;function To(t,e=Io,n=Eo){const i=e*Math.pow(n,t),o=Math.round(So*i*(Math.random()-.5)*2);return Math.min(No,i+o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(t){return t&&t._delegate?t._delegate:t}class Ro{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Hi;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ao})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=Ao){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=Ao){return this.instances.has(t)}getOptions(t=Ao){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&t(r,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===Ao?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=Ao){return this.component?this.component.multipleInstances?t:Ao:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Lo{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Po(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=[];var Mo,Fo;(Fo=Mo||(Mo={}))[Fo.DEBUG=0]="DEBUG",Fo[Fo.VERBOSE=1]="VERBOSE",Fo[Fo.INFO=2]="INFO",Fo[Fo.WARN=3]="WARN",Fo[Fo.ERROR=4]="ERROR",Fo[Fo.SILENT=5]="SILENT";const Bo={debug:Mo.DEBUG,verbose:Mo.VERBOSE,info:Mo.INFO,warn:Mo.WARN,error:Mo.ERROR,silent:Mo.SILENT},Uo=Mo.INFO,zo={[Mo.DEBUG]:"log",[Mo.VERBOSE]:"log",[Mo.INFO]:"info",[Mo.WARN]:"warn",[Mo.ERROR]:"error"},jo=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),o=zo[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${i}]  ${t.name}:`,...n)};class Wo{constructor(t){this.name=t,this._logLevel=Uo,this._logHandler=jo,this._userLogHandler=null,Do.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mo))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Bo[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mo.DEBUG,...t),this._logHandler(this,Mo.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mo.VERBOSE,...t),this._logHandler(this,Mo.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mo.INFO,...t),this._logHandler(this,Mo.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mo.WARN,...t),this._logHandler(this,Mo.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mo.ERROR,...t),this._logHandler(this,Mo.ERROR,...t)}}const Ho=(t,e)=>e.some((e=>t instanceof e));let qo,$o;const Xo=new WeakMap,Vo=new WeakMap,Yo=new WeakMap,Ko=new WeakMap,Go=new WeakMap;let Jo={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Vo.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Yo.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Qo(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?($o||($o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(er(this),e),tr(Xo.get(this))}:function(...e){return tr(t.apply(er(this),e))}:function(e,...n){const i=t.call(er(this),e,...n);return Yo.set(i,e.sort?e.sort():[e]),tr(i)}}function Zo(t){return"function"==typeof t?Qo(t):(t instanceof IDBTransaction&&function(t){if(Vo.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)}));Vo.set(t,e)}(t),Ho(t,qo||(qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,Jo):t)}function tr(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{e(tr(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&Xo.set(e,t)})).catch((()=>{})),Go.set(e,t),e}(t);if(Ko.has(t))return Ko.get(t);const e=Zo(t);return e!==t&&(Ko.set(t,e),Go.set(e,t)),e}const er=t=>Go.get(t);function nr(t,e,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const s=indexedDB.open(t,e),a=tr(s);return i&&s.addEventListener("upgradeneeded",(t=>{i(tr(s.result),t.oldVersion,t.newVersion,tr(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const ir=["get","getKey","getAll","getAllKeys","count"],or=["put","add","delete","clear"],rr=new Map;function sr(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(rr.get(e))return rr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=or.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!ir.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,o?"readwrite":"readonly");let s=r.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),o&&r.done]))[0]};return rr.set(e,r),r}Jo=(t=>({...t,get:(e,n,i)=>sr(e,n)||t.get(e,n,i),has:(e,n)=>!!sr(e,n)||t.has(e,n)}))(Jo);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const lr="@firebase/app",cr="0.9.8",ur=new Wo("@firebase/app"),dr="[DEFAULT]",hr={[lr]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},fr=new Map,pr=new Map;function mr(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gr(t){const e=t.name;if(pr.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;pr.set(e,t);for(const e of fr.values())mr(e,t);return!0}function yr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vr=new eo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ro("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="9.20.0";function _r(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:dr,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!=typeof o||!o)throw vr.create("bad-app-name",{appName:String(o)});if(n||(n=ji()),!n)throw vr.create("no-options");const r=fr.get(o);if(r){if(fo(n,r.options)&&fo(i,r.config))return r;throw vr.create("duplicate-app",{appName:o})}const s=new Lo(o);for(const t of pr.values())s.addComponent(t);const a=new br(n,i,s);return fr.set(o,a),a}function xr(t=dr){const e=fr.get(t);if(!e&&t===dr)return _r();if(!e)throw vr.create("no-app",{appName:t});return e}function Cr(t,e,n){var i;let o=null!==(i=hr[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const r=o.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const t=[`Unable to register library "${o}" with version "${e}":`];return r&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),r&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ur.warn(t.join(" "))}gr(new Ro(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kr="firebase-heartbeat-database",Ir=1,Er="firebase-heartbeat-store";let Nr=null;function Sr(){return Nr||(Nr=nr(kr,Ir,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Er)}}).catch((t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})}))),Nr}async function Tr(t,e){try{const n=(await Sr()).transaction(Er,"readwrite"),i=n.objectStore(Er);return await i.put(e,Or(t)),n.done}catch(t){if(t instanceof to)ur.warn(t.message);else{const e=vr.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});ur.warn(e.message)}}}function Or(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pr(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Ar();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ar(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const o of t){const t=n.find((t=>t.agent===o.agent));if(t){if(t.dates.push(o.date),Lr(n)>e){t.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Lr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Pi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ar(){return(new Date).toISOString().substring(0,10)}class Pr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ji()&&Qi().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{return(await Sr()).transaction(Er).objectStore(Er).get(Or(t))}catch(t){if(t instanceof to)ur.warn(t.message);else{const e=vr.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ur.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Tr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Tr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lr(t){return Pi(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr;Dr="",gr(new Ro("platform-logger",(t=>new ar(t)),"PRIVATE")),gr(new Ro("heartbeat",(t=>new Rr(t)),"PRIVATE")),Cr(lr,cr,Dr),Cr(lr,cr,"esm2017"),Cr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Cr("firebase","9.20.0","app");const Mr="@firebase/installations",Fr="0.6.4",Br=1e4,Ur=`w:${Fr}`,zr="FIS_v2",jr="https://firebaseinstallations.googleapis.com/v1",Wr=36e5,Hr=new eo("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function qr(t){return t instanceof to&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r({projectId:t}){return`${jr}/projects/${t}/installations`}function Xr(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Vr(t,e){const n=(await e.json()).error;return Hr.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Yr({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Kr(t,{refreshToken:e}){const n=Yr(t);return n.append("Authorization",function(t){return`${zr} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),n}async function Gr(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qr=/^[cdef][\w-]{21}$/,Zr="";function ts(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){const e=(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return Qr.test(e)?e:Zr}catch(t){return Zr}}function es(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map;function is(t,e){const n=es(t);os(n,e),function(t,e){const n=ss();n&&n.postMessage({key:t,fid:e});as()}(n,e)}function os(t,e){const n=ns.get(t);if(n)for(const t of n)t(e)}let rs=null;function ss(){return!rs&&"BroadcastChannel"in self&&(rs=new BroadcastChannel("[Firebase] FID Change"),rs.onmessage=t=>{os(t.data.key,t.data.fid)}),rs}function as(){0===ns.size&&rs&&(rs.close(),rs=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="firebase-installations-database",cs=1,us="firebase-installations-store";let ds=null;function hs(){return ds||(ds=nr(ls,cs,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(us)}})),ds}async function fs(t,e){const n=es(t),i=(await hs()).transaction(us,"readwrite"),o=i.objectStore(us),r=await o.get(n);return await o.put(e,n),await i.done,r&&r.fid===e.fid||is(t,e.fid),e}async function ps(t){const e=es(t),n=(await hs()).transaction(us,"readwrite");await n.objectStore(us).delete(e),await n.done}async function ms(t,e){const n=es(t),i=(await hs()).transaction(us,"readwrite"),o=i.objectStore(us),r=await o.get(n),s=e(r);return void 0===s?await o.delete(n):await o.put(s,n),await i.done,!s||r&&r.fid===s.fid||is(t,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t){let e;const n=await ms(t.appConfig,(n=>{const i=function(t){const e=t||{fid:ts(),registrationStatus:0};return bs(e)}(n),o=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(Hr.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=$r(t),o=Yr(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const s={fid:n,authVersion:zr,appId:t.appId,sdkVersion:Ur},a={method:"POST",headers:o,body:JSON.stringify(s)},l=await Gr((()=>fetch(i,a)));if(l.ok){const t=await l.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Xr(t.authToken)}}throw await Vr("Create Installation",l)}(t,e);return fs(t.appConfig,n)}catch(n){throw qr(n)&&409===n.customData.serverCode?await ps(t.appConfig):await fs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:ys(t)}:{installationEntry:e}}(t,i);return e=o.registrationPromise,o.installationEntry}));return n.fid===Zr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function ys(t){let e=await vs(t.appConfig);for(;1===e.registrationStatus;)await Jr(100),e=await vs(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await gs(t);return n||e}return e}function vs(t){return ms(t,(t=>{if(!t)throw Hr.create("installation-not-found");return bs(t)}))}function bs(t){return 1===(e=t).registrationStatus&&e.registrationTime+Br<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function ws({appConfig:t,heartbeatServiceProvider:e},n){const i=function(t,{fid:e}){return`${$r(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n),o=Kr(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const s={installation:{sdkVersion:Ur,appId:t.appId}},a={method:"POST",headers:o,body:JSON.stringify(s)},l=await Gr((()=>fetch(i,a)));if(l.ok){return Xr(await l.json())}throw await Vr("Generate Auth Token",l)}async function _s(t,e=!1){let n;const i=await ms(t.appConfig,(i=>{if(!Cs(i))throw Hr.create("not-registered");const o=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wr}(t)}(o))return i;if(1===o.requestStatus)return n=async function(t,e){let n=await xs(t.appConfig);for(;1===n.authToken.requestStatus;)await Jr(100),n=await xs(t.appConfig);const i=n.authToken;return 0===i.requestStatus?_s(t,e):i}(t,e),i;{if(!navigator.onLine)throw Hr.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await ws(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await fs(t.appConfig,i),n}catch(n){if(!qr(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fs(t.appConfig,n)}else await ps(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function xs(t){return ms(t,(t=>{if(!Cs(t))throw Hr.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+Br<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Cs(t){return void 0!==t&&2===t.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ks(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await gs(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await _s(n,e)).token}function Is(t){return Hr.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="installations",Ns=t=>{const e=yr(t.getProvider("app").getImmediate(),Es).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await gs(e);return i?i.catch(console.error):_s(e).catch(console.error),n.fid}(e),getToken:t=>ks(e,t)}};gr(new Ro(Es,(t=>{const e=t.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw Is("App Configuration");if(!t.name)throw Is("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Is(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:yr(e,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),gr(new Ro("installations-internal",Ns,"PRIVATE")),Cr(Mr,Fr),Cr(Mr,Fr,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ss="analytics",Ts="firebase_id",Os="origin",Rs=6e4,As="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ps="https://www.googletagmanager.com/gtag/js",Ls=new Wo("@firebase/analytics"),Ds=new eo("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ms(t){if(!t.startsWith(Ps)){const e=Ds.create("invalid-gtag-resource",{gtagURL:t});return Ls.warn(e.message),""}return t}function Fs(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Bs(t,e){const n=function(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}("firebase-js-sdk-policy",{createScriptURL:Ms}),i=document.createElement("script"),o=`${Ps}?l=${t}&id=${e}`;i.src=n?null==n?void 0:n.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function Us(t,e,n,i){return async function(o,r,s){try{"event"===o?await async function(t,e,n,i,o){try{let r=[];if(o&&o.send_to){let t=o.send_to;Array.isArray(t)||(t=[t]);const i=await Fs(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),o=t&&e[t.appId];if(!o){r=[];break}r.push(o)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,o||{})}catch(t){Ls.error(t)}}(t,e,n,r,s):"config"===o?await async function(t,e,n,i,o,r){const s=i[o];try{if(s)await e[s];else{const t=(await Fs(n)).find((t=>t.measurementId===o));t&&await e[t.appId]}}catch(t){Ls.error(t)}t("config",o,r)}(t,e,n,i,r,s):"consent"===o?t("consent","update",s):t("set",r)}catch(t){Ls.error(t)}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zs=30;const js=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Ws(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Hs(t,e=js,n){const{appId:i,apiKey:o,measurementId:r}=t.options;if(!i)throw Ds.create("no-app-id");if(!o){if(r)return{measurementId:r,appId:i};throw Ds.create("no-api-key")}const s=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $s;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Rs),qs({appId:i,apiKey:o,measurementId:r},s,a,e)}async function qs(t,{throttleEndTimeMillis:e,backoffCount:n},i,o=js){var r;const{appId:s,measurementId:a}=t;try{await function(t,e){return new Promise(((n,i)=>{const o=Math.max(e-Date.now(),0),r=setTimeout(n,o);t.addEventListener((()=>{clearTimeout(r),i(Ds.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(a)return Ls.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:s,measurementId:a};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,o={method:"GET",headers:Ws(i)},r=As.replace("{app-id}",n),s=await fetch(r,o);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw Ds.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}(t);return o.deleteThrottleMetadata(s),e}catch(e){const l=e;if(!function(t){if(!(t instanceof to&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(l)){if(o.deleteThrottleMetadata(s),a)return Ls.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:s,measurementId:a};throw e}const c=503===Number(null===(r=null==l?void 0:l.customData)||void 0===r?void 0:r.httpStatus)?To(n,o.intervalMillis,zs):To(n,o.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return o.setThrottleMetadata(s,u),Ls.debug(`Calling attemptFetch again in ${c} millis`),qs(t,u,i,o)}}class $s{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs,Vs;function Ys(t){Vs=t}function Ks(t){Xs=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t,e,n,i,o,r,s){var a;const l=Hs(t);l.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Ls.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Ls.error(t))),e.push(l);const c=async function(){if(!Ji())return Ls.warn(Ds.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Qi()}catch(t){return Ls.warn(Ds.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?i.getId():void 0)),[u,d]=await Promise.all([l,c]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ps)&&n.src.includes(t))return n;return null})(r)||Bs(r,u.measurementId),Vs&&(o("consent","default",Vs),Ys(void 0)),o("js",new Date);const h=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return h[Os]="firebase",h.update=!0,null!=d&&(h[Ts]=d),o("config",u.measurementId,h),Xs&&(o("set",Xs),Ks(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t){this.app=t}_delete(){return delete Qs[this.app.options.appId],Promise.resolve()}}let Qs={},Zs=[];const ta={};let ea,na,ia="dataLayer",oa="gtag",ra=!1;function sa(t,e,n){!function(){const t=[];if(Vi()&&t.push("This is a browser extension environment."),Zi()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Ds.create("invalid-analytics-context",{errorInfo:e});Ls.warn(n.message)}}();const i=t.options.appId;if(!i)throw Ds.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Ds.create("no-api-key");Ls.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Qs[i])throw Ds.create("already-exists",{id:i});if(!ra){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(ia);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,o){let r=function(...t){window[i].push(arguments)};return window[o]&&"function"==typeof window[o]&&(r=window[o]),window[o]=Us(r,t,e,n),{gtagCore:r,wrappedGtag:window[o]}}(Qs,Zs,ta,ia,oa);na=t,ea=e,ra=!0}Qs[i]=Gs(t,Zs,ta,e,ea,ia,n);return new Js(t)}function aa(t,e,n,i){t=Oo(t),async function(t,e,n,i,o){if(o&&o.global)t("event",n,i);else{const o=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:o}))}}(na,Qs[t.app.options.appId],e,n,i).catch((t=>Ls.error(t)))}const la="@firebase/analytics",ca="0.9.5";gr(new Ro(Ss,((t,{options:e})=>sa(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),gr(new Ro("analytics-internal",(function(t){try{const e=t.getProvider(Ss).getImmediate();return{logEvent:(t,n,i)=>aa(e,t,n,i)}}catch(t){throw Ds.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Cr(la,ca),Cr(la,ca,"esm2017");const ua="@firebase/database",da="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),oo(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:io(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return lo(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fa(e)}}catch(t){}return new pa},ga=ma("localStorage"),ya=ma("sessionStorage"),va=new Wo("@firebase/database"),ba=function(){let t=1;return function(){return t++}}(),wa=function(t){const e=Co(t),n=new vo;n.update(e);const i=n.digest();return Oi.encodeByteArray(i)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=_a.apply(null,i):e+="object"==typeof i?oo(i):i,e+=" "}return e};let xa=null,Ca=!0;const ka=function(t,e){Ni(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(va.logLevel=Mo.VERBOSE,xa=va.log.bind(va),e&&ya.set("logging_enabled",!0)):"function"==typeof t?xa=t:(xa=null,ya.remove("logging_enabled"))},Ia=function(...t){if(!0===Ca&&(Ca=!1,null===xa&&!0===ya.get("logging_enabled")&&ka(!0)),xa){const e=_a.apply(null,t);xa(e)}},Ea=function(t){return function(...e){Ia(t,...e)}},Na=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);va.error(e)},Sa=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw va.error(e),new Error(e)},Ta=function(...t){const e="FIREBASE WARNING: "+_a(...t);va.warn(e)},Oa=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ra="[MIN_NAME]",Aa="[MAX_NAME]",Pa=function(t,e){if(t===e)return 0;if(t===Ra||e===Aa)return-1;if(e===Ra||t===Aa)return 1;{const n=ja(t),i=ja(e);return null!==n?null!==i?n-i==0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},La=function(t,e){return t===e?0:t<e?-1:1},Da=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+oo(e))},Ma=function(t){if("object"!=typeof t||null===t)return oo(t);const e=[];for(const n in t)e.push(n);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=oo(e[i]),n+=":",n+=Ma(t[e[i]]);return n+="}",n},Fa=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let o=0;o<n;o+=e)o+e>n?i.push(t.substring(o,n)):i.push(t.substring(o,o+e));return i};function Ba(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ua=function(t){Ni(!Oa(t),"Invalid JSON number");const e=1023;let n,i,o,r,s;0===t?(i=0,o=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),e),i=r+e,o=Math.round(t*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,o=Math.round(t/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let t=parseInt(l.substr(s,8),2).toString(16);1===t.length&&(t="0"+t),c+=t}return c.toLowerCase()};const za=new RegExp("^-?(0*)\\d{1,10}$"),ja=function(t){if(za.test(t)){const e=Number(t);if(e>=-2147483648&&e<=2147483647)return e}return null},Wa=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Ta("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Ha=function(t,e){const n=setTimeout(t,e);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){Ta(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(Ia("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ta(t)}}class Xa{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Xa.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Va="5",Ya=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ka="ac",Ga="websocket",Ja="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(t,e,n,i,o=!1,r="",s=!1,a=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=r,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ga.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ga.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function Za(t,e,n){let i;if(Ni("string"==typeof e,"typeof type must == string"),Ni("object"==typeof n,"typeof params must == object"),e===Ga)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==Ja)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(n.ns=t.namespace);const o=[];return Ba(n,((t,e)=>{o.push(t+"="+e)})),i+o.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.counters_={}}incrementCounter(t,e=1){lo(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return Di(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={},nl={};function il(t){const e=t.toString();return el[e]||(el[e]=new tl),el[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ol{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&Wa((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="start";class sl{constructor(t,e,n,i,o,r,s){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=o,this.transportSessionId=r,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ea(t),this.stats_=il(e),this.urlFn=t=>(this.appCheckToken&&(t[Ka]=this.appCheckToken),Za(e,Ja,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new ol(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if(Gi()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new al(((...t)=>{const[e,n,i,o,r]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===rl)this.id=n,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={};t[rl]="t",t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v=Va,this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t[Ka]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ya.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){sl.forceAllow_=!0}static forceDisallow(){sl.forceDisallow_=!0}static isAvailable(){return!Gi()&&(!!sl.forceAllow_||!(sl.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=oo(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Ai(e),i=Fa(n,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Gi())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=oo(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class al{constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Gi())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=ba(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=al.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){Ia("frame writing exception"),t.stack&&Ia(t.stack),Ia(t)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||Ia("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const t=this.pendingSegs.shift();n=n+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),n()}))}addTag(t,e){Gi()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{Ia("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(t){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll=null;"undefined"!=typeof MozWebSocket?ll=MozWebSocket:"undefined"!=typeof WebSocket&&(ll=WebSocket);class cl{constructor(t,e,n,i,o,r,s){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ea(this.connId),this.stats_=il(e),this.connURL=cl.connectionURL_(e,r,s,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,i,o){const r={};return r.v=Va,!Gi()&&"undefined"!=typeof location&&location.hostname&&Ya.test(location.hostname)&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),i&&(r[Ka]=i),o&&(r.p=o),Za(t,Ga,r)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ga.set("previous_websocket_failure",!0);try{let t;if(Gi()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${Va}/${ha}/${di.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(t.proxy={origin:i})}this.mySock=new ll(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){cl.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==ll&&!cl.forceDisallow_}static previouslyFailed(){return ga.isInMemoryStorage||!0===ga.get("previous_websocket_failure")}markConnectionHealthy(){ga.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=io(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Ni(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=oo(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Fa(e,16384);n.length>1&&this.sendString_(String(n.length));for(let t=0;t<n.length;t++)this.sendString_(n[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cl.responsesRequiredToBeHealthy=2,cl.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[sl,cl]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=cl&&cl.isAvailable();let n=e&&!cl.previouslyFailed();if(t.webSocketOnly&&(e||Ta("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[cl];else{const t=this.transports_=[];for(const e of ul.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e);ul.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ul.globalTransportInitialized_=!1;class dl{constructor(t,e,n,i,o,r,s,a,l,c){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=r,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ea("c:"+this.id+":"),this.transportManager_=new ul(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ha((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=Da("t",t),n=Da("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=Da("t",t),n=Da("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=Da("t",t);if("d"in t){const n=t.d;if("h"===e){const t=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(t.h=this.repoInfo_.host),this.onHandshake_(t)}else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?Na("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Na("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Va!==n&&Ta("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Ha((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ha((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ga.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t){this.allowedEvents_=t,this.listeners_={},Ni(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===e&&(!n||n===i[t].context))return void i.splice(t,1)}validateEventType_(t){Ni(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends fl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Xi()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new pl}getInitialEvent(t){return Ni("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=32,gl=768;class yl{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function vl(){return new yl("")}function bl(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wl(t){return t.pieces_.length-t.pieceNum_}function _l(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new yl(t.pieces_,e)}function xl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Cl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new yl(e,0)}function Il(t,e){const n=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);if(e instanceof yl)for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new yl(n,0)}function El(t){return t.pieceNum_>=t.pieces_.length}function Nl(t,e){const n=bl(t),i=bl(e);if(null===n)return e;if(n===i)return Nl(_l(t),_l(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sl(t,e){if(wl(t)!==wl(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Tl(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(wl(t)>wl(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Ol{constructor(t,e){this.errorPrefix_=e,this.parts_=Cl(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=ko(this.parts_[t]);Rl(this)}}function Rl(t){if(t.byteLength_>gl)throw new Error(t.errorPrefix_+"has a key path longer than "+gl+" bytes ("+t.byteLength_+").");if(t.parts_.length>ml)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ml+") or object contains a cycle "+Al(t))}function Al(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends fl{constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new Pl}getInitialEvent(t){return Ni("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=1e3;class Dl extends hl{constructor(t,e,n,i,o,r,s,a){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Dl.nextPersistentConnectionId_++,this.log_=Ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ll,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Gi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pl.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&pl.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const i=++this.requestNumber_,o={r:i,a:t,b:e};this.log_(oo(o)),Ni(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new Hi,n={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:t=>{const n=t.d;"ok"===t.s?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,i){this.initConnection_();const o=t._queryIdentifier,r=t._path.toString();this.log_("Listen called for "+r+" "+o),this.listens.has(r)||this.listens.set(r,new Map),Ni(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ni(!this.listens.get(r).has(o),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(r).set(o,s),this.connected_&&this.sendListen_(s)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const o={p:n};t.tag&&(o.q=e._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest("q",o,(o=>{const r=o.d,s=o.s;Dl.warnOnListenWarnings_(r,e);(this.listens.get(n)&&this.listens.get(n).get(i))===t&&(this.log_("listen response",o),"ok"!==s&&this.removeListen_(n,i),t.onComplete&&t.onComplete(s,r))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&lo(t,"w")){const n=co(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();Ta(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||ao(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=so(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e.s,i=e.d||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,n=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Ni(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const o={p:t};i&&(o.q=n,o.t=i),this.sendRequest("n",o)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const o={p:e,d:n};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,o){this.initConnection_();const r={p:e,d:n};void 0!==o&&(r.h=o),this.outstandingPuts_.push({action:t,request:r,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+oo(t));const e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):Na("Unrecognized action received from server: "+oo(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Ni(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ll,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ll,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ll),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dl.nextConnectionId_++,o=this.lastSessionId;let r=!1,s=null;const a=function(){s?s.close():(r=!0,n())},l=function(t){Ni(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(t)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?Ia("getToken() completed but was canceled"):(Ia("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new dl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{Ta(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),o))}catch(t){this.log_("Failed to get token: "+t),r||(this.repoInfo_.nodeAdmin&&Ta(t),a())}}}interrupt(t){Ia("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ia("Resuming connection for reason: "+t),delete this.interruptReasons_[t],uo(this.interruptReasons_)&&(this.reconnectDelay_=Ll,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>Ma(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new yl(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){Ia("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){Ia("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Gi()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+ha.replace(/\./g,"-")]=1,Xi()?t["framework.cordova"]=1:Yi()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=pl.getInstance().currentlyOnline();return uo(this.interruptReasons_)&&t}}Dl.nextPersistentConnectionId_=0,Dl.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Ml(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Ml(Ra,t),i=new Ml(Ra,e);return 0!==this.compare(n,i)}minPost(){return Ml.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;class Ul extends Fl{static get __EMPTY_NODE(){return Bl}static set __EMPTY_NODE(t){Bl=t}compare(t,e){return Pa(t.name,e.name)}isDefinedOn(t){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Ml.MIN}maxPost(){return new Ml(Aa,Bl)}makePost(t,e){return Ni("string"==typeof t,"KeyIndex indexValue must always be a string."),new Ml(t,Bl)}toString(){return".key"}}const zl=new Ul;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e,n,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse_?t.left:t.right;else{if(0===r){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Wl{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=null!=n?n:Wl.RED,this.left=null!=i?i:Hl.EMPTY_NODE,this.right=null!=o?o:Hl.EMPTY_NODE}copy(t,e,n,i,o){return new Wl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=o?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===o?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Hl.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Hl.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Wl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Wl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Wl.RED=!0,Wl.BLACK=!1;class Hl{constructor(t,e=Hl.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new Hl(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,Wl.BLACK,null,null))}remove(t){return new Hl(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Wl.BLACK,null,null))}get(t){let e,n=this.root_;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new jl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new jl(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new jl(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new jl(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ql(t,e){return Pa(t.name,e.name)}function $l(t,e){return Pa(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl;Hl.EMPTY_NODE=new class{copy(t,e,n,i,o){return this}insert(t,e,n){return new Wl(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Vl=function(t){return"number"==typeof t?"number:"+Ua(t):"string:"+t},Yl=function(t){if(t.isLeafNode()){const e=t.val();Ni("string"==typeof e||"number"==typeof e||"object"==typeof e&&lo(e,".sv"),"Priority must be a string or number.")}else Ni(t===Xl||t.isEmpty(),"priority of unexpected type.");Ni(t===Xl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Kl,Gl,Jl;class Ql{constructor(t,e=Ql.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,Ni(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Yl(this.priorityNode_)}static set __childrenNodeConstructor(t){Kl=t}static get __childrenNodeConstructor(){return Kl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ql(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:Ql.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return El(t)?this:".priority"===bl(t)?this.priorityNode_:Ql.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:Ql.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=bl(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(Ni(".priority"!==n||1===wl(t),".priority must be the last token in a path"),this.updateImmediateChild(n,Ql.__childrenNodeConstructor.EMPTY_NODE.updateChild(_l(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Vl(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?Ua(this.value_):this.value_,this.lazyHash_=wa(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ql.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ql.__childrenNodeConstructor?-1:(Ni(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=Ql.VALUE_TYPE_ORDER.indexOf(e),o=Ql.VALUE_TYPE_ORDER.indexOf(n);return Ni(i>=0,"Unknown leaf type: "+e),Ni(o>=0,"Unknown leaf type: "+n),i===o?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}Ql.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Zl=new class extends Fl{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),o=n.compareTo(i);return 0===o?Pa(t.name,e.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Ml.MIN}maxPost(){return new Ml(Aa,new Ql("[PRIORITY-POST]",Jl))}makePost(t,e){const n=Gl(t);return new Ml(e,new Ql("[PRIORITY-POST]",n))}toString(){return".priority"}},tc=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/tc,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=t+1&n}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const nc=function(t,e,n,i){t.sort(e);const o=function(e,i){const r=i-e;let s,a;if(0===r)return null;if(1===r)return s=t[e],a=n?n(s):s,new Wl(a,s.node,Wl.BLACK,null,null);{const l=parseInt(r/2,10)+e,c=o(e,l),u=o(l+1,i);return s=t[l],a=n?n(s):s,new Wl(a,s.node,Wl.BLACK,c,u)}},r=function(e){let i=null,r=null,s=t.length;const a=function(e,i){const r=s-e,a=s;s-=e;const c=o(r+1,a),u=t[r],d=n?n(u):u;l(new Wl(d,u.node,i,null,c))},l=function(t){i?(i.left=t,i=t):(r=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,Wl.BLACK):(a(i,Wl.BLACK),a(i,Wl.RED))}return r}(new ec(t.length));return new Hl(i||e,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;const oc={};class rc{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return Ni(oc&&Zl,"ChildrenNode.ts has not been loaded"),ic=ic||new rc({".priority":oc},{".priority":Zl}),ic}get(t){const e=co(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Hl?e:null}hasIndex(t){return lo(this.indexSet_,t.toString())}addIndex(t,e){Ni(t!==zl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const o=e.getIterator(Ml.Wrap);let r,s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),n.push(s),s=o.getNext();r=i?nc(n,t.getCompare()):oc;const a=t.toString(),l=Object.assign({},this.indexSet_);l[a]=t;const c=Object.assign({},this.indexes_);return c[a]=r,new rc(c,l)}addToIndexes(t,e){const n=ho(this.indexes_,((n,i)=>{const o=co(this.indexSet_,i);if(Ni(o,"Missing index implementation for "+i),n===oc){if(o.isDefinedOn(t.node)){const n=[],i=e.getIterator(Ml.Wrap);let r=i.getNext();for(;r;)r.name!==t.name&&n.push(r),r=i.getNext();return n.push(t),nc(n,o.getCompare())}return oc}{const i=e.get(t.name);let o=n;return i&&(o=o.remove(new Ml(t.name,i))),o.insert(t,t.node)}}));return new rc(n,this.indexSet_)}removeFromIndexes(t,e){const n=ho(this.indexes_,(n=>{if(n===oc)return n;{const i=e.get(t.name);return i?n.remove(new Ml(t.name,i)):n}}));return new rc(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class ac{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Yl(this.priorityNode_),this.children_.isEmpty()&&Ni(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return sc||(sc=new ac(new Hl($l),null,rc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sc}updatePriority(t){return this.children_.isEmpty()?this:new ac(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?sc:e}}getChild(t){const e=bl(t);return null===e?this:this.getImmediateChild(e).getChild(_l(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(Ni(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Ml(t,e);let i,o;e.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),o=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?sc:this.priorityNode_;return new ac(i,r,o)}}updateChild(t,e){const n=bl(t);if(null===n)return e;{Ni(".priority"!==bl(t)||1===wl(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(_l(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,o=!0;if(this.forEachChild(Zl,((r,s)=>{e[r]=s.val(t),n++,o&&ac.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):o=!1})),!t&&o&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Vl(this.getPriority().val())+":"),this.forEachChild(Zl,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":wa(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ml(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Ml(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Ml(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Ml.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Ml.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)>0;)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===lc?-1:0}withIndex(t){if(t===zl||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new ac(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===zl||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(Zl),n=e.getIterator(Zl);let i=t.getNext(),o=n.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=t.getNext(),o=n.getNext()}return null===i&&null===o}return!1}return!1}}resolveIndex_(t){return t===zl?null:this.indexMap_.get(t.toString())}}ac.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const lc=new class extends ac{constructor(){super(new Hl($l),ac.EMPTY_NODE,rc.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ac.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Ml,{MIN:{value:new Ml(Ra,ac.EMPTY_NODE)},MAX:{value:new Ml(Aa,lc)}}),Ul.__EMPTY_NODE=ac.EMPTY_NODE,Ql.__childrenNodeConstructor=ac,Xl=lc,function(t){Jl=t}(lc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cc=!0;function uc(t,e=null){if(null===t)return ac.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),Ni(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new Ql(t,uc(e))}if(t instanceof Array||!cc){let n=ac.EMPTY_NODE;return Ba(t,((e,i)=>{if(lo(t,e)&&"."!==e.substring(0,1)){const t=uc(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(uc(e))}{const n=[];let i=!1;if(Ba(t,((t,e)=>{if("."!==t.substring(0,1)){const o=uc(e);o.isEmpty()||(i=i||!o.getPriority().isEmpty(),n.push(new Ml(t,o)))}})),0===n.length)return ac.EMPTY_NODE;const o=nc(n,ql,(t=>t.name),$l);if(i){const t=nc(n,Zl.getCompare());return new ac(o,uc(e),new rc({".priority":t},{".priority":Zl}))}return new ac(o,uc(e),rc.Default)}}!function(t){Gl=t}(uc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc extends Fl{constructor(t){super(),this.indexPath_=t,Ni(!El(t)&&".priority"!==bl(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),o=n.compareTo(i);return 0===o?Pa(t.name,e.name):o}makePost(t,e){const n=uc(t),i=ac.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ml(e,i)}maxPost(){const t=ac.EMPTY_NODE.updateChild(this.indexPath_,lc);return new Ml(Aa,t)}toString(){return Cl(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new class extends Fl{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?Pa(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Ml.MIN}maxPost(){return Ml.MAX}makePost(t,e){const n=uc(t);return new Ml(e,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return{type:"value",snapshotNode:t}}function pc(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mc(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gc(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zl}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Ni(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ni(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ra}hasEnd(){return this.endSet_}getIndexEndValue(){return Ni(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ni(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Aa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Ni(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zl}copy(){const t=new yc;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function vc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Zl?n="$priority":t.index_===hc?n="$value":t.index_===zl?n="$key":(Ni(t.index_ instanceof dc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=oo(n),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=oo(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+oo(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=oo(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+oo(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e.vf=n}return t.index_!==Zl&&(e.i=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends hl{constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Ea("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(Ni(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const r=wc.getListenId_(t,n),s={};this.listens_[r]=s;const a=vc(t._queryParams);this.restRequest_(o+".json",a,((t,e)=>{let a=e;if(404===t&&(a=null,t=null),null===t&&this.onDataUpdate_(o,a,!1,n),co(this.listens_,r)===s){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=wc.getListenId_(t,e);delete this.listens_[n]}get(t){const e=vc(t._queryParams),n=t._path.toString(),i=new Hi;return this.restRequest_(n+".json",e,((t,e)=>{let o=e;404===t&&(o=null,t=null),null===t?(this.onDataUpdate_(n,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,o])=>{i&&i.accessToken&&(e.auth=i.accessToken),o&&o.token&&(e.ac=o.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+mo(e);this.log_("Sending REST request for "+r);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+r+" received. status:",s.status,"response:",s.responseText);let t=null;if(s.status>=200&&s.status<300){try{t=io(s.responseText)}catch(t){Ta("Failed to parse JSON response for "+r+": "+s.responseText)}n(null,t)}else 401!==s.status&&404!==s.status&&Ta("Got unsuccessful REST response for "+r+" Status: "+s.status),n(s.status);n=null}},s.open("GET",r,!0),s.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.rootNode_=ac.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){return{value:null,children:new Map}}function Cc(t,e,n){if(El(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=bl(e);t.children.has(i)||t.children.set(i,xc());Cc(t.children.get(i),e=_l(e),n)}}function kc(t,e,n){null!==t.value?n(e,t.value):function(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,((t,i)=>{kc(i,new yl(e.toString()+"/"+t),n)}))}class Ic{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&Ba(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Ic(t);const n=1e4+2e4*Math.random();Ha(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;Ba(t,((t,i)=>{i>0&&lo(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),Ha(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nc,Sc;function Tc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Sc=Nc||(Nc={}))[Sc.OVERWRITE=0]="OVERWRITE",Sc[Sc.MERGE=1]="MERGE",Sc[Sc.ACK_USER_WRITE=2]="ACK_USER_WRITE",Sc[Sc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Oc{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Nc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(t){if(El(this.path)){if(null!=this.affectedTree.value)return Ni(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new yl(t));return new Oc(vl(),e,this.revert)}}return Ni(bl(this.path)===t,"operationForChild called for unrelated child."),new Oc(_l(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rc{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Nc.OVERWRITE}operationForChild(t){return El(this.path)?new Rc(this.source,vl(),this.snap.getImmediateChild(t)):new Rc(this.source,_l(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Nc.MERGE}operationForChild(t){if(El(this.path)){const e=this.children.subtree(new yl(t));return e.isEmpty()?null:e.value?new Rc(this.source,vl(),e.value):new Ac(this.source,vl(),e)}return Ni(bl(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ac(this.source,_l(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(El(t))return this.isFullyInitialized()&&!this.filtered_;const e=bl(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e,n,i,o,r){const s=i.filter((t=>t.type===n));s.sort(((e,n)=>function(t,e,n){if(null==e.childName||null==n.childName)throw Si("Should only compare child_ events.");const i=new Ml(e.childName,e.snapshotNode),o=new Ml(n.childName,n.snapshotNode);return t.index_.compare(i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,n))),s.forEach((n=>{const i=function(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,n,r);o.forEach((o=>{o.respondsTo(n.type)&&e.push(o.createEvent(i,t.query_))}))}))}function Dc(t,e){return{eventCache:t,serverCache:e}}function Mc(t,e,n,i){return Dc(new Pc(e,n,i),t.serverCache)}function Fc(t,e,n,i){return Dc(t.eventCache,new Pc(e,n,i))}function Bc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Uc(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;class jc{constructor(t,e=(()=>(zc||(zc=new Hl(La)),zc))()){this.value=t,this.children=e}static fromObject(t){let e=new jc(null);return Ba(t,((t,n)=>{e=e.set(new yl(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:vl(),value:this.value};if(El(t))return null;{const n=bl(t),i=this.children.get(n);if(null!==i){const o=i.findRootMostMatchingPathAndValue(_l(t),e);if(null!=o){return{path:Il(new yl(n),o.path),value:o.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(El(t))return this;{const e=bl(t),n=this.children.get(e);return null!==n?n.subtree(_l(t)):new jc(null)}}set(t,e){if(El(t))return new jc(e,this.children);{const n=bl(t),i=(this.children.get(n)||new jc(null)).set(_l(t),e),o=this.children.insert(n,i);return new jc(this.value,o)}}remove(t){if(El(t))return this.children.isEmpty()?new jc(null):new jc(null,this.children);{const e=bl(t),n=this.children.get(e);if(n){const i=n.remove(_l(t));let o;return o=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&o.isEmpty()?new jc(null):new jc(this.value,o)}return this}}get(t){if(El(t))return this.value;{const e=bl(t),n=this.children.get(e);return n?n.get(_l(t)):null}}setTree(t,e){if(El(t))return e;{const n=bl(t),i=(this.children.get(n)||new jc(null)).setTree(_l(t),e);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new jc(this.value,o)}}fold(t){return this.fold_(vl(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,o)=>{n[i]=o.fold_(Il(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,vl(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(El(t))return null;{const i=bl(t),o=this.children.get(i);return o?o.findOnPath_(_l(t),Il(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,vl(),e)}foreachOnPath_(t,e,n){if(El(t))return this;{this.value&&n(e,this.value);const i=bl(t),o=this.children.get(i);return o?o.foreachOnPath_(_l(t),Il(e,i),n):new jc(null)}}foreach(t){this.foreach_(vl(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(Il(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.writeTree_=t}static empty(){return new Wc(new jc(null))}}function Hc(t,e,n){if(El(e))return new Wc(new jc(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const o=i.path;let r=i.value;const s=Nl(o,e);return r=r.updateChild(s,n),new Wc(t.writeTree_.set(o,r))}{const i=new jc(n),o=t.writeTree_.setTree(e,i);return new Wc(o)}}}function qc(t,e,n){let i=t;return Ba(n,((t,n)=>{i=Hc(i,Il(e,t),n)})),i}function $c(t,e){if(El(e))return Wc.empty();{const n=t.writeTree_.setTree(e,new jc(null));return new Wc(n)}}function Xc(t,e){return null!=Vc(t,e)}function Vc(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(Nl(n.path,e)):null}function Yc(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Zl,((t,n)=>{e.push(new Ml(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Ml(t,n.value))})),e}function Kc(t,e){if(El(e))return t;{const n=Vc(t,e);return new Wc(null!=n?new jc(n):t.writeTree_.subtree(e))}}function Gc(t){return t.writeTree_.isEmpty()}function Jc(t,e){return Qc(vl(),t.writeTree_,e)}function Qc(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,o)=>{".priority"===e?(Ni(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):n=Qc(Il(t,e),o,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(Il(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t,e){return hu(e,t)}function tu(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));Ni(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let o=i.visible,r=!1,s=t.allWrites.length-1;for(;o&&s>=0;){const e=t.allWrites[s];e.visible&&(s>=n&&eu(e,i.path)?o=!1:Tl(i.path,e.path)&&(r=!0)),s--}if(o){if(r)return function(t){t.visibleWrites=iu(t.allWrites,nu,vl()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(i.snap)t.visibleWrites=$c(t.visibleWrites,i.path);else{Ba(i.children,(e=>{t.visibleWrites=$c(t.visibleWrites,Il(i.path,e))}))}return!0}return!1}function eu(t,e){if(t.snap)return Tl(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tl(Il(t.path,n),e))return!0;return!1}function nu(t){return t.visible}function iu(t,e,n){let i=Wc.empty();for(let o=0;o<t.length;++o){const r=t[o];if(e(r)){const t=r.path;let e;if(r.snap)Tl(n,t)?(e=Nl(n,t),i=Hc(i,e,r.snap)):Tl(t,n)&&(e=Nl(t,n),i=Hc(i,vl(),r.snap.getChild(e)));else{if(!r.children)throw Si("WriteRecord should have .snap or .children");if(Tl(n,t))e=Nl(n,t),i=qc(i,e,r.children);else if(Tl(t,n))if(e=Nl(t,n),El(e))i=qc(i,vl(),r.children);else{const t=co(r.children,bl(e));if(t){const n=t.getChild(_l(e));i=Hc(i,vl(),n)}}}}}return i}function ou(t,e,n,i,o){if(i||o){const r=Kc(t.visibleWrites,e);if(!o&&Gc(r))return n;if(o||null!=n||Xc(r,vl())){const r=function(t){return(t.visible||o)&&(!i||!~i.indexOf(t.writeId))&&(Tl(t.path,e)||Tl(e,t.path))};return Jc(iu(t.allWrites,r,e),n||ac.EMPTY_NODE)}return null}{const i=Vc(t.visibleWrites,e);if(null!=i)return i;{const i=Kc(t.visibleWrites,e);if(Gc(i))return n;if(null!=n||Xc(i,vl())){return Jc(i,n||ac.EMPTY_NODE)}return null}}}function ru(t,e,n,i){return ou(t.writeTree,t.treePath,e,n,i)}function su(t,e){return function(t,e,n){let i=ac.EMPTY_NODE;const o=Vc(t.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Zl,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const o=Kc(t.visibleWrites,e);return n.forEachChild(Zl,((t,e)=>{const n=Jc(Kc(o,new yl(t)),e);i=i.updateImmediateChild(t,n)})),Yc(o).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return Yc(Kc(t.visibleWrites,e)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,e)}function au(t,e,n,i){return function(t,e,n,i,o){Ni(i||o,"Either existingEventSnap or existingServerSnap must exist");const r=Il(e,n);if(Xc(t.visibleWrites,r))return null;{const e=Kc(t.visibleWrites,r);return Gc(e)?o.getChild(n):Jc(e,o.getChild(n))}}(t.writeTree,t.treePath,e,n,i)}function lu(t,e){return function(t,e){return Vc(t.visibleWrites,e)}(t.writeTree,Il(t.treePath,e))}function cu(t,e,n,i,o,r){return function(t,e,n,i,o,r,s){let a;const l=Kc(t.visibleWrites,e),c=Vc(l,vl());if(null!=c)a=c;else{if(null==n)return[];a=Jc(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=s.getCompare(),n=r?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();for(;l&&t.length<o;)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}(t.writeTree,t.treePath,e,n,i,o,r)}function uu(t,e,n){return function(t,e,n,i){const o=Il(e,n),r=Vc(t.visibleWrites,o);if(null!=r)return r;if(i.isCompleteForChild(n))return Jc(Kc(t.visibleWrites,o),i.getNode().getImmediateChild(n));return null}(t.writeTree,t.treePath,e,n)}function du(t,e){return hu(Il(t.treePath,e),t.writeTree)}function hu(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;Ni("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Ni(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const o=i.type;if("child_added"===e&&"child_removed"===o)this.changeMap.set(n,gc(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===o)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===o)this.changeMap.set(n,mc(n,i.oldSnap));else if("child_changed"===e&&"child_added"===o)this.changeMap.set(n,pc(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==o)throw Si("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,gc(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}};class mu{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Pc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uu(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Uc(this.viewCache_),o=cu(this.writes_,i,e,1,n,t);return 0===o.length?null:o[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e,n,i,o){const r=new fu;let s,a;if(n.type===Nc.OVERWRITE){const l=n;l.source.fromUser?s=bu(t,e,l.path,l.snap,i,o,r):(Ni(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!El(l.path),s=vu(t,e,l.path,l.snap,i,o,a,r))}else if(n.type===Nc.MERGE){const l=n;l.source.fromUser?s=function(t,e,n,i,o,r,s){let a=e;return i.foreach(((i,l)=>{const c=Il(n,i);wu(e,bl(c))&&(a=bu(t,a,c,l,o,r,s))})),i.foreach(((i,l)=>{const c=Il(n,i);wu(e,bl(c))||(a=bu(t,a,c,l,o,r,s))})),a}(t,e,l.path,l.children,i,o,r):(Ni(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),s=xu(t,e,l.path,l.children,i,o,a,r))}else if(n.type===Nc.ACK_USER_WRITE){const a=n;s=a.revert?function(t,e,n,i,o,r){let s;if(null!=lu(i,n))return e;{const a=new mu(i,e,o),l=e.eventCache.getNode();let c;if(El(n)||".priority"===bl(n)){let n;if(e.serverCache.isFullyInitialized())n=ru(i,Uc(e));else{const t=e.serverCache.getNode();Ni(t instanceof ac,"serverChildren would be complete if leaf node"),n=su(i,t)}c=t.filter.updateFullNode(l,n,r)}else{const o=bl(n);let u=uu(i,o,e.serverCache);null==u&&e.serverCache.isCompleteForChild(o)&&(u=l.getImmediateChild(o)),c=null!=u?t.filter.updateChild(l,o,u,_l(n),a,r):e.eventCache.getNode().hasChild(o)?t.filter.updateChild(l,o,ac.EMPTY_NODE,_l(n),a,r):l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=ru(i,Uc(e)),s.isLeafNode()&&(c=t.filter.updateFullNode(c,s,r)))}return s=e.serverCache.isFullyInitialized()||null!=lu(i,vl()),Mc(e,c,s,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,a.path,i,o,r):function(t,e,n,i,o,r,s){if(null!=lu(o,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(El(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return vu(t,e,n,l.getNode().getChild(n),o,r,a,s);if(El(n)){let i=new jc(null);return l.getNode().forEachChild(zl,((t,e)=>{i=i.set(new yl(t),e)})),xu(t,e,n,i,o,r,a,s)}return e}{let c=new jc(null);return i.foreach(((t,e)=>{const i=Il(n,t);l.isCompleteForPath(i)&&(c=c.set(t,l.getNode().getChild(i)))})),xu(t,e,n,c,o,r,a,s)}}(t,e,a.path,a.affectedTree,i,o,r)}else{if(n.type!==Nc.LISTEN_COMPLETE)throw Si("Unknown operation type: "+n.type);s=function(t,e,n,i,o){const r=e.serverCache,s=Fc(e,r.getNode(),r.isFullyInitialized()||El(n),r.isFiltered());return yu(t,s,n,i,pu,o)}(t,e,n.path,i,r)}const l=r.getChanges();return function(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Bc(t);(n.length>0||!t.eventCache.isFullyInitialized()||o&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(fc(Bc(e)))}}(e,s,l),{viewCache:s,changes:l}}function yu(t,e,n,i,o,r){const s=e.eventCache;if(null!=lu(i,n))return e;{let a,l;if(El(n))if(Ni(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=Uc(e),o=su(i,n instanceof ac?n:ac.EMPTY_NODE);a=t.filter.updateFullNode(e.eventCache.getNode(),o,r)}else{const n=ru(i,Uc(e));a=t.filter.updateFullNode(e.eventCache.getNode(),n,r)}else{const c=bl(n);if(".priority"===c){Ni(1===wl(n),"Can't have a priority with additional path components");const o=s.getNode();l=e.serverCache.getNode();const r=au(i,n,o,l);a=null!=r?t.filter.updatePriority(o,r):s.getNode()}else{const u=_l(n);let d;if(s.isCompleteForChild(c)){l=e.serverCache.getNode();const t=au(i,n,s.getNode(),l);d=null!=t?s.getNode().getImmediateChild(c).updateChild(u,t):s.getNode().getImmediateChild(c)}else d=uu(i,c,e.serverCache);a=null!=d?t.filter.updateChild(s.getNode(),c,d,u,o,r):s.getNode()}}return Mc(e,a,s.isFullyInitialized()||El(n),t.filter.filtersNodes())}}function vu(t,e,n,i,o,r,s,a){const l=e.serverCache;let c;const u=s?t.filter:t.filter.getIndexedFilter();if(El(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),t,null)}else{const t=bl(n);if(!l.isCompleteForPath(n)&&wl(n)>1)return e;const o=_l(n),r=l.getNode().getImmediateChild(t).updateChild(o,i);c=".priority"===t?u.updatePriority(l.getNode(),r):u.updateChild(l.getNode(),t,r,o,pu,null)}const d=Fc(e,c,l.isFullyInitialized()||El(n),u.filtersNodes());return yu(t,d,n,o,new mu(o,d,r),a)}function bu(t,e,n,i,o,r,s){const a=e.eventCache;let l,c;const u=new mu(o,e,r);if(El(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,s),l=Mc(e,c,!0,t.filter.filtersNodes());else{const o=bl(n);if(".priority"===o)c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Mc(e,c,a.isFullyInitialized(),a.isFiltered());else{const r=_l(n),c=a.getNode().getImmediateChild(o);let d;if(El(r))d=i;else{const t=u.getCompleteChild(o);d=null!=t?".priority"===xl(r)&&t.getChild(kl(r)).isEmpty()?t:t.updateChild(r,i):ac.EMPTY_NODE}if(c.equals(d))l=e;else{l=Mc(e,t.filter.updateChild(a.getNode(),o,d,r,u,s),a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function wu(t,e){return t.eventCache.isCompleteForChild(e)}function _u(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function xu(t,e,n,i,o,r,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,c=e;l=El(n)?i:new jc(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=_u(0,e.serverCache.getNode().getImmediateChild(n),i);c=vu(t,c,new yl(n),l,o,r,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=_u(0,e.serverCache.getNode().getImmediateChild(n),i);c=vu(t,c,new yl(n),l,o,r,s,a)}})),c}function Cu(t,e){const n=Uc(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!El(e)&&!n.getImmediateChild(bl(e)).isEmpty())?n.getChild(e):null}function ku(t,e,n,i){e.type===Nc.MERGE&&null!==e.source.queryId&&(Ni(Uc(t.viewCache_),"We should always have a full cache before handling merges"),Ni(Bc(t.viewCache_),"Missing event cache, even though we have a server cache"));const o=t.viewCache_,r=gu(t.processor_,o,e,n,i);var s,a;return s=t.processor_,a=r.viewCache,Ni(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),Ni(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),Ni(r.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Iu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Iu(t,e,n,i){const o=i?[i]:t.eventRegistrations_;return function(t,e,n,i){const o=[],r=[];return e.forEach((e=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&r.push((n=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:n}))})),Lc(t,o,"child_removed",e,i,n),Lc(t,o,"child_added",e,i,n),Lc(t,o,"child_moved",r,i,n),Lc(t,o,"child_changed",e,i,n),Lc(t,o,"value",e,i,n),o}(t.eventGenerator_,e,n,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu,Nu;function Su(t,e,n,i){const o=e.source.queryId;if(null!==o){const r=t.views.get(o);return Ni(null!=r,"SyncTree gave us an op for an invalid query."),ku(r,e,n,i)}{let o=[];for(const r of t.views.values())o=o.concat(ku(r,e,n,i));return o}}function Tu(t,e){let n=null;for(const i of t.views.values())n=n||Cu(i,e);return n}class Ou{constructor(t){this.listenProvider_=t,this.syncPointTree_=new jc(null),this.pendingWriteTree_={visibleWrites:Wc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ru(t,e,n,i,o){return function(t,e,n,i,o){Ni(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:o}),o&&(t.visibleWrites=Hc(t.visibleWrites,e,n)),t.lastWriteId=i}(t.pendingWriteTree_,e,n,i,o),o?Mu(t,new Rc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n)):[]}function Au(t,e,n=!1){const i=function(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}(t.pendingWriteTree_,e);if(tu(t.pendingWriteTree_,e)){let e=new jc(null);return null!=i.snap?e=e.set(vl(),!0):Ba(i.children,(t=>{e=e.set(new yl(t),!0)})),Mu(t,new Oc(i.path,e,n))}return[]}function Pu(t,e,n){return Mu(t,new Rc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,n))}function Lu(t,e,n,i){const o=Uu(t,i);if(null!=o){const i=zu(o),r=i.path,s=i.queryId,a=Nl(r,e);return ju(t,r,new Rc(Tc(s),a,n))}return[]}function Du(t,e,n){const i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=Tu(n,Nl(t,e));if(i)return i}));return ou(i,e,o,n,!0)}function Mu(t,e){return Fu(e,t.syncPointTree_,null,Zc(t.pendingWriteTree_,vl()))}function Fu(t,e,n,i){if(El(t.path))return Bu(t,e,n,i);{const o=e.get(vl());null==n&&null!=o&&(n=Tu(o,vl()));let r=[];const s=bl(t.path),a=t.operationForChild(s),l=e.children.get(s);if(l&&a){const t=n?n.getImmediateChild(s):null,e=du(i,s);r=r.concat(Fu(a,l,t,e))}return o&&(r=r.concat(Su(o,t,i,n))),r}}function Bu(t,e,n,i){const o=e.get(vl());null==n&&null!=o&&(n=Tu(o,vl()));let r=[];return e.children.inorderTraversal(((e,o)=>{const s=n?n.getImmediateChild(e):null,a=du(i,e),l=t.operationForChild(e);l&&(r=r.concat(Bu(l,o,s,a)))})),o&&(r=r.concat(Su(o,t,i,n))),r}function Uu(t,e){return t.tagToQueryMap.get(e)}function zu(t){const e=t.indexOf("$");return Ni(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new yl(t.substr(0,e))}}function ju(t,e,n){const i=t.syncPointTree_.get(e);Ni(i,"Missing sync point for query tag that we're tracking");return Su(i,n,Zc(t.pendingWriteTree_,e),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wu{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new Wu(e)}node(){return this.node_}}class Hu{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=Il(this.path_,t);return new Hu(this.syncTree_,e)}node(){return Du(this.syncTree_,this.path_)}}const qu=function(t){return(t=t||{}).timestamp=t.timestamp||(new Date).getTime(),t},$u=function(t,e,n){return t&&"object"==typeof t?(Ni(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?Xu(t[".sv"],e,n):"object"==typeof t[".sv"]?Vu(t[".sv"],e):void Ni(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Xu=function(t,e,n){if("timestamp"===t)return n.timestamp;Ni(!1,"Unexpected server value: "+t)},Vu=function(t,e,n){t.hasOwnProperty("increment")||Ni(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&Ni(!1,"Unexpected increment value: "+i);const o=e.node();if(Ni(null!=o,"Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const r=o.getValue();return"number"!=typeof r?i:r+i},Yu=function(t,e,n,i){return Gu(e,new Hu(n,t),i)},Ku=function(t,e,n){return Gu(t,new Wu(e),n)};function Gu(t,e,n){const i=t.getPriority().val(),o=$u(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const i=t,r=$u(i.getValue(),e,n);return r!==i.getValue()||o!==i.getPriority().val()?new Ql(r,uc(o)):t}{const i=t;return r=i,o!==i.getPriority().val()&&(r=r.updatePriority(new Ql(o))),i.forEachChild(Zl,((t,i)=>{const o=Gu(i,e.getImmediateChild(t),n);o!==i&&(r=r.updateImmediateChild(t,o))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Qu(t,e){let n=e instanceof yl?e:new yl(e),i=t,o=bl(n);for(;null!==o;){const t=co(i.node.children,o)||{children:{},childCount:0};i=new Ju(o,i,t),n=_l(n),o=bl(n)}return i}function Zu(t){return t.node.value}function td(t,e){t.node.value=e,rd(t)}function ed(t){return t.node.childCount>0}function nd(t,e){Ba(t.node.children,((n,i)=>{e(new Ju(n,t,i))}))}function id(t,e,n,i){n&&!i&&e(t),nd(t,(t=>{id(t,e,!0,i)})),n&&i&&e(t)}function od(t){return new yl(null===t.parent?t.name:od(t.parent)+"/"+t.name)}function rd(t){null!==t.parent&&function(t,e,n){const i=function(t){return void 0===Zu(t)&&!ed(t)}(n),o=lo(t.node.children,e);i&&o?(delete t.node.children[e],t.node.childCount--,rd(t)):i||o||(t.node.children[e]=n.node,t.node.childCount++,rd(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.parent,t.name,t)}const sd=/[\[\].#$\/\u0000-\u001F\u007F]/,ad=/[\[\].#$\u0000-\u001F\u007F]/,ld=10485760,cd=function(t){return"string"==typeof t&&0!==t.length&&!sd.test(t)},ud=function(t){return"string"==typeof t&&0!==t.length&&!ad.test(t)},dd=function(t,e,n){const i=n instanceof yl?new Ol(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Al(i));if("function"==typeof e)throw new Error(t+"contains a function "+Al(i)+" with contents = "+e.toString());if(Oa(e))throw new Error(t+"contains "+e.toString()+" "+Al(i));if("string"==typeof e&&e.length>3495253.3333333335&&ko(e)>ld)throw new Error(t+"contains a string greater than "+ld+" utf8 bytes "+Al(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let n=!1,o=!1;if(Ba(e,((e,r)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(o=!0,!cd(e)))throw new Error(t+" contains an invalid key ("+e+") "+Al(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=e,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=ko(a),Rl(s),dd(t,r,i),function(t){const e=t.parts_.pop();t.byteLength_-=ko(e),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),n&&o)throw new Error(t+' contains ".value" child '+Al(i)+" in addition to actual children.")}},hd=function(t,e){const n=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!cd(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ud(t)}(n))throw new Error(xo(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pd(t,e){let n=null;for(let i=0;i<e.length;i++){const o=e[i],r=o.getPath();null===n||Sl(r,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(o)}n&&t.eventLists_.push(n)}function md(t,e,n){pd(t,n),gd(t,(t=>Tl(t,e)||Tl(e,t)))}function gd(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const o=t.eventLists_[i];if(o){e(o.path)?(yd(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function yd(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();xa&&Ia("event: "+n.toString()),Wa(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="repo_interrupt",bd=25;class wd{constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xc(),this.transactionQueueTree_=new Ju,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _d(t,e,n){if(t.stats_=il(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new wc(t.repoInfo_,((e,n,i,o)=>{kd(t,e,n,i,o)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Id(t,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{oo(n)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new Dl(t.repoInfo_,e,((e,n,i,o)=>{kd(t,e,n,i,o)}),(e=>{Id(t,e)}),(e=>{!function(t,e){Ba(e,((e,n)=>{Ed(t,e,n)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const n=t.toString();return nl[n]||(nl[n]=e()),nl[n]}(t.repoInfo_,(()=>new Ec(t.stats_,t.server_))),t.infoData_=new _c,t.infoSyncTree_=new Ou({startListening:(e,n,i,o)=>{let r=[];const s=t.infoData_.getNode(e._path);return s.isEmpty()||(r=Pu(t.infoSyncTree_,e._path,s),setTimeout((()=>{o("ok")}),0)),r},stopListening:()=>{}}),Ed(t,"connected",!1),t.serverSyncTree_=new Ou({startListening:(e,n,i,o)=>(t.server_.listen(e,i,n,((n,i)=>{const r=o(n,i);md(t.eventQueue_,e._path,r)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function xd(t){const e=t.infoData_.getNode(new yl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function Cd(t){return qu({timestamp:xd(t)})}function kd(t,e,n,i,o){t.dataUpdateCount++;const r=new yl(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(o)if(i){const e=ho(n,(t=>uc(t)));s=function(t,e,n,i){const o=Uu(t,i);if(o){const i=zu(o),r=i.path,s=i.queryId,a=Nl(r,e),l=jc.fromObject(n);return ju(t,r,new Ac(Tc(s),a,l))}return[]}(t.serverSyncTree_,r,e,o)}else{const e=uc(n);s=Lu(t.serverSyncTree_,r,e,o)}else if(i){const e=ho(n,(t=>uc(t)));s=function(t,e,n){const i=jc.fromObject(n);return Mu(t,new Ac({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(t.serverSyncTree_,r,e)}else{const e=uc(n);s=Pu(t.serverSyncTree_,r,e)}let a=r;s.length>0&&(a=Ad(t,r)),md(t.eventQueue_,a,s)}function Id(t,e){Ed(t,"connected",e),!1===e&&function(t){Td(t,"onDisconnectEvents");const e=Cd(t),n=xc();kc(t.onDisconnect_,vl(),((i,o)=>{const r=Yu(i,o,t.serverSyncTree_,e);Cc(n,i,r)}));let i=[];kc(n,vl(),((e,n)=>{i=i.concat(Pu(t.serverSyncTree_,e,n));const o=Fd(t,e);Ad(t,o)})),t.onDisconnect_=xc(),md(t.eventQueue_,vl(),i)}(t)}function Ed(t,e,n){const i=new yl("/.info/"+e),o=uc(n);t.infoData_.updateSnapshot(i,o);const r=Pu(t.infoSyncTree_,i,o);md(t.eventQueue_,i,r)}function Nd(t){return t.nextWriteId_++}function Sd(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vd)}function Td(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ia(n,...e)}function Od(t,e,n){return Du(t.serverSyncTree_,e,n)||ac.EMPTY_NODE}function Rd(t,e=t.transactionQueueTree_){if(e||Md(t,e),Zu(e)){const n=Ld(t,e);Ni(n.length>0,"Sending zero length transaction queue");n.every((t=>0===t.status))&&function(t,e,n){const i=n.map((t=>t.currentWriteId)),o=Od(t,e,i);let r=o;const s=o.hash();for(let t=0;t<n.length;t++){const i=n[t];Ni(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const o=Nl(e,i.path);r=r.updateChild(o,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,(i=>{Td(t,"transaction put response",{path:l.toString(),status:i});let o=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,o=o.concat(Au(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Md(t,Qu(t.transactionQueueTree_,e)),Rd(t,t.transactionQueueTree_),md(t.eventQueue_,e,o);for(let t=0;t<i.length;t++)Wa(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{Ta("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}Ad(t,e)}}),s)}(t,od(e),n)}else ed(e)&&nd(e,(e=>{Rd(t,e)}))}function Ad(t,e){const n=Pd(t,e),i=od(n);return function(t,e,n){if(0===e.length)return;const i=[];let o=[];const r=e.filter((t=>0===t.status)),s=r.map((t=>t.currentWriteId));for(let r=0;r<e.length;r++){const l=e[r],c=Nl(n,l.path);let u,d=!1;if(Ni(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,o=o.concat(Au(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=bd)d=!0,u="maxretry",o=o.concat(Au(t.serverSyncTree_,l.currentWriteId,!0));else{const n=Od(t,l.path,s);l.currentInputSnapshot=n;const i=e[r].update(n.val());if(void 0!==i){dd("transaction failed: Data returned ",i,l.path);let e=uc(i);"object"==typeof i&&null!=i&&lo(i,".priority")||(e=e.updatePriority(n.getPriority()));const r=l.currentWriteId,a=Cd(t),c=Ku(e,n,a);l.currentOutputSnapshotRaw=e,l.currentOutputSnapshotResolved=c,l.currentWriteId=Nd(t),s.splice(s.indexOf(r),1),o=o.concat(Ru(t.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),o=o.concat(Au(t.serverSyncTree_,r,!0))}else d=!0,u="nodata",o=o.concat(Au(t.serverSyncTree_,l.currentWriteId,!0))}md(t.eventQueue_,n,o),o=[],d&&(e[r].status=2,a=e[r].unwatcher,setTimeout(a,Math.floor(0)),e[r].onComplete&&("nodata"===u?i.push((()=>e[r].onComplete(null,!1,e[r].currentInputSnapshot))):i.push((()=>e[r].onComplete(new Error(u),!1,null)))))}var a;Md(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)Wa(i[t]);Rd(t,t.transactionQueueTree_)}(t,Ld(t,n),i),i}function Pd(t,e){let n,i=t.transactionQueueTree_;for(n=bl(e);null!==n&&void 0===Zu(i);)i=Qu(i,n),n=bl(e=_l(e));return i}function Ld(t,e){const n=[];return Dd(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function Dd(t,e,n){const i=Zu(e);if(i)for(let t=0;t<i.length;t++)n.push(i[t]);nd(e,(e=>{Dd(t,e,n)}))}function Md(t,e){const n=Zu(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,td(e,n.length>0?n:void 0)}nd(e,(e=>{Md(t,e)}))}function Fd(t,e){const n=od(Pd(t,e)),i=Qu(t.transactionQueueTree_,e);return function(t,e,n){let i=n?t:t.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{Bd(t,e)})),Bd(t,i),id(i,(e=>{Bd(t,e)})),n}function Bd(t,e){const n=Zu(e);if(n){const i=[];let o=[],r=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(Ni(r===e-1,"All SENT items should be at beginning of queue."),r=e,n[e].status=3,n[e].abortReason="set"):(Ni(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),o=o.concat(Au(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===r?td(e,void 0):n.length=r+1,md(t.eventQueue_,od(e),o);for(let t=0;t<i.length;t++)Wa(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=function(t,e){const n=zd(t),i=n.namespace;"firebase.com"===n.domain&&Sa(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Sa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ta("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const o="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Qa(n.host,n.secure,i,o,e,"",i!==n.subdomain),path:new yl(n.pathString)}},zd=function(t){let e="",n="",i="",o="",r="",s=!0,a="https",l=443;if("string"==typeof t){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");-1===u&&(u=t.length);let d=t.indexOf("?");-1===d&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(o=function(t){let e="";const n=t.split("/");for(let t=0;t<n.length;t++)if(n[t].length>0){let i=n[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(u,d)));const h=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ta(`Invalid query segment '${n}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:o,namespace:r}},jd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let t=0;const e=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wd{constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}get key(){return El(this._path)?null:xl(this._path)}get ref(){return new Hd(this._repo,this._path)}get _queryIdentifier(){const t=bc(this._queryParams),e=Ma(t);return"{}"===e?"default":e}get _queryObject(){return bc(this._queryParams)}isEqual(t){if(!((t=Oo(t))instanceof Wd))return!1;const e=this._repo===t._repo,n=Sl(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}(this._path)}}class Hd extends Wd{constructor(t,e){super(t,e,new yc,!1)}get parent(){const t=kl(this._path);return null===t?null:new Hd(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}}!function(t){Ni(!Eu,"__referenceConstructor has already been defined"),Eu=t}(Hd),function(t){Ni(!Nu,"__referenceConstructor has already been defined"),Nu=t}(Hd);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qd="FIREBASE_DATABASE_EMULATOR_HOST",$d={};let Xd=!1;function Vd(t,e,n,i,o){let r=i||t.options.databaseURL;void 0===r&&(t.options.projectId||Sa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ia("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=Ud(r,o),c=l.repoInfo;void 0!==di&&di.env&&(a=di.env[qd]),a?(s=!0,r=`http://${a}?ns=${c.namespace}`,l=Ud(r,o),c=l.repoInfo):s=!l.repoInfo.secure;const u=o&&s?new Xa(Xa.OWNER):new $a(t.name,t.options,e);hd("Invalid Firebase Database URL",l),El(l.path)||Sa("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(t,e,n,i){let o=$d[e.name];o||(o={},$d[e.name]=o);let r=o[t.toURLString()];r&&Sa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new wd(t,Xd,n,i),o[t.toURLString()]=r,r}(c,t,u,new qa(t.name,n));return new Yd(d,t)}class Yd{constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_d(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hd(this._repo,vl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const n=$d[e];n&&n[t.key]===t||Sa(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Sd(t),delete n[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&Sa("Cannot call "+t+" on a deleted database.")}}Dl.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Dl.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){ha=wr,gr(new Ro("database",((t,{instanceIdentifier:e})=>Vd(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),Cr(ua,da,t),Cr(ua,da,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function Kd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}Object.create;Object.create;function Gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jd=Gd,Qd=new eo("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Zd=new Wo("@firebase/auth");function th(t,...e){Zd.logLevel<=Mo.ERROR&&Zd.error(`Auth (${wr}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,...e){throw oh(t,...e)}function nh(t,...e){return oh(t,...e)}function ih(t,e,n){const i=Object.assign(Object.assign({},Jd()),{[e]:n});return new eo("auth","Firebase",i).create(e,{appName:t.name})}function oh(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Qd.create(t,...e)}function rh(t,e,...n){if(!t)throw oh(e,...n)}function sh(t){const e="INTERNAL ASSERTION FAILED: "+t;throw th(e),new Error(e)}function ah(t,e){t||sh(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function ch(){return"http:"===uh()||"https:"===uh()}function uh(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dh{constructor(t,e){this.shortDelay=t,this.longDelay=e,ah(e>t,"Short delay should be less than long delay!"),this.isMobile=Xi()||Yi()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ch()||Vi()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e){ah(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void sh("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void sh("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void sh("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},mh=new dh(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yh(t,e,n,i,o={}){return vh(t,o,(async()=>{let o={},r={};i&&("GET"===e?r=i:o={body:JSON.stringify(i)});const s=mo(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),fh.fetch()(wh(t,t.config.apiHost,n,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},o))}))}async function vh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ph),e);try{const e=new _h(t),o=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw xh(t,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const e=o.ok?r.errorMessage:r.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xh(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw xh(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw xh(t,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ih(t,a,s);eh(t,a)}}catch(e){if(e instanceof to)throw e;eh(t,"network-request-failed",{message:String(e)})}}async function bh(t,e,n,i,o={}){const r=await yh(t,e,n,i,o);return"mfaPendingCredential"in r&&eh(t,"multi-factor-auth-required",{_serverResponse:r}),r}function wh(t,e,n,i){const o=`${e}${n}?${i}`;return t.config.emulator?hh(t.config,o):`${t.config.apiScheme}://${o}`}class _h{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(nh(this.auth,"network-request-failed"))),mh.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function xh(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=nh(t,e,i);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ch(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){return 1e3*Number(t)}function Ih(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return th("JWT malformed, contained fewer than 3 sections"),null;try{const t=Li(n);return t?JSON.parse(t):(th("Failed to decode base64 JWT payload"),null)}catch(t){return th("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Eh(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof to&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Nh{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ch(this.lastLoginAt),this.creationTime=Ch(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t){var e;const n=t.auth,i=await t.getIdToken(),o=await Eh(t,async function(t,e){return yh(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));rh(null==o?void 0:o.users.length,n,"internal-error");const r=o.users[0];t._notifyReloadListener(r);const s=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=Kd(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=s,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,d=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sh(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){rh(t.idToken,"internal-error"),rh(void 0!==t.idToken,"internal-error"),rh(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ih(t);return rh(e,"internal-error"),rh(void 0!==e.exp,"internal-error"),rh(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return rh(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:o}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await vh(t,{},(async()=>{const n=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,r=wh(t,i,"/v1/token",`key=${o}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",fh.fetch()(r,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:o}=e,r=new Oh;return n&&(rh("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(rh("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),o&&(rh("number"==typeof o,"internal-error",{appName:t}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Oh,this.toJSON())}_performRefresh(){return sh("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e){rh("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ah{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,o=Kd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Sh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await Eh(this,this.stsTokenManager.getToken(this.auth,t));return rh(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Oo(t),i=await n.getIdToken(e),o=Ih(i);rh(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const r="object"==typeof o.firebase?o.firebase:void 0,s=null==r?void 0:r.sign_in_provider;return{claims:o,token:i,authTime:Ch(kh(o.auth_time)),issuedAtTime:Ch(kh(o.iat)),expirationTime:Ch(kh(o.exp)),signInProvider:s||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Oo(t);await Th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(rh(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ah(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){rh(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Th(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Eh(this,async function(t,e){return yh(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,o,r,s,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,d=null!==(i=e.email)&&void 0!==i?i:void 0,h=null!==(o=e.phoneNumber)&&void 0!==o?o:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:x}=e;rh(v&&x,t,"internal-error");const C=Oh.fromJSON(this.name,x);rh("string"==typeof v,t,"internal-error"),Rh(u,t.name),Rh(d,t.name),rh("boolean"==typeof b,t,"internal-error"),rh("boolean"==typeof w,t,"internal-error"),Rh(h,t.name),Rh(f,t.name),Rh(p,t.name),Rh(m,t.name),Rh(g,t.name),Rh(y,t.name);const k=new Ah({uid:v,auth:t,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:C,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(k.providerData=_.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const i=new Oh;i.updateFromServerResponse(e);const o=new Ah({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Th(o),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new Map;function Lh(t){ah(t instanceof Function,"Expected a class definition");let e=Ph.get(t);return e?(ah(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ph.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Dh.type="NONE";const Mh=Dh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e,n){return`firebase:${t}:${e}:${n}`}class Bh{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=Fh(this.userKey,i.apiKey,o),this.fullPersistenceKey=Fh("persistence",i.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ah._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Bh(Lh(Mh),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let o=i[0]||Lh(Mh);const r=Fh(n,t.config.apiKey,t.name);let s=null;for(const n of e)try{const e=await n._get(r);if(e){const i=Ah._fromJSON(t,e);n!==o&&(s=i),o=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(r,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==o)try{await t._remove(r)}catch(t){}}))),new Bh(o,t,n)):new Bh(o,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($h(e))return"Blackberry";if(Xh(e))return"Webos";if(jh(e))return"Safari";if((e.includes("chrome/")||Wh(e))&&!e.includes("edge/"))return"Chrome";if(qh(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function zh(t=$i()){return/firefox\//i.test(t)}function jh(t=$i()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wh(t=$i()){return/crios\//i.test(t)}function Hh(t=$i()){return/iemobile/i.test(t)}function qh(t=$i()){return/android/i.test(t)}function $h(t=$i()){return/blackberry/i.test(t)}function Xh(t=$i()){return/webos/i.test(t)}function Vh(t=$i()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yh(){return Ki()&&10===document.documentMode}function Kh(t=$i()){return Vh(t)||qh(t)||Xh(t)||$h(t)||/windows phone/i.test(t)||Hh(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gh(t,e=[]){let n;switch(t){case"Browser":n=Uh($i());break;case"Worker":n=`${Uh($i())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t,e){return yh(t,"GET","/v2/recaptchaConfig",gh(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){return void 0!==t&&void 0!==t.enterprise}class Zh{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){return new Promise(((e,n)=>{const i=document.createElement("script");var o,r;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=nh("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(o=document.getElementsByTagName("head"))||void 0===o?void 0:o[0])&&void 0!==r?r:document).appendChild(i)}))}function ef(t){return`__${t}${Math.floor(1e6*Math.random())}`}class nf{constructor(t){this.type="recaptcha-enterprise",this.auth=af(t)}async verify(t="verify",e=!1){function n(e,n,i){const o=window.grecaptcha;Qh(o)?o.enterprise.ready((()=>{try{o.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((t=>{i(t)}))}catch(t){i(t)}})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Jh(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Zh(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((o=>{if(!e&&Qh(window.grecaptcha))n(o,t,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));tf("https://www.google.com/recaptcha/enterprise.js?render="+o).then((()=>{n(o,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function of(t,e,n,i=!1){const o=new nf(t);let r;try{r=await o.verify(n)}catch(t){r=await o.verify(n,!0)}const s=Object.assign({},e);return i?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new rf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Lh(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Bh.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==r||!(null==s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return rh(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Th(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Oo(t):null;return e&&rh(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&rh(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Lh(t))}))}async initializeRecaptchaConfig(){const t=await Jh(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Zh(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new nf(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new eo("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Lh(t)||this._popupRedirectResolver;rh(e,this,"argument-error"),this.redirectPersistenceManager=await Bh.create(this,[Lh(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const o="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return rh(r,this,"internal-error"),r.then((()=>o(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return rh(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){Zd.logLevel<=Mo.WARN&&Zd.warn(`Auth (${wr}): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}function af(t){return Oo(t)}class lf{constructor(t){this.auth=t,this.observer=null,this.addObserver=bo((t=>this.observer=t))}get next(){return rh(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e,n){const i=af(t);rh(i._canInitEmulator,i,"emulator-config-failed"),rh(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!!(null==n?void 0:n.disableWarnings),r=uf(e),{host:s,port:a}=function(t){const e=uf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const t=o[1];return{host:t,port:df(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:df(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function uf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class hf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return sh("not implemented")}_getIdTokenResponse(t){return sh("not implemented")}_linkToIdToken(t,e){return sh("not implemented")}_getReauthenticationResolver(t){return sh("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(t,e){return yh(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pf(t,e){return bh(t,"POST","/v1/accounts:signInWithPassword",gh(t,e))}async function mf(t,e){return yh(t,"POST","/v1/accounts:sendOobCode",gh(t,e))}async function gf(t,e){return mf(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yf extends hf{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new yf(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new yf(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await of(t,n,"signInWithPassword");return pf(t,e)}return pf(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await of(t,n,"signInWithPassword");return pf(t,e)}return Promise.reject(e)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return bh(t,"POST","/v1/accounts:signInWithEmailLink",gh(t,e))}(t,{email:this._email,oobCode:this._password});default:eh(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return ff(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return bh(t,"POST","/v1/accounts:signInWithEmailLink",gh(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:eh(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(t,e){return bh(t,"POST","/v1/accounts:signInWithIdp",gh(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new bf(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):eh("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,o=Kd(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new bf(n,i);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(t){return vf(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,vf(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,vf(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=mo(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _f extends hf{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new _f({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new _f({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return bh(t,"POST","/v1/accounts:signInWithPhoneNumber",gh(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await bh(t,"POST","/v1/accounts:signInWithPhoneNumber",gh(t,e));if(n.temporaryProof)throw xh(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return bh(t,"POST","/v1/accounts:signInWithPhoneNumber",gh(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),wf)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:o}=t;return n||e||i||o?new _f({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){var e,n,i,o,r,s;const a=go(yo(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);rh(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(o=a.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(t){const e=function(t){const e=go(yo(t)).link,n=e?go(yo(e)).deep_link_id:null,i=go(yo(t)).deep_link_id;return(i?go(yo(i)).link:null)||i||n||e||t}(t);try{return new xf(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cf{constructor(){this.providerId=Cf.PROVIDER_ID}static credential(t,e){return yf._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=xf.parseLink(e);return rh(n,"argument-error"),yf._fromEmailAndCode(t,n.code,n.tenantId)}}Cf.PROVIDER_ID="password",Cf.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Cf.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends kf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ef extends If{constructor(){super("facebook.com")}static credential(t){return bf._fromParams({providerId:Ef.PROVIDER_ID,signInMethod:Ef.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ef.credentialFromTaggedObject(t)}static credentialFromError(t){return Ef.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ef.credential(t.oauthAccessToken)}catch(t){return null}}}Ef.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ef.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf extends If{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return bf._fromParams({providerId:Nf.PROVIDER_ID,signInMethod:Nf.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Nf.credentialFromTaggedObject(t)}static credentialFromError(t){return Nf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Nf.credential(e,n)}catch(t){return null}}}Nf.GOOGLE_SIGN_IN_METHOD="google.com",Nf.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sf extends If{constructor(){super("github.com")}static credential(t){return bf._fromParams({providerId:Sf.PROVIDER_ID,signInMethod:Sf.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sf.credentialFromTaggedObject(t)}static credentialFromError(t){return Sf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Sf.credential(t.oauthAccessToken)}catch(t){return null}}}Sf.GITHUB_SIGN_IN_METHOD="github.com",Sf.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tf extends If{constructor(){super("twitter.com")}static credential(t,e){return bf._fromParams({providerId:Tf.PROVIDER_ID,signInMethod:Tf.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Tf.credentialFromTaggedObject(t)}static credentialFromError(t){return Tf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Tf.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Of(t,e){return bh(t,"POST","/v1/accounts:signUp",gh(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tf.TWITTER_SIGN_IN_METHOD="twitter.com",Tf.PROVIDER_ID="twitter.com";class Rf{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const o=await Ah._fromIdTokenResponse(t,n,i),r=Af(n);return new Rf({user:o,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Af(n);return new Rf({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pf extends to{constructor(t,e,n,i){var o;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Pf.prototype),this.customData={appName:t.name,tenantId:null!==(o=t.tenantId)&&void 0!==o?o:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Pf(t,e,n,i)}}function Lf(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pf._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(t,e,n=!1){const i=await Eh(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rf._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mf(t,e,n=!1){const{auth:i}=t,o="reauthenticate";try{const r=await Eh(t,Lf(i,o,e,t),n);rh(r.idToken,i,"internal-error");const s=Ih(r.idToken);rh(s,i,"internal-error");const{sub:a}=s;return rh(t.uid===a,i,"user-mismatch"),Rf._forOperation(t,o,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&eh(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(t,e,n=!1){const i="signIn",o=await Lf(t,i,e),r=await Rf._fromIdTokenResponse(t,i,o);return n||await t._updateCurrentUser(r.user),r}async function Bf(t,e){return Ff(af(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uf(t,e,n){var i;rh((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),rh(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(rh(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(rh(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(t,e,n){var i;const o=af(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(null===(i=o._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await of(o,r,"getOobCode",!0);n&&Uf(o,t,n),await gf(o,t)}else n&&Uf(o,r,n),await gf(o,r).catch((async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const t=await of(o,r,"getOobCode",!0);n&&Uf(o,t,n),await gf(o,t)}}))}async function jf(t,e,n){var i;const o=af(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(i=o._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await of(o,r,"signUpPassword");s=Of(o,t)}else s=Of(o,r).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await of(o,r,"signUpPassword");return Of(o,t)}return Promise.reject(t)}));const a=await s.catch((t=>Promise.reject(t))),l=await Rf._fromIdTokenResponse(o,"signIn",a);return await o._updateCurrentUser(l.user),l}function Wf(t,e,n){return Bf(Oo(t),Cf.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e){const n=Oo(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Uf(n.auth,i,e);const{email:o}=await async function(t,e){return mf(t,e)}(n.auth,i);o!==t.email&&await t.reload()}function qf(t){return Oo(t).signOut()}new WeakMap;const $f="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem($f,"1"),this.storage.removeItem($f),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends Xf{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=$i();return jh(t)||Vh(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Kh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},o=this.storage.getItem(n);Yh()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Vf.type="LOCAL";const Yf=Vf;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends Xf{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Kf.type="SESSION";const Gf=Kf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Jf(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:o}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(r).map((async t=>t(e.origin,o))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qf(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jf.receivers=[];class Zf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,r;return new Promise(((s,a)=>{const l=Qf("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(e.data.response);break;default:clearTimeout(c),clearTimeout(o),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ep(){return void 0!==tp().WorkerGlobalScope&&"function"==typeof tp().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const np="firebaseLocalStorageDb",ip="firebaseLocalStorage",op="fbase_key";class rp{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function sp(t,e){return t.transaction([ip],e?"readwrite":"readonly").objectStore(ip)}function ap(){const t=indexedDB.open(np,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ip,{keyPath:op})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ip)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(np);return new rp(t).toPromise()}(),e(await ap()))}))}))}async function lp(t,e,n){const i=sp(t,!0).put({[op]:e,value:n});return new rp(i).toPromise()}function cp(t,e){const n=sp(t,!0).delete(e);return new rp(n).toPromise()}class up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ap()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jf._getInstance(ep()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Zf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ap();return await lp(t,$f,"1"),await cp(t,$f),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>lp(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=sp(t,!1).get(e),i=await new rp(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>cp(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=sp(t,!1).getAll();return new rp(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}up.type="LOCAL";const dp=up;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ef("rcb"),new dh(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hp="recaptcha";async function fp(t,e,n){var i;const o=await n.verify();try{let r;if(rh("string"==typeof o,t,"argument-error"),rh(n.type===hp,t,"argument-error"),r="string"==typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){rh("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return yh(t,"POST","/v2/accounts/mfaEnrollment:start",gh(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{rh("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;rh(n,t,"missing-multi-factor-info");const s=await function(t,e){return yh(t,"POST","/v2/accounts/mfaSignIn:start",gh(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return yh(t,"POST","/v1/accounts:sendVerificationCode",gh(t,e))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:o});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pp{constructor(t){this.providerId=pp.PROVIDER_ID,this.auth=af(t)}verifyPhoneNumber(t,e){return fp(this.auth,t,Oo(e))}static credential(t,e){return _f._fromVerification(t,e)}static credentialFromResult(t){const e=t;return pp.credentialFromTaggedObject(e)}static credentialFromError(t){return pp.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?_f._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mp(t,e){return e?Lh(e):(rh(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pp.PROVIDER_ID="phone",pp.PHONE_SIGN_IN_METHOD="phone";class gp extends hf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vf(t,this._buildIdpRequest())}_linkToIdToken(t,e){return vf(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return vf(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function yp(t){return Ff(t.auth,new gp(t),t.bypassAuthState)}function vp(t){const{auth:e,user:n}=t;return rh(n,e,"internal-error"),Mf(n,new gp(t),t.bypassAuthState)}async function bp(t){const{auth:e,user:n}=t;return rh(n,e,"internal-error"),Df(n,new gp(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,e,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:o,error:r,type:s}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yp;case"linkViaPopup":case"linkViaRedirect":return bp;case"reauthViaPopup":case"reauthViaRedirect":return vp;default:eh(this.auth,"internal-error")}}resolve(t){ah(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ah(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new dh(2e3,1e4);class xp extends wp{constructor(t,e,n,i,o){super(t,e,i,o),this.provider=n,this.authWindow=null,this.pollId=null,xp.currentPopupAction&&xp.currentPopupAction.cancel(),xp.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return rh(t,this.auth,"internal-error"),t}async onExecution(){ah(1===this.filter.length,"Popup operations only handle one event");const t=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(nh(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(nh(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xp.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(nh(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,_p.get())};t()}}xp.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cp="pendingRedirect",kp=new Map;class Ip extends wp{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=kp.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Sp(e),i=Np(t);if(!await i._isAvailable())return!1;const o="true"===await i._get(n);return await i._remove(n),o}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}kp.set(this.auth._key(),t)}return this.bypassAuthState||kp.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ep(t,e){kp.set(t._key(),e)}function Np(t){return Lh(t._redirectPersistence)}function Sp(t){return Fh(Cp,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(t,e,n=!1){const i=af(t),o=mp(i,e),r=new Ip(i,o,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}class Op{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ap(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ap(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(nh(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rp(t))}saveEventToCache(t){this.cachedEventUids.add(Rp(t)),this.lastProcessedEventTime=Date.now()}}function Rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ap({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lp=/^https?/;async function Dp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return yh(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Mp(t))return}catch(t){}eh(t,"unauthorized-domain")}function Mp(t){const e=lh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return""===o.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!Lp.test(n))return!1;if(Pp.test(t))return i===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=new dh(3e4,6e4);function Bp(){const t=tp().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Up=null;function zp(t){return Up=Up||function(t){return new Promise(((e,n)=>{var i,o,r;function s(){Bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bp(),n(nh(t,"network-request-failed"))},timeout:Fp.get()})}if(null===(o=null===(i=tp().gapi)||void 0===i?void 0:i.iframes)||void 0===o?void 0:o.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=tp().gapi)||void 0===r?void 0:r.load)){const e=ef("iframefcb");return tp()[e]=()=>{gapi.load?s():n(nh(t,"network-request-failed"))},tf(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw Up=null,t}))}(t),Up}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new dh(5e3,15e3),Wp="__/auth/iframe",Hp="emulator/auth/iframe",qp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$p=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xp(t){const e=t.config;rh(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hh(e,Hp):`https://${t.config.authDomain}/${Wp}`,i={apiKey:e.apiKey,appName:t.name,v:wr},o=$p.get(t.config.apiHost);o&&(i.eid=o);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${mo(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Yp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Kp(t,e,n,i=500,o=600){const r=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vp),{width:i.toString(),height:o.toString(),top:r,left:s}),c=$i().toLowerCase();n&&(a=Wh(c)?"_blank":n),zh(c)&&(e=e||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=$i()){var e;return Vh(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Yp(null);const d=window.open(e||"",a,u);rh(d,t,"popup-blocked");try{d.focus()}catch(t){}return new Yp(d)}const Gp="__/auth/handler",Jp="emulator/auth/handler",Qp=encodeURIComponent("fac");async function Zp(t,e,n,i,o,r){rh(t.config.authDomain,t,"auth-domain-config-required"),rh(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:wr,eventId:o};if(e instanceof kf){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",uo(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))s[t]=e}if(e instanceof If){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const l=await t._getAppCheckToken(),c=l?`#${Qp}=${encodeURIComponent(l)}`:"";return`${function({config:t}){return t.emulator?hh(t,Jp):`https://${t.authDomain}/${Gp}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${mo(a).slice(1)}${c}`}const tm="webStorageSupport";const em=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gf,this._completeRedirectFn=Tp,this._overrideRedirectResult=Ep}async _openPopup(t,e,n,i){var o;ah(null===(o=this.eventManagers[t._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");return Kp(t,await Zp(t,e,n,lh(),i),Qf())}async _openRedirect(t,e,n,i){await this._originValidation(t);return function(t){tp().location.href=t}(await Zp(t,e,n,lh(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(ah(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await zp(t),n=tp().gapi;return rh(n,t,"internal-error"),e.open({where:document.body,url:Xp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qp,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const o=nh(t,"network-request-failed"),r=tp().setTimeout((()=>{i(o)}),jp.get());function s(){tp().clearTimeout(r),n(e)}e.ping(s).then(s,(()=>{i(o)}))}))))}(t),n=new Op(t);return e.register("authEvent",(e=>{rh(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(tm,{type:tm},(n=>{var i;const o=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[tm];void 0!==o&&e(!!o),eh(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Dp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Kh()||jh()||Vh()}};var nm="@firebase/auth",im="0.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class om{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){rh(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rm=Wi("authIdTokenMaxAge")||300;let sm=null;var am;am="Browser",gr(new Ro("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:r,authDomain:s}=n.options;rh(r&&!r.includes(":"),"invalid-api-key",{appName:n.name}),rh(!(null==s?void 0:s.includes(":")),"argument-error",{appName:n.name});const a={apiKey:r,authDomain:s,clientPlatform:am,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gh(am)},l=new sf(n,i,o,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Lh);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(l,e),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),gr(new Ro("auth-internal",(t=>(t=>new om(t))(af(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Cr(nm,im,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(am)),Cr(nm,im,"esm2017");const lm={forgotPass:document.querySelector("#forgott-pass"),signInForm:document.querySelector(".signIn__form"),headerSignInBtn:document.querySelector(".sign-in__button"),signInModal:document.querySelector(".signIn__modal"),signInBtn:document.querySelector("#signIn-form__button"),signUpBtn:document.querySelector("#signUp__button"),watched:document.querySelector("#watched"),queue:document.querySelector("#queue")},cm=m.create(lm.signInModal);lm.headerSignInBtn.addEventListener("click",(function(t){"Sign in"===document.querySelector(".header__nav-signIn").textContent&&cm.show();qf(dm)})),lm.signInForm.addEventListener("submit",(function(t){if(t.preventDefault(),dm.currentUser)qf(dm);else{let t=document.getElementById("email").value,n=document.getElementById("password").value;if(t.length<4)return void e(o).Notify.failure("Please enter an email address.",{position:"center-top"});if(n.length<4)return void e(o).Notify.failure("Please enter a password.",{position:"center-top"});Wf(dm,t,n).then((t=>{!1!==dm.currentUser.emailVerified?(alert("Все ок, заходим в акк"),cm.close()):e(o).Notify.failure("Verification letter received by mail!",{position:"center-top"})})).catch((function(t){var n=t.code,i=t.message;"auth/wrong-password"===n?e(o).Notify.failure("Wrong password.",{position:"center-top"}):e(o).Notify.failure(i,{position:"center-top"})}))}})),lm.signUpBtn.addEventListener("click",(function(){var t=document.getElementById("email").value,n=document.getElementById("password").value;if(t.length<4)return void e(o).Notify.failure("Please enter an email address.",{position:"center-top"});if(n.length<4)return void e(o).Notify.failure("Please enter a password.",{position:"center-top"});jf(dm,t,n).then((t=>{Hf(dm.currentUser).then((t=>{e(o).Notify.success("Verification letter received by mail!",{position:"center-top"})}))})).catch((function(t){var n=t.code,i=t.message;"auth/weak-password"==n?e(o).Notify.failure("The password is too weak.",{position:"center-top"}):"auth/email-already-in-use"==n?e(o).Notify.failure("An account with this email already exist!",{position:"center-top"}):e(o).Notify.failure(i,{position:"center-top"})}))})),lm.forgotPass.addEventListener("click",(function(){let t=document.getElementById("email").value;zf(dm,t).then((function(){e(o).Notify.success("Password Reset Email Sent!",{position:"center-top"})})).catch((function(t){let n=t.code;t.message;"auth/invalid-email"==n?e(o).Notify.failure("Invalid email!",{position:"center-top"}):"auth/user-not-found"==n&&e(o).Notify.failure("User not found!",{position:"center-top"}),console.log(t)}))}));const um=_r({apiKey:"AIzaSyBNpfxemM4H3t9PxEzrc9RI1cSLcCzUdS0",authDomain:"goit-js-team-project-grou-13.firebaseapp.com",projectId:"goit-js-team-project-grou-13",storageBucket:"goit-js-team-project-grou-13.appspot.com",messagingSenderId:"793800806917",appId:"1:793800806917:web:c2c5dee82fe54d87ff826c",measurementId:"G-3G5Q83RRVC",databaseURL:"https://goit-js-team-project-grou-13-default-rtdb.firebaseio.com/"}),dm=(function(t=xr()){const e=yr(t=Oo(t),Ss);e.isInitialized()?e.getImmediate():function(t,e={}){const n=yr(t,Ss);if(n.isInitialized()){const t=n.getImmediate();if(fo(e,n.getOptions()))return t;throw Ds.create("already-initialized")}const i=n.initialize({options:e})}(t)}(um),function(t=xr()){const e=yr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=yr(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(fo(n.getOptions(),null!=e?e:{}))return t;eh(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:em,persistence:[dp,Yf,Gf]}),i=Wi("authTokenSyncURL");if(i){const t=(o=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>rm)return;const i=null==e?void 0:e.token;sm!==i&&(sm=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){Oo(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){Oo(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var o;const r=Ui("auth");return r&&cf(n,`http://${r}`),n}(um));!function(t=xr(),e){const n=yr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const t=zi("database");t&&function(t,e,n,i={}){t=Oo(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Sa("Cannot call useEmulator() after instance has already been initialized.");const o=t._repoInternal;let r;if(o.repoInfo_.nodeAdmin)i.mockUserToken&&Sa('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Xa(Xa.OWNER);else if(i.mockUserToken){const e="string"==typeof i.mockUserToken?i.mockUserToken:qi(i.mockUserToken,t.app.options.projectId);r=new Xa(e)}!function(t,e,n,i){t.repoInfo_=new Qa(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}(o,e,n,r)}(n,...t)}}(um);function hm(){var t,e,n;t=function(t){const e=document.querySelector("#icon-signin"),n=document.querySelector("#icon-logout");t?(console.log("Обновляем интерфейс"),window.frames.innerWidth<767&&(e.style.display="none",n.style.display="block"),document.querySelector(".header__nav-signIn").textContent="Sign out"):(window.frames.innerWidth<767&&(e.style.display="block",n.style.display="none"),document.querySelector(".header__nav-signIn").textContent="Sign in")},Oo(dm).onAuthStateChanged(t,e,n)}window.onload=function(){hm()};const fm={searchForm:document.querySelector(".search-form"),tuiPagination:document.querySelector(".tui-pagination"),moviesSection:document.querySelector(".movies")};let pm="",mm=1;fm.searchForm.addEventListener("submit",(async function(t){if(t.preventDefault(),pm=t.currentTarget.elements.searchQuery.value,mm=1,zn.innerHTML="",fm.tuiPagination.classList.add("is-hidden"),!pm)return void gm();await Mn(pm,mm).then((({data:t})=>{const e=t.total_results;if(e){if(e<=20)return fm.moviesSection.classList.add("movies--padding"),void Wn(pm,mm);fm.moviesSection.classList.remove("movies--padding"),Wn(pm,mm),Un(pm,e),fm.tuiPagination.classList.remove("is-hidden")}else ym()})).catch((t=>console.log(t))).finally((()=>{fm.searchForm.reset()}))}));const gm=()=>e(o).Report.info("Empty query 🧐","Please, fill out this field!",{timeout:4e3}),ym=()=>e(o).Report.failure("Ooops 😕","Search result not successful. Enter the correct movie name",{timeout:4e3})}();
//# sourceMappingURL=index.eced8642.js.map
