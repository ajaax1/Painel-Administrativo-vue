import { createApp } from 'vue';
import './assets/main.css';
import mitt from 'mitt';
import App from './App.vue';
import { createRouter, createWebHashHistory } from "vue-router";
import RouteCrudAdm from './views/RouteCrudAdm.vue'; 
import RouteCrudNewsPaper from './views/RouteCrudNewsPaper.vue';  
import Home from './views/Home.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    { path: '/', name: 'Home', component: Home},
    { path: '/CrudAdm', name: 'RouteCrudAdm', component: RouteCrudAdm },
    { path: '/CrudNewsPaper', name: 'RouteCrudNewsPaper', component: RouteCrudNewsPaper },
  ]
});

const eventBus = mitt();
createApp(App).use(router).provide('eventBus', eventBus).mount('#app');
