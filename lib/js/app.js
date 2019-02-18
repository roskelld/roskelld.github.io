'use strict';

var _site = _interopRequireDefault(require("./site.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const site = new _site.default();
document.addEventListener('DOMContentLoaded', function () {
  // const test = document.createElement( 'div' );
  // test.innerHTML = `<h1 class="black-text">OTHER TESTING</h1>`;
  // document.querySelector( 'header' ).appendChild( test );
  document.querySelector('#loader').classList.remove('loader');
}, false);
window.s = site;
site.init();