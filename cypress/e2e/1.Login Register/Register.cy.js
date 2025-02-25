describe("Visit Indochen Dev Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  it("Visit Homepage Indochen Dev", () => {
    cy.visit("indochen.appdiscoverylab.com");
  });

  it("Choose Location Cameron Station", () => {
    cy.get(":nth-child(1) > .location > .name > .mt-3 > .text-white").click();
  });

  it("Open Register Dialog Modal", () => {
    cy.visit("https://indochen.appdiscoverylab.com/cameron-station/");
    cy.get(".login-register-links").click();
    cy.get(".modal-dialog").should("be.visible");
    cy.get(".user-icon", { timeout: 10000 }).eq(0).click({ force: true });
  });

  it("Give user register information", () => {
    cy.get("#nav-register-tab").click();
  });

  it("require user register name", () => {
    cy.get("#register-full-name").type("messi");
  });

  it("require register email", () => {
    cy.get("#register-email").type("1cypress1messii@yopmail.com", {
      delay: 200,
    });
  });

  it("register password", () => {
    cy.get("#register-password ").type("messi123");
  });

  it("retype password", () => {
    cy.get("#register-retype-password").type("messi123");
  });
  it("subscribe check box", () => {
    // cy.get('[type="checkbox"]').check();
    cy.get('input[name="register-subscribe"]').click(); //this to uncheck first one again
  });

  it("click Register", () => {
    // cy.contains("Register").click();
    // cy.get(".modal-dialog").should("not.be.visible");
    // cy.get('input[type="submit"]')
    //   .click()
    //   .get(".head")
    //   .should("be.visible");
    cy.get(":nth-child(8) > .loginbtn").click();
  });

  // it("hiding the popup modal", () => {
  //   cy.get("#user_login_Modal > .modal-dialog > .modal-content").then(
  //     ($modal) => $modal[0].remove
  //   );
  // });
});
