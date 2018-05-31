var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, $http) {
  $http.get('https://my.api.mockaroo.com/product_catalog.json?key=866ae800').then(function(response) {
    $scope.myData = response.data;
  });
});
