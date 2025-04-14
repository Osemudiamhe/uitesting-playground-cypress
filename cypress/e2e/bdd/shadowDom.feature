Feature: Shadow DOM

  Scenario: Generate GUID and copy it to clipboard
    Given I open the Shadow DOM page
    When I click the generate button
    And I click the copy button
    Then the clipboard should contain the generated GUID
