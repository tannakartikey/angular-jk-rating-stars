(function() {

  'use strict';

  function RatingStarsDirective() {

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'rating-stars-directive.html',
      scope: {},
      controller: 'RatingStarsController',
      controllerAs: 'ctrl',
      bindToController: {
        maxRating: '@?',
        rating: '=?',
        readOnly: '=?',
        onRating: '&'
      }
    };
  }

  angular
    .module('jkAngularRatingStars')
    .directive('jkRatingStars', [
    RatingStarsDirective
  ]);

}());
