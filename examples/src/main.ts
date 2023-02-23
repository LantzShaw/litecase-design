import { createApp } from 'vue';

// import { Button } from '../../dist/es';

import { Button } from '../../packages';

import App from './App.vue';

const app = createApp(App);

app.use(Button);

app.mount('#app');
