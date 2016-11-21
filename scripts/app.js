var tvShowsApp = angular.module("ngTvShows", ['ui.router', 'ngMaterial'])
                         .config(function ($stateProvider) {

                           $stateProvider
                             .state(
                               'tvShows', {
                                  url: "/tvShows",
                                  templateUrl: "/components/templates/tvShows.template.html",
                                  controller: "tvShowsController as vm"
                                }
                             )
                             .state(
                               'myTvShows', {
                                  url: "/myTvShows",
                                  templateUrl: "/components/templates/myTvShows.template.html",
                                  controller: "myTvShowsController as vm"
                                }
                             )
                             .state('movies', {
                               url: "/movies",
                               templateUrl: "/components/templates/movies.template.html",
                               controller: "moviesController as vm"
                             });
                         });

var myTvShows = [];

tvShowsApp.factory("tvShowFactory", function () {
  return {"myTvShows" : myTvShows};
});