
describe('What youll learn features div',() => {
    beforeEach(()=>{
      cy.visit("http://localhost:3000")
    })
    it("the text should contain correct elements", () => {
      cy.get('.mx-auto > .mt-2')
    })

    // it('get started button click and goes to next page',()=>{
    //     cy.get('[data-test="course-0"]').click()
    //     cy.visit("http://localhost:3000/testing-your-first-application")
    // })

    it('should click on upcoming radio btn',()=>{
        cy.get('[data-test="lesson-upcoming-0"]').eq(0).click()
    })
    

  })