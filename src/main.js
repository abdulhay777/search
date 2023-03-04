import { createApp } from 'vue'
import App from './App.vue'

import './scss/style.scss'

const app = createApp(App)

import router from './router'
app.use(router)

app.mount('#app')
