describe("Should check the correctness of the main page display", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru");
  });

  it("title is correct", () => {
    cy.title().should("eq", "ИдёмВКино");
  });

  it("show correct number of days", () => {
    cy.get(".page-nav__day").should("have.length", 7);
  });

  it("movies are offered", () => {
    cy.get(".movie").should("to.exist");
  });
});
