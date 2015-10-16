/// <reference path="../../../typings/tsd.d.ts" />

interface IPlaylist {
  title: string, id: number
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

var app = angular.module('starter.controllers');
app.controller(PlaylistsController.IID, PlaylistsController);
