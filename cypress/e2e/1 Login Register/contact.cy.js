describe("Visit Indochen Dev Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  it("visit indochen app dev ", () => {
    cy.visit("indochen.appdiscoverylab.com");
  });

  it("Choose Location Cameron Station", () => {
    cy.get(":nth-child(1) > .location > .name > .theme-btn").click();
  });

  it("Choose menupages of the site ", () => {
    cy.get(":nth-child(8) > a").click();
  });

  it("Give user name", () => {
    cy.get(".row > :nth-child(1) > .form-control").type("messi");
  });

  it("Give user email", () => {
    cy.get(".row > :nth-child(2) > .form-control").type(
      "messimania@yopmail.com"
    );
  });

  it("Give subject", () => {
    cy.get(".row > :nth-child(3) > .form-control").type("saroz cypress test");
  });
  // it("Give textarea", () => {
  //   cy.get('input[value="message"]'), .type("messimani");

  // });

  it("get textare", () => {
    cy.get(".contact-message").type("description");
  });
  it("form contact submission", () => {
    cy.get(":nth-child(6) > .btn").click();
  });
});
