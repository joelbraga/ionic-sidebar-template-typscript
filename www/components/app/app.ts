/// <reference path="../../../typings/tsd.d.ts" />

import IonicPlatformService = ionic.platform.IonicPlatformService;
import IScope = angular.IScope;
import IStateParamsService = angular.ui.IStateParamsService;
import IonicModalController = ionic.modal.IonicModalController;
import IonicModalService = ionic.modal.IonicModalService;
import ITimeoutService = angular.ITimeoutService;
import IStateProvider = angular.ui.IStateProvider;
import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
import IState = angular.ui.IState;

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

