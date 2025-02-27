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
    cy.get('input[type="email"]')
      .should("be.visible")
      .type("super_admin@mail.com", {
        delay: 300,
      });
  });

  it("require admin password", () => {
    cy.get('input[type="password"]')
      .should("be.visible")
      .type("11111111", { delay: 300 });
  });

  it("click login", () => {
    cy.contains("Login").click(); // Finds an element that contains the text "Login"
  });
  it("click on airliness siderbar menu", () => {
    cy.get("#accordion-button-sidebar-airlines").click(); //
  });

  it("click on add text button menu", () => {
    cy.get(".chakra-button.css-ez23ye").click({ multiple: true });
  });

  it("click on Add name field with Input", () => {
    cy.get("#airline-name").type("NEP Airlines");
    cy.get("#airline-name").should("have value", "NEP Airlines");
  });

  it("click on code field with Input", () => {
    cy.get("#airline-code").type("NP977A");
    cy.get("#airline-code").should("have value", "NP977A");
  });
  it("click to image upload ", () => {
    cy.get('input[type="file"]').selectFile("C:/image/sample.png", {
      force: true,
    });
  });

  it("click on a save text button ", () => {
    cy.contains("button", "Save").click(); // Click on the Save button
  });
});
