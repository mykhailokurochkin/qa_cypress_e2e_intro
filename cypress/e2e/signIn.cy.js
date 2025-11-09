/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://conduit.mate.academy/user/login');
  });

  it('should provide an ability to log in', () => {
    const username = 'a' + faker.string.alphanumeric(10) + Date.now();
    const email = faker.internet.email();
    const password = 'Create1@';

    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username,
        email,
        password
      }
    }).then(() => {
      cy.get(`input.form-control[placeholder='Email']`).type(email);
      cy.get(`input.form-control[placeholder='Password']`).type(password);
      cy.contains('button', 'Sign in').click();
      cy.get('a').contains(username);
    });
  });
});
