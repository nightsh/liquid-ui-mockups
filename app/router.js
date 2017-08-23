import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('config', function() {
    this.route('wizard');
    this.route('reset');
    this.route('section', { path: ':section' });
  });
});

export default Router;
