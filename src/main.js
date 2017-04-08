// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

///imports styles



import 'reset.css';
import 'element-ui/lib/theme-default/index.css'
import './static/scss/base.less'
import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import routes from 'javascripts/router'
import http from 'javascripts/http'
import VueResource from 'vue-resource'
import app from   'javascripts/app'
import ElementUI from 'element-ui'
import store from 'javascripts/store';
Vue.use(Vuex);
Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(app)
http(Vue.http);
const router = new VueRouter({
    routes
});
new Vue({
    router,
    store
}).$mount('#app');

