class SampleAppPage { // Defines SampleAppPage class for testing a sample app login page
  visit() { // Method to navigate to the sample app page
    cy.visit('/sampleapp'); // Visits /sampleapp URL
  }

  getUsernameField() { // Method to locate username input
    return cy.get('input[placeholder="User Name"]'); // Finds input with "User Name" placeholder
  }

  getPasswordField() { // Method to locate password input
    return cy.get('input[placeholder="********"]'); // Finds input with "********" placeholder
  }

  getLoginButton() { // Method to locate login button
    return cy.contains('button', 'Log In'); // Finds button containing "Log In" text
  }

  getLoginStatus() { // Method to locate login status element
    return cy.get('#loginstatus'); // Finds element with ID loginstatus
  }

  login(username, password) { // Method to perform login
    this.getUsernameField().type(username); // Types username into username field
    this.getPasswordField().type(password); // Types password into password field
    this.getLoginButton().click(); // Clicks login button
  }
}

export default new SampleAppPage(); // Exports a single instance of SampleAppPage