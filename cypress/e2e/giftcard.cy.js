describe("Visit Indochen Dev Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });
  it("Visit Homepage Indochen Dev", () => {
    cy.visit("https://indochen.appdiscoverylab.com/cameron-station/");
  });

  //   it("Open Login Dialog Modal", () => {
  //     cy.visit("https://indochen.appdiscoverylab.com/cameron-station/");
  //     cy.get(".login-register-links").click();
  //     cy.get(".modal-dialog").should("be.visible");
  //   });

  //   it("require user email", () => {
  //     // cy.get(".login-email").type("adl.mytest@gmail.com", { delay: 200 });
  //     cy.get(".login-email").type("cameron@yopmail.com");
  //   });

  //   it("require password", () => {
  //     cy.get(".login-password").type("11111111", { delay: 100 });
  //   });

  //   it("click login", () => {
  //     cy.contains("Log In").click();
  //     cy.get(".modal-dialog").should("not.be.visible");
  //   });

  it("Find Gift Card Menu in Header and CLick", () => {
    cy.get(".gift-card-navigation > a").click();
  });

  it("click on gift card first item", () => {
    cy.get(":nth-child(1) > .food-each > :nth-child(5) > .cart-btn").click();
  });

  it("Increase the quantity of an item by 1", () => {
    cy.get(".add-btn").click();
  });

  it("click on add to cart", () => {
    cy.get(".cart-footer > .theme-btn").click();
  });

  it("click on a checkout button", () => {
    cy.get(".cart-inner").should("be.visible");
    cy.get(
      ".cart-static-footer > .checkout-btn > .proceed-to-checkout"
    ).click();
  });

  it("login modalagain", () => {
    cy.get("#user_login_Modal > .modal-dialog > .modal-content").should(
      "be.visible"
    );
    cy.get(".login-email").type("cameron@yopmail.com");
    cy.get(".login-password").type("11111111");
    cy.contains("Log In").click();
  });

  it("Input reciver details in checkout modal", () => {
    cy.get("#checkout_Modal").should("be.visible");
    cy.get(".checkout-phone").type("9847585955");
    cy.get(".checkout-recipient-full-name").type("saroj Dahal");
    cy.get(".checkout-recipient-email").type("royalsaroz96@gmail.com");
    cy.get("input[name='confirm_recipient_email']").type(
      "royalsaroz96@gmail.com"
    );
    cy.get(".checkout-recipient-phone").type("9849173822");
  });
});
