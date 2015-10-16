/// <reference path="../../../typings/tsd.d.ts" />

class MenuController {

  static IID:string = 'MenuCtrl';
  static $inject:Array<string> = ['$scope', '$ionicModal', '$timeout'];

  loginData:any;
  modal:IonicModalController;

  constructor($scope:IScope, $ionicModal:IonicModalService, private $timeout:ITimeoutService) {
    // Form data for the login modal
    this.loginData = {};
    var self = this;

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('components/modal/login.html', {
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

var components = angular.module('app.components', []);
components.controller(MenuController.IID, MenuController);

