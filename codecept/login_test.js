Feature('login');

//import faker from "@faker-js/faker";
const faker = require("@faker-js/faker")

Scenario('Авторизация', ({ I, mainPage }) => {
    I.amOnPage('https://www.demoblaze.com/index.html');
    mainPage.login('koz123', 'qwerty');
    I.see('Welcome koz123');
});

Scenario('Регистрация', ({ I, mainPage }) => {
    I.amOnPage('https://www.demoblaze.com/index.html');
    mainPage.register('kozyr', 'qwerty');
    I.grabPopupText('Sign up successful.');

});

Scenario('Обратная связь', ({ I, mainPage }) => {
    I.amOnPage('https://www.demoblaze.com/index.html');
    mainPage.sendMessage('qwerty@mail.com', 'qwerty123', 'text');
    I.grabPopupText('Thanks for the message!!'); 

});

Scenario.only('О нас', ({ I, mainPage }) => {
    I.amOnPage('https://www.demoblaze.com/index.html');
    mainPage.infoAboutUs();
    I.see('About us');

});

Scenario('добавление в корзину', ({ I, mainPage }) => {
    I.amOnPage('https://www.demoblaze.com/index.html');
    mainPage.addCart();
});

