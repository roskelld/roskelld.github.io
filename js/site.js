'use strict';

class WebSite {
    constructor() {
        // Style
        this.split = '·';
        // Build DOM Elements
        this.gameCardGenerator( games, 'games' );

        const content =  document.querySelector('#stuff')

        // this.scroller = new SimpleBar( content, {});
        // .....................................................................
        // INITIALIZE MATERIALIZE
        const tabs = document.querySelectorAll( '.tabs' );
        this.tabOptions = {
            // onShow: this.tabInit,
        };
        this.tabInstances = M.Tabs.init( tabs, this.tabOptions );
        setTimeout( () => {
        }, 0);

        const carousel = document.querySelectorAll( '.carousel' );
        this.carouselOptions = {};
        this.carouselInstances = M.Carousel.init( carousel, this.carouselOptions );

        const sideNav = document.querySelectorAll( '.sidenav' );
        this.sideNavInstances = M.Sidenav.init(sideNav, {} );

        this.nav = {
            tabs:   {
                home:           document.querySelector('#home'),
                // services:       document.querySelector('#services'),
                games:          document.querySelector('#games'),
                // applications:   document.querySelector('#applications'),
                // projects:       document.querySelector('#projects'),
                // bio:            document.querySelector('#bio'),
            },
            mobile: {
                    home:           document.querySelector('#mobile-nav-home').addEventListener( 'click', () => { this.tabInstances[0].select('home'); this.sideNavInstances[0].close(); }, false ),
                    // services:       document.querySelector('#mobile-nav-services').addEventListener( 'click', () => { this.tabInstances[0].select('services');  this.sideNavInstances[0].close(); }, false ),
                    games:          document.querySelector('#mobile-nav-games').addEventListener( 'click', () => { this.tabInstances[0].select('games'); this.sideNavInstances[0].close(); }, false ),
                    // applications:   document.querySelector('#mobile-nav-applications').addEventListener( 'click', () => { this.tabInstances[0].select('applications'); this.sideNavInstances[0].close(); }, false ),
                    // projects:       document.querySelector('#mobile-nav-projects').addEventListener( 'click', () => { this.tabInstances[0].select('projects'); this.sideNavInstances[0].close(); }, false ),
                    // bio:            document.querySelector('#mobile-nav-bio').addEventListener( 'click', () => { this.tabInstances[0].select('bio'); this.sideNavInstances[0].close(); }, false ),
            }
        }

        this.content = {
            panels:             document.querySelectorAll('.product-panel'),
            background:         document.querySelectorAll('.background-image'),
        }

        this.games = {
            cards:              document.querySelectorAll('.game-card'),
        }

        this.cardClicks();


    }

    tabInit( tab ) {
        if ( typeof tab === 'undefined' ) tab = this.$activeTabLink[0].hash;
        console.log( tab.id );

        switch (tab.id) {
            case 'home':

                break;
            case 'services':

                break;
            case 'games':
                console.log('DING');
                window.s.gameCardGenerator( games, 'games' );
                break;
            case 'applications':

                break;
            case 'projects':

                break;
            default:

        }
    }

