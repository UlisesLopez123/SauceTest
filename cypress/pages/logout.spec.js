import { Elements } from "../elements/elements";

class Logout {

    logout() {
        Elements.hamburguerButton.burguerButton().click()
        Elements.hamburguerButton.logoutButton().click()
        return this;
    }
}

export default new Logout();