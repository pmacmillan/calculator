module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-mocks.js',
      'js/**/module.js',
      'js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-jasmine',
      'karma-chrome-launcher'
    ]
  });
};
