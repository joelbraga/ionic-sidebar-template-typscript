/// <reference path="../../../typings/tsd.d.ts" />

class PlayListController {

  static IID = 'PlaylistCtrl';
  static $inject = ['$scope', '$stateParams'];

  constructor($scope:IScope, $stateParams:IStateParamsService) {
  }
}

var app = angular.module('starter.controllers');
app.controller(PlayListController.IID, PlayListController);
