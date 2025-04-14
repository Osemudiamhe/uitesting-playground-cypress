Feature: Client Side Delay

  Scenario: Wait for client-side loaded content
    Given I visit the Client Side Delay page
    When I click the button to trigger the delay
    Then I should see the message after the delay
