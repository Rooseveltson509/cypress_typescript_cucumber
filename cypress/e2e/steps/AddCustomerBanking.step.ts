import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AddCustomerPage from "./src/pages/AddCustomerPage";

Given("Add new userLoginTests", () => {
    AddCustomerPage.AddUserBtn();
});

Given("firstName {string}  and lastName {string} and ZipCode {string}", function (fname: string, lname: string, lZipCode: string) {
    AddCustomerPage.fillfName(fname);
    AddCustomerPage.filllName(lname);
    AddCustomerPage.fillpostCd(lZipCode);
    AddCustomerPage.btnAddCustomer();
  }
);
