/// <reference types = "Cypress" />
import { mainHomePage } from "../support/Pages/homepage";

let MainHomePage = new mainHomePage();

beforeEach(() => {
  cy.visit("/");
  cy.acceptCookies();
});

describe("Verify Support Page and Check its elements", () => {
  it("", () => {
    let Store = MainHomePage.homePageHeaderMenu;
    let StorePage =
      MainHomePage.homePageSupportDropdownToSelectProductAndTechnicalSupport;
    Store.getStore.click();
    StorePage.getSupportPageLocator.click({ force: true });
    StorePage.verifyHeader;
    StorePage.textOfThePage;
    StorePage.intelliJIDEA;
  });
});
