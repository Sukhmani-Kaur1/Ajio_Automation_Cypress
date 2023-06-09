import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

Given("openbrowser and navigate website", () => {
    cy.visit(
        "https://www.ajio.com/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfY_GFMiK1nkQ53050lTWJFg_yDnQgIScoLwEjvKcefzjzf5LkFBmUoaAtIkEALw_wcB"
    );
    cy.xpath("//span[normalize-space()='Sign In / Join AJIO']")
        .should("contain.text", "Sign In / Join AJIO")
        .click();
    cy.xpath("//input[contains(@name,'username')]").type(
        "pjaydip460@gmail.com"
    );
    cy.xpath("//input[@value='Continue']").click();
    cy.wait(60000)
    cy.xpath("//input[contains(@value,'START SHOPPING')]").click();

})

When("verify search bar", () => {
    cy.get("input[placeholder='Search AJIO']").invoke('attr', 'placeholder').should('eq', 'Search AJIO')
})

And("validate search by product", () => {
    cy.wait(5000)
    cy.get("input[placeholder='Search AJIO']").type("Marvel Comics{enter}")
})
And("verify filter by name", () => {
    cy.get("label[for='Men']").invoke('attr', 'for').should('eq', 'Men')

})
Then("validate filter by name", () => {
    cy.get('#Men').check({ force: true })

})




