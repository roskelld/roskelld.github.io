'use strict';

class Story {
    constructor() {
        // Story
        this.story = {
            sections: {
                intro:      document.querySelector('#story-intro'),
                talk:       document.querySelector('#story-talk'),
                look:       document.querySelector('#story-look'),
            },
            buttons: {
                talk:      document.querySelector('#story-talk-btn'),
                look:      document.querySelector('#story-look-btn'),
            }
        }

        this.setupStory();
    }

    setupStory() {

        // Setup buttons
        this.story.buttons.talk.addEventListener( 'click', () => {
            this.story.sections.talk.classList.remove( 'story-hidden' );
            this.story.sections.look.classList.add( 'story-hidden' );
        });

        this.story.buttons.look.addEventListener( 'click', () => {
            this.story.sections.look.classList.remove( 'story-hidden' );
            this.story.sections.talk.classList.add( 'story-hidden' );

        });
    }

    reset() {
            this.story.sections.talk.classList.add( 'story-hidden' );
            this.story.sections.look.classList.add( 'story-hidden' );
    }

}

export default Story;
