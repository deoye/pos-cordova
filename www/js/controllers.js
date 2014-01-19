angular.module('starter.controllers', [])

// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})


// Comanda Finder Controller
.controller('ComandaFinderCtrl', function($scope, ComandaService) {
  $scope.comanda = null;

  $scope.submit = function() {
    if (this.comandaNumber) {
      $scope.comanda = ComandaService.get(this.comandaNumber);
    }
  };

  $scope.addOne = function(productId) {
    $scope.comanda = ComandaService.get(this.comandaNumber);
    $scope.comanda.products[productId].count++;
  };

});
