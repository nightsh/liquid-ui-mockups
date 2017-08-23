import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this.transitionTo('config.section', 'overview');
  }
});
