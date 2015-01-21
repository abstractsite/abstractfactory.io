"use strict";
/*global angular*/

(function () {

    var app = angular.module("abstractApp", ["ngRoute",
                                             "ui.utils",
                                             "ui.bootstrap",
                                             "duScroll"]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "static/views/home.html"
            })
            .when("/blog", {
                templateUrl: "static/views/blog.html"
            })
            .otherwise("/");

        $locationProvider.html5Mode(true);
    });

}());