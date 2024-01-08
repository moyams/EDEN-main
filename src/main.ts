import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "../node_modules/mapbox-gl/dist/mapbox-gl.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
