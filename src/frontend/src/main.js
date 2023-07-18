import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCZfcMjPGjw-veCU51eI8SkTYlvOUDjO24',
        libraries: 'places',
    },
})

app.mount('#app')

