import WebSite          from './site.js';

document.addEventListener( 'DOMContentLoaded', () => {
    const site = new WebSite();

    window.s = site;

    site.init();
}, false );
