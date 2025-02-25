describe("Visit Indochen Dev Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });
  it("Visit Homepage Indochen Dev", () => {
    cy.visit("indochen.appdiscoverylab.com");
  });

  it("Choose Location Cameron Station", () => {
    cy.get(":nth-child(1) > .location > .name > .theme-btn").click();
  });

  it("Visit gallery menu", () => {
    cy.get(".navigation > :nth-child(6) > a").click();
  });

  it("view Gallery image", () => {
    cy.get(":nth-child(3) > .img-box > img").click();
  });
});
