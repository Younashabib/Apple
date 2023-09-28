import { mainMenuHeaderComponents } from "../Components/mainMenu.Header.Component";
import { aquaIdeDeveloperTools } from "./developerTools/IDE's/Aqua.IDE.developerTools";
import { clionIdeDeveloperTools } from "./developerTools/IDE's/CLion.IDE.developerTools";
import { dataGripDeveleporTools } from "./developerTools/IDE's/DataGrip.developerTools";
import { dataSpellIdeDeveloperTools } from "./developerTools/IDE's/dataSpell.IDE.developerTools";
import { solutionPageLocator } from "./solutions/solutionsPage";
import { forIndvidualUseLocator } from "./store/developerTools/forInvidualUse";
import { forTeamsAndOrganizationsLocator } from "./store/developerTools/forTeamsAndOrganizations";
import { frequentAskedQuestions } from "./store/salesSupport/FAQ";
import { contactSalesLocator } from "./store/salesSupport/contactSales";
import { supportPageLocator } from "./support/supportPage";

export class mainHomePage {
  // HomePage Main Menu Header Component
  get homePageHeaderMenu() {
    return new mainMenuHeaderComponents();
  }

  // DeveloperDropdown Links
  get homePageDeveloperDropdownToSelectAqua() {
    return new aquaIdeDeveloperTools();
  }

  get homePageDeveloperDropDownToSelectCLion() {
    return new clionIdeDeveloperTools();
  }

  get homePageDeveloperDropDownToSelectDataGrip() {
    return new dataGripDeveleporTools();
  }

  get homePageDeveloperDropDownToSelectDataSpell() {
    return new dataSpellIdeDeveloperTools();
  }

  // Store Dropdpown Links

  //For IndvidualUse
  get homePageStoreDropdownToSelectDeveloperToolsForIndvidualUse() {
    return new forIndvidualUseLocator();
  }
  //For Teams and Organizations
  get homePageStoreDropdownToSelectDeveloperToolsForTeamsAndOrganizations() {
    return new forTeamsAndOrganizationsLocator();
  }

  //For FAQs

  get homePageStoreDropdownToSelectFAQS() {
    return new frequentAskedQuestions();
  }

  get homePageStoreDropdownToSelectContactSales() {
    return new contactSalesLocator();
  }

  // For Support Page
  get homePageSupportDropdownToSelectProductAndTechnicalSupport() {
    return new supportPageLocator();
  }

  //For Education Page

  get homePageEducationDropdown() {
    return new solutionPageLocator();
  }
}
