'use strict';

class WebSite {
    constructor() {
        // Style
        this.split = '·';
        // Build DOM Elements
        const games     = data.filter( item => item.type === 'game' );
        const apps      = data.filter( item => item.type === 'app' );
        const projects  = data.filter( item => item.type === 'project' );
        const service   = data.filter( item => item.type === 'service' );
        const core      = data.filter( item => item.type === 'core' );

        this.gameCardGenerator( games, 'games' );
        this.applicationCardGenerator( apps, 'applications');
        this.projectCardGenerator( projects, 'projects');
        this.serviceCardGenerator( service, 'services', core[0] );

        const content =  document.querySelector('#stuff')

        // this.scroller = new SimpleBar( content, {});
        // .....................................................................
        // INITIALIZE MATERIALIZE
        const tabs = document.querySelectorAll( '.tabs' );
        this.tabOptions = { onShow: this.tabSelect };
        this.tabInstances = M.Tabs.init( tabs, this.tabOptions );

        this.carouselEl = document.querySelectorAll( '.carousel' );
        this.carouselOptions = {};
        this.carouselInstances = M.Carousel.init( this.carouselEl, this.carouselOptions );

        const sideNav = document.querySelectorAll( '.sidenav' );
        this.sideNavInstances = M.Sidenav.init(sideNav, {} );

        this.nav = {
            tabs:   {
                home:           document.querySelector('#home'),
                // services:       document.querySelector('#services'),
                games:          document.querySelector('#games'),
                applications:   document.querySelector('#applications'),
                // projects:       document.querySelector('#projects'),
                // bio:            document.querySelector('#bio'),
            },
            mobile: {
                    home:           document.querySelector('#mobile-nav-home').addEventListener( 'click', () => { this.tabInstances[0].select('home'); this.sideNavInstances[0].close(); }, false ),
                    // services:       document.querySelector('#mobile-nav-services').addEventListener( 'click', () => { this.tabInstances[0].select('services');  this.sideNavInstances[0].close(); }, false ),
                    games:          document.querySelector('#mobile-nav-games').addEventListener( 'click', () => { this.tabInstances[0].select('games'); this.sideNavInstances[0].close(); }, false ),
                    applications:   document.querySelector('#mobile-nav-applications').addEventListener( 'click', () => { this.tabInstances[0].select('applications'); this.sideNavInstances[0].close(); }, false ),
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

        // GAME
        // this.score = 0;
        // this.introSound = new Audio('/sound/intro.mp3');
        // this.eatSound = new Audio('/sound/cherry.mp3');
        // this.dieSound = new Audio('/sound/die.mp3');
        // document.querySelector('#shhh').addEventListener( 'click', () => { this.startShhh() }, false );
    }

    tabSelect( tab ) {
        if ( typeof tab === 'undefined' ) tab = this.$activeTabLink[0].hash;
        if ( tab.id === this.oldTab ) return;                                   // Ignore if tab hasn't changed


        switch (tab.id) {
            case 'home':
                M.Carousel.init( s.carouselEl, s.carouselOptions );
                break;
            case 'services':

                break;
            case 'games':
                // window.s.gameCardGenerator( games, 'games' );
                break;
            case 'applications':

                break;
            case 'projects':

                break;
            default:

        }

        this.oldTab = tab.id;
    }

    updateScroller( tab ) {
        console.log( window.s.scroller );
        window.s.scroller.recalculate();
    }

    ////////////////////////////////////////////////////////////////////////////
    // SERVICES

    serviceCardGenerator( data, containerId, core ) {
        // step through the data and build DOM elements, then add to container
        const container = document.querySelector( `#${containerId}` );
        const links = container.querySelector( '.contentlinks' );
        const detail  = container.querySelector( '.contentdetail' );
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

            let list = `` ;
            console.log(core);
            // GENERATE DETAIL
            item.work.forEach( x => {
                list += `<li><div class="collapsible-header grey darken-4 blue-grey-text no-select">
                            <i class="${core.work[x].icon}"></i> <span class="size-1-2">${x}</span></div>
                            <div class="collapsible-body grey darken-4 blue-grey-text text-lighten-4"><span>${core.work[x].text}</span></div>`;
            } );

            // GENERATE DETAIL
            const detailDiv = document.createElement( 'div' );
            detailDiv.classList.add( 'col', 's12' );
            detailDiv.id = `content-${item.id}`;

            detailDiv.innerHTML = `
                <div class="section">
                    <div class="row">
                        <div class="col s12">
                            <div class="center-align">
                                <h2>${item.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12"><blockquote style="font-style: italic; font-size: 1.5em;">${item.quote}</blockquote></div>
                    </div>

                    <div class="section">
                        <div class="row">
                            <div class="col s12"><div class="size-1-2">${item.description}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s12"><div class="size-1-2">${core.description}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                <ul class="collapsible">
                                    ${list}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">

                    </div>
                </div>`;
            detail.appendChild( detailDiv );
        });

        setTimeout(function () {
            const el = document.querySelectorAll('.collapsible');
            M.Collapsible.init( el, {} );

        }, 10);

    }

