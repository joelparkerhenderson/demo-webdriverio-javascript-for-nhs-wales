---
name: demo-webdriver-javascript-for-nhs-wales
description: Explains and runs the WebdriverIO/Mocha browser-automation demo in this repo (three real assertion-based tests against the live nhs.wales site); invoke when the user wants to understand, run, or adapt this demo's real-test-framework pattern to another site.
---

# Demo WebdriverIO JavaScript for NHS Wales

## What this demo teaches

How to write real-world, WebDriver-based browser automation tests using
[WebdriverIO](https://webdriver.io/) and a real test framework
([Mocha](https://mochajs.org/), `describe`/`it`) — not a plain script with
`console.log` calls. The suite drives a real Chrome browser against the
live, production [NHS Wales](https://www.nhs.wales/) government website
and makes three real assertions a visitor's experience should satisfy:

1. The home page title is exactly `Home - NHS Wales`.
2. Clicking the "About Us" link leads to a page titled exactly
   `About Us - NHS Wales` with an `h1` reading exactly `About Us`.
3. Searching for `help` (input `#navKeywords`, button `#button-addon`)
   leads to a page whose body contains `Search Results` and the exact
   phrase `Your search for "help"`.

The exact strings and selectors are maintained in `../spec/index.md`, not
duplicated here.

## How to run it

```sh
npm install
npm test
```

See `../README.md` for full install/run details and chromedriver
troubleshooting.

## Adapting the pattern to a different real site

1. Pick a real, publicly reachable site (ideally one that won't change
   often) and identify three visitor-like scenarios: a page-title check,
   a link-navigation check, and a search or form-interaction check.
2. Update `wdio.conf.js`'s `baseUrl` to the new site.
3. Rewrite each `it` block in `test/specs/demo.js` to use real selectors
   from the new site (link text, element ids), keeping one real assertion
   per scenario (`assert.equal` / `assert`).
4. Update `../spec/index.md` first with the new URL, expected strings,
   and selectors — then make the code match. Code and spec must never
   silently diverge.
5. Keep tests as real Mocha `it` blocks with real assertions — never
   collapse them into a script that only logs output.

`AGENTS.md` and `spec/index.md` are the source of truth — if this skill's
summary ever disagrees with those, they win.
