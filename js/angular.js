import 'angular'
var rxApp = angular.module("rxApp", []);
rxApp.controller("RxAppController", function() {
  var rxApp = this;
  rxApp.message = "Hello Angular!";
});
