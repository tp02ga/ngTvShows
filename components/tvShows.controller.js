(function () {
  angular.module("ngTvShows")
       .controller("tvShowsController", function ($http) {
         var vm = this;
         
         vm.currentNavItem = "tvShowsNav";

         $http.get("https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=90845d69d5a590eb09231fc08b47e616")
              .then(function (tvShows) {
                console.log(tvShows);
                vm.tvShows = tvShows.data.results;
              }, function () {
                console.log("There was an error getting the info from the api");
              });

       });
})();
