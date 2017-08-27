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
                .when('/Home', {
                    templateUrl: 'assets/src/template/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'home'
                })
                .when('/Company', {
                    templateUrl: 'assets/src/template/company.html',
                    controller: 'CompanyCtrl',
                    controllerAs: 'company'
                })
                .when('/Technology', {
                    templateUrl: 'assets/src/template/technology.html',
                    controller: 'TechnologyCtrl',
                    controllerAs: 'technology'
                })
                .when('/Clinic', {
                    templateUrl: 'assets/src/template/clinic.html',
                    controller: 'ClinicCtrl',
                    controllerAs: 'clinic'
                })
                .when('/Contact', {
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
    .controller('HomeCtrl', ['$routeParams', function HomeCtrl($routeParams) {
        this.name = 'HomeCtrl';
        this.params = $routeParams;

        translate();
    }])
    .controller('CompanyCtrl', ['$routeParams', function CompanyCtrl($routeParams) {
        this.name = 'CompanyCtrl';
        this.params = $routeParams;

        translate();
    }])
    .controller('TechnologyCtrl', ['$routeParams', function CompanyCtrl($routeParams) {
        this.name = 'TechnologyCtrl';
        this.params = $routeParams;

        translate();
    }])
    .controller('ClinicCtrl', ['$routeParams', function CompanyCtrl($routeParams) {
        this.name = 'ClinicCtrl';
        this.params = $routeParams;

        translate();
    }])
    .controller('ContactCtrl', ['$routeParams', function CompanyCtrl($routeParams) {
        this.name = 'ContactCtrl';
        this.params = $routeParams;

        translate();
    }])