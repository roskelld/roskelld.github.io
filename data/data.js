'use strict';

const data = [
{
  type: 'projects',
  id: 'edmonton-bitcoin-association',
  title: 'Edmonton Bitcoin Association',
  platforms: [],
  genre: 'Education',
  technology: ['Bitcoin', 'Lightning Network'],
  release: '2018',
  company: 'Edmonton Bitcoin Association',
  publisher: '',
  team_size: 7,
  dev_time: '',
  role: ['Director'],
  work: ['Presenting', 'Management', 'Social Media', 'Organizer'],
  trailer: '',
  embed: ``,
  link: 'https://edmontonbitcoin.org',
  description: `<p>In January 2017 a meetup group was formed to bring people together in Edmonton to talk about Bitcoin. Since that time the <a href="https://www.meetup.com/yegbitcoin">Meetup.com</a> group has grown to over 700 members.</p>
                <p>The core organizers decided that to help improve the setup we would form a company structure to allow us to create a more formalized approach to the meetup, extending the number of monthly events, adding more content, and bringing in a wider range of guest speakers.</p>
                <p>We currently host a range of education, networking and technical growth events per month, covering the complete beginner-to-advanced range of experience levels.</p>`
},
{
  type: 'projects',
  id: 'lna',
  title: 'Lightning Network Arcade ⚡',
  platforms: ['RaspberryPi', 'Bitcoin', 'Lightning Network'],
  genre: 'Entertainment',
  technology: ['Raspberry Pi', 'Arduino', 'ESP8266', 'Electronics', 'C++', 'e-Paper'],
  release: '2019',
  company: '',
  publisher: '',
  team_size: 1,
  dev_time: '3 months',
  role: ['Lead Designer', 'Programmer'],
  work: [],
  trailer: '',
  embed: ``,
  link: '',
  description: `<p>A few years ago I built a small Arcade Cabinet based on the RaspberryPi and custom MAME software <a href="https://retropie.org.uk/">RetroPie</a>, and recently have started modifying it to add a payment system using the Bitcoin <a href="https://lightning.network/">Lightning Network protocol</a>.</p>
        <p>Attached to the machine is a <a href="https://www.nodemcu.com/index_en.html">NODE MCU ESP8266</a> Microcontroller unit (MCU) with WiFi and an <a href="https://www.waveshare.com/1.54inch-e-paper-module.htm">e-Paper screen</a>. The MCU connects to <a href="https://acinq.co/">ACINQ Strike</a> and requests a Lightning Network Invoice, then generates a QR code for the e-Paper screen. A User can then use their own LN enabled Wallet on a phone and scan the QR code. Once a payment signal has been received a credit is issued to MAME.</p>`
}, {
  type: 'projects',
  id: 'wolf3d',
  title: 'Wolfenstein 3D Web VR',
  platforms: ['Web', 'Mobile', 'WebVR'],
  genre: 'Entertainment',
  technology: ['Three.js', 'A-Frame', 'Javascript', 'HTML', 'css', 'Atom'],
  release: '2017',
  company: '',
  publisher: '',
  team_size: 1,
  dev_time: '3 Days',
  role: ['Lead Designer', 'Programmer'],
  work: ['Programming', 'Locomotion', 'Systems'],
  trailer: 'https://www.youtube.com/watch?v=vHKVKo0JcFA&',
  embed: ``,
  link: '/projects/wolf3d',
  description: `<p>I made this test project whilst I was exploring the possibilities of WebVR tech. This was the second project I worked on and I wanted to test out things like collision, interaction, sound. The idea of using Wolfenstein 3D came about because I wanted something I was familiar with so I could test my results against the existing game. Plus I wanted to see what it felt like to walk around the first FPS game I ever played but in VR.</p>
                <p>This was an interesting experiment. The A-Frame library allows you to create 3D VR enabled spaces using HTML markup, which is great fun though due to it relying on the DOM to create worlds it's not performant for use for spaces which can't be held comfortably in memory at one time; I believe that Wolfenstein 3D could well work as the levels are simple and small enough.</p>
                <a href="https://aframe.io/">A-Frame</a>`,
}, {
 type: 'projects',
 id: 'bubble-fall',
 title: 'Bubble Fall',
 platforms: ['Web', 'Mobile' ],
 genre: 'Entertainment',
 technology: ['Flash', 'Photoshop', 'Actionscript', 'Audacity'],
 release: '2010',
 company: '',
 publisher: '',
 team_size: 1,
 dev_time: '7 Days',
 role: ['Lead Designer'],
 work: ['Programming', 'Animation', 'Audio', 'Art', 'Design'],
 trailer: 'https://www.youtube.com/watch?v=1udX_m3nE2s',
 images: [''],
 embed: ``,
 link: '',
 description: `<p>After the release of the iPhone and iPod Touch I began to explore the platform and I develop a number of game ideas designed around the touch screen. The goal with most of them was to try and play to the strengths of the device rather than mimic a traditional pad control.</p>
               <p>Bubblefall is one of the ideas that I produced, and prior to developing it on the iPhone I experimented by creating a quick animatic in Flash, to help me figure out the motion and the assets I'd need for the game.</p>
               <p>I also elected to use the Gameboy color palette of green tones, partly because the screen was much nicer than the old Gameboy screen so I wanted to see how a game in that style would look, and also I wanted to make sure I was focusing on the gameplay experience and not getting sidetracked by the graphics.</p>
               <h5>Gameplay</h5>
               <p>The premise of Bubble Fall is to get a high score by collecting the coins which appear on the screen in random waves. To do this the player must place bubbles into the level in order to direct the Hero character. The game finishes if the Hero lands on the ground or gets hit by any of the hazards that spawn in the level. Hazards will also pop bubbles if they touch. The difficulty of the game increases over time as more hazards take up space on the level, making it more challenging to place bubbles and guide the Hero to the coins. Directing the Hero comes from the angle he lands on the Bubble, the positioning of the Bubble and its size. This aspect of the game requires some learning in order to be able to perfect directing the Hero to the coins and navigating the hazards.</p>`,
}, {
  type: 'applications',
  id: 'spark',
  title: 'Sparkshot',
  platforms: ['Web', 'Lightning Network'],
  genre: 'Entertainment',
  technology: ['Javascript', 'Python', 'HTML', 'WebSockets', 'CSS', 'Photoshop', 'Lightning Network'],
  release: '2019',
  company: 'PrimeVR',
  publisher: 'PrimeVR',
  team_size: 2,
  dev_time: '3 months',
  role: ['Lead Designer', 'Programmer', 'Artist'],
  work: ['Design', 'UI System', 'UX Design', 'Textures'],
  trailer: '',
  embed: ``,
  link: 'https://sparkshot.io',
  description: `<p>Sparkshot is a <a href="https://blog.lightning.engineering/posts/2018/05/02/lightning-ux.html">Lightning Network</a> art platform upon which artists can upload their original artwork to the site and it is launched in a blank state. Users then purchase pixels and add personalised message using Bitcoin over the Lightning Network. This process slowly reveals the art whilst also adding a meta layer on top for each individual purchase. Observers can then view both the art as it appears as well as look at the posted messages and shapes of pixel groups.<p>
                <h5>The Lightning Network</h5>
                <p>The Lightning Network protocol allows for instant transactions to happen at near-zero fee, and in amounts as tiny as a fraction of a cent, achieving nano-scale payments across the internet with no requirement for a 3rd party payment provider like PayPal or Square.</p>
                <h5>The Goal</h5>
                <p>We understand that this is extremely new technology which requires a serious level of onboarding before it can be considered a viable business platform, however that process has to begin somewhere. So we set about building an application that could use an already popular medium such as images and adapt it into something that cannot be done with existing payment systems (sub-cent transactions aren't possible via existing payment services). It also had to be something that could grow but didn't require a large userbase in order for individuals to see the fun.</p>`,
}, {
  type: 'applications',
  id: 'sparkw',
  title: 'Sparkshot Website',
  platforms: ['Web'],
  genre: 'Education',
  technology: ['Javascript', 'HTML', 'CSS', 'Atom', 'Photoshop', 'Illustrator'],
  release: '2018',
  company: 'PrimeVR',
  publisher: 'PrimeVR',
  team_size: 2,
  dev_time: '2 Weeks',
  role: ['Lead Designer', 'Programmer', 'Artist'],
  work: ['Design', 'UI System', 'UX Design', 'Textures'],
  trailer: '',
  embed: ``,
  link: 'https://sparkshot.io',
  description: `<p>Prior to the release of Sparkshot our Lightning Network Art Platform, we wanted to launch something early so we could point people to so we created a website to help inform of the goal of the project as well as provide updates on its development.</p>
  <h5>Development</h5>
  <p>I produced the website using the <a href="https://materializecss.com">Materialize</a> framework for the layout, buttons and other elements. Beyond that I generated all the graphics, the project logo, and built the interactive functionality using vanilla Javascript.</p>`,
}, {
  type: 'applications',
  id: 'fork',
  title: 'Forkdrop',
  platforms: ['Web'],
  genre: 'Education',
  technology: ['Javascript', 'HTML', 'CSS', 'Atom'],
  release: '2018',
  company: 'PrimeVR',
  publisher: 'PrimeVR',
  team_size: 2,
  dev_time: '3 Months',
  role: ['Lead Designer', 'Programmer', 'Artist'],
  work: ['Design', 'UI System', 'UX Design', 'Textures'],
  trailer: '',
  embed: ``,
  link: 'https://forkdrop.io',
  description: ``,
}, {
  type: 'games',
  id: 'ddr',
  title: 'Dash Dash Run!',
  platforms: ['HTC Vive', 'Oculus Rift', 'Google Daydream'],
  genre: 'Sports',
  technology: ['Unity', 'VRTK', 'Blender', 'Photoshop'],
  release: 'August 2017',
  company: 'PrimeVR',
  publisher: 'PrimeVR / Steam',
  team_size: 3,
  dev_time: '3 months',
  role: ['Lead Designer', 'Programmer', 'Artist', 'Modeller'],
  work: ['Game Design', 'Level Layouts', 'Level Art', 'Textures', 'Game Controls', 'Locomotion', 'UI System', 'Game Loop', 'Game Balancing', 'Testing', 'Sound', 'Animation', '3D Models'],
  trailer: 'https://www.youtube.com/watch?v=3lWZAOnabWw',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3lWZAOnabWw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: 'Our team wanted to take on the challenge of producing a fun game that gave an experience unique to VR.<br> The concept of using the physical motion of movings ones arms to simulate running became the basis of the title.'
}, {
  type: 'games',
  id: 'mea',
  title: 'Mass Effect Andromeda',
  platforms: ['PC', 'PS4', 'Xbox One'],
  genre: 'Role-Playing',
  technology: ['Frostbite'],
  release: 'March 2017',
  company: 'BioWare',
  publisher: 'EA',
  team_size: 477,
  dev_time: '1 year',
  role: ['Senior Designer'],
  work: ['Quest Design', 'Gameplay Systems', 'Level Design', 'Puzzle Design', 'Open World Design', 'Combat Layout', 'Level Scripting', 'Documentation', 'Technical Design', 'Story Development'],
  trailer: 'https://www.youtube.com/watch?v=X6PJEmEHIaY',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/X6PJEmEHIaY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'daitres',
  title: 'Dragon Age: Inquisition - Trespasser',
  platforms: ['PC', 'PS4', 'Xbox One'],
  genre: 'Role-Playing',
  technology: ['Frostbite'],
  release: 'September 2015',
  company: 'BioWare',
  publisher: 'EA',
  team_size: 300,
  dev_time: '5 months',
  role: ['Senior Designer'],
  work: ['Quest Design', 'Gameplay Systems', 'Level Design', 'Puzzle Design', 'Combat Layout', 'Level Scripting', 'Documentation', 'Technical Design', 'Boss Fight'],
  trailer: 'https://www.youtube.com/watch?v=bUQKGFMfXx0',
  website: 'https://www.ea.com/games/dragon-age/dragon-age-inquisition/dlc/single-player/trespasser',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bUQKGFMfXx0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'daihak',
  title: 'Dragon Age: Inquisition - Jaws of Hakkon',
  platforms: ['PC', 'PS3', 'PS4', 'Xbox 360', 'Xbox One'],
  genre: 'Role-Playing',
  technology: ['Frostbite'],
  release: 'March 2015',
  company: 'BioWare',
  publisher: 'EA',
  team_size: 317,
  dev_time: '3 months',
  role: ['Senior Designer'],
  work: ['Quest Design', 'Level Design', 'Puzzle Design', 'Open World Design', 'Combat Layout', 'Level Scripting', 'Documentation'],
  trailer: 'https://www.youtube.com/watch?v=LwIPATzk9fI',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LwIPATzk9fI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'dai',
  title: 'Dragon Age: Inquisition',
  platforms: ['PC', 'PS3', 'PS4', 'Xbox 360', 'Xbox One'],
  genre: 'Role-Playing',
  technology: ['Frostbite'],
  release: 'November 2014',
  company: 'BioWare',
  publisher: 'EA',
  team_size: 476,
  dev_time: '3 years 4 months',
  role: ['Senior Designer'],
  work: ['Quest Design', 'Gameplay Systems', 'Level Design', 'Puzzle Design', 'Open World Design', 'Combat Layout', 'Level Scripting', 'Documentation'],
  trailer: 'https://www.youtube.com/watch?v=jJqxfkgSUog',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jJqxfkgSUog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'hoop',
  title: 'Hoopathon',
  platforms: ['iOS'],
  genre: 'Sports',
  technology: ['In-house'],
  release: 'March 2010',
  company: 'Toolbox Design',
  publisher: 'Comic Relief',
  team_size: 4,
  dev_time: '24 hours',
  role: ['Lead Designer'],
  work: ['Game Design', 'Game Controls', 'Level Design', 'UI System', 'Balancing', 'Scoring Sytem'],
  trailer: '',
  embed: '',
  description: ``
}, {
    type: 'games',
    id: 'egg-catcher',
    title: 'Egg Catcher',
    platforms: ['iOS'],
    genre: 'Puzzle',
    technology: ['In-house'],
    release: 'N/A',
    company: 'Toolbox Design',
    publisher: 'N/A',
    team_size: 4,
    dev_time: '2 Months',
    role: ['Senior Designer'],
    work: ['Game Design', 'Game Controls', 'Level Design', 'UI System', 'Balancing', 'Scoring Sytem'],
    trailer: 'https://www.youtube.com/watch?v=WO4AP72_QaA',
    embed: '',
    description: ``
}, {
  type: 'games',
  id: 'world-in-conflict',
  title: 'World in Conflict: Soviet Assault',
  platforms: ['360'],
  genre: 'Real Time Strategy',
  technology: ['MassTech'],
  release: 'N/A',
  company: 'Massive Entertainment / Swordfish Studios',
  publisher: 'Sierra Entertainment',
  team_size: 100,
  dev_time: '6 Months',
  role: ['Senior Designer'],
  work: ['Game Controls', 'UI System', 'Frontend Design', 'UX Design'],
  trailer: 'https://www.youtube.com/watch?v=e45Q-f3RxBI',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/e45Q-f3RxBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'made-man',
  title: 'Made Man',
  platforms: ['PC', 'PS2'],
  genre: '3rd Person Shooter',
  technology: ['RenderWare'],
  release: 'April 2007',
  company: 'SilverBack Studios',
  publisher: 'Mastertronic / Aspyr',
  team_size: 24,
  dev_time: '1 year 5 months',
  role: ['Senior Level Designer'],
  work: ['Level Design', 'Combat Design', 'Level Scripting', 'Boss Fight', 'Contract Pitching'],
  trailer: 'https://www.youtube.com/watch?v=dbpi8GIcmGQ',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dbpi8GIcmGQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `Employed to redevelop and script fifteen of the game's seventeen levels after the title was picked up by Silverback Studios after the fall of the company Acclaim. <br>The work involved freshening up the level designs to improve quality, and to adapt level design into the rewritten storyline, as well as meeting with prospective publishers and giving presentations of the game prior to it being signed. <br>Core tasks included using the in-house editor for enemy placement, AI scripting, objective triggers, cutscene design/scripting, boss fight design and implementation, sound effect recording and performing, as well as liaising with the art team on any environmental changes and programming team on control and gameplay improvements.`
}, {
  type: 'games',
  id: 'nak',
  title: 'Naked War',
  platforms: ['PC'],
  genre: 'Turn Based Strategy',
  technology: ['In-house'],
  release: 'October 2006',
  company: 'The Pickford Brothers',
  publisher: 'Zee Three',
  team_size: 5,
  dev_time: '1 Year',
  role: ['Level Designer'],
  work: ['Level Design'],
  trailer: 'https://www.youtube.com/watch?v=nOKVbB9TLT8&t=1s',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nOKVbB9TLT8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'sup',
  title: 'Supernaturals',
  platforms: ['Gizmondo'],
  genre: 'Strategy',
  technology: ['In-house'],
  release: 'N/A',
  company: 'Gizmondo Games',
  publisher: 'N/A',
  team_size: 12,
  dev_time: '9 months',
  role: ['Senior Designer'],
  work: ['Gameplay Design', 'Level Design', 'Game Controls', 'UX Design', 'UI Design', 'Combat Design', 'Level Scripting', 'Balancing', 'Scoring System'],
  trailer: 'https://www.youtube.com/watch?v=EB5dFdqQBi0',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EB5dFdqQBi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'mom',
  title: 'Momma Can I Mow the Lawn',
  platforms: ['Xbox'],
  genre: 'Arcade',
  technology: ['In-house'],
  release: 'N/A',
  company: 'Warthog Games',
  publisher: 'N/A',
  team_size: 8,
  dev_time: '3 months',
  role: ['Senior Designer'],
  work: ['Level Design', 'Gameplay Design', 'Game Controls', 'UX Design'],
  trailer: 'https://www.youtube.com/watch?v=8mDgSg4hH60',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8mDgSg4hH60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'ani',
  title: 'Animainiacs: The Great Edgar Hunt',
  platforms: ['Gamecube', 'Xbox', 'PS2'],
  genre: 'Action',
  technology: ['In-house'],
  release: 'July 2005',
  company: 'Warthog Games',
  publisher: 'Ignition Entertainment',
  team_size: 30,
  dev_time: '1 year',
  role: ['Senior Designer'],
  work: ['Level Design', 'Level Scripting', 'Cutscene Scripting'],
  trailer: 'https://www.youtube.com/watch?v=MNAFU-jgE7Y',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MNAFU-jgE7Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'lon',
  title: 'Looney Tunes: Back in Action',
  platforms: ['Gamecube', 'PS2'],
  genre: 'Action',
  technology: ['In-house'],
  release: 'November 2003',
  company: 'Warthog Games',
  publisher: 'EA / Warner Bros.',
  team_size: 54,
  dev_time: '1 year',
  role: ['Senior Designer'],
  work: ['Level Design', 'Level Modelling', 'Gameplay Design', 'Puzzle Design', 'Combat Design', 'Cutscene Scripting', 'Level Scripting'],
  trailer: 'https://www.youtube.com/watch?v=jytzJqfQHbw',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jytzJqfQHbw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'xls',
  title: 'LEGO Island: Xtreme Stunts',
  platforms: ['PC', 'PS2'],
  genre: 'Action',
  technology: ['In-house'],
  release: 'November 2002',
  company: 'Silicon Dreams',
  publisher: 'EA',
  team_size: 44,
  dev_time: '1 year 7 months',
  role: ['Lead Designer', 'Producer'],
  work: ['Concept Design', 'Gameplay Design', 'Level Design', 'Combat Design', 'Vehicle Design', 'Boss Fight', 'Vocal Script', 'Story', 'Quest Design', 'Team Management', 'Publisher Management', 'UI System', 'UX Design', 'Documentation', 'Voice Acting Direction', 'Recruitment'],
  trailer: 'https://www.youtube.com/watch?v=W8aPSUe2W48',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W8aPSUe2W48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'als',
  title: 'LEGO Island: Xtreme Stunts',
  platforms: ['Gameboy Advance'],
  genre: 'Action',
  technology: ['In-house'],
  release: 'November 2002',
  company: 'Silicon Dreams',
  publisher: 'EA',
  team_size: 14,
  dev_time: '1 year',
  role: ['Senior Designer'],
  work: ['Concept Design', 'Gameplay Design', 'Level Design', 'UI Design', 'Level Scripting'],
  trailer: 'https://www.youtube.com/watch?v=-iTPrgfo-vY',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-iTPrgfo-vY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'li2',
  title: 'LEGO Island 2: Brickster\'s Revenge',
  platforms: ['Gameboy Advance'],
  genre: 'Action',
  technology: ['In-house'],
  release: 'September 2001',
  company: 'Silicon Dreams',
  publisher: 'LEGO Media',
  team_size: 14,
  dev_time: '1 year',
  role: ['Designer'],
  work: ['Level Design', 'Gameplay Design', 'Level Scripting', 'UI Design', 'UX Design', 'Development Tools Design'],
  trailer: 'https://www.youtube.com/watch?v=Ja_nR1sSgUc',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ja_nR1sSgUc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}, {
  type: 'games',
  id: 'dow',
  title: 'Dogs of War',
  platforms: ['PC'],
  genre: 'Real Time Strategy',
  technology: ['In-House'],
  release: 'June 2000',
  company: 'Silicon Dreams',
  publisher: 'Take-Two Interactive',
  team_size: 24,
  dev_time: '8 Months',
  role: ['Lead Tester'],
  work: ['Level Testing', 'UI Testing', 'Multiplayer Testing', 'Team Management', 'Game Guide Writing', 'Build Compiling'],
  trailer: 'https://www.youtube.com/watch?v=tIHYeDl6-qk',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tIHYeDl6-qk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: 'Dogs of War was my first time leading a position, which required me to balance my time between performing QA tasks for the development team and managing the QA team and organzing work loads. <br> This project gave me a great deal of experience in working along side each of the different disciplines within game development, learning more about how they worked and how they could be best supported to ensure smooth progress. <br>It was also my first time working with publishers, who I liased with to showcase the current game build, answer questions on behalf of the team and supporting their work in gathering information for the marketting side, such as creating and supplying screenshots and writing supporting documentation.'
}, {
  type: 'games',
  id: 'mia',
  title: 'Mia Hamm Soccer 64',
  platforms: ['N64'],
  genre: 'Sports',
  technology: ['In-House'],
  release: 'November 2000',
  company: 'DC Studios',
  publisher: 'SouthPeak Interactive',
  team_size: 25,
  dev_time: '2 months',
  role: ['Tester'],
  work: ['Front-End Testing', 'UI Testing', 'Multiplayer Testing'],
  trailer: 'https://www.youtube.com/watch?v=S5AJLvEUPGE',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/S5AJLvEUPGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: 'Originally developed by Silicon Dreams as Michael Owen\'s World League Soccer, the game was converted for a North American audience. My role was to help test out the build in preperation for submitting to Nintendo for certification.'
}, {
  type: 'games',
  id: 'ucl',
  title: 'UEFA Champions League 1999/2000',
  platforms: ['PC', 'PS1'],
  genre: 'Sports',
  technology: ['In-House'],
  release: '2000',
  company: 'Silicon Dreams',
  publisher: 'Eidos Interactive',
  team_size: 50,
  dev_time: '2 months',
  role: ['Tester'],
  work: ['Multiplayer Testing'],
  trailer: 'https://www.youtube.com/watch?v=YUr3D32rluE',
  embed: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YUr3D32rluE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: ''
}];
