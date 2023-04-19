import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Notiflix from 'notiflix';

const refs = {
  forgotPass: document.querySelector('#forgott-pass'),
  signInForm: document.querySelector('.signIn__form'),
  headerSignInBtn: document.querySelector('.sign-in__button'),
  signInModal: document.querySelector('.signIn__modal'),
  signInBtn: document.querySelector('#signIn-form__button'),
  signUpBtn: document.querySelector('#signUp__button'),
  //
  watched: document.querySelector('#watched'),
  queue: document.querySelector('#queue'),
};
const instance = basicLightbox.create(refs.signInModal);

refs.headerSignInBtn.addEventListener('click', onModalInstance);
refs.signInForm.addEventListener('submit', toggleSignIn);
refs.signUpBtn.addEventListener('click', handleSignUp);
refs.forgotPass.addEventListener('click', sendPasswordReset);

const firebaseConfig = {
  apiKey: 'AIzaSyBNpfxemM4H3t9PxEzrc9RI1cSLcCzUdS0',
  authDomain: 'goit-js-team-project-grou-13.firebaseapp.com',
  projectId: 'goit-js-team-project-grou-13',
  storageBucket: 'goit-js-team-project-grou-13.appspot.com',
  messagingSenderId: '793800806917',
  appId: '1:793800806917:web:c2c5dee82fe54d87ff826c',
  measurementId: 'G-3G5Q83RRVC',
  databaseURL:
    'https://goit-js-team-project-grou-13-default-rtdb.firebaseio.com/',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function onModalInstance(e) {
  if (document.querySelector('.header__nav-signIn').textContent === 'Sign in') {
    instance.show();
  }
  signOut(auth);
}

/**
 * Handles the sign in button press.
 */

function toggleSignIn(e) {
  e.preventDefault();
  if (auth.currentUser) {
    signOut(auth);
  } else {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email.length < 4) {
      Notiflix.Notify.failure('Please enter an email address.', {
        position: 'center-top',
      });
      return;
    }
    if (password.length < 4) {
      Notiflix.Notify.failure('Please enter a password.', {
        position: 'center-top',
      });
      return;
    }
    // Sign in with email and pass.

    signInWithEmailAndPassword(auth, email, password)
      .then(r => {
        if (auth.currentUser.emailVerified === false) {
          Notiflix.Notify.failure(`Verification letter received by mail!`, {
            position: 'center-top',
          });

          return;
        }
        alert('Все ок, заходим в акк');
        instance.close();
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          Notiflix.Notify.failure('Wrong password.', {
            position: 'center-top',
          });
        } else {
          Notiflix.Notify.failure(errorMessage, {
            position: 'center-top',
          });
        }
      });
  }
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email.length < 4) {
    Notiflix.Notify.failure('Please enter an email address.', {
      position: 'center-top',
    });
    return;
  }
  if (password.length < 4) {
    Notiflix.Notify.failure('Please enter a password.', {
      position: 'center-top',
    });
    return;
  }
  // Create user with email and pass.
  createUserWithEmailAndPassword(auth, email, password)
    .then(r => {
      sendEmailVerif(auth.currentUser);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == 'auth/weak-password') {
        Notiflix.Notify.failure('The password is too weak.', {
          position: 'center-top',
        });
      } else if (errorCode == 'auth/email-already-in-use') {
        Notiflix.Notify.failure('An account with this email already exist!', {
          position: 'center-top',
        });
      } else {
        Notiflix.Notify.failure(errorMessage, {
          position: 'center-top',
        });
      }
    });
}

/**
 * Sends an email verification to the user.
 */
function sendEmailVerif(currentUser) {
  sendEmailVerification(currentUser).then(r => {
    Notiflix.Notify.success(`Verification letter received by mail!`, {
      position: 'center-top',
    });
  });
}

function sendPasswordReset() {
  let email = document.getElementById('email').value;

  sendPasswordResetEmail(auth, email)
    .then(function () {
      // Password Reset Email Sent!
      Notiflix.Notify.success('Password Reset Email Sent!', {
        position: 'center-top',
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        Notiflix.Notify.failure('Invalid email!', {
          position: 'center-top',
        });
      } else if (errorCode == 'auth/user-not-found') {
        Notiflix.Notify.failure('User not found!', {
          position: 'center-top',
        });
      }
      console.log(error);
    });
}

function initApp() {
  // Listening for auth state changes.
  onAuthStateChanged(auth, function (user) {
    // console.dir(user);

    const iconSignIn = document.querySelector('#icon-signin');
    const iconLogOut = document.querySelector('#icon-logout');
    if (user) {
      console.log('Обновляем интерфейс');
      if (window.frames.innerWidth < 767) {
        iconSignIn.style.display = 'none';
        iconLogOut.style.display = 'block';
      }
      document.querySelector('.header__nav-signIn').textContent = 'Sign out';
    } else {
      if (window.frames.innerWidth < 767) {
        iconSignIn.style.display = 'block';
        iconLogOut.style.display = 'none';
      }

      document.querySelector('.header__nav-signIn').textContent = 'Sign in';
    }
  });
}

window.onload = function () {
  initApp();
};
