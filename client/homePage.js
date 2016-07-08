import homePage from '/imports/ui/homePage.vue';
Template.vue_demo.rendered = function() {
  var vm = new Vue({
    el: '#homePage',
    template: '<div><homePage></homePage></div>',
    components: {
      homePage
    }
  });
}
