const userName = require("../fixtures/login.json");
const selector = require("../fixtures/generalElements.json");

describe("When user should is on login page, user", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Should be able to login with correct email and password", () => {
    cy.login(userName[0].email, userName[0].password);
    cy.contains("Управление залами").should("be.visible");
  });

  it("Should not be able to login with correct email and uncorrect password", () => {
    cy.login(userName[1].email, userName[1].password);
    cy.get(selector.place)
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Ошибка авторизации");
  });
  it("Should be not able to login with empty email and password", () => {
    cy.login(userName[2].email, userName[2].password);
    cy.get(selector.login)
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле");
  });
});
