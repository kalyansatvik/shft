import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
const commonActions = new CommonActions()

Given('I navigate to shift home page with forcebase url and required login', () => {
    commonActions.envLogin('/')
})

And('I validate Modal {string}', (text) => {
    cy.get('div[class*=Modal__is-open]').contains(text)
});

And('I close Modal', (text) => {
    cy.get('div[class*=Modal__close]').click()
});

And('I validate {string} section', (text) => {
    cy.contains(text)
});

And('I validate {string} text', (text) => {
    cy.contains(text)
});

And('I validate {string} link', (text) => {
    cy.contains(text)
});

And('I click on {string} link', (text) => {
    cy.contains(text).click()
});

