import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    saveCategoryOnRoute(categoryInput) {
      var newCategory = this.store.createRecord('category', categoryInput);
      newCategory.save();
      this.transitionTo('index');
    }
  }
});
