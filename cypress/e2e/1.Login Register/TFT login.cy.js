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
    cy.get(".chakra-button css-f5wzu8").should("not.be.visible");
  });
});
