describe("Visit Indochen Cameron Dev Site", () => {
	beforeEach(() => {
		cy.viewport("macbook-15");
	});

	it("Visit Homepage Indochen Cameron Dev", () => {
		cy.visit("https://indochen.everestorder.com/cameron-station/");
	});

	// it("Open Login Dialog Modal", () => {
	// 	cy.get(".login-register-links").click();
	// 	cy.get(".modal-dialog").should("be.visible");
	// });

	// it("require user email", () => {
	// 	cy.get(".login-email").type("indonepal@yopmail.com", { delay: 200 });
	// });

	// it("require password", () => {
	// 	cy.get(".login-password").type("1111111111", { delay: 200 });
	// });

	// it("click login", () => {
	// 	cy.contains("Log In").click();
	// 	cy.get(".modal-dialog").should("not.be.visible");
	// 	// cy.contains("ORDER NOW").click();
	// });

	it("click online order button", () => {
		cy.contains("ORDER NOW").click();
		cy.get("#choose_srv_Modal").should("be.visible");
	});

	// ASAP Order
	it("click Now", () => {
		cy.get("[data-target='#show_now']").click();
	});

	// Future Order
	// it("click Later", () => {
	// 	cy.get("[data-target='#show_later']").click();
	// });

	// it("choose pickup date from calendar popup", () => {
	// 	cy.get(".pickup-datepicker").click();
	// 	cy.get(".datepicker-dropdown").should("be.visible");
	// 	cy.get(".today").click({ multiple: true });
	// });

	// it("choose pickup time", () => {
	// 	cy.get("#timepicker").click();
	// 	cy.get(".bootstrap-timepicker-widget").should("be.visible");
	// 	cy.get("[data-action='incrementHour']").click();
	// });

	// ASAP Order Button Click
	it("schedule order", () => {
		cy.contains("Start Order").click();
	});

	// it("schedule order for future", () => {
	// 	cy.get(".schedule-order").click();
	// });

	// find deals product items
	it("find deals with product id 28", () => {
		cy.get("[data-product-id='28']").should("be.visible");
	});

	it("product add to cart", () => {
		cy.get("[data-product-id='28']").click();
	});

	it("choose pizza crust option Hand Tossed for 1st Pizza", () => {
		// cy.get('input[type="checkbox"]').check("Hand Tossed Crust");
		cy.get(
			'[data-option-id="264"] > .drop-content > :nth-child(1)'
		).click();
	});

	it("choose pizza topping options for 1st Pizza", () => {
		// cy.get("#options-0-toppingsfor1stpizza-0").check();
		// cy.get("#options-0-toppingsfor1stpizza-6").check();
		cy.get(
			'[data-option-id="265"] > .drop-content > :nth-child(2)'
		).click();
		cy.get(
			'[data-option-id="265"] > .drop-content > :nth-child(5)'
		).click();
	});

	it("choose boneless wings flavor option", () => {
		cy.get(
			'[data-option-id="267"] > .drop-content > :nth-child(3)'
		).click();
	});

	it("choose pizza crust option Thin Crust for 2nd Pizza", () => {
		// cy.get('input[type="checkbox"]').check("Hand Tossed Crust");
		cy.get(
			'[data-option-id="261"] > .drop-content > :nth-child(2)'
		).click();
	});

	it("choose pizza topping options for 2nd Pizza", () => {
		cy.get(
			'[data-option-id="262"] > .drop-content > :nth-child(1)'
		).click();
		cy.get(
			'[data-option-id="262"] > .drop-content > :nth-child(4)'
		).click();
		cy.get(
			'[data-option-id="262"] > .drop-content > :nth-child(6)'
		).click();
	});

	it("choose soda type option", () => {
		cy.get(
			'[data-option-id="269"] > .drop-content > :nth-child(4)'
		).click();
	});

	// it("Item count increase by 1", () => {
	//     cy.get(".qty-count > .add-btn").click();
	// });

	it("Deal Product add to cart", () => {
		cy.get(".add-to-cart-submit").click();
	});

	it("proceed to checkout", () => {
		cy.contains("Proceed To Checkout").click();
		cy.get("#user_login_Modal").should("be.visible");
	});

	it("require user email", () => {
		cy.get(".login-email").type("indonepal@yopmail.com", { delay: 200 });
	});

	it("require password", () => {
		cy.get(".login-password").type("1111111111", { delay: 200 });
	});

	it("click login", () => {
		cy.contains("Log In").click();
		cy.get("#user_login_Modal").should("not.be.visible");
		cy.get("#checkout_Modal").should("be.visible");
	});

	// it("click Continue Checkout", () => {
	// 	cy.get(
	// 		".modal-footer > .checkout-btn > .proceed-to-checkout-no-suggestions"
	// 	).click();
	// 	cy.get("#cart_suggestions_Modal").should("be.not.visible");
	// });

	it("click tip percentage", () => {
		cy.get("[data-value='10']").click();
	});

	// it("Enter tip amount", () => {
	//     cy.get("#checkout_Modal").should("be.visible");
	//     cy.get(
	//         ".tip-wrapper > :nth-child(5) > .input-group > .form-control"
	//     ).type("8.55");
	// });

	it("Select Pay at Restaurant in Payment Method", () => {
		// cy.get(".payment-lists > :nth-child(1) > .custom-radio").click({
		// 	multiple: true,
		// });
		cy.get(
			".payment-lists > :nth-child(1) > .custom-control > .custom-control-label"
		).click();
		// cy.contains("label", "Pay at the Restaurant")
		//     .invoke("attr", "for")
		//     .should("equal", "cash");
	});

	it("check accept terms & conditions", () => {
		cy.get("#terms_checkbox").check();
	});

	it("click pay order", () => {
		cy.get(".modal-body > .place-order-button").click();
	});
});
