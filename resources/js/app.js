/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('@popperjs/core');
// import { Popper } from 'popper.js';
Window.Popper = Popper;

// KODE SATU
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

window.Vue = require('vue');

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import Index from './Components/Index.vue'
import Create from './Components/Create.vue'
import Read from './components/Read.vue'


// import { popper } from '@popperjs/core';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// const routes = [
//     { path: '/foo', component: Foo },
//     { path: '/bar', component: Bar }
// ]
const routes = [
    { path: '/', component: Index },
    { path: '/Create', component: Create }, { path: '/posts' },
    { path: '/read/:id', component: Read, name: 'readPost' }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

// const app = new Vue({
//     el: '#app',
// });

const app = new Vue({
    router
}).$mount('#app')