import Ember from 'ember';

// const { computed, observer } = Ember;

export default Ember.Route.extend({
  model(params) {
    this.set('section', params.section);
  },
  setupController(controller) {
    controller.set('section', this.get('section'));
  }
});
