'use strict';
/**
* Copyright Dean Roskell 2019
* @author roskelld https://github.com/roskelld
* Uses: https://ianlunn.github.io/Hover/
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/web.dom.iterable");

var _story = _interopRequireDefault(require("./story.js"));

var _blog = _interopRequireDefault(require("./blog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WebSite {
  constructor() {
    // Style
    this.split = '·'; // this.itemURI = '%F0%9F%8E%AE'; // 🎮

    this.itemURI = '?'; // 🎮
    // Build DOM Elements

    const games = data.filter(item => item.type === 'game');
    const apps = data.filter(item => item.type === 'app');
    const projects = data.filter(item => item.type === 'project');
    const service = data.filter(item => item.type === 'service');
    const core = data.filter(item => item.type === 'core');
    this.gameCardGenerator(games, 'games');
    this.applicationCardGenerator(apps, 'applications');
    this.projectCardGenerator(projects, 'projects'); // this.serviceCardGenerator( service, 'services', core[0] );

    const content = document.querySelector('#stuff'); // .....................................................................
    // INITIALIZE MATERIALIZE

    const tabsMain = document.querySelector('#main-nav-tabs');
    const tabsBody = document.querySelector('#tab-container');
    this.tabMainOptions = {
      onShow: this.onTabSelected
    };
    this.tabBodyInstances = M.Tabs.init(tabsBody, {});
    this.tabMainInstances = M.Tabs.init(tabsMain, this.tabMainOptions);
    const sideNav = document.querySelectorAll('.sidenav');
    this.sideNavOptions = {};
    this.sideNavInstances = M.Sidenav.init(sideNav, this.sideNavOptions);
    this.carouselEl = document.querySelectorAll('.carousel');
    this.carouselOptions = {
      dist: 0,
      shift: 10,
      padding: 10
    };
    this.carouselInstances = M.Carousel.init(this.carouselEl, this.carouselOptions);
    this.photosEl = document.querySelectorAll('.materialboxed');
    this.photosOptions = {};
    this.photosInstances = M.Materialbox.init(this.photosEl, this.photosOptions); // const sideNav = document.querySelectorAll( '.sidenav' );
    // this.sideNavInstances = M.Sidenav.init(sideNav, {} );

    this.nav = {
      header: document.querySelector('#nav-header'),
      tabs: {
        home: document.querySelector('#home'),
        services: document.querySelector('#services'),
        games: document.querySelector('#games'),
        applications: document.querySelector('#applications'),
        projects: document.querySelector('#projects'),
        bio: document.querySelector('#bio')
      },
      mobile: {// home:           document.querySelector('#mobile-nav-home').addEventListener( 'click', () => { this.tabInstances[0].select('home'); this.sideNavInstances[0].close(); }, false ),
        // services:       document.querySelector('#mobile-nav-services').addEventListener( 'click', () => { this.tabInstances[0].select('services');  this.sideNavInstances[0].close(); }, false ),
        // games:          document.querySelector('#mobile-nav-games').addEventListener( 'click', () => { this.tabInstances[0].select('games'); this.sideNavInstances[0].close(); }, false ),
        // applications:   document.querySelector('#mobile-nav-applications').addEventListener( 'click', () => { this.tabInstances[0].select('applications'); this.sideNavInstances[0].close(); }, false ),
        // projects:       document.querySelector('#mobile-nav-projects').addEventListener( 'click', () => { this.tabInstances[0].select('projects'); this.sideNavInstances[0].close(); }, false ),
        // bio:            document.querySelector('#mobile-nav-bio').addEventListener( 'click', () => { this.tabInstances[0].select('bio'); this.sideNavInstances[0].close(); }, false ),
      },
      buttons: {
        home: document.querySelector('#home-menu-btn'),
        services: document.querySelector('#services-menu-btn'),
        games: document.querySelector('#games-menu-btn'),
        applications: document.querySelector('#applications-menu-btn'),
        projects: document.querySelector('#projects-menu-btn'),
        bio: document.querySelector('#bio-menu-btn'),
        all: document.querySelectorAll('.menu-btn')
      },
      cards: {
        services: document.querySelector(`#services`).querySelector('.contentlinks').querySelectorAll('.card-link'),
        games: document.querySelector(`#games`).querySelector('.contentlinks').querySelectorAll('.card-link'),
        applications: document.querySelector(`#applications`).querySelector('.contentlinks').querySelectorAll('.card-link'),
        projects: document.querySelector(`#projects`).querySelector('.contentlinks').querySelectorAll('.card-link'),
        all: document.querySelectorAll('.card-link')
      }
    };
    this.content = {
      main: document.querySelector('main'),
      panels: document.querySelectorAll('.product-panel'),
      background: document.querySelectorAll('.background-image'),
      // cards:              document.querySelectorAll('.card-link'),
      fullpage: document.querySelectorAll('.fullpage')
    };
    this.setMenuLinks();
    this.setCardLinks(); // this.story = new Story();

    this.blog = new _blog.default(); // GAME
    // this.score = 0;
    // this.introSound = new Audio('/sound/intro.mp3');
    // this.eatSound = new Audio('/sound/cherry.mp3');
    // this.dieSound = new Audio('/sound/die.mp3');
    // document.querySelector('#shhh').addEventListener( 'click', () => { this.startShhh() }, false );
  }

  init() {
    // this.onTabSelected();
    window.addEventListener("hashchange", e => {
      console.log('HASH CHANGE');
      this.openHashLocation();
    }); // Read URI and setup site

    this.openHashLocation();
    window.addEventListener("resize", e => {
      this.content.fullpage.forEach(panel => {
        this.setFullPagePanelHeight(panel);
      });
    });
    this.content.fullpage.forEach(panel => {
      this.setFullPagePanelHeight(panel);
    });
  }

  openHashLocation() {
    const c = window.location.hash;
    let url = '';

    if (c !== '') {
      const tab = c.includes(this.itemURI) ? c.slice(1, c.indexOf(this.itemURI)) : c.slice(1, c.length);
      this.selectTab(tab);
      url += `#${tab}`;
      scroll(0, 0);

      if (c.includes(this.itemURI)) {
        const item = c.slice(c.indexOf(this.itemURI) + 1, c.length); // console.log(`CARD: ${item}`);

        this.selectCard(item, tab);
        url += `?${item}`;
      }
    } else {
      this.selectTab('home');
    }
  }

  onTabSelected(tab) {
    // Generate Tab from URL if not given
    if (typeof tab === 'undefined' || tab === null) {
      tab = {};
      tab.id = window.location.hash.substr(1);
      ;
    }

    if (tab.id === this.oldTab) return; // Ignore if tab hasn't changed
    // Spin carousel

    if (tab.id === 'home' && this.oldTab !== 'home') s.carouselInstances[0].next();
    this.oldTab = tab.id;

    if (tab.id !== 'home' || tab.id !== 'bio') {
      if (typeof s.nav.cards[tab.id] == 'undefined' || typeof s.nav.cards[tab.id][0] == 'undefined') return; // s.story.reset();                                                    // Reset Story

      s.selectCard(s.nav.cards[tab.id][0].id.replace('card-', ''), tab.id);
    }
  }

  selectTab(tabId) {
    if (typeof tabId == 'undefined') return;
    this.tabMainInstances.select(tabId);
    this.nav.buttons.all.forEach(button => button.classList.remove('active'));
    this.nav.buttons[tabId].classList.add('active');
  }

  selectCard(cardId) {
    let tabId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
    const cards = Array.from(s.nav.cards[tabId]);
    const card = cards.find(item => item.id === `card-${cardId}`);
    if (typeof card === 'undefined') return;
    this.nav.cards.all.forEach(card => card.classList.remove('selected')); // Remove highlight

    card.classList.add('selected');
    this.tabBodyInstances.select(`content-${cardId}`); // Select Content
  }

  setCardLinks() {
    this.nav.cards.all.forEach(card => {
      card.addEventListener('click', e => {
        this.selectCard(card.dataset.target); // Update URI

        const uri = `${this.tabMainInstances.$activeTabLink[0].hash}${this.itemURI}${card.dataset.target}`;
        window.history.pushState({
          id: `#${uri}`
        }, 'Dean Roskell', `${uri}`);
      }, false);
    });
  }

  setMenuLinks() {
    this.nav.buttons.all.forEach(button => {
      button.addEventListener('click', e => {
        this.selectTab(button.dataset.target); // Update URI

        window.history.pushState({
          id: `#${button.dataset.target}`
        }, 'Dean Roskell', `/#${button.dataset.target}`);
      }, false);
    });
  }

  updateScroller(tab) {
    console.log(window.s.scroller);
    window.s.scroller.recalculate();
  }

  setFullPagePanelHeight(el) {
    el.style.minHeight = `${window.innerHeight}px`;
  } ////////////////////////////////////////////////////////////////////////////
  // CONTENT GENERATION


  generateTextCard(item) {
    const colDiv = document.createElement('div');
    const cardDiv = document.createElement('div');
    const textDiv = document.createElement('p'); // const imgDiv    = document.createElement( 'div' );
    // const img       = document.createElement( 'img' );

    colDiv.classList.add('col', 's12', 'm12', 'l3', 'xl2');
    cardDiv.classList.add('card', 'square', 'card-link', 'z-depth-0', 'valign-wrapper', 'no-select');
    cardDiv.id = `card-${item.id}`;
    cardDiv.dataset.target = item.id; // imgDiv.classList.add( 'card-image' );
    // img.src = `img/product/${item.id}.png`;
    // img.title = item.title;
    // imgDiv.appendChild( img );

    textDiv.classList.add('title');
    textDiv.textContent = item.title;
    cardDiv.appendChild(textDiv);
    colDiv.appendChild(cardDiv);
    return colDiv;
  }

  generateCard(item) {
    const colDiv = document.createElement('div');
    const cardDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    colDiv.classList.add('col', 's12', 'm12', 'l6', 'xl3');
    cardDiv.classList.add('card', 'card-link', 'z-depth-0');
    cardDiv.id = `card-${item.id}`;
    cardDiv.dataset.target = item.id;
    imgDiv.classList.add('card-image');
    img.src = `img/product/${item.id}.png`;
    img.title = item.title;
    imgDiv.appendChild(img);

    if (item.release === 'N/A') {
      const release = document.createElement('span');
      release.classList.add('unreleased');
      release.textContent = 'Unreleased';
      imgDiv.appendChild(release);
    }

    cardDiv.appendChild(imgDiv);
    colDiv.appendChild(cardDiv);
    return colDiv;
  }

  generateFakeTab(item) {
    const tab = document.createElement('li');
    const tabLink = document.createElement('a');
    tab.classList.add('tab');
    tabLink.href = `#content-${item.id}`;
    tabLink.textContent = `${item.id}`;
    tab.appendChild(tabLink);
    return tab;
  } ////////////////////////////////////////////////////////////////////////////
  // SERVICES


  serviceCardGenerator(data, containerId, core) {
    // step through the data and build DOM elements, then add to container
    const container = document.querySelector(`#${containerId}`);
    const links = container.querySelector('.contentlinks');
    const detail = container.querySelector('.contentdetail');
    const tabs = document.querySelector('#tab-container');
    data.forEach((item, i) => {
      // GENERATE LINKS
      links.appendChild(this.generateTextCard(item)); // GENERATE CONTENT TAB

      tabs.appendChild(this.generateFakeTab(item));
      let list = ``; // GENERATE DETAIL

      item.work.forEach(x => {
        list += `<li><div class="collapsible-header grey darken-4 blue-grey-text no-select">
                            <i class="${core.work[x].icon}"></i> <span class="size-1-2">${x}</span></div>
                            <div class="collapsible-body grey darken-4 blue-grey-text text-lighten-4"><span>${core.work[x].text}</span></div>`;
      }); // GENERATE DETAIL

      const detailDiv = document.createElement('div');
      detailDiv.classList.add('col', 's12');
      detailDiv.id = `content-${item.id}`;
      detailDiv.innerHTML = `
                <div id="section-${item.id}" class="section content-panel">
                    <div class="row"><div class="col s12"><div class="center-align"><h2>${item.title}</h2></div></div></div>
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
      detail.appendChild(detailDiv);
    });
    setTimeout(function () {
      const el = document.querySelectorAll('.collapsible');
      M.Collapsible.init(el, {});
    }, 10);
  } ////////////////////////////////////////////////////////////////////////////
  // GAMES


  gameCardGenerator(data, containerId) {
    // step through the data and build DOM elements, then add to container
    const container = document.querySelector(`#${containerId}`);
    const links = container.querySelector('.contentlinks');
    const detail = container.querySelector('.contentdetail');
    const tabs = document.querySelector('#tab-container');
    data.forEach((item, i) => {
      // GENERATE LINKS
      links.appendChild(this.generateCard(item)); // GENERATE CONTENT TAB
      // Futz around with the ul tabs because Materialize seems to need one

      const tab = this.generateFakeTab(item);
      tabs.appendChild(tab); // GENERATE DETAIL

      let platforms = `${this.split} `;
      item.platforms.forEach(x => {
        platforms += `${x} ${this.split} `;
      }); // Generate All Platforms string

      let tech = `${this.split} `;
      item.technology.forEach(x => {
        tech += `${x} ${this.split} `;
      });
      let tasks = `${this.split} `;
      item.work.forEach(x => {
        tasks += `${x} ${this.split} `;
      });
      const detailDiv = document.createElement('div');
      detailDiv.classList.add('col', 's12');
      detailDiv.id = `content-${item.id}`;
      detailDiv.innerHTML = `
                <div class="section content-panel">
                    <div class="row">
                        <div class="col s12"><div class="soft-grey-text title center-align">${item.title}</div></div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <div class="row">
                            <div class="col s12 m3"><div class="off-white soft-grey-text detail-header right">Platform(s):</div></div>
                            <div class="col s12 m9"><div class="detail-data">${platforms}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Genre:</div></div>
                            <div class="col s3"><div class="detail-data">${item.genre}</div></div>
                            <div class="col s2"><div class="off-white soft-grey-text detail-header right">Company:</div></div>
                            <div class="col s4"><div class="detail-data">${item.company}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Release:</div></div>
                            <div class="col s2"><div class="detail-data">${item.release}</div></div>
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Publisher:</div></div>
                            <div class="col s4"><div class="detail-data">${item.publisher}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Role:</div></div>
                            <div class="col s9"><div class="detail-data">${item.role}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Responsibilities:</div></div>
                            <div class="col s9"><div class="detail-data">${tasks}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Technology:</div></div>
                            <div class="col s9"><div class="detail-data">${tech}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Team Size:</div></div>
                            <div class="col s9"><div class="detail-data">${item.team_size}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Dev Time:</div></div>
                            <div class="col s9"><div class="detail-data">${item.dev_time}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Trailer:</div></div>
                            <div class="col s9"><div class="detail-data"><a href="${item.trailer}"><i class="fas fa-film fa-2x"></i></a></div></div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <div class="row">

                        </div>
                    </div>
                </div>`;
      detail.appendChild(detailDiv);
    }); // <div class="col s12"><div class="center">${item.embed}</div></div>
  } ////////////////////////////////////////////////////////////////////////////
  // APPLICATIONS


  applicationCardGenerator(data, containerId) {
    // step through the data and build DOM elements, then add to container
    const container = document.querySelector(`#${containerId}`);
    const links = container.querySelector('.contentlinks');
    const detail = container.querySelector('.contentdetail');
    const tabs = document.querySelector('#tab-container');
    data.forEach((item, i) => {
      // GENERATE LINKS
      links.appendChild(this.generateCard(item)); // GENERATE CONTENT TAB
      // Futz around with the ul tabs because Materialize seems to need one

      const tab = this.generateFakeTab(item);
      tabs.appendChild(tab); // GENERATE DETAIL

      let platforms = `${this.split} `;
      item.platforms.forEach(x => {
        platforms += `${x} ${this.split} `;
      }); // Generate All Platforms string

      let tech = `${this.split} `;
      item.technology.forEach(x => {
        tech += `${x} ${this.split} `;
      });
      let tasks = `${this.split} `;
      item.work.forEach(x => {
        tasks += `${x} ${this.split} `;
      });
      const detailDiv = document.createElement('div');
      detailDiv.classList.add('col', 's12');
      detailDiv.id = `content-${item.id}`;
      detailDiv.innerHTML = `
                <div id="section-${item.id}" class="section content-panel">
                    <div class="row">
                        <div class="col s12"><div class="title center-align">${item.title}</div></div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <div class="row">
                            <div class="col s12 m3"><div class="off-white soft-grey-text detail-header right">Platform(s):</div></div>
                            <div class="col s12 m9"><div class="detail-data">${platforms}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Genre:</div></div>
                            <div class="col s3"><div class="detail-data">${item.genre}</div></div>
                            <div class="col s2"><div class="off-white soft-grey-text detail-header right">Company:</div></div>
                            <div class="col s4"><div class="detail-data">${item.company}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Release:</div></div>
                            <div class="col s2"><div class="detail-data">${item.release}</div></div>
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Publisher:</div></div>
                            <div class="col s4"><div class="detail-data">${item.publisher}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Role:</div></div>
                            <div class="col s9"><div class="detail-data">${item.role}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Responsibilities:</div></div>
                            <div class="col s9"><div class="detail-data">${tasks}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Technology:</div></div>
                            <div class="col s9"><div class="detail-data">${tech}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Team Size:</div></div>
                            <div class="col s9"><div class="detail-data">${item.team_size}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Dev Time:</div></div>
                            <div class="col s9"><div class="detail-data">${item.dev_time}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Link:</div></div>
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
      detail.appendChild(detailDiv);
    });
  } ////////////////////////////////////////////////////////////////////////////
  // APPLICATIONS


  projectCardGenerator(data, containerId) {
    // step through the data and build DOM elements, then add to container
    const container = document.querySelector(`#${containerId}`);
    const links = container.querySelector('.contentlinks');
    const detail = container.querySelector('.contentdetail');
    const tabs = document.querySelector('#tab-container');
    data.forEach((item, i) => {
      // GENERATE LINKS
      links.appendChild(this.generateCard(item)); // GENERATE CONTENT TAB
      // Futz around with the ul tabs because Materialize seems to need one

      const tab = this.generateFakeTab(item);
      tabs.appendChild(tab); // GENERATE DETAIL

      let platforms = `${this.split} `;
      item.platforms.forEach(x => {
        platforms += `${x} ${this.split} `;
      }); // Generate All Platforms string

      let tech = `${this.split} `;
      item.technology.forEach(x => {
        tech += `${x} ${this.split} `;
      });
      let tasks = `${this.split} `;
      item.work.forEach(x => {
        tasks += `${x} ${this.split} `;
      });
      const detailDiv = document.createElement('div');
      detailDiv.classList.add('col', 's12');
      detailDiv.id = `content-${item.id}`;
      detailDiv.innerHTML = `
                <div id="section-${item.id}" class="section content-panel">
                    <div class="row">
                        <div class="col s12"><div class="title center-align">${item.title}</div></div>
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
                            <div class="col s12 m3"><div class="off-white soft-grey-text detail-header right">Platform(s):</div></div>
                            <div class="col s12 m9"><div class="detail-data">${platforms}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Genre:</div></div>
                            <div class="col s3"><div class="detail-data">${item.genre}</div></div>
                            <div class="col s2"><div class="off-white soft-grey-text detail-header right">Company:</div></div>
                            <div class="col s4"><div class="detail-data">${item.company}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Release:</div></div>
                            <div class="col s2"><div class="detail-data">${item.release}</div></div>
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Publisher:</div></div>
                            <div class="col s4"><div class="detail-data">${item.publisher}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Role:</div></div>
                            <div class="col s9"><div class="detail-data">${item.role}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Responsibilities:</div></div>
                            <div class="col s9"><div class="detail-data">${tasks}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Technology:</div></div>
                            <div class="col s9"><div class="detail-data">${tech}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Team Size:</div></div>
                            <div class="col s9"><div class="detail-data">${item.team_size}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Dev Time:</div></div>
                            <div class="col s9"><div class="detail-data">${item.dev_time}</div></div>
                        </div>
                        <div class="row">
                            <div class="col s3"><div class="off-white soft-grey-text detail-header right">Link:</div></div>
                            <div class="col s9"><div class="detail-data"><a href="${item.link}">${item.link}</a></div></div>
                        </div>
                    </div>
                </div>`;
      detail.appendChild(detailDiv);
    });
  } ////////////////////////////////////////////////////////////////////////////
  // HIDDEN GAME


  startShhh() {
    s.introSound.play();
    const main = document.querySelector('html');
    main.classList.add('shh');

    for (let i = 0; i < 20; i++) {
      const thing = document.createElement('div');
      thing.classList.add('pickup');
      thing.style.left = `${Math.random() * main.clientWidth}px`;
      thing.style.top = `${Math.random() * main.clientHeight}px`;
      thing.textContent = '🍒';
      this.nav.tabs.games.appendChild(thing);
      thing.addEventListener('mouseover', () => {
        thing.textContent = '';
        s.eatSound.play();
        s.score++;
        console.log(`SCORE: ${s.score}`);
      }, false);
    }

    this.addBaddie();
  }

  addBaddie() {
    const main = document.querySelector('main');

    for (let i = 0; i < 5; i++) {
      const thing = document.createElement('div');
      thing.classList.add('pickup');
      thing.style.left = `${Math.random() * main.clientWidth}px`;
      thing.style.top = `${Math.random() * main.clientHeight}px`;
      thing.textContent = '💀';
      this.nav.tabs.games.appendChild(thing);
      thing.addEventListener('mouseover', () => {
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

var _default = WebSite;
exports.default = _default;