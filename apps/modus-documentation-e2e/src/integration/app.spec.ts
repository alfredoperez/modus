import { getGreeting } from '../support/app.po';

describe('modus-documentation', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to modus-documentation!');
  });
});
