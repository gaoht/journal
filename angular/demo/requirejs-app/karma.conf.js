// Karma configuration
// Generated on Thu Oct 10 2013 23:47:04 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
	  // !! Put all libs in RequireJS 'paths' config here (included: false).
	  // All these files are files that are needed for the tests to run,
	  // but Karma is being told explicitly to avoid loading them, as they
	  // will be loaded by RequireJS when the main module is loaded.

	  // all the sources, tests  // !! all src and test modules (included: false)
	  {pattern: 'app/scripts/vendor/*.js', included: false},
	  {pattern: 'app/scripts/services/*.js', included: false},
	  {pattern: 'test/spec/services/*.js', included: false},

	  // !! test main require module last
	  'test/spec/main.js'  
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ["C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
