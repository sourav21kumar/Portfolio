/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times, serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'russo-one-regular': ['Russo One', 'sans-serif'],
        'pacifico-regular': ['Pacifico', 'cursive'],
        'josefin-slab': ['Josefin Slab', 'serif'],
        'GT-Walsheim-regular': ['GT Walsheim Regular'],
        'GTWalsheim-medium': ['GT Walsheim Medium'],
        'GT-Walsheim-Pro-Bold': ['GT Walsheim Pro Bold']
      },
      backgroundImage: {
        'profile-image': "url('./assets/ProfileImage.jpg')",
        'org-zessta': "url('./assets/zesstaLogo.svg')",
        'org-arealytics': "url('./assets/arealytics.png')"
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'meteor-effect': 'meteor 5s linear infinite',
        'mouse-scroll': 'scroll 1.5s linear infinite',
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        scroll: {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0,
            transform: 'translate(0px,20px)'
          }
        }
      },
      colors: {
        // Background Gradients colors
        'bg-root': '#0D0D0F',
        'bg-navigation-primary': '#131315',
        'bg-radial-gradient-start-color': '#FF1493',
        'bg-radial-gradient-end-color': '#FF7F50',
        'bg-navigation-secondary': 'rgba(0, 0, 0, 0.06)',
        'bg-secondary': 'rgba(255,255,255, 0.02)',
        'bg-timeline': 'rgba(255,255,255,0.06)',
        //  Borders colors
        'border-semi-transparent-rgba': 'rgba(255, 255, 255, 0.01)',
        'border-semi-transparent-navigation-rgba': 'rgba(255, 255, 255, 0.02)',
        // Text Colors
        'color-text-button-gradient': '#333333',
      },

    },
    boxShadow: {
      'shadow-btn-prmary-normal': 'inset 0px 0px 0.5px 1.5px rgb(255 255 255 / 0.2)',
      'shadow-btn-primary-hover': 'inset 0px -2px 1px 1px rgb(255 230 191 / 0.5)',
      'shadow-navigation': 'rgba(255, 255, 255, 0.024) 0px 0.362176px 0.651917px -1px inset, rgba(255, 255, 255, 0.035) 0px 3px 5.4px -2px inset',
      'shadow-navigation-button': 'rgba(255, 255, 255, 0.06) 0px 0.362176px 0.507046px -0.75px inset, rgba(255, 255, 255, 0.118) 0px 3px 4.2px -1.5px inset'
    }
  },
  plugins: []
}
