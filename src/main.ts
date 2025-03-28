import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './scss/styles.scss';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // Importar os ícones

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // Definir que o Vuetify deve usar a biblioteca MDI
    },
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount('#app');
