describe("Visit Indochen Dev Site", () => {
    beforeEach(() => {
        cy.viewport("macbook-15");
    });
    // it("Visit Homepage Indochen Dev", () => {
    //     cy.visit("indochen.appdiscoverylab.com");
    // });

    it("Open Login Dialog Modal", () => {
        cy.visit("https://indochen.appdiscoverylab.com/cameron-station/");
        cy.get(".login-register-links").click();
        cy.get(".modal-dialog").should("be.visible");
    });

    it("require user email", () => {
        // cy.get(".login-email").type("adl.mytest@gmail.com", { delay: 200 });
        cy.get(".login-email").type("adl.mytest@gmail.com");
    });

    it("require password", () => {
        cy.get(".login-password").type("bijusulu", { delay: 100 });
    });

    it("click login", () => {
        cy.contains("Log In").click();
        cy.get(".modal-dialog").should("not.be.visible");
    });

    it("Find Gift Card Menu in Header and CLick", () => {
        cy.get(".gift-card-navigation > a").click();
    });
});
