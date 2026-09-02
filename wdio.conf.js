///
// WebdriverIO Configuration
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-webdriver-javascript-for-nhs-wales
//   * Version: 1.0.0
//   * Created: 2026-09-02T00:00:00Z
//   * Updated: 2026-09-02T00:00:00Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],

    // Patterns to exclude
    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--verbose',
                '--disable-notifications'
            ],
            prefs: {
                'profile.default_content_setting_values.cookies': 2
            }
        }
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.nhs.wales',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    //
    // Framework
    //
    framework: 'mocha',

    //
    // Reporters
    //
    reporters: ['spec'],

    //
    // Mocha Options
    //
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
