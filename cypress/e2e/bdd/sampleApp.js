import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SampleAppPage from '../pages/SampleAppPage';

Given('I open the Sample App page', () => {
  SampleAppPage.visit();
});

When('I login with valid credentials', () => {
  SampleAppPage.login('testuser', 'pwd');
});

When('I login with invalid credentials', () => {
  SampleAppPage.login('testuser', 'wrong');
});

Then('I should see a welcome message', () => {
  SampleAppPage.getLoginStatus().should('have.text', 'Welcome, testuser!');
});

Then('I should see an error message', () => {
  SampleAppPage.getLoginStatus().should('have.text', 'Invalid username/password');
});
