export class clionIdeDeveloperTools {
  get getCLion() {
    return cy.get('a[href="/clion/"]').contains("CLion");
  }
}
