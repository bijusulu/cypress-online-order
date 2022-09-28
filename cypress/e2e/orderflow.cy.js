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
        cy.get(".login-email").type("adl.mytest@gmail.com");
    });

    it("require password", () => {
        cy.get(".login-password").type("bijusulu");
    });

    it("click login", () => {
        cy.contains("Log In").click();
        cy.get(".modal-dialog").should("not.be.visible");
        cy.contains("ORDER NOW").click();
    });

    // it("click online order button", () => {
    //     cy.contains("ORDER NOW").click();
    // });

    // Mobile view
    // it("click menu bar", () => {
    //     cy.get("#menu-bar").click();
    // });

    // it("find online order button and click", () => {
    //     cy.get(".nav-wrapper > ul").find("li").eq(8).click();
    // });

    it("product add to cart", () => {
        cy.get("[data-product-id='412']").click();
    });

    it("click PickUp", () => {
        cy.get("[data-target='#pickup']").click();
    });

    it("click Now", () => {
        cy.get("[data-target='#show_now']").click();
    });

    it("schedule order", () => {
        cy.contains("Schedule").click();
    });

    it("Item count increase by 1", () => {
        cy.get(".qty-count > .add-btn").click();
    });

    it("Product add to cart", () => {
        cy.get(".add-to-cart-submit").click();
    });

    it("proceed to checkout", () => {
        cy.contains("Proceed To Checkout").click();
        cy.get("#cart_suggestions_Modal").should("be.visible");
    });

    it("click Continue Checkout", () => {
        cy.get(
            ".modal-footer > .checkout-btn > .proceed-to-checkout-no-suggestions"
        ).click();
        cy.get("#cart_suggestions_Modal").should("be.not.visible");
    });

    it("Enter tip amount", () => {
        cy.get("#checkout_Modal").should("be.visible");
        cy.get(
            ".tip-wrapper > :nth-child(5) > .input-group > .form-control"
        ).type("5.55");
    });

    it("check accept terms & conditions", () => {
        cy.get("#terms_checkbox").check();
    });

    it("Select Pay at Restaurant in Payment Method", () => {
        cy.get(".payment-lists > :nth-child(1) > .custom-radio").click({
            multiple: true,
        });
        // cy.contains("label", "Pay at the Restaurant")
        //     .invoke("attr", "for")
        //     .should("equal", "cash");
    });

    it("click pay order", () => {
        cy.get(".modal-body > .btn").click();
    });
});
