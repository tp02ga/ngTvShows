angular.module("ngTvShows", ['ui.router', 'ngMaterial'])
       .config(function ($stateProvider) {

         $stateProvider
           .state(
             'tvShows', {
                url: "/tvShows",
                templateUrl: "/components/templates/tvShows.template.html",
                controller: "tvShowsController as vm"
              }
           )
           .state('movies', {
             url: "/movies",
             templateUrl: "/components/templates/movies.template.html",
             controller: "moviesController as vm"
           });
       });