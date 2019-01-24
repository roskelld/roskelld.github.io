'use strict';

class WebSite {
    constructor() {

        // Build DOM Elements
        this.gameCardGenerator( games, 'games' );

        // .....................................................................
        // INITIALIZE MATERIALIZE
        const tabs = document.querySelectorAll( '.tabs' );
        const tabOptions = {
        };

        this.tabInstances = M.Tabs.init( tabs, tabOptions );

        const sideNav = document.querySelectorAll( '.sidenav' );
        this.sideNavInstances = M.Sidenav.init(sideNav, {} );

        this.nav = {
            tabs:   {
                home:           document.querySelector('#home'),
                services:       document.querySelector('#services'),
                games:          document.querySelector('#games'),
                applications:   document.querySelector('#applications'),
                projects:       document.querySelector('#projects'),
                bio:            document.querySelector('#bio'),
            },
            mobile: {
                    home:           document.querySelector('#mobile-nav-home').addEventListener( 'click', () => { this.tabInstances[0].select('home'); this.sideNavInstances[0].close(); }, false ),
                    services:       document.querySelector('#mobile-nav-services').addEventListener( 'click', () => { this.tabInstances[0].select('services');  this.sideNavInstances[0].close(); }, false ),
                    games:          document.querySelector('#mobile-nav-games').addEventListener( 'click', () => { this.tabInstances[0].select('games'); this.sideNavInstances[0].close(); }, false ),
                    applications:   document.querySelector('#mobile-nav-applications').addEventListener( 'click', () => { this.tabInstances[0].select('applications'); this.sideNavInstances[0].close(); }, false ),
                    projects:       document.querySelector('#mobile-nav-projects').addEventListener( 'click', () => { this.tabInstances[0].select('projects'); this.sideNavInstances[0].close(); }, false ),
                    bio:            document.querySelector('#mobile-nav-bio').addEventListener( 'click', () => { this.tabInstances[0].select('bio'); this.sideNavInstances[0].close(); }, false ),
            }
        }

        this.content = {
            panels:             document.querySelectorAll('.product-panel'),
            background:         document.querySelectorAll('.background-image'),
        }

        this.games = {
            cards:                  document.querySelectorAll('.game-card'),
        }

        this.cardClicks();
    }

    gameCardGenerator( data, containerId ) {
        // step through the data and build DOM elements, then add to container
        // const container = document.querySelector( `#${containerId}` );
        const container = document.querySelector( `#applications` );

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

            colDiv.classList.add( 'col', 's12', 'm4', 'l3' );
            cardDiv.classList.add( 'card', 'game-card' );
            cardDiv.id = `card-${item.id}`;
            imgDiv.classList.add( 'card-image' );
            img.src = `img/product/${item.id}.png`;
            img.title = item.title;

            imgDiv.appendChild( img );
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
            let platforms = '| ';
            item.platforms.forEach( x => { platforms += `${x} | `; } );         // Generate All Platforms string

            let tech = '| ';
            item.technology.forEach( x => { tech += `${x} | `} );

            // Work Chips
            const tasks = document.createElement( 'div' );
            item.work.forEach( task => {
                const chip = document.createElement( 'div' );
                chip.classList.add( 'chip' );
                chip.textContent = task;
                tasks.appendChild( chip );
            });

            const detailDiv = document.createElement( 'div' );
            detailDiv.classList.add( 'col', 's12' );
            detailDiv.id = `content-${item.id}`;
            detailDiv.innerHTML = `
                <div class="background-image content-section">
                <div class="center-align">
                <div class="section">
                <h3>${item.title}</h3>
                <p>${platforms}</p>
                <p>${tech}</p>
                <p>${item.release}</p>
                <p>${item.company} / ${item.publisher}</p></div>
                <div class="divider"></div>
                <h5>${item.role}</h5>
                <div class="tasks"></div>
                </div>
                <div class="divider"></div>
                <div class="section">
                <p class="detail-description">${item.description}</p>
                </div>
                </div>`;
            detail.appendChild( detailDiv );

            detail.querySelector('.tasks').appendChild( tasks );
        });

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
}, false );
