myApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  console.log('home controller running');

  $scope.superPowers = [];
  $scope.currentHero = {};
  getPowers();

    function getPowers(){
    $http.get('/powers')
    .then(function (response){

    $scope.superPowers = response.data;
    })
  }
  $scope.submitNewHero = function () {
  var data = $scope.currentHero;
  data.power_name = data.power_name.power_name

  $http.post('/heroes/' , data)
    .then(function (response) {
      console.log('Put hero', data);

    });
   };






}]);
