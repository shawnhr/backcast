var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.listenTo(this, 'all', this.render);
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('h3').text(this.attributes.snippet.title);
    this.$el.find('.video-player-details div').text(this.attributes.snippet.description);
    this.$el.find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + this.attributes.id)

    return this.$el;
  },



  template: templateURL('src/templates/videoPlayer.html')

});
