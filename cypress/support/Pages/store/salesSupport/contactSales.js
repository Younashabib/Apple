export class contactSalesLocator {
  // Getting Sales Locator from HomePage header dropdown
  get getContactSalesLocator() {
    return cy.get('a[href="/support/sales/"]').contains("Contact Sales");
  }

  // Getting Form on Contact Us Page
  get getFormOnContactUsPage() {
    return cy.get("#emailUs-de").should("be.visible");
  }

  // Verifying Error Messages on Empty Form
  verifyErrorMessagesonEmptyForm() {
    this.getFormOnContactUsPage
      .get('button[data-test="button"]')
      .contains("Submit")
      .click({ force: true })
      .then(() => {
        cy.get('div[data-test="error-message"]').contains(
          "This field is required."
        );
        ("This field is required.");
        cy.get('div[data-test="error-message"]').contains(
          "This field is required."
        );
        cy.get(
          'div[class="_wt-select-wrapper__error-message_clqd2 wt-text-3"]'
        ).contains("This field is required.");
        cy.get('[class="wt-textarea__error-message wt-text-3"]').contains(
          "This field is required."
        );
      });
  }
  // Verify text of an empty form
  verifyAllTextOfContactUsPage() {
    this.getFormOnContactUsPage.get('div[class="wt-text-2"]').contains("Name");
    this.getFormOnContactUsPage.get('div[class="wt-text-2"]').contains("Email");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("Country/Region");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("Country/Region");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("Country/Region");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("Phone number (optional)");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("Company (optional)");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("Product of your interest");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("What can we help you with?");
    this.getFormOnContactUsPage
      .get('div[class="wt-text-2"]')
      .contains("Message");
  }
  get otherTextOnContactUsPage() {
    return cy
      .get('div[class="wt-text-1 wt-text-1_flow"]')
      .contains(
        "You can reach our support team for customers with billing address in Germany, Austria or Switzerland (DACH) as follows:"
      );
  }
}
