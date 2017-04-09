import app from './app';

function plugin(Vue) {
  Vue.prototype.$app = app;
}

export default  plugin;
export {app}