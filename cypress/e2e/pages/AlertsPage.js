class AlertsPage { // Defines AlertsPage class for testing alerts page
  visit() { // Method to navigate to alerts page
    cy.visit("/alerts"); // Visits /alerts URL
  }

  clickAlertButton() { // Method to click alert button
    cy.get("#alertButton").click(); // Finds #alertButton and clicks it
  }

  clickConfirmButton() { // Method to click confirm button
    cy.get("#confirmButton").click(); // Finds #confirmButton and clicks it
  }

  clickPromptButton() { // Method to handle prompt button
    cy.window().then((win) => { // Gets browser window
      cy.stub(win, "prompt").returns("dogs"); // Stubs prompt to return "dogs"
    });
    cy.get("#promptButton").click(); // Finds #promptButton and clicks it
  }
}

export default new AlertsPage(); // Exports a single instance of AlertsPage