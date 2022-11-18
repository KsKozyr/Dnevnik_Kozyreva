const { I } = inject();

module.exports = {

   // setting locators
   productsContain: '#tbodyid',
   adddedProduct: '//td[ (text())="Samsung galaxy s6"]',
   homeLink: '//a[normalize-space(text())="Home"]',
   deleteButton: ('//a[normalize-space(text())="Delete"]'),

 // introducing methods
 viewCart() {
  I.dontSeeElement(this.productsContain);
},

clickHome() {
  I.click(this.homeLink);
},

 productToCart() {
   I.seeElement(this.adddedProduct);
 },

 deleteProduct() {
  I.click(this.deleteButton);
 }
}
