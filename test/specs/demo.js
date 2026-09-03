///
// Demo of WebdriverIO browser automation with JavaScript, using the
// NHS Wales website <https://www.nhs.wales/> as a friendly real-world example.
//
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-webdriverio-javascript-for-nhs-wales
//   * Version: 1.0.0
//   * Created: 2026-09-02T00:00:00Z
//   * Updated: 2026-09-02T00:00:00Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

import { strict as assert } from 'assert';

describe('Demo WebdriverIO for NHS Wales', () => {

    it('should show the Home page title', async () => {
        // Visit the NHS Wales home page.
        //
        // This demonstrates `browser.url('/')` navigation using the
        // configured `baseUrl`.
        await browser.url('/');

        const title = await browser.getTitle();
        console.log(`Home page title: "${title}"`);
        assert.equal(title, 'Home - NHS Wales');
    });

    it('should navigate to About Us via the link', async () => {
        // From the home page, find the "About Us" link by its link text
        // and click it.
        //
        // This demonstrates the `$('=linktext')` selector.
        //
        // Example HTML:
        //
        //     <a href="/about-us/">About Us</a>
        //
        await browser.url('/');

        const aboutUsLink = await $('=About Us');
        await aboutUsLink.click();

        const title = await browser.getTitle();
        console.log(`About Us page title: "${title}"`);
        assert.equal(title, 'About Us - NHS Wales');

        const heading = await $('h1');
        const headingText = (await heading.getText()).trim();
        console.log(`About Us headline: "${headingText}"`);
        assert.equal(headingText, 'About Us');
    });

    it('should show search results for "help"', async () => {
        // From the home page, type "help" into the search box, then
        // click the search button.
        //
        // Example HTML:
        //
        //     <input type="text" id="navKeywords">
        //     <button id="button-addon">Search</button>
        //
        await browser.url('/');

        const searchInput = await $('#navKeywords');
        await searchInput.setValue('help');

        const searchButton = await $('#button-addon');
        await searchButton.click();

        const body = await $('body');
        const bodyText = await body.getText();
        assert(bodyText.includes('Search Results'), 'Expected page to contain "Search Results"');
        assert(bodyText.includes('Your search for "help"'), 'Expected page to contain \'Your search for "help"\'');
    });

});
