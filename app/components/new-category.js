import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    showCategoryForm() {
      this.set('addNewCategory', true);
    },

    saveCategory() {
      var categoryInput = {
        name: this.get('categoryName')
      };
      this.set('addNewCategory', false);
      this.sendAction('saveCategory', categoryInput);
    }
  }
});
