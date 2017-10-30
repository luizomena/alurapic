angular.module('alurapic')
.controller('FotoController', function($scope, $routeParams, recursoFoto, cadastroDeFotos){

	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId) {
		recursoFoto.get({ fotoId: $routeParams.fotoId }, 
			function(foto) {
	            $scope.foto = foto;
	        },function(erro) {
	            console.log(erro);
	            $scope.mensagem = 'Não foi possível obter a foto'
	        })
    }

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(retorno){
				$scope.mensagem = retorno.mensagem;
                
                if (retorno.inclusao){
                	$scope.foto = {};
					$scope.formulario.$setPristine();
                }
			})
			.catch(function(retorno){
				$scope.mensagem = retorno.mensagem;
			});
		}
	}
})