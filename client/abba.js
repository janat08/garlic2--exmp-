import {Vue} from 'meteor/akryum:vue';
import NavBar from '/imports/ui/NavBar.vue';


Template.abba.rendered = function() {
  var vm = new Vue({
    el: '#abba',
    template: '<div><navBar></navBar></div>',
    components: {
      NavBar
    }
  });
}
