describe("Visit Indochen Dev Site", () => {
	beforeEach(() => {
		cy.viewport("macbook-15");
	});
	it("Visit Homepage Indochen Dev", () => {
		cy.visit("indochen.everestorder.com");
	});

	it("Choose Location Cameron Station", () => {
		cy.get(":nth-child(1) > .location > .name > .theme-btn").click();
	});

	it("Open Login Dialog Modal", () => {
		// cy.visit("https://indochen.everestorder.com/cameron-station/");
		cy.get(".login-register-links").click();
		cy.get(".modal-dialog").should("be.visible");
	});

	it("require user email", () => {
		cy.get(".login-email").type("indonepal@yopmail.com", { delay: 200 });
	});

	it("require password", () => {
		cy.get(".login-password").type("1111111111", { delay: 200 });
	});

	it("click login", () => {
		cy.contains("Log In").click();
		cy.get(".modal-dialog").should("not.be.visible");
	});
});
