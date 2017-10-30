angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function(){
	return{
		restrict: 'E',
		scope:{
			titulo: '@'
		},
		transclude: true,
		templateUrl: 'templates/meu-painel.html'
	}
})
.directive('minhaFoto', function(){
	return{
		restrict: 'E',
		scope:{
			url: '@',
			titulo: '@'
		},
		templateUrl: 'templates/minha-foto.html'
	}
})
.directive('meuBotaoPerigo', function(){
	return{
		restrict: 'E',
		scope:{
			nome: '@',
			acao: '&'
		},
		template: '<button ng-click="acao()" class="btn btn-danger btn-block" type="button">{{nome}}</button>'
	}
})
.directive('meuFoco', function(){
	return{
		restrict: 'A',
		link: function(scope, element){
			scope.$on('fotoSalva', function(){
				element[0].focus();
			})
		}
	}
})
.directive('meusTitulos', function() {
    return{
    	restrict: 'E',
    	template: '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>',
    	controller: function($scope, recursoFoto){
    		recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });  
            });
    	}
    }
});