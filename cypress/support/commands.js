const selector = require("../fixtures/loginSelectors.json");
    
Cypress.Commands.add("login", (email, password) => {
  cy.get(selector.login).type(email);
  cy.get(selector.pwd).type(password);
  cy.get(".login__button").click();
});

Cypress.Commands.add("booking", (day, text, seats) => {
  cy.get(`a.page-nav__day:nth-of-type(${day.day})`).click();
  cy.contains(text).next().contains(":00").click();
  seats.forEach((seat) => {
    cy.get(
      `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
    ).click();
  });
  
});