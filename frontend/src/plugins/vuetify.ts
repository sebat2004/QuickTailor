import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const myCustomTheme = {
    dark: false,
    colors: {
      primary: '#223549',
      secondary: '#E7E9EA',
      accent: '#3B6592',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    }
}

export default createVuetify({
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme: myCustomTheme,
      },
    },
  })