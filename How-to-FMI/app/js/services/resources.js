angular.module('htfmi')
.factory('UserResource', ['$resource', function ($resource) {
	var resourceLink = 'http://0.0.0.0:5000/users/';
    return $resource(resourceLink + ':email', {id: '@_id'}, {
        getAll: {method: 'GET', url: resourceLink + 'all'},
        register: {method: 'PUT', url: resourceLink + 'register_service'},
        log: {method: 'POST', url: resourceLink + 'register_service'}
    });
}])
.factory('Courses', ['$resource', function ($resource) {
	// using rest API here.
    return null;
}]);