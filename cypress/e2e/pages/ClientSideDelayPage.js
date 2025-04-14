class ClientSideDelayPage { // Defines ClientSideDelayPage class for testing a page with client-side delay
  visit() { // Method to navigate to the client delay page
    cy.visit("/clientdelay"); // Visits /clientdelay URL
  }

  triggerDelay() { // Method to trigger a delayed action
    cy.get("#ajaxButton").click(); // Finds #ajaxButton and clicks it
  }

  verifyMessageAppeared() { // Method to verify delayed message appearance
    // Waits up to 20 seconds for the paragraph to appear
    cy.get("#content p", { timeout: 20000 }) // Finds paragraph in #content with 20s timeout
      .should("be.visible") // Checks if paragraph is visible
      .and("contain.text", "Data calculated on the client side."); // Verifies paragraph contains expected text
  }
}

export default new ClientSideDelayPage(); // Exports a single instance of ClientSideDelayPage
