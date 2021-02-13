boysen
    .factory('httpRequestInterceptor', function (webStorage) {
        return {
          request: function (config) {

            if(webStorage.has("AdminUser"))
            {
                config.headers['Authorization'] = "Basic " + webStorage.get("AdminUser").msg.token + " " + webStorage.get("AdminUser").msg.user_data.id_crypt;
            }
      
            return config;
          }
        };
    })
    .run(function($rootScope,$window, $http,$state,$interval){
        $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
            Object.keys($window).forEach( function(key) {
                var type =  typeof $window[key];
                if(key == "timeoutID"){
                    window.clearInterval(timeoutID);
                    $interval.cancel(timeoutID);
                }
                if(key == "timeoutID2"){
                    window.clearInterval(timeoutID2);
                    $interval.cancel(timeoutID2);
                }
              });
        })
    })
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
        $httpProvider.interceptors.push('httpRequestInterceptor');
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        $stateProvider

            .state ('adminMain', {
                url             : '/admin',
                templateUrl     : 'views/admin/template/common.html',
                resolve     : {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'css/admin.css',
                                ]
                            }
                        ])
                    }
                }
            })
            .state ('adminMain.login', {
                url             : '/login',
                templateUrl     : 'views/admin/login.html',
                onEnter: function(webStorage, $state) {
                    if (webStorage.local.has('AdminUser')) {
                      $state.go('adminMain.dashboard');
                    }
                }
            })
            .state ('adminMain.dashboard', {
                url             : '/dashboard',
                templateUrl     : 'views/admin/dashboard.html',
                controller      : 'dashboardCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    if(!webStorage.has('AdminUser')){
                        $state.go('adminMain.login');
                    }
                }
            })
            .state ('adminMain.configuration', {
                url             : '/configuration',
                templateUrl     : 'views/admin/configuration.html',
                controller      : 'configurationCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    if(!webStorage.has('AdminUser')){
                        $state.go('adminMain.login');
                    }
                }
            })
            .state ('adminMain.videoDetail', {
                url             : '/content/:videoname',
                templateUrl     : 'views/admin/videoDetails.html',
                controller      : 'dashboardCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    if(!webStorage.has('AdminUser')){
                        $state.go('adminMain.login');
                    }
                }
            })
            .state ('adminMain.category',{
                url             : '/category-management',
                templateUrl     : 'views/admin/category.html',
                controller      : 'categoryMaintenanceCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    if(!webStorage.has('AdminUser')){
                        $state.go('adminMain.login');
                    }
                }
            })
            .state ('adminMain.banner',{
                url             : '/banner-management',
                templateUrl     : 'views/admin/banner.html',
                controller      : 'bannerCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    if(!webStorage.has('AdminUser')){
                        $state.go('adminMain.login');
                    }
                }
            })
            .state ('adminMain.static',{
                url             : '/static-management',
                templateUrl     : 'views/admin/staticMaintenance.html',
                controller      : 'staticMaintenanceCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    if(!webStorage.has('AdminUser')){
                        $state.go('adminMain.login');
                    }
                }
            })
            .state ('adminMain.user',{
                url             : '/user-management',
                templateUrl     : 'views/admin/user.html',
                controller      : 'userMaintenanceCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    if(!webStorage.has('AdminUser')){
                        $state.go('adminMain.login');
                    }
                }
            })
            .state ('adminMain.setPassword',{
                url             : '/set-password/:email/:username/:userCrypt/:expireAt',
                templateUrl     : 'views/admin/setPassword.html',
                controller      : 'userMaintenanceCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    // if(!webStorage.has('AdminUser')){
                    //     $state.go('adminMain.login');
                    // }
                }
            })
            .state('adminMain.userRole', {
                url: '/user-roles-maintenance',
                templateUrl: 'views/admin/userRoles.html',
                controller: 'userRolesMaintenanceCtrl',
                onEnter: function ($rootScope, webStorage, $state) {
                    if (!webStorage.has('AdminUser')) {
                        $state.go('adminMain.login');
                    }
                }
            })
            .state('adminMain.comment', {
                url: '/comments-maintenance',
                templateUrl: 'views/admin/comments.html',
                controller: 'commentsMaintenanceCtrl',
                onEnter: function ($rootScope, webStorage, $state) {
                    if (!webStorage.has('AdminUser')) {
                        $state.go('adminMain.login');
                    }
                }
            })
            
            .state ('main', {
                url             : '',
                templateUrl     : 'template/common.html',
            })
            .state ('main.main', {
                url             : '/',
                templateUrl     : 'views/home.html',
                controller      : 'homeCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    $rootScope.isHeaderTransparent = true;
                    $("#searchform").val("").blur();
                }
            })
            .state ('main.forgotPassword', {
                url             : '/forgot-password/:id/:name/:idCrypt/:expireAt',
                templateUrl     : 'views/forgotPassword.html',
                controller      : 'ResetPasswordPageCtrl'
            })
            .state ('main.category', {
                url             : '/:category',
                templateUrl     : 'views/category.html',
                controller      : 'categoryCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    $rootScope.isHeaderTransparent = true;
                    $("#searchform").val("").blur();
                }
            })
            .state ('main.watchNowMovie', {
                url             : '/movie/:category/:title',
                templateUrl     : 'views/watchNowMovie.html',
                controller      : 'watchNowMoviesCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    $rootScope.isHeaderTransparent = false;
                    $("#searchform").val("").blur();
                }
            })
            .state ('main.watchNowSeries', {
                url             : '/series/:category/:title',
                templateUrl     : 'views/watchNowSeries.html',
                controller      : 'watchNowSeriesCtrl',
                onEnter     :   function($rootScope,webStorage, $state){
                    $rootScope.isHeaderTransparent = false;
                    $("#searchform").val("").blur();
                }
            })
           
    });
