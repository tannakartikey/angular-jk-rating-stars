(function() {
  'use strict';

  angular.module('jkAngularRatingStars', [
    'jkAngularRatingStars.templates'
  ]);
}());

(function() {
  'use strict';

  function RatingStarsController($attrs) {

    var that = this;
    that.stars = 5;

    $attrs.$observe('stars', function() {
      console.log('stars change...');
      that.stars = parseInt(that.stars);
      that.starsArray = that.getStarsArray();
      that.validateStars(that.value);
    });

    $attrs.$observe('value', function() {
      that.value = parseInt(that.value);
      if (that.value > that.stars) {
        that.value = that.stars;
      }
      that.validateStars(that.value);
    });

    that.getStarsArray = function() {
      var starsArray = [];
      for (var index = 0; index < that.stars; index++) {
        var starItem = {
          index: index,
          class: 'star_border'
        };
        starsArray.push(starItem);
      }
      return starsArray;
    };

    that.starsArray = that.getStarsArray();

    that.setRating = function(value) {
      that.value = value;
      that.validateStars(that.value);
    };

    that.setMouseOverRating = function(value) {
      that.validateStars(value);
    };

    that.validateStars = function(valueIndex) {
      if (!that.starsArray || that.starsArray.length === 0) {
        return;
      }
      for (var index = 0; index < that.starsArray.length; index++) {
        var starItem = that.starsArray[index];
        if (index <= (valueIndex - 1)) {
          starItem.class = 'star';
        } else {
          starItem.class = 'star_border';
        }
      }
    };

  }

  angular
    .module('jkAngularRatingStars')
    .controller('RatingStarsController', [
      '$attrs',
      RatingStarsController
    ]);

}());

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
        stars: '@?',
        value: '=?'
      }
    };
  }

  angular
    .module('jkAngularRatingStars')
    .directive('jkRatingStars', [
    RatingStarsDirective
  ]);

}());

(function(){angular.module("jkAngularRatingStars.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("rating-stars-directive.html","<div\n  class=\"jk-rating-stars-container\"\n  layout=\"row\" >\n  <a\n    class=\"star-button\"\n    ng-mouseover=\"ctrl.setMouseOverRating($index + 1)\"\n    ng-mouseleave=\"ctrl.setRating(ctrl.value)\"\n    ng-click=\"ctrl.setRating($index + 1)\"\n    ng-repeat=\"item in ctrl.starsArray\" >\n    <i class=\"material-icons\">{{item.class}}</i>\n  </a>\n</div>\n");}]);})();