describe("Visit Student Application form  Site", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });
  it("Visit Welcome Page", () => {
    cy.visit("https://mis.appdiscoverylab.com/");
  });

  // it("Choose Location Cameron Station", () => {
  //   cy.get(":nth-child(1) > .location > .name > .theme-btn").click();
  // });

  // it("Open Login Dialog Modal", () => {
  //   cy.visit("https://indochen.appdiscoverylab.com/login/");
  //   cy.get(".login-register-links").click();
  //   cy.get(".modal-dialog").should("be.visible");
  // });
  it("Click on a new application form", () => {
    cy.get(".btn-wrapper").click();
  });
  it("Accept the condition in a application form", () => {
    cy.get(".form-control").click();
  });

  //opening the application form and filling the field form //

  // it("require user email", () => {
  //   cy.get("#normal_login_email").type("admin@email.com");
  // });

  // it("require password", () => {
  //   cy.get("#normal_login_password").type("11111111");
  // });

  // it("click login", () => {
  //   // cy.contains(".ant-form-item").click();
  //   cy.get('[type="submit"]').click(); //log in using input type meth

  //   // cy.get(".modal-dialog").should("not.be.visible");
  // });

  // it("handle the priority program", () => {
  //   // cy.get('input[name="form_id"]').click();
  //   //cy.get('input[type="hidden"]').click();
  //   //cy.get(".application-for").click();
  //   //cy.get('input[name="priority_1"]').click();
  //   // cy.select(".priority-0 > .input-box > .ui").click(); //curent clas is for tabel plcae holder
  //   //cy.get(".option").contains("4").click();
  //   cy.get(".priority-0 > .input-box > .ui").click();

  // });

  it("should select an option from the select box", () => {
    cy.get(".priority-0 > .input-box > .ui").select("BE Software engineering");
    cy.get(".priority-1 > .input-box > .ui").select(
      "BE IT (Information & Technology)"
    );
    cy.get(".priority-2 > .input-box > .ui").select("BE Civil Engineering");
  });
  //FILL PERSONAAL DETAILS
  it("Fill the student personal details", () => {
    cy.get(
      ".personal-details-form > :nth-child(1) > :nth-child(1) > .input-box > .form-control"
    ).type("SAROZ");

    cy.get(
      ".personal-details-form > :nth-child(1) > :nth-child(2) > .input-box > .form-control"
    ).type("BAHADUR");
    cy.get(
      ".personal-details-form > :nth-child(1) > :nth-child(3) > .input-box > .form-control"
    ).type("CHETTRI");
  });

  //handle dob in nepali and enlishe
  it("Select dob in nepali and english", () => {
    cy.get("#nepali-datepicker").click();
    //cy.get('input[name="dob_bs"]').click();
    // cy.get("#calendar-modal").should("be.visible");
    //cy.get("//input[@id='checkin']").click();
    //cy.contain("").click();
    cy.contains(".ndp-date").click();
  });
});
