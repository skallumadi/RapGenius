window.RapGenius = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    var tracks = new RapGenius.Collections.Tracks();

    tracks.fetch({
      success: function () {
        new RapGenius.Routers.TracksRouter(tracks, $rootEl);
        Backbone.history.start();
      },
      error: function () {
        console.log('Failed to fetch.');
      }
    });
  }
};

$(document).ready(function(){
  RapGenius.initialize();
});
