var tvShowsApp = angular.module("ngTvShows", ['ui.router', 'ngMaterial', 'firebase'])
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

tvShowsApp.factory("tvShowInfoService", function ($http) {
  var getTvInfo = function (tvId) { 
    return $http.get("https://api.themoviedb.org/3/tv/"+tvId+"?api_key=90845d69d5a590eb09231fc08b47e616");
  }

  return {"getTvInfo" : getTvInfo};
});

tvShowsApp.factory("tvShowEpisodeService", function ($http) {
  var getEpisodeInfo = function (tvId, seasonNumber) {
    return $http.get("https://api.themoviedb.org/3/tv/"+tvId+"/season/"+seasonNumber+"?api_key=90845d69d5a590eb09231fc08b47e616")
  }

  return {"getEpisodeInfo" : getEpisodeInfo};
});