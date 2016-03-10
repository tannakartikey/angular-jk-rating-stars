# AngularJS Rating Stars

Amazing AngularJS 1 Rating Stars directive that works with Angular Material.

Demo : https://embed.plnkr.co/q7pgHz/

## Install :

### npm
`npm install angular-jk-rating-stars`

## Usage :

 - Add `jk-rating-stars.js` to your index file:
```html
<script src="angular.js"></script>
<script src="jk-rating-stars.js"></script>
```

 - Add `jk-rating-stars.css` to your index file:
```html
<link href="jk-rating-stars.css" rel="stylesheet" type="text/css" />
```
 - Add the google material icons
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

 - Add a dependency to the `jkAngularRatingStars` module in your application.
```js
angular.module('MyApp', ['jkAngularRatingStars']);
```

 - Add a `jk-rating-stars` tag to your html, set the amount of stars and bind a variable that will holds the selected value. If the stars are not set, we use the default of 5 stars.
```html
<jk-rating-stars stars="5" value="ctrl.rating'" >
</jk-rating-stars>
```

## TODO :

 - Read-only feature
 - Option to set no rate (0 stars)
 - Option to change the styling of the component

## License
This module is released under the permissive [MIT license](http://revolunet.mit-license.org). Contributions or suggestions are always welcome :D
