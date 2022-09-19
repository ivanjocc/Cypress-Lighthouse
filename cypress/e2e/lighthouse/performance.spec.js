import { url } from './urls';

it("Lighthouse Testing", () => {
  cy.visit(url);
  // set your treshold
  // Thresholds are pass/fail criteria that specify the performance expectations of the system under test.
  cy.lighthouse(
    {
      performance: 51,
      accessibility: 80,
      "best-practices": 80,
      seo: 80,
    },
    {
      formFactor: "desktop",
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config("viewportWidth"),
        height: Cypress.config("viewportHeight"),
        deviceScaleRatio: 1,
      },
    }
  );
});
