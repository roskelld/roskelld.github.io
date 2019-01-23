
document.addEventListener('DOMContentLoaded', () => {

    const product = document.querySelector('#product-panel');
    const data = document.querySelector('.background-image');

    setTimeout( () => {
        data.setAttribute('style', `height: ${product.clientHeight}`);
    }, 0);
}, false );
