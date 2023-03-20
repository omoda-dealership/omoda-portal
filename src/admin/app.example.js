import favicon from './extensions/favicon.png'
import AuthLogo from './extensions/favicon.png'
import MenuLogo from './extensions/favicon.png'

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
        buttonPrimary600: '#6b777c', // main button colour
        buttonPrimary500: '#B03A2A', // main button hover styles colour

        primary100: '#F5E7E5', // lightopacity background background
        primary600: '#6b777c', // avatar background colour + content manager & collection type "right bar active"
        primary200: '#6b777c', // border color
        primary400: '#6b777c', // 
        primary500: '#6b777c', // 
        primary700: '#6b777c', // 

        // neutral500: '#6b777c', // text ??
        // neutral600: '#6b777c', // text ??
      },
       // overwrite light theme properties
      light: {
        colors: {
          buttonPrimary600: '#6b777c', // main button colour
          buttonPrimary500: '#B03A2A', // main button hover styles colour
          primary100: '#F5E7E5', // lightopacity background background
          primary600: '#6b777c', // avatar background colour + content manager & collection type "right bar active"
          primary200: '#6b777c', // border color
          primary400: '#6b777c', // 
          primary500: '#6b777c', // 
          primary700: '#6b777c', // 
  
          // neutral500: '#6b777c', // text ??
          // neutral600: '#6b777c', // text ??
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
