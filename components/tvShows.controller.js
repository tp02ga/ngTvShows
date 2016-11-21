(function () {
  angular.module("ngTvShows")
      .controller("tvShowsController", function ($http, tvShowFactory) {
        var vm = this;
        
        vm.addTvShow = addTvShow;
        vm.currentNavItem = "tvShowsNav";
        vm.isInMyTvShowList = isInMyTvShowList;
        vm.myTvShows = tvShowFactory.myTvShows;
        vm.removeTvShow = removeTvShow;

        $http.get("https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=90845d69d5a590eb09231fc08b47e616")
              .then(function (tvShows) {
                console.log(tvShows);
                vm.tvShows = tvShows.data.results;
              }, function () {
                console.log("There was an error getting the info from the api");
              });

        function addTvShow (tvShow) {
          vm.myTvShows.push(tvShow);
          console.log(vm.myTvShows);
        }

        function removeTvShow (tvShow) {
          var index = getTvShowIndex(tvShow);

          vm.myTvShows.splice(index, 1);
        }

        function isInMyTvShowList (tvShow) {
          return getTvShowIndex(tvShow) > -1;
        }

        function getTvShowIndex (tvShow)
        {
          for (var i=0; i<vm.myTvShows.length; i++)
          {
            if (tvShow.id == vm.myTvShows[i].id)
            {
              return i;
            }
          }
          return -1;
        }
      });
})();
