import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    rentalFormShow() {
      this.set('addNewListing', true);
    },


  saveListingtoCategoryForm() {
    var listingInput = {
      title: this.get('title') ? this.get('title') : "",
      description: this.get('description') ? this.get('description') : "",
      image: this.get('image') ? this.get('image') : "",
      cost: parseInt(this.get('cost'))
    };
    this.set('addNewCategory', false);
    this.sendAction('saveListingtoCategoryForm', listingInput);
    }
  }
});
