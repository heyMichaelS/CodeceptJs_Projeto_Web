Feature('login');

Scenario('Login com sucesso ', async ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 15)
    I.fillField('#user', 'michaelfelipesantoss@gmsil.com')
    I.fillField('#password', '12345678')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail ', async ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'michaelfelipesantoss@gmsil.com')
    I.fillField('#password', '')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)

})

Scenario('Tentando logar sem digitar e-mail e senha ', async ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

})

Scenario('Tentando Logar digitando apenas a senha ', async ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', '')
    I.fillField('#password', '12345678')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 5)

})