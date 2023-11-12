import "cypress-xpath";

class AddCustomerHomePage {
  private _url = "https://www.way2automation.com/angularjs-protractor/banking/#/login";
  private _fName = 'input[ng-model="fName"]';
  private _lName = 'input[ng-model="lName"]';
  private _postCd = 'input[ng-model="postCd"]';
  private _btnSubmit = 'body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > button';

  load(): void {
    cy.visit(this._url);
  }

  AddUserBtn(): void {
    cy.contains("Bank Manager Login").click();
    cy.contains("Add Customer").click();
  }

  fillfName(text: string): void {
    cy.get(this._fName).should('be.visible').type(text)
  }

  filllName(text: string): void {
    cy.get(this._lName).should('be.visible').type(text)
  }
  
  fillpostCd(text: string): void {
    cy.get(this._postCd).should('be.visible').type(text)
  }

  btnAddCustomer(): void {
    cy.get(this._btnSubmit).click();
    cy.wait(5000);
  }
}

export default new AddCustomerHomePage();
