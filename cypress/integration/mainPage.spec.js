const selector = require("../fixtures/generalElements.json");

describe("Should check the correctness of the main page display", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("title is correct", () => {
    cy.title().should("eq", "ИдёмВКино");
  });

  it("show correct number of days", () => {
    cy.get(selector.week).should("have.length", 7);
  });

  it("movies are offered", () => {
    cy.get(selector.movie).should("to.exist");
  });
});
