describe("visit chulo site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  it("Visit Homepage Chulo Dev", () => {
    cy.visit("https://chulo.appdiscoverylab.com/");
  });

  it("Open Login Dialog Modal", () => {
    cy.visit("https://chulo.appdiscoverylab.com/watertown/");
    cy.get(".theme-btn").eq(0).click();
    cy.get(".modal-dialog").should("be.visible");
  });

  it("click online order button", () => {
    cy.contains("ORDER NOW").click();
  });
});
