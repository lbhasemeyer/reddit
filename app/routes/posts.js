import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var subId = params.subreddit_id;
    // this is the ajax call
    return Ember.$.getJSON('http://www.reddit.com/r/' + subId + '.json')
      .then(function(res) {
        return res.data.children.map(function(child) {
          return {
            title: child.data.title
          }
        });
      })
  }
});
