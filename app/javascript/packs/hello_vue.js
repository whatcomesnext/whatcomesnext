import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

//   var element = document.getElementById("user-form")

//   if (element != null) {
    // var user = JSON.parse(element.dataset.user)

    var app = new Vue({
      el: '#app',
      data: function() {
        return { user: 'testdata' }
      }
    });
//   }
});