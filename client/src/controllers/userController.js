'use strict';

app

    .controller('registerUser', function($scope, $http, $sce){
        $scope.send = function(user) {
            console.log('ok');
            var fd = new FormData();
            fd.append('firstName', $scope.firstName);
            fd.append('lastName', $scope.lastName);
            fd.append('email', $scope.email);
            fd.append('password', $scope.password);
            fd.append('birthDate', $scope.birthDate);
            $http.post("http://localhost:8080/user", fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined, 'Access-Control-Allow-Origin': '*'}
            })
                .success(function(){
                    console.log('ok');
                    $location.path('/#/');
                })
                .error(function(){
                    console.log('error');
                });
        };
    });


