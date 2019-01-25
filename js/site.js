'use strict';

class WebSite {
    constructor() {
        // Style
        this.split = '·';
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
            cards:              document.querySelectorAll('.game-card'),
        }

        this.cardClicks();

        this.scroller = new SimpleBar( document.querySelector('main'), {});
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

            colDiv.classList.add( 'col', 's12', 'm3', 'l3' );
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
            // detailDiv.innerHTML = `
            //     <div class="background-image content-section">
            //     <div class="center-align">
            //     <div class="section">
            //     <h3>${item.title}</h3>
            //     <p>${platforms}</p>
            //     <p>${tech}</p>
            //     <p>${item.release}</p>
            //     <p>${item.company} / ${item.publisher}</p></div>
            //     <div class="divider"></div>
            //     <h5>${item.role}</h5>
            //     <div class="tasks"></div>
            //     </div>
            //     <div class="divider"></div>
            //     <div class="section">
            //     <p class="detail-description">${item.description}</p>
            //     </div>
            //     </div>`;


            detailDiv.innerHTML = `
                <div class="">
                    <div class="content-section">
                        <div class="section"></div>

                        <table>
                        <tr>
                            <td class="right-align detail-header"><span class="white black-text detail-header title">Title:</span></td>
                            <td class="detail-data"><span class="detail-data title">${item.title}</span></td>
                        </tr>
                        </table>

                        <div class="divider"></div>

                        <table>
                        <tr>
                            <td class="right-align detail-header"><span class="white black-text detail-header">Platform(s):</span></td>
                            <td class="detail-data"><span class="detail-data">${platforms}</span></td>
                        </tr>
                        <tr>
                            <td class="right-align detail-header"><span class="white black-text detail-header">Genre:</span></td>
                            <td class="detail-data"><span class="detail-data">${item.genre}</span></td>
                        </tr>
                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Release:</span></td>
                            <td class="detail-data"><span class="detail-data">${item.release}</span></td>
                        </tr>
                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Company:</span></td>
                            <td class="detail-data"><span class="detail-data">${item.company}</span></td>
                        </tr>
                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Publisher:</span></td>
                            <td class="detail-data"><span class="detail-data">${item.publisher}</span></td>
                        </tr>
                        </table>

                        <div class="divider"></div>

                        <table>
                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Technology:</span></td>
                            <td class="detail-data"><span class="detail-data">${tech}</span></td>
                        </tr>

                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Team Size:</span></td>
                            <td class="detail-data"><span class="detail-data">${item.team_size}</span></td>
                        </tr>

                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Dev Time:</span></td>
                            <td class="detail-data"><span class="detail-data">${item.dev_time}</span></td>
                        </tr>

                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Role:</span></td>
                            <td class="detail-data"><span class="detail-data">${item.role}</span></td>
                        </tr>
                        <tr>
                            <td class="right-align"><span class="white black-text detail-header">Responsibilities:</span></td>
                            <td class="detail-data"><span class="detail-data">${tasks}</span></td>
                        </tr>
                        </table>
                        <div class="divider"></div>
                            <p class="detail-description">${item.description}</p>
                        </div>
                    </div>
                </div>`;

            detail.appendChild( detailDiv );

            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Title:</span></div>
            // <div class="col s12 m10"><span class="detail-data">${item.title}</span></div>
            // </div>
            //
            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Platform(s):</span></div>
            // <div class="col s12 m10"><span class="detail-data">${platforms}</span></div>
            // </div>
            //
            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Technology:</span></div>
            // <div class="col s12 m10"><span class="detail-data">${tech}</span></div>
            // </div>
            //
            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Release:</span></div>
            // <div class="col s12 m10"><span class="detail-data">${item.release}</span></div>
            // </div>
            //
            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Company:</span></div>
            // <div class="col s12 m10"><span class="detail-data">${item.company}</span></div>
            // </div>
            //
            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Publisher:</span></div>
            // <div class="col s12 m10"><span class="detail-data">${item.publisher}</span></div>
            // </div>
            //
            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Role:</span></div>
            // <div class="col s12 m10"><span class="detail-data">${item.role}</span></div>
            // </div>
            //
            // <div class="row">
            // <div class="col s12 m2"><span class="white black-text detail-header">Responsibilities:</span></div>
            // <div class="col s12 m10"><span class="detail-data">${tasks}</span></div>
            // </div>

            // <div class="section">
            //     <p><span class="white black-text detail-header">Title:</span>       <span class="detail-data">${item.title}</span></p>
            //     <p><span class="white black-text detail-header">Platform(s):</span> <span class="detail-data">${platforms}</span></p>
            //     <p><span class="white black-text detail-header">Technology:</span>  <span class="detail-data">${tech}</span></p>
            //     <p><span class="white black-text detail-header">Release:</span>     <span class="detail-data">${item.release}</span></p>
            //     <p><span class="white black-text detail-header">Company:</span>     <span class="detail-data">${item.company}</span></p>
            //     <p><span class="white black-text detail-header">Publisher:</span>   <span class="detail-data">${item.publisher}</span></p>
            //     <p><span class="white black-text detail-header">Role:</span>        <span class="detail-data">${item.role}</span></p>
            //     <p><span class="white black-text detail-header">Responsibilities:</span>  <span class="detail-data">${tasks}</span></p></p>
            // </div>
            //     <div class="divider"></div>
            //     <h5>${item.role}</h5>

            // detail.querySelector('.tasks').appendChild( tasks );
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
