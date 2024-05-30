
describe('User Journey', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
      })
    context('home page lesson started',()=>{
    it('a user can find a course on the homepage and start the course lessons', () => {
      
        //phle course ka parent call krega data k sath.. phir find krega anchor tag ko sirf... contains(mtlb jo ham button ko click kr rhe hn os p jo word likha h wohi hona chye...)  ...phir click kr k os k page p jayega...
        cy.get('[data-test="course-0"]').find("a").contains("Get started").click()
        //ham ne ose API location dedi check krne k lie k get started button ko click krne k bd wo die gye api location page p jata h k nhi...
        cy.location("pathname").should("eq", "/testing-your-first-application")

        //a page dekhen k bd course start krna h... tou os button ko click krwaya....
      cy.get('[data-test="next-lesson-button"]').contains('Start Course').click()

      //acha ab ham check krenge k bhae hum n button click krwa dia or wo os page p chla gya but wo sahi path ya API location p gya h k nhi....
      cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")


      //FOR THE NEXT COURSE......


      //unlock the next lesson...? option true or false (first we click on true)..
      cy.get('[data-test="challenge-answer-0"]').click()

      //then we disable this question..
      cy.get('[data-test="skip-challenge-input"]').click()

      //then we enable this question..
      cy.get('[data-test="skip-challenge-input"]').uncheck()


      cy.get('[data-test="next-lesson-button"] > .mx-auto').click()

      cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")



        //FOR THE NEXT COURSE......



        //unlock the next lesson...? option true or false (first we click on true)..
      cy.get('[data-test="challenge-answer-0"]').click()

      //then we disable this question..
      cy.get('[data-test="skip-challenge-input"]').click()

      //then we enable this question..
      cy.get('[data-test="skip-challenge-input"]').uncheck()


      cy.get('[data-test="next-lesson-button"] > .mx-auto').click()


      cy.location("pathname").should("eq", "/testing-your-first-application/setting-up-data-before-each-test")




      //COURSE COMPLETED.....
      
      //unlock the next lesson...? option true or false (first we click on true)..
      cy.get('[data-test="challenge-answer-0"]').click()

      //then we disable this question..
      cy.get('[data-test="skip-challenge-input"]').click()

      //then we enable this question..
      cy.get('[data-test="skip-challenge-input"]').uncheck()


      cy.get('[data-test="next-lesson-button"] > .mx-auto').click()

    })
})
})
  