import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DynamicTablePage from "../pages/DynamicTablePage";

let tableCpuValue = "";
let labelCpuValue = "";

Given("I am on the Dynamic Table page", () => {
  DynamicTablePage.visit();
});

When("I get the CPU value for Chrome from the table", () => {
  DynamicTablePage.getChromeCpuFromTable().invoke("text").then((text) => {
    tableCpuValue = text.trim();
  });
});

When("I get the CPU value for Chrome from the label", () => {
  DynamicTablePage.getChromeCpuFromLabel().invoke("text").then((text) => {
    const match = text.match(/Chrome CPU: (.+)/);
    if (match) {
      labelCpuValue = match[1].trim();
    }
  });
});

Then("both CPU values should match", () => {
  expect(tableCpuValue).to.eq(labelCpuValue);
});
