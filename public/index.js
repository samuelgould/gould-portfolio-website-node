'use strict';

const toggleHamburger = () => {
  document.getElementById('hamburger-icon').classList.toggle('change');
  document.getElementById('desktop-hamburger-icon').classList.toggle('change');
  document.getElementById('nav-overlay').classList.toggle('show-overlay');
};