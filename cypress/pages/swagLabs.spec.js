import { Elements } from "../elements/elements";

class Inventory {
    select_order(order) {
        if (order === 'backpack') {
            Elements.mainPage.addCardButtonBackpack().click()
        }
        else if (order === 'bike') {
            Elements.mainPage.addCardButtonBikeLight().click()
        }
        else if (order === 'tshirt') {
            Elements.mainPage.addCardButtonTShirt().click()
        }
        else if (order === 'jacket') {
            Elements.mainPage.addCardButtonFleeceJacket().click()
        }
        return this;
    }

    go_shopping_cart() {
        Elements.mainPage.shoppingLink().click()
    }

    complete_order(name, lastname, zipcode) {
        Elements.checkout.checkoutButton().click()
        Elements.checkout.firstName().type(name)
        Elements.checkout.lastName().type(lastname)
        Elements.checkout.zipCode().type(zipcode)
        Elements.checkout.continueButton().click()
        Elements.checkout.finishButton().click()
        return this;
    }
}

export default new Inventory();