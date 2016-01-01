(function() {
	var app = angular.module('formValidation', []);

	app.controller('RegistrationController', ['$scope', function($scope) {

		$scope.register = function() {
		    $scope.message = 'Welcome, ' + $scope.user.firstname;
		};

	}]);
})();