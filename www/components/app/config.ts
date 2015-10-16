/// <reference path="../../../typings/tsd.d.ts" />

interface configRouteState {
  name: string;
  config: IState;
}

(function () {
  var app = angular.module('starter');

  app.config(['$stateProvider', '$urlRouterProvider', routesConfigurator]);

  function getRoutes():configRouteState[] {
    return [
      {
        name: 'app',
        config: {
          url: '/app',
          abstract: true,
          templateUrl: 'components/menu/menu.html'
        }
      },
      {
        name: 'app.search',
        config: {
          url: '/search',
          views: {
            'menuContent': {
              templateUrl: 'components/search/search.html'
            }
          }
        }
      },
      {
        name: 'app.browse',
        config: {
          url: '/browse',
          views: {
            'menuContent': {
              templateUrl: 'components/browse/browse.html'
            }
          }
        }
      },
      {
        name: 'app.playlists',
        config: {
          url: '/playlists',
          views: {
            'menuContent': {
              templateUrl: 'components/playlists/playlists.html'
            }
          }
        }
      },
      {
        name: 'app.single',
        config: {
          url: '/playlists/:playlistId',
          views: {
            'menuContent': {
              templateUrl: 'components/playlist/playlist.html',
              controller: 'PlaylistCtrl'
            }
          }
        }
      }
    ]
  }

  function routesConfigurator($stateProvider:IStateProvider, $urlRouterProvider:IUrlRouterProvider) {

    getRoutes().forEach(function (route:configRouteState) {
      $stateProvider.state(route.name, route.config);
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
  }
})();
