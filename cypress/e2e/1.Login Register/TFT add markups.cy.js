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

  // CLICK ON ADD MODULE markups
  it("click on add markups text button menu for ", () => {
    cy.get(".chakra-button.css-ez23ye").click({ multiple: true });
  });
  //click on a dropdown icon

  it("should select an airline", () => {
    // Open the dropdown
    cy.get("#markups-airline") // Using the "id" attribute
      .should("be.visible")
      .select("8"); //select option value
  });

  it("should select an fix dropdown", () => {
    //open fix type dropdown
    cy.get("#markups-type").should("be.visible").select("Fix"); // Using the "id" attribute
  });

  it("give input value in fix input field", () => {
    cy.get("#markups-value")
      .clear() // Clear any existing value
      .type("50"); // Type your desired number
  });

  it("saving the add markup modal", () => {
    cy.get('button[type="submit"][form="markups-form"]').click();
    cy.get(".modal-selector") // Replace with actual modal selector
      .should("not.exist"); // Confirm modal is closed
  });
});
