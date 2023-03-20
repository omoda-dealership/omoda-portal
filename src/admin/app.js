import favicon from './extensions/favicon.svg'
import AuthLogo from './extensions/favicon.svg'
import MenuLogo from './extensions/favicon.svg'

export default {
  config: {
    head: {
      favicon: favicon,
    },
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
       // overwrite default theme properties
      colors: {
        buttonPrimary600: '#30363a', // main button colour
        buttonPrimary500: '#6b777c', // main button hover styles colour

        primary100: '#30363a40', // lightopacity background background
        primary600: '#30363a', // avatar background colour + content manager & collection type "right bar active"
        primary200: '#30363a', // border color
        primary400: '#30363a', // 
        primary500: '#30363a', // 
        primary700: '#30363a', // 

        // neutral500: '#30363a', // text ??
        // neutral600: '#30363a', // text ??
      },
       // overwrite light theme properties
      light: {
        colors: {
          buttonPrimary600: '#30363a', // main button colour
          buttonPrimary500: '#6b777c', // main button hover styles colour
          primary100: '#30363a40', // lightopacity background background
          primary600: '#30363a', // avatar background colour + content manager & collection type "right bar active"
          primary200: '#30363a', // border color
          primary400: '#30363a', // 
          primary500: '#30363a', // 
          primary700: '#30363a', // 
  
          // neutral500: '#30363a', // text ??
          // neutral600: '#30363a', // text ??
        },
      },
    },
    translations: {
      en: {
        "app.components.HomePage.welcome.again": "Welcome Omoda!",
        "app.components.LeftMenu.navbrand.title": "Dashboard"
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
