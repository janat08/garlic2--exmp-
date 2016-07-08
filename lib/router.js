FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "homePage"});
  }
});
