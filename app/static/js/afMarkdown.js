"use strict";
/*global angular*/
/*global markdown*/


(function () {

    var app = angular.module("abstractApp");

    app.directive("afMarkdown", function () {
        return {
            restrict: "E",
            link: function (scope, element, attrs) {
                var htmlText = markdown.toHTML(element.text());
                element.html(htmlText);
            }
        };
    });

}());