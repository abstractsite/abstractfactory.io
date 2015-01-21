"use strict";
/*global angular*/


(function () {

    var app = angular.module("abstractApp");

    app.directive("afFeature", function () {

        return {
            restrict: "E",
            controller: "afFeatureController",
            controllerAs: "ctrl",
            templateUrl: "static/templates/afFeature.html",
            transclude: true,
            scope: {
                title: "@",
                link: "@",
            }
        };
    });

    app.controller("afFeatureController", function ($scope) {
        $scope.noLink = true;
        if ($scope.link) {
            console.log($scope.link + " is set!");
            $scope.noLink = false;
        }
    });

}());