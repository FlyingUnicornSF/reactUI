import Backbone from 'backbone';

var AppView = Backbone.View.extend({
  el: '#backbone_entry',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html("<p>Hello Backbone!</p>");
  }
});

var appView = new AppView();

