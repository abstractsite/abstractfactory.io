"use strict";
/*global angular*/


(function () {

    var app = angular.module("abstractApp");

    app.directive("afHeader", function () {
        return {
            restrict: "E",
            templateUrl: "static/templates/afHeader.html"
        };
    });
}());