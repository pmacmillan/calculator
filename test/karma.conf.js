module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-mocks.js',
      'js/**/module.js',
      'js/**/*.js',
      'test/unit/**/*.js',
      'views/**/*.jade'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    preprocessors: {
      'views/**/*.jade': ['ng-jade2js']
    },

    ngJade2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'views/',
      // prepend this to the
      prependPrefix: 'templates/',

      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      moduleName: 'templates'
    },

    plugins : [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-ng-jade2js-preprocessor'
    ]
  });
};
