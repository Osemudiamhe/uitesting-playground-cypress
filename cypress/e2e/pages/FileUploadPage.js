class FileUploadPage { // Defines FileUploadPage class for testing file upload functionality
  visit() { // Method to navigate to the file upload page
    cy.visit('/upload'); // Visits /upload URL
  }

  getIframeBody() { // Method to access the body of an iframe
    return cy
      .get('iframe') // Selects iframe element
      .its('0.contentDocument.body') // Gets the body of the iframe's document
      .should('not.be.empty') // Verifies body is not empty
      .then(cy.wrap); // Wraps body for further Cypress commands
  }

  uploadFile(fileName) { // Method to upload a file
    this.getIframeBody() // Gets iframe body
      .find('input[type="file"]') // Finds file input element
      .attachFile(fileName); // Attaches specified file for upload
  }

  verifyUploadSuccess() { // Method to verify file upload success
    this.getIframeBody() // Gets iframe body
      .contains('1 file(s) selected') // Checks for success message
      .should('be.visible'); // Verifies message is visible
  }
}

export default new FileUploadPage(); // Exports a single instance of FileUploadPage
