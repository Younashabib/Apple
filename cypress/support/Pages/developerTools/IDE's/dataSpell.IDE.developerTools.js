export class dataSpellIdeDeveloperTools {
  get getDataSpell() {
    return cy.get('a[href="/dataspell/"]').contains("DataSpell");
  }
}
