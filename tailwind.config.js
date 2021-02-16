module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#540d6e',
        success: '#0ead69',
        error:  {
          DEFAULT: '#ee4266',
          medium: '#de1e49',
          high: '#bf0603'
        },
        warning: {
          DEFAULT: '#ffd23f',
          medium: '#dd9906',
          high: '#f3711d'
        },
        border: {
          DEFAULT: '#9dcff9',
          active: '#2656f0'
        },
        blackboard: {
          DEFAULT: '#22223b',
          lighter: '#434a67'
        },
        steel: {
          '50':  '#f4f7f8',
          '100': '#edf0f4',
          '200': '#f0f4ff',
          '300': '#c5ccdf',
          '400': '#9faace',
          '500': '#7a82bb',
          '600': '#615fa1',
          '700': '#514a83',
          '800': '#423a65',
          '900': '#363050',
        },
      },
      fontFamily: {
        archivo: ['Archivo Black'],
        sans: ['Rubik']
      }
    },
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
}
