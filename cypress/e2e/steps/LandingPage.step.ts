import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Landingpage from "./src/pages/LandingPage";

Given("Login as user {string}", (userName) => {
  Landingpage.loginAs(userName);
});
