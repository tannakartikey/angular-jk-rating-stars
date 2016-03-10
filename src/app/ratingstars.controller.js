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
