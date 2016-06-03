myApp.controller('OtherController', ['$scope', '$http', function($scope, $http) {
  console.log('Other controller running');
  $scope.powerSelector= {};
  $scope.heroes=[];

  getPowers();
  getHeroes();
    function getPowers(){
      $http.get('/powers')
      .then(function (response){

      $scope.superPowers = response.data;
      })
  }

  function getHeroes(){
    $http.get('/heroes')
    .then(function (response){

    $scope.heroes = response.data;

    })

  };

  $scope.findAllHeroes = function(){
    $scope.displayedHeroes = $scope.heroes;
  }

  $scope.deleteHero = function(target){

    console.log('hero id', target);
    $http.delete('/heroes/' + target)
    .then(function (response){

    })
  }

  $scope.findHeroesWithPower = function (){

    $scope.displayedHeroes = _($scope.heroes).filter({power_name: $scope.powerSelector.power_name}).value()

  }

}]);
