export default class DuckduckgoPage {
  private _url = 'https://duckduckgo.com/'

  private _inputSearch = '#searchbox_input'
  private _btnSearch = '#searchbox_input'
  private _resultSearch = '#links'

  load(): void {
    cy.visit(this._url)
    cy.get('body').should('be.visible')
  }

  fillSearch(text: string): void {
    cy.get(this._inputSearch).should('be.visible').type(text)
  }

  search(): void {
    cy.get(this._btnSearch).should('be.visible').click()
  }

  resultText(callback: (text: string) => void): void {
    cy.get(this._resultSearch, { timeout: 20000 }).then(($elem) => {
      callback($elem.text())
    })
  }
}
