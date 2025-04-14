import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ShadowDomPage from '../pages/ShadowDomPage';

Given('I open the Shadow DOM page', () => {
  ShadowDomPage.visit();
});

When('I click the generate button', () => {
  ShadowDomPage.getGenerateButton().click();
});

When('I click the copy button', () => {
  ShadowDomPage.getCopyButton().click();
});

Then('the clipboard should contain the generated GUID', () => {
    // Set up spy BEFORE the action
    cy.window().then((win) => {
      cy.spy(win.navigator.clipboard, 'writeText').as('clipboardSpy');
    });
  
    // Re-run the copy button click (so spy gets hit)
    ShadowDomPage.getCopyButton().click();
  
    // Assert the spy was called with the same GUID value
    ShadowDomPage.getInputField().invoke('val').then((guidValue) => {
      cy.get('@clipboardSpy').should('have.been.calledWith', guidValue);
    });
  });
  