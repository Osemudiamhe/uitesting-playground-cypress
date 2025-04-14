import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ClientSideDelayPage from "../pages/ClientSideDelayPage";

Given("I visit the Client Side Delay page", () => {
  ClientSideDelayPage.visit();
});

When("I click the button to trigger the delay", () => {
  ClientSideDelayPage.triggerDelay();
});

Then("I should see the message after the delay", () => {
  ClientSideDelayPage.verifyMessageAppeared();
});
