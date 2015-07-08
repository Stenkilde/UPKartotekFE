(function() {
	'use strict';

	/**
	 * @ngdoc route
	 * @name upApp.route:main
	 * @function
	 * @description
	 * # main
	 * Route in the upApp.
	 */
	angular.module('upApp')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Main = {
				name: 'main',
				url: '/',
				templateUrl: 'modules/main/main.view.html',
				controller: 'Main',
				controllerAs: 'main'
			};

			$stateProvider.state(Main);
		});
})();