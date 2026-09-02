# Spec: Demo WebdriverIO JavaScript for NHS Wales

## Summary

This repo is a WebdriverIO + Mocha test suite (`test/specs/demo.js`) that
drives a real Chrome browser against the live production
[NHS Wales](https://www.nhs.wales/) website and asserts three things a
real visitor would expect to see. This file is the single source of truth
for the exact assertions and selectors involved. If the code in
`test/specs/demo.js` or `wdio.conf.js` ever disagrees with this file, that
is a defect in one of them — fix it before doing anything else.

## Scope

In scope: the three real, assertion-based test cases described below,
their exact expected strings, and the selectors they use.

Out of scope: any other page or feature of nhs.wales; performance,
accessibility, or visual-regression testing; anything not already
implemented in `test/specs/demo.js`.

## Principles and rules

* These are real test-framework assertions (Mocha `it` blocks using
  Node's `assert.equal` / `assert`), run against the live production
  nhs.wales site — not `console.log` statements, and not mocked or
  stubbed responses.
* `wdio.conf.js` sets `baseUrl: 'https://www.nhs.wales'`, so
  `browser.url('/')` in the spec navigates to
  `https://www.nhs.wales/`.
* No mocking: every check below exercises the real live site over the
  network.

## Detail

1. **Home page title.**
   Navigate to `https://www.nhs.wales/` (`browser.url('/')`).
   Assert the page title (`browser.getTitle()`) equals exactly:
   `Home - NHS Wales`

2. **About Us link.**
   From the home page, find the link with exact link text `About Us`
   (selector `$('=About Us')`) and click it.
   Assert the resulting page title equals exactly:
   `About Us - NHS Wales`
   Assert the `h1` element's trimmed text equals exactly:
   `About Us`

3. **Search for "help".**
   From the home page, type the search term `help` into the input with
   id `navKeywords` (selector `#navKeywords`), then click the button with
   id `button-addon` (selector `#button-addon`).
   Assert the page body text contains the substring:
   `Search Results`
   Assert the page body text also contains the exact phrase:
   `Your search for "help"`

## Acceptance criteria

* All Mocha `it` blocks in `test/specs/demo.js` pass when run against the
  live nhs.wales site (`npm test` / `npm run demo` /
  `npx wdio run wdio.conf.js`).
* As of 2026-09-02, nhs.wales's TLS certificate has been expired since
  2025-08-18. Until it is renewed, running this demo against the live
  site will fail with a certificate error unrelated to this code. This is
  a known, independently-confirmed site issue (not a defect here) — do
  not mistake a certificate-related failure for a code bug, and do not
  attempt to work around it by disabling certificate verification or
  mocking the site.

## Related topics

* [../README.md](../README.md)
* [../AGENTS.md](../AGENTS.md)

## Sources

* <https://www.nhs.wales/>
