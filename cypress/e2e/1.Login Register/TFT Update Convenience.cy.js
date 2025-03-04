describe("Visit TFT Dev Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });
  it("visit homepage admin dev", () => {
    cy.visit("tft.appdiscoverylab.com/admin/login");
  });

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
  it("click on convenience fees siderbar menu", () => {
    cy.get("#accordion-button-sidebar-conveniencefees").click({ force: true });
  });

  // CLICK ON edit update MODULE
  it("click on edit menu  ", () => {
    cy.get('button[title="Edit"]').click({ multiple: true });
  });

  //clear  input values
  it("clik input field for a values", () => {
    cy.get("#convenience-name").clear();
    //to clear the name input
  });

  it("clik on dropdown icon to open drop down list", () => {
    cy.get(".chakra-select__wrapper.css-42b2qy").click();
    //for fee type
    /*  cy.get('[name="feeType"]', { timeout: 10000 })
      .should("be.visible")
      .select("fix")
      .should("have.value", "fix");
    cy.get('[name="fee"]') //  Fix fee number input field
      .type("1000")
      .should("have.value", "1000");
      */
    //for percentage type
    cy.get('[name="feeType"]', { timeout: 10000 })
      .should("be.visible")
      .select("percentage")
      .should("have.value", "percentage");
    cy.get('[name="fee"]') //  Fix fee percentage input field with name attribute
      .clear() // Clear previous input
      .type("20")
      .should("have.value", "20");
  });
  //to clear the fee input
  it("to clear the input field", () => {
    cy.get('[name="fee"]').clear();
  });
  it("click on a checkbutton added per person ", () => {
    cy.get(".chakra-checkbox__control.css-1dnp747").click({ multiple: true }); // recheck on button
  });
  //enter new updated values
  it("clik input field for a new updated values", () => {
    // Enter new values into the input fields
    cy.get("#convenience-name").type("cy.js");
    //to updated value percentage
    cy.get('[name="feeType"]', { timeout: 10000 })
      .should("be.visible")
      .select("percentage")
      .should("have.value", "percentage");
    cy.get('[name="fee"]') //  Fix fee percentage input field with name attribute

      .type("30")
      .should("have.value", "30");
  });
  it("click on a checkbutton added per person ", () => {
    cy.get(".chakra-checkbox__control.css-1dnp747")
      .click({ multiple: true })
      .click({ multiple: true }); // recheck on button
  });
  it("click on a save text button ", () => {
    // Click the Update button
    cy.get(
      'button.chakra-button.css-1etyy69[form="conveniencefees-form"]'
    ).click({ force: true }); // Click on the Save button by type submit
  });
});
