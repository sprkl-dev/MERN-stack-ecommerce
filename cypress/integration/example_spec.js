describe("Testing Zankoo", () => {
  it("Something", () => {
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(1) > .card-body > a > h2').click()
    cy.get('main > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('[href="/signin"]').click()
    cy.get('#email').type('erez')
    cy.get('#password').type('erez')
    cy.get('.primary').click()
    cy.get('.brand').click()
    cy.get(':nth-child(1) > .card-body > a > h2').click()
    cy.get('.primary').click()
cy.get('[href="/cart"]').click()
cy.get(':nth-child(5) > div > a').click()
cy.get('#name').type('erez')
cy.get('#email').type('erez@sprkl.dev')
cy.get('#password').type('erez')
cy.get('#confirmPassword').type('erez')
cy.get('.brand').click()
cy.get(':nth-child(3) > .card-body > a > h2').click()
cy.get('main > :nth-child(1) > :nth-child(1) > a').click()
cy.get(':nth-child(4) > .card-body > a > h2').click()
cy.get('.primary').click()
cy.get(':nth-child(5) > div > a').click()
});
});
