import WebSite          from './site.js';

const site = new WebSite();
document.addEventListener( 'DOMContentLoaded', function() {
    document.querySelector( '#loader' ).classList.remove( 'loader' );
}, false );

window.s = site;
site.init();
