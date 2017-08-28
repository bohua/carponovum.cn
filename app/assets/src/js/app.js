angular.module('carpoNovum', ['ngRoute'])
    .run(function ($templateCache) {
        $templateCache.put('assets/src/template/home.html');
    })
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'assets/src/template/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'home'
                })
                .when('/Home/:Section', {
                    templateUrl: 'assets/src/template/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'home'
                })
                .when('/Company/:Section', {
                    templateUrl: 'assets/src/template/company.html',
                    controller: 'CompanyCtrl',
                    controllerAs: 'company'
                })
                .when('/Technology/:Section', {
                    templateUrl: 'assets/src/template/technology.html',
                    controller: 'TechnologyCtrl',
                    controllerAs: 'technology'
                })
                .when('/Clinic/:Section', {
                    templateUrl: 'assets/src/template/clinic.html',
                    controller: 'ClinicCtrl',
                    controllerAs: 'clinic'
                })
                .when('/Contact/:Section', {
                    templateUrl: 'assets/src/template/contact.html',
                    controller: 'ContactCtrl',
                    controllerAs: 'contact'
                })
                .when('/News/:Section', {
                    templateUrl: 'assets/src/template/news.html',
                    controller: 'NewsCtrl',
                    controllerAs: 'news'
                });

            //$locationProvider.html5Mode(true);
        }])
    .controller('MainCtrl', ['$route', '$routeParams', '$location', '$scope',
        function MainCtrl($route, $routeParams, $location, $scope) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;

            $scope.scrollToTop = function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
            };

            $scope.scrollTo = function (dest) {
                $('html, body').animate({
                    scrollTop: $(dest).offset().top
                }, 500);
            };

        }])
    .controller('HomeCtrl', ['$routeParams', '$location', '$rootScope', function HomeCtrl($routeParams, $location, $rootScope) {
        this.name = 'HomeCtrl';
        this.params = $routeParams;

        $rootScope.showBanner = true;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('CompanyCtrl', ['$routeParams', '$location', '$rootScope', function CompanyCtrl($routeParams, $location, $rootScope) {
        this.name = 'CompanyCtrl';
        this.params = $routeParams;

        $rootScope.showBanner = false;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('TechnologyCtrl', ['$routeParams', '$location', '$rootScope', function TechnologyCtrl($routeParams, $location, $rootScope) {
        this.name = 'TechnologyCtrl';
        this.params = $routeParams;

        $rootScope.showBanner = false;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('ClinicCtrl', ['$routeParams', '$location', '$rootScope', function ClinicalCtrl($routeParams, $location, $rootScope) {
        this.name = 'ClinicCtrl';
        this.params = $routeParams;

        $rootScope.showBanner = false;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('ContactCtrl', ['$routeParams', '$location', '$rootScope', function ContactCtrl($routeParams, $location, $rootScope) {
        this.name = 'ContactCtrl';
        this.params = $routeParams;

        $rootScope.showBanner = false;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('NewsCtrl', ['$routeParams', '$location', '$rootScope', '$scope', function NewsCtrl($routeParams, $location, $rootScope, $scope) {
        this.name = 'NewsCtrl';
        this.params = $routeParams;

        $rootScope.showBanner = false;

        $location.hash($routeParams.Section);

        translate();

        $scope.emailLinke = 'mailto:info@carponovum.com';
    }]);