import { createApp } from 'vue';
import App from './App.vue';
import router from './router/01_router.js';
import NestedRoute from './router/02_nestedRoute.js';
import 'tailwindcss/tailwind.css';

const app = createApp(App)

// 라우터는 중첩해서 달지 않는다
// app.use(router)
app.use(NestedRoute)

app.mount('#app')

