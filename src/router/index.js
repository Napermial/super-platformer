import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)

const  Main = () => import('../components/Main.vue');
const Game = () => import('../components/Game.vue');

export default new VueRouter(
    {
        routes:
            [
                {path: '/', component: Main},
                {path: '/game', component: Game}]
    })