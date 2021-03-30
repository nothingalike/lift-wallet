import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: {
          base: "#55bb46",
          lighten5: "#e7ffcd",
          lighten4: "#c9ffb1",
          lighten3: "#acff96",
          lighten2: "#8ff47b",
          lighten1: "#72d760",
          darken1: "#369f2b",
          darken2: "#08850c",
          darken3: "#006b00",
          darken4: "#005100",
        },
        secondary: {
          base: "#A0B9C1",
          lighten5: "#ffffff",
          lighten4: "#ffffff",
          lighten3: "#f4ffff",
          lighten2: "#d7f1ff",
          lighten1: "#bbd5e4",
          darken1: "#869ead",
          darken2: "#6c8492",
          darken3: "#536b78",
          darken4: "#3b5360",
        },
        accent: {
          base: "#048ba8",
          lighten5: "#b6ffff",
          lighten4: "#98f9ff",
          lighten3: "#7addfc",
          lighten2: "#5cc1df",
          lighten1: "#3ba5c3",
          darken1: "#00718e",
          darken2: "#005974",
          darken3: "#00415b",
          darken4: "#002b44",
        },
        error: {
          base: "#ef476f",
          lighten5: "#ffd9f5",
          lighten4: "#ffbcd9",
          lighten3: "#ff9fbd",
          lighten2: "#ff82a2",
          lighten1: "#ff6588",
          darken1: "#d02457",
          darken2: "#b10040",
          darken3: "#92002a",
          darken4: "#740017",
        },
        info: {
          base: "#2196f3",
          lighten5: "#d4ffff",
          lighten4: "#b5ffff",
          lighten3: "#95e8ff",
          lighten2: "#75ccff",
          lighten1: "#51b0ff",
          darken1: "#007cd6",
          darken2: "#0064ba",
          darken3: "#004d9f",
          darken4: "#003784",
        },
        success: {
          base: "#06d6a0",
          lighten5: "#caffff",
          lighten4: "#aaffff",
          lighten3: "#8bfff3",
          lighten2: "#6affd7",
          lighten1: "#45f3bb",
          darken1: "#00ba86",
          darken2: "#009e6c",
          darken3: "#008354",
          darken4: "#00693d",
        },
        warning: {
          base: "#ffd166",
          lighten5: "#fffff1",
          lighten4: "#ffffd4",
          lighten3: "#ffffb8",
          lighten2: "#ffff9c",
          lighten1: "#ffed81",
          darken1: "#e1b64c",
          darken2: "#c39b31",
          darken3: "#a68111",
          darken4: "#896800",
        },
        background: {
          base: "#ffffff",
          lighten5: "#ffffff",
          lighten4: "#ffffff",
          lighten3: "#ffffff",
          lighten2: "#ffffff",
          lighten1: "#ffffff",
          darken1: "#e2e2e2",
          darken2: "#c6c6c6",
          darken3: "#ababab",
          darken4: "#919191",
        },
        surface: {
          base: "#f2f5f8",
          lighten5: "#ffffff",
          lighten4: "#ffffff",
          lighten3: "#ffffff",
          lighten2: "#ffffff",
          lighten1: "#ffffff",
          darken1: "#d6d9db",
          darken2: "#babdc0",
          darken3: "#9fa2a5",
          darken4: "#85888a",
        },
      },
    },
  },
});
