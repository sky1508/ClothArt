﻿/// <reference path="angular-route.js" />
/// <reference path="angular.min.js" />

var app = angular.module('caApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'modules/login.html',
        controller: 'LoginCtrl'
    });

    $routeProvider.when('/home', {
        templateUrl: 'modules/home.html',
        controller: 'HomeCtrl'
    });

    $routeProvider.when("/clothTypeSelect", {
        templateUrl: "modules/clothTypeSelect.html",
        controller: "clothTypeSelectController",
        controllerAs: "clothTypeSelectCtrl"
    });

    $routeProvider.when("/menCategories", {
        templateUrl: "modules/menCategoriesSelect.html",
        controller: "menCategoriesCtrl"
    });

    $routeProvider.when("/womenCategories", {
        templateUrl: "modules/womenSubCategoriesSelect.html",
        controller: "womenSubCategoriesCtrl"
    });

    $routeProvider.when("/unisexCategories", {
        templateUrl: "modules/unisexSubCategoriesSelect.html",
        controller: "menCategoriesCtrl"
    });

    $routeProvider.when("/menSubCategories", {
        templateUrl: "modules/menSubCategoriesSelect.html",
        controller: "menSubCategoriesCtrl"
    });

    $routeProvider.otherwise({ redirectTo: '/login' });
});

app.run(function (authentication, $rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (evt) {
        if (!authentication.isAuthenticated) {
            $location.url("/login");
        }
        event.preventDefault();
    });
})

app.controller('LoginCtrl', function ($scope, $http, $location, authentication) {
    /*$scope.login = function () {
    if ($scope.username === 'admin' && $scope.password === 'pass') {
    console.log('successful')
    authentication.isAuthenticated = true;
    authentication.user = { name: $scope.username };
    $location.url("/");
    } else {
    $scope.loginError = "Invalid username/password combination";
    console.log('Login failed..');
    $scope.username = "";
    $scope.password = "";
    };
    };*/
});

app.controller('caAppCtrl', function ($scope, authentication, $rootScope) {
    $rootScope.templates =
  [
  	{ url: 'modules/login.html' },
    { url: 'modules/home.html' },
    { url: 'modules/clothTypeSelect.html' }
  ];
    $rootScope.template = $scope.templates[0];
    $scope.login = function (username, password) {
        if (username === 'test' && password === 'test') {
            authentication.isAuthenticated = true;
            $rootScope.template = $scope.templates[2];
            $rootScope.user = username;
        } else {
            $scope.loginError = "Invalid username/password combination";
        };
    };

});


app.controller('HomeCtrl', function ($rootScope, $scope, authentication, $location) {
    $scope.user = $rootScope.user;
    if ($rootScope.genderCategory === "men") {
        $location.path("/menCategories");
    }
    else if ($rootScope.genderCategory === "women") {
        $location.path("/womenCategories");

    }
    else if ($rootScope.genderCategory === "unisex") {
        $location.path("/unisexCategories");
    }
    else if ($rootScope.menSubCategory === "casual_shirt" || $rootScope.menSubCategory === "formal_shirt" ||
			$rootScope.menSubCategory === "tshirt" || $rootScope.menSubCategory === "sweatshirt") {
        $location.path("/menSubCategories");

    }

});

app.controller('clothTypeSelectCtrl', function ($rootScope, $scope, $location) {

    $scope.menIconImage = "../resources/men.png";

    $scope.menFunc = function () {
        $rootScope.genderCategory = "men";
        $rootScope.template = $scope.templates[1];
        $location.url("/menCategoriesSelect");
    };

    $scope.womenFunc = function () {
        $rootScope.genderCategory = "women";
        $rootScope.template = $scope.templates[1];
        $location.url("/womenSubCategoriesSelect");
    };

    $scope.unisexFunc = function () {
        $rootScope.genderCategory = "unisex";
        $rootScope.template = $scope.templates[1];
        $location.url("/unisexSubCategoriesSelect");
    };
});

app.controller('menCategoriesCtrl', function ($rootScope, $scope, $location) {
    $scope.casualShirtFunc = function () {
        $rootScope.menSubCategory = "casual_shirt";
        $rootScope.template = $scope.templates[1];
        $location.url("/menSubCategories");
    };

    $scope.formalShirtFunc = function () {
        $rootScope.menSubCategory = "formal_shirt";
        $rootScope.template = $scope.templates[1];
    };

    $scope.tshirtFunc = function () {
        $rootScope.menSubCategory = "tshirt";
        $rootScope.template = $scope.templates[1];
    };

    $scope.sweatShirtFunc = function () {
        $rootScope.menSubCategory = "sweatshirt";
        $rootScope.template = $scope.templates[1];
    };
});

app.controller('womenSubCategoriesCtrl', function () {

});

app.controller('unisexSubCategoriesCtrl', function () {

});

app.controller('menSubCategoriesCtrl', function ($scope) {
    //Contains the first img array
    //$scope.firstImg = ["../resources/business.jpg", "../resources/business2.jpg"];
    $scope.firstImg  = ["resources/men/shirts/collar/collar1.png","resources/men/shirts/collar/collar2.png"];
    $scope.secondImg = ["resources/men/shirts/sleeve/leftSleeve1.png","resources/men/shirts/sleeve/leftSleeve2.png"];
    $scope.thirdImg  = ["resources/men/shirts/sleeve/rightSleeve1.png","resources/men/shirts/sleeve/rightSleeve2.png"];
    $scope.fourthImg = ["resources/men/shirts/body/body1.jpg","resources/men/shirts/body/body2.png"];
    //Contains the second img array
    //$scope.secondImg = ["../resources/business2.jpg", "../resources/business.jpg"];


    $scope.imgCopy = function (srcImg) {
        $('#main1').attr("src", srcImg);
    };

    $scope.imgCopy2 = function (srcImg) {
        $('#main2').attr("src", srcImg);
    };

    $scope.imgCopy3 = function (srcImg) {
        $('#main3').attr("src", srcImg);
    };

    $scope.imgCopy4 = function (srcImg) {
        $('#main4').attr("src", srcImg);
    };
    
    $scope.imgCopy5 = function (srcImg) {
        $('#back1').attr("src", srcImg);
    };

    $scope.imgCopy6 = function (srcImg) {
        $('#back2').attr("src", srcImg);
    };
    
    $scope.imgCopy7 = function (srcImg) {
        $('#back3').attr("src", srcImg);
    };
    
    $scope.imgCopy8 = function (srcImg) {
        $('#back4').attr("src", srcImg);
    };
    
    $scope.save = function () {
        $('#New').html("<table id='table1'><tr><td><div id='a'>" + $('#first').html() + "</div></td></tr>" +
        "<tr><td><div id='b'>" + $('#second').html() + "</div></td></tr><tr><td><div id='c'>" + $('#fifth').html() +
         "</div></td></tr>" + "<tr><td><div id='d'>" + $('#sixth').html() + "</div></td></tr></table>")

        //alert('Save');

        html2canvas($("#New"), {
            onrendered: function (canvas) {
                theCanvas = canvas;
                //document.body.appendChild(canvas);

                // Convert and download as image 
                Canvas2Image.saveAsPNG(canvas);
                //$("#img-out").append(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
        });
    }
});



app.factory('authentication', function () {
    return {
        isAuthenticated: false,
        user: null
    }
});