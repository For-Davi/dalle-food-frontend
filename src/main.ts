import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './scss/styles.scss'
import App from './App.vue'
import router from './router';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    // Configurações opcionais, como temas, diretivas, etc.
})
const pinia = createPinia()
const app = createApp(App)

app.use(vuetify)
app.use(router);
app.use(pinia)
app.mount('#app')
