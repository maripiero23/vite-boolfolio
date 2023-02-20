import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap';
import {router} from "./router";

createApp(App)
//Informa vue che voglio usare il router
    .use('router')
    .mount('#app')
