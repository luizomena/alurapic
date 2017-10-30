angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){
	return $resource('/v1/fotos/:fotoId', null, {
        'update' : { 
            method: 'PUT'
        }
    });
})
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope){
	var servico = {};

	var tipoEvento = 'fotoSalva';

	servico.cadastrar = function(foto){
		return $q(function(resolve, reject){
			if(foto._id){
				recursoFoto.update({ fotoId: foto._id }, foto,
					function(){
						$rootScope.$broadcast(tipoEvento);
						resolve({
							mensagem: 'Foto alterada com sucesso',
							inclusao: false
						})
					},function(erro){
						console.log(erro);

						reject({
							mensagem: 'Não foi possível alterar a foto',
							inclusao: false
						})
					}
				)
			}else{
				recursoFoto.save(foto, 
					function(){
						$rootScope.$broadcast(tipoEvento);
						resolve({
							mensagem: 'Foto cadastrada com sucesso',
							inclusao: true
						})
					},function(erro){
						console.log(erro);

						reject({
							mensagem: 'Não foi possível cadastrar a foto',
							inclusao: false
						})
					}
				)
			}
		})
	}

	return servico;
})