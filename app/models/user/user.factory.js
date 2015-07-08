(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name upApp.factory:Posts
	 * @description
	 * # Posts
	 * Factory of the upApp
	 */
	angular
		.module('upApp')
		.factory('User', User);

	/* @ngInject */
	function User($http, $q) {
	}

})();