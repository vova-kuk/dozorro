import HomePage from "./_page/HomePage";
import {h2HomePage} from "./_data/homePage.data";

describe('LOGIN', () => {
    before(() => {
        browser.url('https://dozorro.org/');
        HomePage.verifyElementText(HomePage.header, h2HomePage);
    });



});