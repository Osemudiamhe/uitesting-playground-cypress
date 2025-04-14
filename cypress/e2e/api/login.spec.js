describe('User Login API', () => { // Defines a test suite for the User Login API
  const apiUrl = '/api/login'; // Sets constant for the login API endpoint URL

  it('should log in a valid user', () => { // Defines test case for successful login
    cy.request({ // Sends HTTP request using Cypress
      method: 'POST', // Specifies POST method
      url: apiUrl, // Uses defined API endpoint
      body: { // Sets request body
        username: 'testuser123', // Provides valid username
        password: 'TestPass!123' // Provides valid password
      },
      failOnStatusCode: false // Prevents test failure on non-2xx status codes
    }).then((res) => { // Handles response
      expect(res.status).to.eq(200); // Verifies response status is 200
      expect(res.body).to.have.property('token'); // Checks for token property in response body
    });
  });

  it('should fail with wrong password', () => { // Defines test case for failed login
    cy.request({ // Sends HTTP request
      method: 'POST', // Specifies POST method
      url: apiUrl, // Uses defined API endpoint
      body: { // Sets request body
        username: 'testuser123', // Provides valid username
        password: 'wrongpassword' // Provides incorrect password
      },
      failOnStatusCode: false // Prevents test failure on non-2xx status codes
    }).then((res) => { // Handles response
      expect(res.status).to.eq(401); // Verifies response status is 401 (Unauthorized)
      expect(res.body).to.have.property('error'); // Checks for error property in response body
    });
  });
});