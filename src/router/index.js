import VueRouter from "vue-router";
import Vue from 'vue'
import Main from "../components/Main";
import Game from "../components/Game";

Vue.use(VueRouter)

export default new VueRouter(
    {
        routes:
            [
                {path: '/', component: Main},
                {path: '/game', component: Game}]
    })