Feature: Dynamic Table Verification

  Scenario: Validate Chrome CPU usage matches label
    Given I am on the Dynamic Table page
    When I get the CPU value for Chrome from the table
    And I get the CPU value for Chrome from the label
    Then both CPU values should match
