Feature: Alerts Handling

  Scenario: Handle alert box
    Given I am on the Alerts page
    When I click the Alert button

  Scenario: Handle confirm box with accept
    Given I am on the Alerts page
    When I click the Confirm button and accept it

  Scenario: Handle confirm box with cancel
    Given I am on the Alerts page
    When I click the Confirm button and dismiss it

  Scenario: Handle prompt box and input value
    Given I am on the Alerts page
    When I click the Prompt button and type a value
