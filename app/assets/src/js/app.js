angular.module('carpoNovum', ['ngRoute'])
    .run(function($templateCache){
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
                });

            //$locationProvider.html5Mode(true);
        }])
    .controller('MainCtrl', ['$route', '$routeParams', '$location', '$scope',
        function MainCtrl($route, $routeParams, $location, $scope) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;

            $scope.scrollToTop = function(){
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
            };

            $scope.scrollTo = function(dest){
                $('html, body').animate({
                    scrollTop: $(dest).offset().top
                }, 500);
            };

        }])
    .controller('HomeCtrl', ['$routeParams', '$location', function HomeCtrl($routeParams, $location) {
        this.name = 'HomeCtrl';
        this.params = $routeParams;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('CompanyCtrl', ['$routeParams', '$location', function CompanyCtrl($routeParams, $location) {
        this.name = 'CompanyCtrl';
        this.params = $routeParams;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('TechnologyCtrl', ['$routeParams', '$location', function CompanyCtrl($routeParams, $location) {
        this.name = 'TechnologyCtrl';
        this.params = $routeParams;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('ClinicCtrl', ['$routeParams', '$location', function CompanyCtrl($routeParams, $location) {
        this.name = 'ClinicCtrl';
        this.params = $routeParams;

        $location.hash($routeParams.Section);

        translate();
    }])
    .controller('ContactCtrl', ['$routeParams', '$location', function CompanyCtrl($routeParams, $location) {
        this.name = 'ContactCtrl';
        this.params = $routeParams;

        $location.hash($routeParams.Section);

        translate();
    }])