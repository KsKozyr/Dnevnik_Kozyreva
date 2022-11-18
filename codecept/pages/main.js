const { I, productPage, cartPage } = inject();

module.exports = {

  
  // setting locators
  fields: {
    registerUsername: '#sign-username',
    registerPassword: '#sign-password',
    loginUsername: '#loginusername',
    loginPassword: '#loginpassword',
    contactEmail: '#recipient-email',
    contactName: '#recipient-name',
    message: '#message-text'
  },

  links: {
    registerLink: '#signin2',
    loginLink: '#login2',
    cartLink: '#cartur',
    infoLink: '//a[normalize-space(text())="About us"]',
    contactLink: '//a[normalize-space(text())="Contact"]',
  },

  buttons: {
    registerButton: '//button[@onclick="register()"]',
    loginButton: '//button[@onclick="logIn()"]',
    sendButton: '//button[@onclick="send()"]',
  },

  productCard: '//a[(text())="Samsung galaxy s6"]',
  modalVideo: '#videoModalLabel ',
 
  // introducing methods
  login(username, password) {
    I.click(this.links.loginLink);
    I.fillField(this.fields.loginUsername, username);
    I.fillField(this.fields.loginPassword, password);
    I.click(this.buttons.loginButton);
  },

  register(username, password) {
    I.click(this.links.registerLink);
    I.fillField(this.fields.registerUsername, username);
    I.fillField(this.fields.registerPassword, password);
    I.click(this.buttons.registerButton);
  },

  sendMessage(email, name, text) {
    I.click(this.links.contactLink);
    I.fillField(this.fields.contactEmail, email);
    I.fillField(this.fields.contactName, name);
    I.fillField(this.fields.message, text);
    I.click(this.buttons.sendButton);
  },

  infoAboutUs () {
    I.click(this.links.infoLink);
    I.seeElement(this.modalVideo);
  },

  addCart() {
    I.click(this.links.cartLink);
    cartPage.viewCart();
    cartPage.clickHome();
    I.click(this.productCard);
    productPage.addToCart();
    I.grabPopupText('Product added'); 
    I.pressKey('Enter');
    productPage.goToCart();
    cartPage.productToCart();
    cartPage.deleteProduct();
  }
}