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

  it("Visit  menu page", () => {
    cy.get(".has-sub-menu > :nth-child(1) > .fa").click();
  });

  // it("view the product image", () => {
  //   cy.get("img").should("be.visible");
  //   cy.get("img")
  //     .should(
  //       "have.attr",
  //       "src",
  //       "https://dev.everestorder.com/storage/products/thumbnails/1c3745b59481150a146d4a83492c6e46.jpg"
  //     )
  //     .click();
  // });

  it("view Gallery image", () => {
    cy.get(".menu-each")
      // //cy.get("img").should("be.visible");
      // cy.get("img")
      //   .should(
      //     "have.attr",
      //     "src",
      //     "storage/products/thumbnails/1c3745b59481150a146d4a83492c6e46.jpg"
      //   )
      .click();
  });
});
