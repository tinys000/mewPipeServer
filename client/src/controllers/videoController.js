'use strict';

app

    .controller('indexController', function($scope, $http, $sce, $routeParams){
        $http.get('http://localhost:8080/videos/best').then(function(res) {
            var videoList = res.data;

            for(var i in videoList){
                $sce.trustAsResourceUrl(videoList[i].thumbUrl);
            }
            $scope.videoList = videoList;
            $scope.video = res.data[1];
            var videoUrlIndex = "http://localhost:8080/video/"+res.data[0].hash+".mp4";
            $scope.videoUrlIndex = $sce.trustAsResourceUrl(videoUrlIndex);
        });
    })
    .controller('videoView', function($scope, $http, $sce, $routeParams){
        $http.get('http://localhost:8080/video/'+$routeParams.hash).then(function(res) {
            $scope.video = res.data;
            var videoUrl = "http://localhost:8080/video/"+res.data.hash+".mp4";
            $scope.videoUrl = $sce.trustAsResourceUrl(videoUrl);
        });
    })
    .controller('uploadPage', function($scope, Upload, $http, $location){
        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });
        $scope.log = '';

        $scope.upload = function (files, name) {
            var name = $scope.name;
            var description = $scope.description;
            var conf = $scope.confidentiality;
            console.log(name + " / " + description + " / " + conf);
            if (files && files.length && name != undefined) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var fd = new FormData();
                    fd.append('file', file);
                    fd.append('name', name);
                    fd.append('description', description);
                    fd.append('confidentialityId', conf);
                    $http.post("http://localhost:8080/video/upload", fd, {
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
                }
            }

        };
    })
    .controller('upload', function ($scope, Upload, $http) {


});

