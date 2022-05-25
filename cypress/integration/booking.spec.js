/// <reference types="Cypress" />

const userName = require("../fixtures/login.json");
const seats = require("../fixtures/seats.json");
const seatsForBooking = require("../fixtures/seatsForBooking.json");
const day = require("../fixtures/day.json");
const buttonAccept = require("../fixtures/buttonSelector.json");

let text;

it("Should be possible to book", () => {
  cy.visit("/admin");
  cy.login(userName[0].email, userName[0].password);
  cy.get(".conf-step__list > :nth-child(1)").then(($el) => {
    text = $el.text();
    cy.visit("/");
    cy.booking(day, text, seats);
    cy.get(buttonAccept.button).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
    cy.get(buttonAccept.button).click();
    cy.contains("Электронный").should("be.visible");
    cy.contains(text).should("be.visible");
  });
});

it("should be impossible to book purchased seats ", () => {
  cy.visit("/admin");
  cy.login(userName[0].email, userName[0].password);
  cy.get(".conf-step__list > :nth-child(1)").then(($el) => {
    text = $el.text();
    cy.visit("/");
    cy.booking(day, text, seatsForBooking);
    cy.get(buttonAccept.button).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
    cy.get(buttonAccept.button).click();
    cy.visit("/");
    cy.booking(day, text, seatsForBooking);
    cy.get(buttonAccept.button).should("be.disabled");
  });
});
