import Vue from 'vue'
import App from './App.vue'
import TodoInput from './components/TodoInput.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoDisplay from './components/TodoDisplay.vue';


Vue.config.productionTip = true
Vue.component('TodoInput', TodoInput);
Vue.component('TodoFilter', TodoFilter);
Vue.component('TodoDisplay', TodoDisplay);


new Vue({
  render: h => h(App),
}).$mount('#app')
