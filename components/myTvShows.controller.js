(function () {
  angular.module("ngTvShows")
       .controller("myTvShowsController", function ($http, tvShowFactory) {
         var vm = this;
         
         vm.currentNavItem = "myTvShowsNav";
         vm.myTvShows = tvShowFactory.myTvShows;

       });
})();
