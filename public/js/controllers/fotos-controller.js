angular.module('alurapic')
.controller('FotosController', function($scope, recursoFoto){
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(
		function(retorno){
			console.log(retorno);
			$scope.fotos = retorno;
		},function(erro){
			console.log(erro);
		})

	$scope.remover = function(foto){
		recursoFoto.delete({ fotoId: foto._id },
			function(){
				var indiceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceFoto, 1);
				$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
			},function(erro){
				console.log(erro);
				$scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
			})
	}
})