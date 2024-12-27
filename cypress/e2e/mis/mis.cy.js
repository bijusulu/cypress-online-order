describe("Visit Admin Dev Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });
  it("Visit Homepage Admin Dev", () => {
    cy.visit("http://misadmin.appdiscoverylab.com/login");
  });

  // it("Choose Location Cameron Station", () => {
  //   cy.get(":nth-child(1) > .location > .name > .theme-btn").click();
  // });

  // it("Open Login Dialog Modal", () => {
  //   cy.visit("https://indochen.appdiscoverylab.com/login/");
  //   cy.get(".login-register-links").click();
  //   cy.get(".modal-dialog").should("be.visible");
  // });

  it("require user email", () => {
    cy.get("#normal_login_email").type("admin@email.com");
  });

  it("require password", () => {
    cy.get("#normal_login_password").type("11111111");
  });

  it("click login", () => {
    // cy.contains(".ant-form-item").click();
    cy.get('[type="submit"]').click(); //log in using input type meth

    // cy.get(".modal-dialog").should("not.be.visible");
  });
});
