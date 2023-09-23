/// <reference types = "Cypress" />

import { mainHomePage } from "../support/Pages/homepage";
beforeEach(() => {
  cy.visit("/");
});

let MainHomePage = new mainHomePage();

describe("Verify Contact Us Page", () => {
  it("Navigate to Contact Us Page verify empty text fields", () => {
    MainHomePage.homePageStoreDropdownToSelectContactSales.getContactSalesLocator.click(
      { force: true }
    );
    MainHomePage.homePageStoreDropdownToSelectContactSales
      .getFormOnContactUsPage;

    MainHomePage.homePageStoreDropdownToSelectContactSales.verifyAllTextOfContactUsPage();
    MainHomePage.homePageStoreDropdownToSelectContactSales.verifyErrorMessagesonEmptyForm();
  });
});
