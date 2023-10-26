/// <reference types ="Cypress" />

import { mainHomePage } from "../support/Pages/homepage";
let MainHomePage = new mainHomePage();

beforeEach(() => {
  // let this is my jdfjckd
  cy.visit("/");
  cy.acceptCookies();
});

describe("Test Home Page Elements", () => {
  it.only("Verify Home Page", () => {
    let Header = MainHomePage.homePageHeaderMenu;
    Header.getDeveloperTools.click(); //.should("exist");
    Header.getTeamTools.click(); //.should("exist");
    Header.getEducation.click(); //.should("exist");
    Header.getSolutions.click();
    Header.getSupport.click();
    Header.getStore.click();
    Header.languagePickerLocator.should("exist"); //.click();;
    Header.loginButtonInHeader.should("exist"); //.click();
    Header.searchBarButton.should("exist"); //.click();
  });
  it("Verify Opening of Developer Tools Dropdown and checking all links", () => {
    MainHomePage.homePageHeaderMenu.getDeveloperTools.click();
    MainHomePage.homePageDeveloperDropdownToSelectAqua.AquaLocator.click().go(
      "back"
    ); //.should ("exist");
    MainHomePage.homePageDeveloperDropDownToSelectCLion.getCLion
      .click({
        force: true,
      })
      .go("back");

    MainHomePage.homePageDeveloperDropDownToSelectDataGrip.getDataGrip
      .click({
        force: true,
      })
      .go("back");

    MainHomePage.homePageDeveloperDropDownToSelectDataSpell.getDataSpell
      .click({
        force: true,
      })
      .go("back");
  });
  it.only("Verify Opening of Store Dropdown and checking all links ", () => {
    MainHomePage.homePageStoreDropdownToSelectDeveloperToolsForIndvidualUse.getIndvidualUse
      .click({ force: true })
      .go("back");

    MainHomePage.homePageStoreDropdownToSelectDeveloperToolsForTeamsAndOrganizations.getTeamsAndOrganizations
      .click({ force: true })
      .go("back");

    MainHomePage.homePageStoreDropdownToSelectFAQS.getFAQLocator
      .click({
        force: true,
      })
      .go("back");

    MainHomePage.homePageStoreDropdownToSelectContactSales.getContactSalesLocator.click(
      { force: true }
    );
  });
});
