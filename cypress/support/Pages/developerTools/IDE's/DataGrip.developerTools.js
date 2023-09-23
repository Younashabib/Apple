export class dataGripDeveleporTools {
  get getDataGrip() {
    return cy.get('a[href="/datagrip/"]').contains("DataGrip");
  }
}
