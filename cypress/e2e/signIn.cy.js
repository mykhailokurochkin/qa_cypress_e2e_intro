/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  const username = 'a' + faker.string.alphanumeric(10) + Date.now();
  const email = faker.internet.email();
  const password = 'Create1@@@';

  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username,
        email,
        password
      }
    });

    cy.visit('https://conduit.mate.academy/');
    cy.contains('.nav-link', 'Sign in').click();
    cy.contains('h1', 'Sign in');
    cy.get('input.form-control[placeholder="Email"]').type(email);
    cy.get('input.form-control[placeholder="Password"]').type(password);
    cy.contains('button', 'Sign in').click();
  });
});
