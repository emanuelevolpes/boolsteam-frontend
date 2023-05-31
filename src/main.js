import { createApp } from 'vue'
import { router } from './router';
import './assets/scss/main.scss';
import * as bootstrap from 'bootstrap';

import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


library.add(faBookmark)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
