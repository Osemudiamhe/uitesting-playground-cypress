import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FileUploadPage from '../pages/FileUploadPage';

Given('I open the file upload page', () => {
  FileUploadPage.visit();
});

When('I upload the file {string}', (fileName) => {
  FileUploadPage.uploadFile(fileName);
});

Then('I should see a message confirming upload', () => {
  FileUploadPage.verifyUploadSuccess();
});
