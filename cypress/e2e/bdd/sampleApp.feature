Feature: Sample App Login

  Scenario: Successful login
    Given I open the Sample App page
    When I login with valid credentials
    Then I should see a welcome message

  Scenario: Failed login
    Given I open the Sample App page
    When I login with invalid credentials
    Then I should see an error message
