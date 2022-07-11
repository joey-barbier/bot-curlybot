import { resolve } from "bluebird";

Cypress.Commands.add("getConfig", () => {
  const configName = "linkedin";
  expect(configName, "Config name is not defined").to.not.equal(undefined);
  cy.readFile("configuration/" + configName + ".json").then(obj => {
    expect(obj, "Configuration is not defined").to.not.equal(undefined);
    return obj;
  });
});