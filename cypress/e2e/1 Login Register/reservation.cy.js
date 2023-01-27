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

  it("Vist to reservation page", () => {
    cy.get(".reservation-navigation > a").click();
  });

  it("Interacting with text fields", () => {
    cy.get(".row > :nth-child(1) > .form-control").type("saroz cypress");
    // .should("have.value", "saroz cypress")
    // .get('input[name="email"]') //by input elemenst
    // .type("royalshumsher@yopmail.com")
    // .should("have.value", "royalshumsher@yopmail.com")
    // .get('input[name="phone_number"]')
    // .type("9849173822");
    cy.get(".row > :nth-child(2) > .form-control").type(
      "sarozcypress@yopmail.com"
    );
    cy.get(".row > :nth-child(3) > .form-control").type("9849173822");
  });

  it("handel the dropdown", () => {
    //cy.get(".nice-select").click();
    // cy.get(".nice-select").select("1");
    //cy.get(".option").select("1").click();
    // cy.get("number-select");
    // cy.get("number-select").contains("1");
    // cy.get(".option").select("1").click(); //option is a aacommon class for all number list ,select method can only be used for select tag name
    cy.get(".current").click(); //curent clas is for tabel plcae holder
    cy.get(".option").contains("4").click();
    // cy.get("select").select(0).should("have.value", "5");
  });

  // it("handaling the date picker ", () => {
  //   cy.get(".row > .date > .form-control").click();
  //   cy.get(".date-picker-days").should("be.visible");
  // });
  //open date picker modal
  it("Open Date Picekr Modal", () => {
    cy.get('input[name="date"]').click();
    //select year
    //cy.get(".row > .date > .form-control").click();
    cy.get(
      ".datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch"
    );
    //   .contains("December 2022")
    //   .click();
    // now select the month
    // cy.get(
    //   ".datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch"
    // )
    //   .contains("Su")
    //   .click();
    // cy.get(
    //   ".datepicker-months > .table-condensed > tbody > tr > td > :nth-child(10)"
    // )
    //   .contains("December 2022")
    //   .click();
    //now select the days
    //cy.get(".next").contains("02").click();
    // cy.get('input[name="date"]').click();
    // cy, get(".table-condensed");
    //cy.get(".:nth-child(4) > .today").click();
    // .type("9849173822");
    // cy.get(".datepicker").should("be.visible");

    //cy.get(".datepicker-months").contains("April 2021").click();
    // cy.get(".datepicker-months").contains("2021").click();
    // cy.get(".datepicker-months").click().click(); // get decade with 1999
    // // now select the year
    // cy.get("datepicker-months").contains("1999").click();
    // cy.get(
    //   ".datepicker-months > .table-condensed > tbody > tr > td > :nth-child(11)"
    // )
    //   // .contains("2022")
    //   .click({ force: true });
    // cy.get(".:nth-child(5) > .today").contains("26").click({ force: true });
    //choose date 24

    //Then Clicks on current date.
    cy.get(":nth-child(5) > .today").click();
  });

  it("give message textare", () => {
    cy.get(".col-12.mb-3 > .form-control").type("message is that reservation table automation for datepicker and dropdown is also completed");
  });
  it("form reservation submission", () => {
    cy.get(":nth-child(9) > .btn").click();
  });
});
