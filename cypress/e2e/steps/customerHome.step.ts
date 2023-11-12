import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import customerHomePage from './src/pages/CustomerHomePage'

Given("Deposit {int} and verify balance",  (depositAmount:number)=> {
    customerHomePage.depositAmount(depositAmount)
});