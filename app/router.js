import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
// it knows to add subreddit_id to the params for the model
  this.resource('posts', { path: '/r/:subreddit_id' });
});

export default Router;
