import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight, faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

app.use(router)
library.add(faChevronLeft, faChevronRight, faEnvelope, faPhone);
app.mount('#app')
