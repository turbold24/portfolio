module.exports = {
  siteTitle: 'Turbold Amar | Software Engineer',
  siteDescription:
    'Turbold Amar is a software engineer based in Ulaanbaatar, Mongolia who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Turbold Amar, Turbold, Amar, turbold24, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://turboldamar.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-111541437-2',
  googleVerification: 'DAWN4GUZ7ZOICFneaK4lFya3KO0V2vq9Y4Fb-g-_PgY',
  name: 'Turbold Amar',
  location: 'Ulaanbaatar, Mongolia',
  email: 'turbold24@gmail.com',
  github: 'https://github.com/turbold24',
  twitterHandle: '@Turbold_Amar',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/turbold24',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/turbold-amar',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/turu_desu',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Turbold_Amar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 100) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 250,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
