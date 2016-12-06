(function () {
  angular
    .module("ngTvShows")
    .factory("tvShowFactory", function ($firebaseArray) {
      var ref = firebase.database().ref();

      return {
        "ref" : $firebaseArray(ref.child("/users"))
      }
    });
})();
