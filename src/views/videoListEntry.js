var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': "select"
  },

  select: function(){
    this.model.select();
  },

  render: function() {
    // debugger
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title').text(this.model.attributes.snippet.title);
    this.$el.find('.video-list-entry-detail').text(this.model.attributes.snippet.description);
    var imgUrl = this.model.attributes.snippet.thumbnails.default.url;
    this.$el.find('.media-object').attr('src', imgUrl);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
