/// <reference types="cypress" />


describe('Auth flow', () => {
    // it('should register a new user', () => {
    //     cy.visit('http://localhost:3000/signup');
    //     cy.get('[data-testid="first-name"]').type('Tareq');
    //     cy.get('[data-testid="last-name"]').type('Radi');
    //     cy.get('[data-testid="email"]').type(`test_${Date.now()}@example.com`);
    //     cy.get('[data-testid="password"]').type('12345Tt@');
    //     cy.get('[data-testid="confirm-password"]').type('12345Tt@');
    //     cy.get('[data-testid="submit"]').click();
    //     cy.url().should('include', '/todo');
    // });
    
    it('should login successfully', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('[data-testid="email"]').type('radi@gmail.com');
        cy.get('[data-testid="password"]').type('12345Tt@');
        cy.get('[data-testid="submit"]').click();
        cy.url().should('include', '/todo');
    });
});


describe('Todos flow', () => {
    beforeEach(() => {
        cy.login('radi@gmail.com', '12345Tt@');
    });

    it('should add a new todo', () => {
        cy.get('[data-testid="add"]').click();
        cy.get('[data-testid="new-todo"]').type('test task from cypress');
        cy.get('[data-testid="submit-newTask"]').click();
        cy.contains('test task from cypress').should('be.visible');
    });

    it('should complete a todo', () => {
        cy.get('[data-testid="add"]').click();
        cy.get('[data-testid="new-todo"]').type('check the checkbox1');
        cy.get('[data-testid="submit-newTask"]').click();

        cy.contains('check the checkbox1')
        .parent('[data-testid="todo-item"]')
        .find('[data-testid="complete-task"]')
        .check()
        .should('be.checked')
    });

    it('should delete a todo', () => {
        cy.get('[data-testid="add"]').click();
        cy.get('[data-testid="new-todo"]').type('task to delete');
        cy.get('[data-testid="submit-newTask"]').click();

        cy.contains('task to delete').should('be.visible');

        cy.contains('task to delete')
        .parent('[data-testid="todo-item"]')
        .find('[data-testid="delete"]')
        .click();

        cy.contains('task to delete').should('not.exist')
    });

    it('should logout successfully', () => {
        cy.get('.sc-bmzYkS > .MuiButtonBase-root').click();
        cy.url().should('include', '/login');
    });
});

