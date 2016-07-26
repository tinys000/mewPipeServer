'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'indexController',
                templateUrl : 'views/index.html'
            })
            .when('/video/:hash', {
                controller: 'videoView',
                templateUrl : 'views/videos/viewVideo.html'
            })
            .when('/upload', {
                controller: 'uploadPage',
                templateUrl: 'views/videos/upload.html'
            })
            .when('/upload/send', {
                controller: 'upload'
            })
            .when('/user/register', {
                controller: 'registerUser',
                templateUrl : 'views/users/register.html'
            })
}
)

    .config( [
        '$compileProvider',
        function( $compileProvider )
        {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
            // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
        }
    ]);

