var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.list = new VideoListView({ collection: this.videos });
    this.videos.on('select', function(clickedVideo) {
      this.videoPlayer = new VideoPlayerView(clickedVideo);
      this.$el.find('.player').html(this.videoPlayer.render());
    }, this)
  },

  render: function() {
    this.videoPlayer = new VideoPlayerView(this.videos.models[0]);
    this.$el.html(this.template());
    this.$el.find('.list').html(this.list.render());
    this.$el.find('.player').html(this.videoPlayer.render());
  },

  template: templateURL('src/templates/app.html')

});