    gameCardGenerator( data, containerId ) {
        // step through the data and build DOM elements, then add to container
        const container = document.querySelector( `#${containerId}` );
        // const container = document.querySelector( `#applications` );

        const links = container.querySelector( '.contentlinks' );
        const detail  = container.querySelector( '.contentdetail' );

        // Tab Container to activate tabs functionality
        const tabs    = document.querySelector( '#tab-container' );

        data.forEach( item => {
            // GENERATE LINKS
            const colDiv    = document.createElement( 'div' );
            const cardDiv   = document.createElement( 'div' );
            const imgDiv    = document.createElement( 'div' );
            const img       = document.createElement( 'img' );

            colDiv.classList.add( 'col', 's12', 'm12', 'l6', 'xl3' );
            cardDiv.classList.add( 'card', 'game-card' );
            cardDiv.id = `card-${item.id}`;
            imgDiv.classList.add( 'card-image' );
            img.src = `img/product/${item.id}.png`;
            img.title = item.title;

            imgDiv.appendChild( img );

            if ( item.release === 'N/A' ) {
                const release = document.createElement( 'span' );
                release.classList.add( 'unreleased' );
                release.textContent = 'Unreleased';
                imgDiv.appendChild( release );
            }


            cardDiv.appendChild( imgDiv );
            colDiv.appendChild( cardDiv );
            links.appendChild( colDiv );

            // GENERATE CONTENT TAB
            // Futz around with the ul tabs because Materialize seems to need one
            const tab = document.createElement( 'li' );
            const tabLink = document.createElement( 'a' );
            tab.classList.add( 'tab' );
            tabLink.href = `#content-${item.id}`;
            tabLink.textContent = `${item.id}`;
            tab.appendChild( tabLink );
            tabs.appendChild( tab );

            // GENERATE DETAIL
            let platforms = `${this.split} `;
            item.platforms.forEach( x => { platforms += `${x} ${this.split} `; } );         // Generate All Platforms string

            let tech = `${this.split} `;
            item.technology.forEach( x => { tech += `${x} ${this.split} `} );

            // Responsibilities Chips
            // const tasks = document.createElement( 'div' );
            // item.work.forEach( task => {
            //     const chip = document.createElement( 'div' );
            //     chip.classList.add( 'chip', 'black-text' );
            //     chip.textContent = task;
            //     tasks.appendChild( chip );
            // });

            let tasks = `${this.split} `;
            item.work.forEach( x => { tasks += `${x} ${this.split} `} );

            const detailDiv = document.createElement( 'div' );
            detailDiv.classList.add( 'col', 's12' );
            detailDiv.id = `content-${item.id}`;

            // Trailer
            // if ( typeof data.embed !== 'undefined' )

            detailDiv.innerHTML = `
                <div class="section">
                    <div class="row">
                        <div class="col s3"><div class="white black-text detail-header title right">Title:</div></div>
                        <div class="col s9"><div class="title">${item.title}</div></div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <div class="row">
                            <div class="col s12 m3"><div class="white black-text detail-header right">Platform(s):</div></div>
                            <div class="col s12 m9"><div class="detail-data">${platforms}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Genre:</div></div>
                            <div class="col s3"><div class="detail-data">${item.genre}</div></div>
                            <div class="col s2"><div class="white black-text detail-header right">Company:</div></div>
                            <div class="col s4"><div class="detail-data">${item.company}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Release:</div></div>
                            <div class="col s2"><div class="detail-data">${item.release}</div></div>
                            <div class="col s3"><div class="white black-text detail-header right">Publisher:</div></div>
                            <div class="col s4"><div class="detail-data">${item.publisher}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Role:</div></div>
                            <div class="col s9"><div class="detail-data">${item.role}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Responsibilities:</div></div>
                            <div class="col s9"><div class="detail-data">${tasks}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Technology:</div></div>
                            <div class="col s9"><div class="detail-data">${tech}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Team Size:</div></div>
                            <div class="col s9"><div class="detail-data">${item.team_size}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Dev Time:</div></div>
                            <div class="col s9"><div class="detail-data">${item.dev_time}</div></div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <div class="row">
                            <div class="col s12"><div class="center">${item.embed}</div></div>
                        </div>
                    </div>
                </div>`;

            detail.appendChild( detailDiv );
        });

    }

    digestDataGenerator( data, containerId ) {
        // step through the data and build DOM elements, then add to container
        const container = document.querySelector( `#${containerId}` );
        const links = container.querySelector( '.contentlinks' );
        const detail  = container.querySelector( '.contentdetail' );


    }

    updateScroller( tab ) {
        console.log( window.s.scroller );
        window.s.scroller.recalculate();
    }

    cardClicks() {
        this.games.cards.forEach( (card, idx) => {
            const content = card.id.replace('card', 'content');
            if ( idx === 0 ) card.classList.add( 'selected' );
            card.addEventListener( 'click', () => {

                this.tabInstances[1].select(content);                           // Select Card

                this.games.cards.forEach( card => card.classList.remove('selected') );
                card.classList.add('selected');

            }, false );
        });
    }
}

document.addEventListener( 'DOMContentLoaded', () => {
    const site = new WebSite();
    window.s = site;
}, false );
