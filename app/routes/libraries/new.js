import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('library');
  },
  actions: {
    saveLibrary(newLabrary) {
      newLabrary.save().then(() => this.TransitionTo('libraries'));
    },
    willTransition() {
      let model = this.controller.get('model');

      if(model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
})
