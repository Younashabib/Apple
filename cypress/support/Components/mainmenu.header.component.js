export class mainMenuHeaderComponents {
  get getDeveloperTools() {
    return cy
      .get('[class="_mainMenu_gpycf wt-col-inline"]')
      .contains("Developer Tools");
  }

  get getTeamTools() {
    return cy.get('[class="_mainMenuItem_yscba"]').contains("Team Tools");
  }

  get getEducation() {
    return cy.get('[class="_mainMenuItem_yscba"]').contains("Education");
  }

  get getSolutions() {
    return cy.get('[data-test-marker="Solutions"]').contains("Solutions");
  }

  get getSupport() {
    return cy.get('[data-test-marker="Support"]').contains("Support");
  }

  get getStore() {
    return cy.get('[data-test-marker="Store"]').contains("Store");
  }
  get languagePickerLocator() {
    return cy.get('button[data-test="language-picker"]');
  }

  get searchBarButton() {
    return cy.get(
      '[class*="_siteHeaderActions__action_duzs6 _siteHeaderActions__action_ei6av"]'
    );
  }

  get loginButtonInHeader() {
    return cy.get('a[aria-label="Navigate to profile"]');
  }
}
