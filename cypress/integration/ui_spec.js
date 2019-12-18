describe('UI tests', () => {
  beforeEach(() => {
    cy.server()
    cy.route('/api/**', 'fixture:contacts.json')

    cy.visit('http://localhost:4040')
  })

  it('displays a loader when waiting for data', () => {
    cy.get('.loader').should($div => {
      if ($div.length < 1) {
        throw new Error('Did not find the spinner element')
      }
    })
  })

  it('renders header tabs', () => {
    cy.get('.loadedContent').should('be.visible')

    cy.get('h2').contains('My Contact List')

    cy.get('.react-tabs__tab').should($div => {
      expect($div).to.have.length(26)
      expect($div[0]).to.contain('A')
      expect($div[25]).to.contain('Z')
    })
  })

  it('renders contact count in tab', () => {
    cy.get('.react-tabs__tab').should($div => {
      expect($div).to.have.length(26)
      expect($div[7]).to.contain('3')
    })
  })

  it('can switch tabs', () => {
    const seventhTab = cy
      .get('.react-tabs__tab-list')
      .children()
      .eq(7)
    const tenthTab = cy
      .get('.react-tabs__tab-list')
      .children()
      .eq(10)

    seventhTab.click()
    seventhTab.should('have.attr', 'aria-selected', 'true')

    tenthTab.click()
    cy.get('.react-tabs__tab-list')
      .children()
      .eq(7)
      .should('have.attr', 'aria-selected', 'false')
  })

  it('renders contacts', () => {
    cy.get('#react-tabs-2').click()
    cy.get('.contacts__contact').contains('Tony, BUIST')
  })

  it('expands contact details on click', () => {
    cy.get('#react-tabs-2').click()
    cy.get('.contacts__contact').click()

    cy.get('.contacts__contact__details').should('exist')
    cy.get('.contacts__contact__details__info')
      .children()
      .first()
      .contains('tony.buist@example.com')
  })

  it('collapses contact details when close button is clicked', () => {
    cy.get('#react-tabs-2').click()
    cy.get('.contacts__contact').click()
    cy.get('.contacts__contact__details__info').should('be.visible')

    cy.get('#reset').click()
    cy.get('.contacts__contact__details__info').should('not.be.visible')
  })

  it('collapses a card when another contact is selected', () => {
    cy.get('.react-tabs__tab-list')
      .children()
      .eq(7)
      .click()

    const firstContact = cy.get('.contacts__contact').first()
    const lastContact = cy.get('.contacts__contact').last()

    firstContact.click()
    firstContact.children('.collapse').should('be.visible')

    lastContact.click()
    firstContact.children('.collapse').should('not.be.visible')
  })
})
