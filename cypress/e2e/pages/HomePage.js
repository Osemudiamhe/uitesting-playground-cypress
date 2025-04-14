class HomePage { // Defines HomePage class for testing the homepage
  visit() { // Method to navigate to the homepage
    cy.visit('/'); // Visits root URL (/)
  }
}
export default new HomePage(); // Exports a single instance of HomePage
