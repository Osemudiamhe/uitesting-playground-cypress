class ShadowDomPage { // Defines ShadowDomPage class for testing a page with Shadow DOM
  static visit() { // Static method to navigate to the Shadow DOM page
    cy.visit('/shadowdom'); // Visits /shadowdom URL
  }

  static getShadowRoot() { // Static method to access the Shadow DOM root
    return cy.get('guid-generator').shadow(); // Finds guid-generator element and accesses its Shadow DOM
  }

  static getInputField() { // Static method to locate input field in Shadow DOM
    return this.getShadowRoot().find('#editField'); // Finds element with ID editField in Shadow DOM
  }

  static getGenerateButton() { // Static method to locate generate button in Shadow DOM
    return this.getShadowRoot().find('#buttonGenerate'); // Finds element with ID buttonGenerate in Shadow DOM
  }

  static getCopyButton() { // Static method to locate copy button in Shadow DOM
    return this.getShadowRoot().find('#buttonCopy'); // Finds element with ID buttonCopy in Shadow DOM
  }
}

export default ShadowDomPage; // Exports ShadowDomPage class