/// <reference path="../../typings/tsd.d.ts" />

import IScope = angular.IScope;
import IStateParamsService = angular.ui.IStateParamsService;
import IonicModalController = ionic.modal.IonicModalController;
import IonicModalService = ionic.modal.IonicModalService;
import ITimeoutService = angular.ITimeoutService;

interface IPlaylist {
  title: string, id: number
}

class AppController {

  static IID:string = 'AppCtrl';
  static $inject:Array<string> = ['$scope', '$ionicModal', '$timeout'];

  loginData:any;
  modal:IonicModalController;

  constructor($scope:IScope, $ionicModal:IonicModalService, private $timeout:ITimeoutService) {
    // Form data for the login modal
    this.loginData = {};
    var self = this;

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then((modal:IonicModalController) => {
      self.modal = modal;
    });
  }

  // Triggered in the login modal to close it
  closeLogin() {
    this.modal.hide();
  };

  // Open the login modal
  login = function () {
    this.modal.show();
  };

  // Perform the login action when the user submits the login form
  doLogin = function () {
    console.log('Doing login', this.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    this.$timeout(() => this.closeLogin(), 1000);
  };
}

class PlaylistsController {

  static IID:string = 'PlaylistsCtrl';
  static $inject:string[] = [];

  playlists: IPlaylist[] = [
    {title: 'Reggae', id: 1},
    {title: 'Chill', id: 2},
    {title: 'Dubstep', id: 3},
    {title: 'Indie', id: 4},
    {title: 'Rap', id: 5},
    {title: 'Cowbell', id: 6}
  ];

  constructor() {
  }
}

class PlayListController {

  static IID = 'PlaylistCtrl';
  static $inject = ['$scope', '$stateParams'];

  constructor($scope:IScope, $stateParams:IStateParamsService) {
  }
}

(function () {
  var app = angular.module('starter.controllers', []);

  app.controller(AppController.IID, AppController);
  app.controller(PlaylistsController.IID, PlaylistsController);
  app.controller(PlayListController.IID, PlayListController);
})();
