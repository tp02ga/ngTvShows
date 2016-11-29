(function () {
  angular.module("ngTvShows")
       .controller("myTvShowsController", function ($http, tvShowFactory, tvShowInfoService, tvShowEpisodeService) {
          var vm = this;
         
          vm.currentNavItem = "myTvShowsNav";
          vm.myTvShows = tvShowFactory.myTvShows;

          for (tvShow of vm.myTvShows)
          {

            tvShowInfoService.getTvInfo(tvShow.id).then(function (results) {
              var data = results.data;
              var tvId = data.id;

              var tvShowIndex = getTvShowIndex(tvId);

              vm.myTvShows[tvShowIndex].tvInfo = data;

              return tvShowEpisodeService.getEpisodeInfo(tvId, data.number_of_seasons);
            }).then(function (results) {
              var tvId = results.config.url; // returns the URL of my HTTP GET for the episodes
              tvId = tvId.split("api.themoviedb.org/3/tv/")[1]; // this will give me tvId followed by everything in the request after the tvId
              tvId = tvId.split("/")[0]; // and finally, we have just the tv id

              var data = results.data;

              var tvShowIndex = getTvShowIndex(tvId);

              vm.myTvShows[tvShowIndex].tvInfo.episodes = data.episodes;
              vm.myTvShows[tvShowIndex].tvInfo.nextEpisode = getNextEpisode(data.episodes);

            });
          }

          function getTvShowIndex(tvId)
          {
            for (var i=0; i<vm.myTvShows.length; i++)
            {
              if (tvId == vm.myTvShows[i].id)
              {
                return i;
              }
            }
            return -1;
          }

          function getNextEpisode (episodes)
          {
            var today = new Date();

            for (episode of episodes)
            {
              if (today < new Date(episode.air_date))
              {
                return episode.air_date;
              }
            }
          }

          return "no data"
       });
})();
