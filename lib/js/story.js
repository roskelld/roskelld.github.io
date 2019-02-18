'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Story {
  constructor() {
    // Story
    this.story = {
      sections: {
        intro: document.querySelector('#story-intro'),
        talk: document.querySelector('#story-talk'),
        look: document.querySelector('#story-look'),
        return: document.querySelector('#story-return')
      },
      buttons: {
        talk: document.querySelector('#story-talk-btn'),
        look: document.querySelector('#story-look-btn')
      } // Elements

    };
    this.el = {
      main: document.querySelector("#home"),
      nav: document.querySelector("#nav-header"),
      footer: document.querySelector('footer')
    };
    this.data = {
      version: 0.1,
      looked: false,
      talk: false // this.skipStory();

    };
    this.load();
    this.setupStory();
  }

  setupStory() {
    if (window.location.hash !== '') this.skipStory();

    if (this.data.looked && this.data.talk) {
      this.story.sections.return.classList.remove('story-hidden');
      this.story.sections.intro.classList.add('story-hidden');
      this.story.sections.talk.classList.add('story-hidden');
      this.story.sections.look.classList.add('story-hidden');
      this.el.footer.classList.remove('story-hidden');
      this.save();
    } else {
      // Setup Opening Paragraph
      this.story.sections.intro.classList.remove('story-hidden');
      this.el.footer.classList.add('story-hidden'); // Setup buttons

      if (this.data.talk) {
        this.story.buttons.talk.classList.add('story-hidden');
      } else {
        this.story.buttons.talk.addEventListener('click', () => {
          this.story.sections.talk.classList.remove('story-hidden');
          this.story.sections.look.classList.add('story-hidden');
          this.story.buttons.talk.classList.add('story-button-hidden');
          this.data.talk = true;
          this.save();
        });
      }

      if (this.data.look) {
        this.story.buttons.look.classList.add('story-hidden');
      } else {
        this.el.nav.classList.add('story-hidden');
        this.story.buttons.look.addEventListener('click', () => {
          this.story.sections.look.classList.remove('story-hidden');
          this.story.sections.talk.classList.add('story-hidden');
          this.story.buttons.look.classList.add('story-button-hidden');
          this.data.talk = true;
          this.data.looked = true;
          this.el.nav.classList.add('story-reveal');
          this.el.nav.classList.remove('story-hidden');
          this.save();
          setTimeout(() => {
            this.el.nav.classList.remove('story-reveal');
          }, 3000);
        });
      }
    }

    this.save();
  }

  reset() {
    this.setupStory();
  }

  load() {
    const save = window.localStorage.getItem('story');
    if (save === null) return;
    this.data = JSON.parse(save);
  }

  save() {
    console.log('SAVING GAME');
    let save = JSON.stringify(this.data);
    window.localStorage.setItem('story', save);
  }

  skipStory() {
    this.data.looked = true;
    this.data.talk = true;
    this.save();
  } ////////////////////////////////////////////////////////////////////////////
  // STORY BUILDER


  addSection(id, title, body) {}

  addButton(id, title) {}

}

var _default = Story;
exports.default = _default;