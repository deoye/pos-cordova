angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})

.factory('ComandaService', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var comandas = [
    { id: 0, name: 'João Pedro', products: [ {id: 0, name: 'Heineken 600ml', count: 0}, {id: 1, name: 'Ypioca Ouro Dose', count: 0} ] },
    { id: 1, name: 'Pedro José', products: [ {id: 0, name: 'Heineken 600ml', count: 0} ] },
    { id: 2, name: 'Luiz Inácio', products: [ {id: 0, name: 'Heineken 600ml', count: 0} ] },
    { id: 3, name: 'Garrincha Futebol', products: [ {id: 0, name: 'Heineken 600ml', count: 0} ] },
  ];

  return {
    all: function() {
      return comandas;
    },
    get: function(comandaId) {
      // Simple index lookup
      return comandas[comandaId];
    }
  }
});
