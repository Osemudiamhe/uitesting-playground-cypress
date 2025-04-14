Feature: File upload functionality

  Scenario: Upload a file via the browse button
    Given I open the file upload page
    When I upload the file "testFile.pdf"
    Then I should see a message confirming upload
