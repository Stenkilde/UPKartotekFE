(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name upApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the uppApp
	 */
	angular
		.module('upApp')
		.controller('Main', Main);

	/* @ngInject */
	function Main($http) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.getUsers 	= getUsers;
		vm.users		= {};

		function getUsers() {
			$http.get('data.json')
			.success(function(data) {
				vm.users = data;
			}).error(function() {
				console.log('We are having problems getting to the API')
			});
		}


		activate();

		function activate() {
			getUsers();
		}
	}

})();
