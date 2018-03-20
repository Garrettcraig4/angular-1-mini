angular.module("app").controller("mainCtrl", function($scope) {
  $scope.friends = [
    {
      name: "shea",
      age: 34
    },
    {
      name: "bryce",
      age: 24
    },
    {
      name: "mario",
      age: 25
    }
  ];
  $scope.opts = ["name", "age"];
  $scope.directions = [
    {
      name: "Asc",
      value: "+"
    },
    {
      name: "Desc",
      value: "-"
    }
  ];
});
