export class forTeamsAndOrganizationsLocator {
  get getTeamsAndOrganizations() {
    return cy
      .get('a[href="/store/#commercial"]')
      .contains("For Teams and Organizations");
  }
}
