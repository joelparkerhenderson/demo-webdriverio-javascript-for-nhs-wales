# Demo WebdriverIO JavaScript for NHS Wales

A friendly, step-by-step tutorial that demonstrates:

* [WebdriverIO](https://webdriver.io/) browser automation testing
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) programming language
* [Node](https://nodejs.org/) runtime built on Chrome's V8 JavaScript engine
* [ChromeDriver](https://developer.chrome.com/docs/chromedriver) extends Webdriver by adding Chromium-specific capabilities
* [Mocha](https://mochajs.org/) test framework, with real `describe`/`it` test cases
* Real-world testing against the [NHS Wales](https://www.nhs.wales/) website

This demo is meant to be read top to bottom like a guide: open
`test/specs/demo.js` alongside this README and follow along.

## What this demo tests

The spec drives a real browser to the NHS Wales website and checks a few
things a visitor might do:

1. **Visit the home page** and verify the page title is `Home - NHS Wales`.
2. **Click the "About Us" link** and verify the resulting page has the title
   `About Us - NHS Wales` and a headline that reads `About Us`.
3. **Use the search box**: type `help`, click the search button, and verify
   the results page mentions `Search Results` and `Your search for "help"`.

Each step is a real Mocha `it` test case with its own assertion, so you can
see each check pass (or fail loudly) as WebdriverIO runs the suite.

## Install

### Install Node and NPM

Install Node and NPM from <https://nodejs.org/>

Run this to confirm your version:

```sh
node -v
```

Output should be at least:

```stdout
v23.6.1
```

Run this to confirm your version:

```sh
npm -v
```

Output should be at least:

```stdout
11.2.0
```

### Install WebdriverIO

Install dependencies:

```sh
npm install
```

### Update

Run:

```sh
npm install npm@latest
npm upgrade
npm audit fix
```

## Run

Run:

```sh
npm test
```

Or equivalently:

```sh
npm run demo
```

Or directly with the WebdriverIO CLI:

```sh
npx wdio run wdio.conf.js
```

The suite will do three things:

1. Launch your local Chrome web browser to view the NHS Wales home page
   <https://www.nhs.wales/>.
2. Interact with the web page in various ways, such as clicking the
   "About Us" link and using the search box.
3. Assert that the page titles, headline, and search results match what a
   real visitor would expect to see.

### Troubleshooting "chromedriver" Not Opened

If you get this kind of error message:

```txt
"chromedriver" Not Opened. Apple could not verify "chromedriver"
is free of malware that may harm your Mac or compromise your privacy.
```

Or this kind of error message:

```txt
Apple is not able to verify that it is free from malware that could harm your
Mac or compromise your privacy. Don't open this unless you are certain it is
from a trustworthy source.
```

Then click "Done".

Try this command line solution:

```sh
xattr -d com.apple.quarantine $(which chromedriver) 2>/dev/null
```

Try adjusting your system settings:

* Apple menu -> Settings -> Security & Privacy -> General

* See the entry that says: "chromedriver" was blocked to protect your Mac.

* Click the button "Allow Anyway".

### Troubleshooting "This version of ChromeDriver …"

If you get this kind of error message:

```txt
UnhandledPromiseRejectionWarning:
SessionNotCreatedError: session not created:
This version of ChromeDriver only supports Chrome version …
```

Then you may need to harmonize your Chrome browser app and your Chrome webdriver.

If you use macOS brew, then upgrade chromedriver:

```sh
brew upgrade chromedriver
```

To update your Chrome browser app:

* On your computer, open Chrome.

* Find your current Chrome version by typing in the URL bar: `chrome://version/`.

* You should see a web page with many details, and you should see the first line with the version number, such as: "Google Chrome 135.0.7049.86 (Official Build)".

* At top right, tap the "More" icon, which is 3 vertical dots.

* You see the "More" menu. If you see a menu item "Update", then choose it. If you don't see a menu item "Update", then  you're on the current version.

To update your Chrome webdriver:

* Go to https://chromedriver.chromium.org/downloads

* Download the version that matches your Chrome browser app.

## Tracking

* Package: demo-webdriver-javascript-for-nhs-wales
* Version: 1.0.0
* Created: 2026-09-02T00:00:00Z
* Updated: 2026-09-02T00:00:00Z
* License: GPL-2.0-or-greater or for custom license contact us
* Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
