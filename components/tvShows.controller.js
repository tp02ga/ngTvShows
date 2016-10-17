(function () {
  angular.module("ngTvShows")
       .controller("tvShowsController", function ($scope, $http) {
         $http.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=90845d69d5a590eb09231fc08b47e616")
              .then(function (data) {
                console.log(data);
              }, function () {
                console.log("There was an error getting the info from the api");
              });
       });
})();
