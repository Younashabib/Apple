/// <reference types ="Cypress" />

export class frequentAskedQuestions {
  get getFAQLocator() {
    return cy
      .get('a[href="https://sales.jetbrains.com/hc/en-gb/]')
      .contains("FAQ");
  }
}
