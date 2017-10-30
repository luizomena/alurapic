angular.module('alurapic')
.controller('TiposController', function($scope, $http){
	$scope.tipos = [];

	$http.get('/v1/grupos')
	.success(function(retorno){
		console.log(retorno);
		$scope.tipos = retorno;
	})
	.error(function(erro){
		console.log(erro);
	})
})