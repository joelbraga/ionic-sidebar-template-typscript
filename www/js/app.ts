/// <reference path="../../typings/tsd.d.ts" />

import IonicPlatformService = ionic.platform.IonicPlatformService;

(function () {
  var app = angular.module('starter', [
    // Ionic Modules
    'ionic',

    // Angular Modules

    // App Modules
    'starter.controllers'
  ]);

  app.run(($ionicPlatform: IonicPlatformService) => {
    $ionicPlatform.ready(() => {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        window.StatusBar.styleDefault();
      }
    });
  });
})();

