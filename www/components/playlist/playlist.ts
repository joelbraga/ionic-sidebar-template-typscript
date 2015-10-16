/// <reference path="../../../typings/tsd.d.ts" />

class PlayListController {

  static IID = 'PlaylistCtrl';
  static $inject = ['$scope', '$stateParams'];

  constructor($scope:IScope, $stateParams:IStateParamsService) {
  }
}

var components = angular.module('app.components');
components.controller(PlayListController.IID, PlayListController);
