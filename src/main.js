import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueResponsiveness, Presets } from 'vue-responsiveness'

const app = createApp(App)


// app.use(router)
app
  .use(VueResponsiveness, Presets.Bulma)
  .mount("#app");
