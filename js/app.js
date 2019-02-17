import WebSite          from './site.js';

const site = new WebSite();
document.addEventListener( 'DOMContentLoaded', () => {

    window.s = site;

    site.init();

    const test = document.createElement( 'div' );
    test.innerHTML = `<h1 class="black-test">OTHER TESTING</h1>`;
    document.querySelector( 'main' ).appendChild( test );
}, false );
