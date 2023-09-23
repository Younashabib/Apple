export class aquaIdeDeveloperTools {
  get AquaLocator() {
    return cy.get('a[href="/aqua/"]').contains("Aqua");
  }
}
