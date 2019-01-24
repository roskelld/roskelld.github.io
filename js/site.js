'use strict';

class WebSite {
    constructor() {
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

    cardClicks() {
        this.games.cards.forEach( card => {
            const content = card.id.replace('card', 'content');

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
