const { I } = inject();

module.exports = {

  
  // setting locators
    addToCartButton: '//a[@onclick = "addToCart(1)"]',
    cartLinkProduct:'#cartur',

 
  // introducing methods
  addToCart() {
    I.click(this.addToCartButton);
  },

  goToCart() {
    I.click(this.cartLinkProduct);
  }
}
