describe("email subscription form", () => {
    beforeEach(()=>{
      cy.visit("http://localhost:3000")
    })
    it.only("should display the email subscription form", () => {
        cy.get('[data-test="email-input"]').type('mushigang@gmail.com')
        cy.get('[data-test="submit-button"]').click()
    })

    it("should display the error on email subscription form", () => {
      cy.get('[data-test="email-input"]')
      cy.get('[data-test="submit-button"]').click()
  })
})
