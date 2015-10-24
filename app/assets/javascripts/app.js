var app, dependencies;

dependencies = ['ngRoute',
    'ui.bootstrap',
    'myApp.filters',
    'myApp.services',
    'myApp.controllers',
    'myApp.directives',
    'myApp.common',
    'myApp.routeConfig'];

app = angular.module('myApp', dependencies);

angular.module('myApp.routeConfig', ['ngRoute']).config([
    '$routeProvider', function($routeProvider) {
        return $routeProvider.when('/', {
            templateUrl: '/assets/partials/view.html'
        }).when('/users/create', {
            templateUrl: '/assets/partials/create.html'
        }).when('/users/edit/:firstName/:lastName', {
            templateUrl: '/assets/partials/update.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]).config([
    '$locationProvider', function($locationProvider) {
        return $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
]);

var commonModule = angular.module('myApp.common', []);

var controllersModule = angular.module('myApp.controllers', []);

var servicesModule = angular.module('myApp.services', []);

var modelsModule = angular.module('myApp.models', []);

var directivesModule = angular.module('myApp.directives', []);

var filtersModule = angular.module('myApp.filters', []);
