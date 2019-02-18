import WebSite          from './site.js';

const site = new WebSite();
document.addEventListener( 'DOMContentLoaded', function() {
    const test = document.createElement( 'div' );
    test.innerHTML = `<h1 class="black-text">OTHER TESTING</h1>`;
    document.querySelector( 'header' ).appendChild( test );
    
    document.querySelector( '#loader' ).classList.remove( 'loader' );
}, false );

window.s = site;
site.init();
