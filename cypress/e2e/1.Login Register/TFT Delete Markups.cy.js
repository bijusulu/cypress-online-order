describe("Visit TFT Dev Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });
  it("visit homepage admin dev", () => {
    cy.visit("tft.appdiscoverylab.com/admin/login");
  });

  /*	it("Open Admin Login Dialog Modal", () => {
                  
                  cy.get(".login-register-links").click();
                  cy.get(".modal-dialog").should("be.visible");
              });*/

  it("require admin email", () => {
    cy.get("#login-email")
      .should("be.visible")
      .type("super_admin@mail.com", { force: true });
  });

  it("require admin password", () => {
    cy.get("#login-password")
      .should("be.visible")
      .type("11111111", { delay: 300 });
  });

  it("click login", () => {
    cy.contains("Login", { timeout: 50000 })
      .should("be.visible")
      .click({ force: true }); // Finds an element that contains the text "Login"
  });
  it("click on marksup menu siderbar menu", () => {
    cy.get("#accordion-button-sidebar-markups").click({ force: true });
  });
  //for a selected markup
  /*it("click slected individual markup", () => {
     cy.get(".css-1w4rya5").filter(':contains("Emirates Airway")').click();
    cy.get(".css-1w4rya5").contains("NEP Airlines").click();
  });*/
  // CLICK ON delete icon

  it("click on delete markups text button menu for ", () => {
    cy.get('button[title="Delete"]').first().click();
  });

  //close the modal and use delete funtion
  it("click on delete icon ", () => {
    cy.get('button[type="button"].chakra-button.css-18zw69y')
      .contains("Delete")
      .click();
  });
});
