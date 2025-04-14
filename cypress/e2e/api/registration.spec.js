describe('User Registration API', () => { // Defines test suite for User Registration API
  const apiUrl = '/api/register'; // Sets constant for registration API endpoint URL

  it('should register a user successfully', () => { // Defines test case for successful registration
    cy.request({ // Sends HTTP request using Cypress
      method: 'POST', // Specifies POST method
      url: apiUrl, // Uses defined API endpoint
      body: { // Sets request body
        username: 'testuser123', // Provides username
        password: 'TestPass!123', // Provides password
        email: 'testuser123@example.com' // Provides email
      },
      failOnStatusCode: false // Prevents test failure on non-2xx status codes
    }).then((response) => { // Handles response
      expect(response.status).to.eq(201); // Verifies response status is 201 (Created)
      expect(response.body).to.have.property('userId'); // Checks for userId property in response
      expect(response.body).to.have.property('token'); // Checks for token property in response
    });
  });

  it('should fail if email is missing', () => { // Defines test case for failed registration
    cy.request({ // Sends HTTP request
      method: 'POST', // Specifies POST method
      url: apiUrl, // Uses defined API endpoint
      body: { // Sets request body
        username: 'user_no_email', // Provides username
        password: 'Pass123!' // Provides password
      },
      failOnStatusCode: false // Prevents test failure on non-2xx status codes
    }).then((res) => { // Handles response
      expect(res.status).to.eq(400); // Verifies response status is 400 (Bad Request)
      expect(res.body).to.have.property('error'); // Checks for error property in response
    });
  });
});