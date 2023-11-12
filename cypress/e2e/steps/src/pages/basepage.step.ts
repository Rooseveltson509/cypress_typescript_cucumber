import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given("Invoke application Home page", ()=> {
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
});