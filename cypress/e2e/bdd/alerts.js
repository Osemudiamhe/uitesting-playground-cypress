import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AlertsPage from "../pages/AlertsPage";

Given("I am on the Alerts page", () => {
  AlertsPage.visit();
});

When("I click the Alert button", () => {
  cy.on("window:alert", (text) => {
    expect(text).to.contain("Today is a working day");
  });
  AlertsPage.clickAlertButton();
});

When("I click the Confirm button and accept it", () => {
  cy.on("window:confirm", () => true);
  cy.on("window:alert", (text) => {
    expect(text).to.eq("Yes");
  });
  AlertsPage.clickConfirmButton();
});

When("I click the Confirm button and dismiss it", () => {
  cy.on("window:confirm", () => false);
  cy.on("window:alert", (text) => {
    expect(text).to.eq("No");
  });
  AlertsPage.clickConfirmButton();
});

When("I click the Prompt button and type a value", () => {
  cy.on("window:alert", (text) => {
    expect(text).to.contain("User value: dogs");
  });
  AlertsPage.clickPromptButton();
});