    ////////////////////////////////////////////////////////////////////////////
    // GAMES

    gameCardGenerator( data, containerId ) {
        // step through the data and build DOM elements, then add to container
        const container = document.querySelector( `#${containerId}` );
        const links = container.querySelector( '.contentlinks' );
        const detail  = container.querySelector( '.contentdetail' );
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

            let tasks = `${this.split} `;
            item.work.forEach( x => { tasks += `${x} ${this.split} `} );

            const detailDiv = document.createElement( 'div' );
            detailDiv.classList.add( 'col', 's12' );
            detailDiv.id = `content-${item.id}`;

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
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Trailer:</div></div>
                            <div class="col s9"><div class="detail-data"><a href="${item.trailer}"><i class="fas fa-film fa-2x"></i></a></div></div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <div class="row">

                        </div>
                    </div>
                </div>`;
            detail.appendChild( detailDiv );
        });

        // <div class="col s12"><div class="center">${item.embed}</div></div>
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

    ////////////////////////////////////////////////////////////////////////////
    // APPLICATIONS

    applicationCardGenerator( data, containerId ) {
        // step through the data and build DOM elements, then add to container
        const container = document.querySelector( `#${containerId}` );
        const links = container.querySelector( '.contentlinks' );
        const detail  = container.querySelector( '.contentdetail' );
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

            let tasks = `${this.split} `;
            item.work.forEach( x => { tasks += `${x} ${this.split} `} );

            const detailDiv = document.createElement( 'div' );
            detailDiv.classList.add( 'col', 's12' );
            detailDiv.id = `content-${item.id}`;

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
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Link:</div></div>
                            <div class="col s9"><div class="detail-data"><a href="${item.link}">${item.link}</a></div></div>
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

    ////////////////////////////////////////////////////////////////////////////
    // APPLICATIONS

    projectCardGenerator( data, containerId ) {
        // step through the data and build DOM elements, then add to container
        const container = document.querySelector( `#${containerId}` );
        const links = container.querySelector( '.contentlinks' );
        const detail  = container.querySelector( '.contentdetail' );
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

            let tasks = `${this.split} `;
            item.work.forEach( x => { tasks += `${x} ${this.split} `} );

            const detailDiv = document.createElement( 'div' );
            detailDiv.classList.add( 'col', 's12' );
            detailDiv.id = `content-${item.id}`;

            detailDiv.innerHTML = `
                <div class="section">
                    <div class="row">
                        <div class="col s3"><div class="white black-text detail-header title right">Title:</div></div>
                        <div class="col s9"><div class="title">${item.title}</div></div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <div class="row">
                            <div class="col s12"><div class="">${item.description}</div></div>
                        </div>
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
                        <div class="row">
                            <div class="col s3"><div class="white black-text detail-header right">Link:</div></div>
                            <div class="col s9"><div class="detail-data"><a href="${item.link}">${item.link}</a></div></div>
                        </div>
                    </div>
                </div>`;
            detail.appendChild( detailDiv );
        });

    }


    ////////////////////////////////////////////////////////////////////////////
    // HIDDEN GAME

    startShhh() {
        s.introSound.play();
        const main = document.querySelector('html');
        main.classList.add('shh');


        for (let i = 0; i < 20; i++) {
            const thing = document.createElement( 'div' );
            thing.classList.add( 'pickup' );
            thing.style.left = `${Math.random() * main.clientWidth}px`;
            thing.style.top = `${Math.random() * main.clientHeight}px`;
            thing.textContent = '🍒';

            this.nav.tabs.games.appendChild( thing );

            thing.addEventListener( 'mouseover', () => {
                thing.textContent = '';
                s.eatSound.play();
                s.score++;
                console.log(`SCORE: ${s.score}`);
            }, false);
        }


        this.addBaddie();

    }

    addBaddie() {
        const main = document.querySelector('main')

        for (let i = 0; i < 5; i++) {
            const thing = document.createElement( 'div' );
            thing.classList.add( 'pickup' );
            thing.style.left = `${Math.random() * main.clientWidth}px`;
            thing.style.top = `${Math.random() * main.clientHeight}px`;
            thing.textContent = '💀';
            this.nav.tabs.games.appendChild( thing );

            thing.addEventListener( 'mouseover', () => {
                thing.textContent = '';
                s.dieSound.play();
                console.log('YOU DIED');
                console.log(`FINAL SCORE: ${s.score}`);
                s.score = 0;
                document.querySelector('main').classList.remove('shh');
            }, false);
        }

    }
}

document.addEventListener( 'DOMContentLoaded', () => {
    const site = new WebSite();
    window.s = site;
}, false );
