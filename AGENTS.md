# AGENTS.md

This repo is a small demo of [WebdriverIO](https://webdriver.io/) browser
automation in JavaScript, structured as a real [Mocha](https://mochajs.org/)
test suite (`describe`/`it`), driving a real browser against the live
[NHS Wales](https://www.nhs.wales/) website.

## Source of truth

`spec/index.md` is the single source of truth for the exact three
assertions and selectors this suite checks against the real nhs.wales
site. The real code lives in `test/specs/demo.js`.

If the code and `spec/index.md` ever disagree, that is a defect in one of
them. Fix it before doing anything else.

## Non-negotiables

* The assertions here are real test-framework assertions (Mocha `it` with
  `assert.equal` / `assert`), not `console.log` statements. Keep them that
  way. Do not "simplify" a test into a script that only logs output.
* This demo targets the real production nhs.wales site. Don't change the
  target site, the three test scenarios, or the exact expected strings
  (page titles, link text, selector ids, search term, result substrings)
  without updating `spec/index.md` first.

## Install and run

See `README.md` for Install and Run instructions, including chromedriver
troubleshooting (the "chromedriver Not Opened" and "This version of
ChromeDriver…" sections). Don't duplicate those instructions here.

## Known blocker: nhs.wales TLS certificate

As of this writing, the live nhs.wales site's TLS certificate has been
expired since 2025-08-18. Running this suite against the live site will
currently fail with a certificate error. That failure is a site problem,
not a defect in this repo's code or tests — see `spec/index.md` for
details. Do not attempt to "fix" this by disabling certificate
verification or mocking the site.

CLAUDE.md is a pointer to this file — it is the single source of truth for
agent instructions.
