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

  it("Choose about pages of the site ", () => {
    //cy.get(".nav").contains("About");
    cy.get(".navigation > :nth-child(2) > a").click();
  });

  it("send mail contact ", () => {
    cy.get(".restaurant-email-f > .text-hover").click();
    cy.get("").type("cypes test mail by saroz royal ");
  });
});
