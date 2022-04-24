import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../pages/Home.vue";


const routes = [
    
    { path:'/', component:Home },

];


const router = new VueRouter({
    routes,
    template: '<App />',
    mode:'history'
});

export default router;