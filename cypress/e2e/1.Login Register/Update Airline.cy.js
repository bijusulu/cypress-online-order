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
    cy.get("#login-email").should("be.visible").type("super_admin@mail.com", {
      delay: 300,
    });
  });

  it("require admin password", () => {
    cy.get("#login-password")
      .should("be.visible")
      .type("11111111", { delay: 300 });
  });

  it("click login", () => {
    cy.contains("Login").click(); // Finds an element that contains the text "Login"
  });
  it("click on airliness siderbar menu", () => {
    cy.get("#accordion-button-sidebar-airlines").click();
  });

  /*it("click on add text button menu", () => {
      cy.get(".chakra-button.css-ez23ye").click({ multiple: true });
    });
  
   /* it("click on Add name field with Input", () => {
      cy.get("#airline-name").type("NEPss Airlines");
      cy.get("#airline-name").should("have value", "NEPss Airlines");
    });
  
    it("click on code field with Input", () => {
      cy.get("#airline-code").type("NP977As");
      cy.get("#airline-code").should("have value", "NP977As");
    });
    it("click to image upload ", () => {
      cy.get('input[type="file"]').selectFile("C:/image/sample.png", {
        force: true,
      });
    });
  
  */ it("click on a save text button ", () => {
    cy.get(".chakra-button.css-x66jzz").click({ multiple: true }); // Click on the Save button
  });
  // Clear the input fields
  it("click on add text button menu", () => {
    cy.get(".chakra-button.css-ez23ye").click({ multiple: true });
  });
  it("to clear the input field", () => {
    cy.get("#airline-name").clear();
    cy.get("#airline-code").clear();
    cy.get(".css-bubad1").click();
  });
  //enter new updated values
  it("clik input field for a new updated values", () => {
    // Enter new values into the input fields
    cy.get("#airline-name").type("UpdatedAirline");
    cy.get("#airline-code").type("UpdatedAirline");
    cy.get('input[type="file"]').selectFile("C:/image/testsamples.jpeg", {
      force: true,
    });
  });
  it("click on a save text button ", () => {
    cy.contains("button", "Update").click(); // Click on the Save button
  });
});
