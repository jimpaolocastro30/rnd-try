boysen
.controller('boysenCtrl', ['$rootScope', '$http', '$timeout', '$state', 'createModal', '$scope','webStorage','$window', '$timeout','httpPromisedRequest', '$timeout', '$stateParams','headerPopup', function($rootScope, $http, $timeout, $state, createModal, $scope,webStorage,$window, $timeout,httpPromisedRequest, $timeout, $stateParams, headerPopup){

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            $rootScope.isLoaderShow = true;
            setTimeout(function(){
                // remove height
                // var html = '<div style=" " class="request-buffer ng-scope"> ' +
                //             '  <img src="/img/loader.gif" alt="" > ' +
                //             '</div>';

                //if(window.location.pathname === '/'){
                    $scope.$watch(function() {
                        return $http.pendingRequests.length > 0;
                    }, function(hasPending) {
                        var explodedState = $state.$current.name.split(".");
                        if(explodedState[0] == "adminMain"){
                            $rootScope.isLoaderShow = false;
                            $('.request-buffer').fadeOut(100);
                            $('.request-buffer-page').fadeIn(1000);
                        }
                        else{
                            if (hasPending) {
                                // show wait dialog
                                if($rootScope.isLoaderShow){
                                    $('.request-buffer-page').hide();
                                    $('.headerPopupCss').addClass('opacity-none');
                                    $('.request-buffer').show();
                                }
                                // $('#content').hide();
                                // $('#content').before(html);
                            }
                            else  {
                                // hide wait dialog
                                $rootScope.isLoaderShow = false;
                                $('.request-buffer').fadeOut(100);
                                $('.request-buffer-page').fadeIn(1000);
                                if(!($state.current.name == 'main.watchNowMovie' || $state.current.name == 'main.watchNowSeries')){
                                    $('.headerPopupCss').removeClass('opacity-none');
                                }
                                // if(($state.current.name == "main.watchNowMovie") || ($state.current.name == "main.watchNowSeries")){
                                //     for(var i = 0 ; i < 3 ; i++){
                                //         // if(document.querySelector('.sideDiv-'+i) != null){
                                //           console.log(document.querySelector('.sideDiv-'+i));
                                //         //   videojs(document.querySelector('.sideDiv-'+i),{
                                //         //     fluid: true,
                                //         //     preload: 'auto',
                                //         //   });
                                //         // }
                                //     }
                                // }
                                // $('.request-buffer').remove();
                                // $('#content').fadeIn();
                            }
                        }
                    });
                //}
            }, 10);
    });


 

    $rootScope.title                = "Studio | B";
    $scope.title                    = $rootScope.title;
    $scope.hasUpdate                = webStorage.local.get("hasUpdate");
    $scope.loginContent             = {};
    $scope.loginContent.state       = false;
    $timeout(function(){ angular.element("#main-loader").fadeOut(); },1);
	  if(!webStorage.local.has("token")){$scope.loginContent.state = true;}
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {angular.element('html').addClass('ismobile');}
    this.sidebarToggle = {
        left: false,
        right: false
    }
    this.layoutType = localStorage.getItem('ma-layout-status');
    this.$state = $state;
    this.sidebarStat = function(event) {if (!angular.element(event.target).parent().hasClass('active')) {this.sidebarToggle.left = false;}}
    this.listviewSearchStat = false;
    this.lvSearch = function() {this.listviewSearchStat = true;}
    this.lvMenuStat = false;
    this.wallCommenting = [];
    this.wallImage = false;
    this.wallVideo = false;
    this.wallLink = false;
    this.currentSkin = 'blue';
    this.skinList = [
        'lightblue',
        'bluegray',
        'cyan',
        'teal',
        'green',
        'orange',
        'blue',
        'purple'
    ];
    $scope.login                        = {};
    $scope.registerData                 = {};
    $scope.registerData.terms           = false;
    $scope.contactUsData                = {};
    $scope.forgotPassword               = {};
    $scope.resetUser                    =   {};
    $scope.userRoleView                 = false;
    $scope.userView                     = false;
    // $scope.forgorPassword.authToken     = apiToken;
    // $scope.contactUsData.authToken      = apiToken;
    // $scope.login.authToken              = apiToken;
    // $scope.registerData.authToken       = apiToken;
    
    $scope.isLoggedIn                   = webStorage.has('user');
    $scope.isAdminLoggedIn              = webStorage.has('AdminUser');
    


    $scope.AdminRoles        = $scope.isAdminLoggedIn ? webStorage.get('AdminUser') : null;
    $scope.isAdminRoles      = $scope.AdminRoles == null ? null : $scope.AdminRoles;
    $scope.isRoles           = $scope.isAdminRoles == null ? null : $scope.AdminRoles.role;

    $scope.isBannerExists = $scope.AdminRoles == null ? null : ($scope.AdminRoles.role == null ? null : ($scope.AdminRoles.role.admin_role_access.banner == null ? false : true)) ;
    $scope.isCategoryExists = $scope.AdminRoles == null ? null : ($scope.AdminRoles.role == null ? null : ($scope.AdminRoles.role.admin_role_access.category == null ? false : true));
    $scope.isSideContentExists = $scope.AdminRoles == null ? null : ($scope.AdminRoles.role == null ? null : ($scope.AdminRoles.role.admin_role_access.side_content == null ? false : true));
    $scope.isStaticContentExists = $scope.AdminRoles == null ? null : ($scope.AdminRoles.role == null ? null : ($scope.AdminRoles.role.admin_role_access.static_content == null ? false : true));
    $scope.isCommentExist = $scope.AdminRoles == null ? null : ($scope.AdminRoles.role == null ? null : ($scope.AdminRoles.role.admin_role_access.comment == null ? false : true));

    $scope.bannerView = $scope.isBannerExists ? $scope.AdminRoles.role.admin_role_access.banner.view : null;
    $scope.categoryView = $scope.isCategoryExists ? $scope.AdminRoles.role.admin_role_access.category.view : null;
    $scope.side_contentView = $scope.isSideContentExists ? $scope.AdminRoles.role.admin_role_access.side_content.view : null;
    $scope.static_contentView = $scope.isStaticContentExists ? $scope.AdminRoles.role.admin_role_access.static_content.view : null;
    $scope.commentView = $scope.isCommentExist ? $scope.AdminRoles.role.admin_role_access.comment.view : null;

    // $scope.userView                     = $scope.isAdminLoggedIn ? $scope.AdminRoles.role.admin_role_access.user.view : null;
    $scope.admin_id                     = $scope.isAdminLoggedIn ? $scope.AdminRoles.role.id : null;
    
    if ($scope.admin_id == 1) {
        $scope.userRoleView = true;
        $scope.userView = true;
    }
    
    // if ($scope.bannerView == false && $scope.categoryView == false && $scope.side_contentView == false && $scope.static_contentView == false && $scope.userView == false) {
    //     $scope.contentManagementView = false;
    // }

   


    // console.log($scope.view_about_us, $scope.view_faq_text, $scope.view_green_banner_text, $scope.privacy_policy, $scope.terms_of_use);


    $scope.loggedData                   = $scope.isLoggedIn ? webStorage.get('user') : null;
    $scope.firstLetter                  = $scope.isLoggedIn ? $scope.loggedData.user_info.display_name.charAt(0).toUpperCase() : null;
    $scope.profilePicture               = webStorage.get('user') ? ($scope.loggedData.user.profile_image == "" ? "/img/User Icons/"+  $scope.firstLetter  +".png" : $scope.loggedData.user.profile_image) : "/img/User Icons/"+  $scope.firstLetter  +".png" ;
    $scope.birthYears                   = function(){
        var years = [];
        var dateNow = new Date();
        for (var i = 1930; i < dateNow.getFullYear(); i++) {
            years.push(i);
        }
        return years;
    }

    $rootScope.$on('requireLogin',function(){
        createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'loginModal',$scope);
    });

    $scope.goAdminLogout = function(){
        webStorage.local.remove('AdminUser');
        location.reload();
    }

    $scope.goLogin = function(){
        if ( $scope.login.email != undefined && $scope.login.password != undefined &&
             $scope.login.email != "" && $scope.login.password != "" ){
            httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/auth',$scope.login).then(function(data){
                try{
                    if (data.data.code == 200){
                        $window.sendGAEvent('User Function', 'User Manual Login');

                        webStorage.set('user',data.data);
                        location.reload();
                    }
                    else{
                        swal("Sorry", typeof(data.error.errorDev.dev) == 'object' ? data.error.errorDev.dev.msg : data.error.errorDev.dev, "error");
                        console.log(typeof(data.error.errorDev.dev) == 'object');
                    }
                }
                catch(err){
                    swal("Sorry", typeof(data.error.errorDev.dev) == 'object' ? data.error.errorDev.dev.msg : data.error.errorDev.dev, "error");
                    console.log(typeof(data.error.errorDev.dev) == 'object');
                }
            });
        }else{
            if($scope.login.email == undefined || $scope.login.email == ""){
                swal("Sorry", "Email is required", "error");
            }
            else {
                swal("Sorry", "Incomplete Data", "error");
            }
            return
        }
    }

    $scope.goRegisterUser = function(){
        if( $scope.registerData.email == undefined || $scope.registerData.email == "" ||
            $scope.registerData.firstname == undefined || $scope.registerData.firstname == "" ||
            $scope.registerData.lastname == undefined || $scope.registerData.lastname == "" ||
            $scope.registerData.password == undefined || $scope.registerData.password == "" ||
            $scope.registerData.confirmPassword == undefined || $scope.registerData.confirmPassword == ""){
                swal("Sorry", "Incomplete Data", "error");
                return;
        }
        if( !$scope.registerData.terms ){
            swal("Sorry", "You must agree to the terms of use before register", "error");
            return;
        }
        if($scope.registerData.password.length < 8){
            swal("Sorry", "The password must at least be 8 characters in length", "error");
            return;
        }
        if($scope.registerData.confirmPassword != $scope.registerData.password){
            swal("Sorry", "Password did not match", "error");
            return;
        }
        $scope.registerData.name = $scope.registerData.firstname + " " +$scope.registerData.lastname;
        httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/register',$scope.registerData).then(function(data){
            if (data.code == 200){
                $window.sendGAEvent('User Function', 'User Registration');

                $scope.cancel();
                $scope.clearFields('register');
                swal("Done!", "Successfully Registered", "success");
            }else{
                console.log(data);
                swal("Sorry", typeof(data.error.errorDev.dev) == 'object' ? data.error.errorDev.dev.msg : data.error.errorDev.dev, "error");
            }
        });
    }

    $scope.clearFields = function (modal){
        if(modal == 'register'){
            $scope.cancel();
            $scope.registerData.birthyear         = "";
            $scope.registerData.confirmPassword   = "";
            $scope.registerData.password          = "";
            $scope.registerData.lastname          = "";
            $scope.registerData.firstname         = "";
            $scope.registerData.email             = "";
            $scope.registerData.gender            = "";
            $scope.registerData.terms             = false;
        }
        else if(modal == 'login'){
            $scope.cancel();
            $scope.login.email                = "";
            $scope.login.password             = "";
        }
        else if(modal == 'contact-us'){
            $scope.contactUsData = {};
            $scope.contactUsData.email = "";
            $scope.contactUsData.message = "";
        }
        else if(modal == 'forgot-password'){
            $scope.forgotPassword = {};
            $scope.forgotPassword.email = "";
        }
    }

    $scope.fbLogin = function(){
        // FB.login(function(response) {
        //     if (response.authResponse) {
        //     console.log('Welcome!  Fetching your information.... ');
        //         FB.api('/me', function(response) {
        //             console.log('Good to see you, ' + response.name + '.');
        //         });
        //     } else {
        //     console.log('User cancelled login or did not fully authorize.');
        //     }
        // },{scope: 'email',return_scopes : true});
        FB.login(function(response) {
            if (response.authResponse) {
                FB.api('/me', { locale: 'tr_TR', fields: 'id,name,first_name,last_name,picture,email' },
                    function(response) {
                        httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/social-auth/facebook',response).then(function(data){
                            if (data.code == 200){
                                $window.sendGAEvent('User Function', 'User Facebook Login');

                                console.log(data);
                                webStorage.set('user',data);
                                location.reload();
                            }else{
                                console.log(data);
                            }
                        });
                    }
                );
            }
            else{
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {
            scope: 'email',
            return_scopes: true
        });
    }

    $scope.goGooglePlusLogin = function(){
        gapi.auth2.getAuthInstance().signIn().then(
            function(success) {
                // Login API call is successful
                console.log(success);
                httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/social-auth/google',success).then(function(data){
                    if (data.code == 200){
                        $window.sendGAEvent('User Function', 'User Google Login');

                        console.log(data);
                        webStorage.set('user',data);
                        location.reload();
                    }else{
                        console.log(data);
                    }
                });
            },
            function(error) {
                // Error occurred
                // console.log(error) to find the reason
            }
        );
    }

    $scope.goForgotPassword = function(){
        if($scope.forgotPassword.email != undefined && $scope.forgotPassword.email != ""){
            httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/forgot',$scope.forgotPassword).then(function(data){
                // $scope.cancel();
                // swal("Done!", data.dev, "success");
                console.log(data);
                try{
                    if (data.code == 200){
                        $window.sendGAEvent('User Function', 'User Forgot Password');

                        $scope.forgotPassword.email = "";
                        swal("Done!", data.msg, "success");
                        $scope.cancel();
                        $scope.clearFields('forgot-password');
                    }
                    else{
                        swal("Sorry", typeof(data.error.errorDev.dev) == 'object' ? data.error.errorDev.dev.msg : data.error.errorDev.dev, "error");
                        console.log(typeof(data.error.errorDev.dev) == 'object');
                    }
                }
                catch(err){
                    swal("Sorry", typeof(data.error.errorDev.dev) == 'object' ? data.error.errorDev.dev.msg : data.error.errorDev.dev, "error");
                    console.log(typeof(data.error.errorDev.dev) == 'object');
                }
            });
        }else{
            swal("Sorry", "Provide Email", "error");
        }
    }

    $scope.checkLoginUser = function(){
      var userData = JSON.parse(localStorage.getItem('user'));
      if(userData != null || userData != undefined){
        $scope.contactUsData.email = userData.user_info.email;
      }
    }

    $scope.goContactUs = function(){
        if($scope.contactUsData.email != undefined && $scope.contactUsData.email != ""){
            if($scope.contactUsData.message != undefined && $scope.contactUsData.message != ""){
              httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/contactUs',$scope.contactUsData).then(function(data){
                  if (data.code == 200){
                    $window.sendGAEvent('User Function', 'User Contact Us');

                    $scope.cancel();
                    $scope.clearFields('contact-us');
                    swal("Done!", "Successfully sent.", "success");
                    console.log(data);
                  }else{
                      swal("Sorry", "Can't process your request as of now...", "error");
                      console.log(data);
                  }
              });
            }
            else{
              swal("Sorry", "Message is required!", "error");
            }
        }
        else{
          swal("Sorry", "Email is required!", "error");
        }
    }

    this.skinSwitch = function (color) {this.currentSkin = color;}

    this.openModal = function(params){
        $scope.staticContent = webStorage.get('staticContent');
        if (params == 'login') {
            $window.sendGAPage('/', 'Login Page');
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'loginModal',$scope);
        }
        else if (params == 'signup'){
            $window.sendGAPage('/', 'Register Page');
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'signupModal',$scope);
        }
        else if (params == 'aboutUs'){
           

            $scope.view_about_us = $scope.staticContent.about_us;
            $window.sendGAPage('/', 'About Us Page');
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'aboutUsModal',$scope);
        }
        else if (params == 'help'){
            $window.sendGAPage('/', 'Contact Us Page');
            $scope.clearFields('contact-us');
            $scope.checkLoginUser();
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'helpModal',$scope);
        }
        else if (params == 'forgotPassword'){
            $window.sendGAPage('/', 'Forgot Password Page');
            $scope.cancel();
            $scope.clearFields('forgot-password');
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'forgotPasswordModal',$scope);
        }
        else if (params == 'privacypolicy'){
            $scope.privacy_policy = $scope.staticContent.privacy_policy;
                        
            $window.sendGAPage('/', 'Privacy Policy Page');
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'privacypolicyModal',$scope);
        }
        else if (params == 'termsOfUse'){
            $scope.terms_of_use = $scope.staticContent.terms_of_use;

            $window.sendGAPage('/', 'Terms Of Use Page');
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'termsOfUseModal',$scope);
        }
        else if (params == 'FAQ') {
            $scope.view_faq_text = $scope.staticContent.faq_text;
            
            $window.sendGAPage('/', 'FAQ');
            createModal.modalInstances(true, 'm', 'static', false, $scope.modalContent, 'FAQModal', $scope);
        }
    }

    this.calculateDateConvertion = function(date) {
            var now = moment();
            var target = ((date.indexOf('AM') > -1) && date.indexOf('12') > -1) ? moment(Date.parse(date)).subtract(12,'hours') : moment(Date.parse(date));
            if(((date.indexOf('PM') > -1) && (date.indexOf('12') > -1)))
            {
                target = moment(date);
                console.log(date);
                console.log(Date.parse(date));
            }
            if(now.diff(target,'years') > 0){
                var plural = now.diff(target,'years') == 1 ? "" : "s";
                return now.diff(target,'years') + " Year" + plural + " ago.";
            }
            else if(now.diff(target,'months') > 0){
                var plural = now.diff(target,'months') == 1 ? "" : "s";
                return now.diff(target,'months') + " Month" + plural + " ago.";
            }
            else if( now.diff(target,'days') > 0 ){
                var plural = now.diff(target,'days') == 1 ? "" : "s";
                return now.diff(target,'days') + " Day"+ plural +" ago.";
            }
            else if( now.diff(target,'hours') > 0 ){
                var plural = now.diff(target,'hours') == 1 ? "" : "s";
                return now.diff(target,'hours') + " Hour"+ plural +" ago.";
            }
            else{
                var plural = now.diff(target,'minutes') == 1 ? "" : "s";
                if(now.diff(target,'minutes') == 0){
                    return "A while ago.";
                }
                return now.diff(target,'minutes') + " Min"+ plural +" ago.";
            }
      }

      this.episodeNumberCompute = function(stringNumber){
        return parseInt(stringNumber) + 1;
      }

    // CHANGE BODY BACKGROUND
    $scope.bodyBackground = function(){
      if(window.location.pathname.indexOf('admin') > 0){
        $('body').css('background-color', '#ffffff');
      }
      else {
        $('body').css('background-color', '#000000');
      }
    }
    //$scope.bodyBackground();

    $scope.reloadPage = function(){
      $state.transitionTo($state.current, $stateParams, {
          reload: true, inherit: false, notify: true
      });
    }

    // $rootScope.isCarouselExists = function(){
    //     if ($('#banner-carousel').length >= 1) {
    //         $rootScope.isHeaderTransparent = true;
    //         console.log($rootScope.isHeaderTransparent);

    //     }
    //     else{
    //         $rootScope.isHeaderTransparent = false;
    //         console.log($rootScope.isHeaderTransparent);
    //     }
    // }
}])
    .controller('headerCtrl', ['$timeout', '$scope', 'httpPromisedRequest', 'webStorage', '$rootScope', '$http', '$state', '$window', function ($timeout, $scope, httpPromisedRequest, webStorage, $rootScope, $http, $state, $window){
        // $scope.staticContent = webStorage.get('staticContent');
        // $scope.green_banner_text = $scope.staticContent.green_banner_text;

    $scope.login                        = {};
    $scope.registerData                 = {};
    // $scope.login.authToken              = apiToken;
    // $scope.registerData.authToken       = apiToken;
    $scope.isLoggedIn                   = webStorage.has('user');
    $scope.loggedData                   = $scope.isLoggedIn ? webStorage.get('user') : null;
    $scope.firstLetter                  = $scope.isLoggedIn ? $scope.loggedData.user_info.display_name.charAt(0).toUpperCase() : null;

    $scope.headerPopup                  = true;
    $scope.headerPopupText              = '';
    $scope.headerPopupLink              = '';
    $rootScope.queryString              = null;
    $scope.goLogout = function(){
        swal({
            title: "Are you sure?",
            text: "",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F44336",
            confirmButtonText: "Logout",
            closeOnConfirm: false
        }, function(){
            var data = {};
            data.login_history_id = $scope.loggedData.user_info.login_history_id;
            httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/logout',data).then(function(data){
                if (data.code == 200){
                    webStorage.local.remove('user');
                    swal("Done!", "You Have Successfully Logged Out", "success");
                    location.reload();
                }else{
                    webStorage.local.remove('user');
                    swal("Done!", "You Have Successfully Logged Out", "success");
                    location.reload();
                }
            });
        });
    }

    // Top Search
    this.openSearch = function(){
        angular.element('#header').addClass('search-toggled');
        angular.element('#top-search-wrap').find('input').focus();
    }

    this.closeSearch = function(){
        angular.element('#header').removeClass('search-toggled');
    }

    //Clear Notification
    this.clearNotification = function($event) {
        $event.preventDefault();

        var x = angular.element($event.target).closest('.listview');
        var y = x.find('.lv-item');
        var z = y.size();

        angular.element($event.target).parent().fadeOut();

        x.find('.list-group').prepend('<i class="grid-loading hide-it"></i>');
        x.find('.grid-loading').fadeIn(1500);
        var w = 0;

        y.each(function(){
            var z = $(this);
            $timeout(function(){
                z.addClass('animated fadeOutRightBig').delay(1000).queue(function(){
                    z.remove();
                });
            }, w+=150);
        })

        $timeout(function(){
            angular.element('#notifications').addClass('empty');
        }, (z*150)+200);
    }

    // Clear Local Storage
    this.clearLocalStorage = function() {

        //Get confirmation, if confirmed clear the localStorage
        swal({
            title: "Are you sure?",
            text: "All your saved localStorage values will be removed",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F44336",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function(){
            localStorage.clear();
            swal("Done!", "localStorage is cleared", "success");
        });

    }

    //Fullscreen View
    this.fullScreen = function() {
        //Launch
        function launchIntoFullscreen(element) {
            if(element.requestFullscreen) {
                element.requestFullscreen();
            } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }

        //Exit
        function exitFullscreen() {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }

        if (exitFullscreen()) {
            launchIntoFullscreen(document.documentElement);
        }
        else {
            launchIntoFullscreen(document.documentElement);
        }
    }

    $scope.getBannerSectionData = function () {


        $http({
            method: "GET",
            url: apiUrl + '/boysen/banner-section-data/get',
        }).then(function successCallback(response) {

            
            webStorage.set('staticContent', response.data);
            
            // $scope.view_about_us            = encodeURI(response.data.about_us);
            // $scope.view_faq_text            = encodeURI(response.data.faq_text);
            $scope.view_green_banner_text   = response.data.green_banner_text;
            // console.log($scope.view_green_banner_text);
            // $scope.privacy_policy           = encodeURI(response.data.privacy_policy);
            // $scope.terms_of_use             = encodeURI(response.data.terms_of_use);



        }, function errorCallback(response) {

        });
    }

    $scope.resetView = function(){        
        if($state.current.name != 'main.main'){
            $state.go('main.main');
        }
        else{
            $rootScope.$emit('resetCategory');
        }
    };
//
//    // TEMPORARY SHOW POPUP
//    $timeout(function(){
//      $scope.showHeaderPopup('Visit Let It B For Color Inspiration', 'http://www.myboysen.com/');
//    }, 1000);
//    $scope.showHeaderPopup = function(text, link){
//      var popupTimer = 10000;
//      $scope.headerPopupText = text;
//      $scope.headerPopupLink = link;
//      $scope.headerPopup     = true;
//
//      var headerHeight = $(window).width() <= 425 ? (((window.location.pathname.indexOf('movie') > -1) || (window.location.pathname.indexOf('series') > -1)) ? '4.8vh' : '0px') : (((window.location.pathname.indexOf('movie') > -1) || (window.location.pathname.indexOf('series') > -1)) ? '' : '');
//      $('.header-popup').animate({ 'margin-top' : headerHeight }, 'slow', function(){
//        var containerWidth = $('.header-popup-content').width(),
//            popupMessageWidth = $('.popup-close').width() + $('.popup-message').width();
//          // $('.text-container').animate({ 'left' : ((containerWidth - popupMessageWidth) / 2) + 'px' }, 590);
//          if($(window).width() <= 425){
//            $('.text-container').css('left', '20px');
//            $('.popup-message').css({ 'font-size' : '15px', 'margin' : '10.5px 0 0 0' });
//
//            if($(window).width() <= 320){ $('.popup-message').css('width', '55%'); }
//            else if($(window).width() <= 425 && $(window).width() > 320){ $('.popup-message').css('width', '60%'); }
//          }
//          else if(($(window).width() <= 800)&&(window.innerHeight < window.innerWidth)){
//            $('.text-container').css('left', 'calc(100%/4)');
//            $('.popup-message').css({ 'font-size' : '15px', 'margin' : '10.5px 0 0 0' });
//            $('.popup-message').css('width', '100%');
//          }
//          else{
//            $('.text-container').css('left', ((containerWidth - popupMessageWidth) / 2) + 'px');
//          }
//      });
//      // TIMER POPUP
//    //   $timeout(function(){
//    //     // $scope.hideHeaderPopup();
//    //     $('.header-popup').fadeOut(1000);
//    //   }, popupTimer);
//    }

    $scope.hideHeaderPopup = function(){
      $timeout(function(){
        $('.headerPopupCss').fadeOut(1000);
        // $('.header-popup').fadeOut().remove();
        // $scope.headerPopupText = '';
        // $scope.headerPopupLink = '';
      }, 10);
    }

    // $(window).scroll(function(){
    //     $('#header').css('background', 'rgba(0,0,0,'+($(window).scrollTop() / 300)+')');
    // });


    $scope.searchData = function(val) {        
        return $http.get(apiUrl+'/boysen/search/get', {
            params: {
                queryParams: val,
            }
        }).then(function(response){
            $scope.searchResultData = response.data.search;
            console.log("searchData", $scope.searchResultData);
            return response.data.search.map(function(item){
                return item.content_title;
            });
        });
    }

    $scope.searchItemSelected = function (val){
        console.log("searchItemSelected12345oqwieuq", val, $scope.searchResultData);
        // replace("[\"","").replace("\"]","")
        angular.forEach($scope.searchResultData, function(element,key) {


        
                var l_genre = element.genre.replace("[\"", "").replace("\"]", "").toLowerCase();
                var ipContry = $rootScope.countryCode;
                var l_geo_access = element.geo_access;
            
        // hardcoded for geoblocking [start] -------------------------------------------------------
                //Categories accessible globally - hardcode to be modified
                    // var global_category1 = "Boysen Now".toLowerCase();
                    // var global_category2 = "Boysen Classics".toLowerCase();
                    // var global_category3 = "Boysen Beats".toLowerCase();
                    // var global_category4 = "Boysen DIY".toLowerCase();
                    // var global_category5 = "Be Heard".toLowerCase();
                    // var global_category6 = "Be Better".toLowerCase();

                //Categories accessible in PH only - hardcode to be modified
                    // var local_category1 = "Recently Added".toLowerCase();
                    // var local_category2 = "Box Office Presents".toLowerCase();
                    // var local_category3 = "Binge".toLowerCase();
                    // var local_category4 = "Big Time Bouts".toLowerCase();
                    // var local_category5 = "Brave and Bold".toLowerCase();
                    // var local_category6 = "Beyond Borders".toLowerCase();
        // hardcoded for geoblocking [end]-------------------------------------------------------


            if (element.not_found) {
                setTimeout(function () {
                    $("#searchform").val("");
                }, 50);

                return;
            }
            if (element.content_title == val) {
                $window.sendGAEvent('User Function', 'User Search');
                $window.sendGAEvent('Search Query', val);

                var genre = element.genre.replace(/\[|"|]/g, '');
                console.log("debug", ipContry, element.content_title, element.content_types_id, element.permalink.toLowerCase());
                
                // setTimeout(function () {     
                    if (element.content_types_id == 1) {

                        // original code ----------------------------------------
                        // $state.go('main.watchNowMovie', {
                        //     category: genre.replace(/ /g, "-").toLowerCase(),
                        //     title: element.permalink.toLowerCase()
                        // });
                        // -------------------------------------------------------


                        // added condition for geoblocking, hardcoded workaround [start]----------------------
                        if (ipContry == "PH") {
                            $state.go('main.watchNowMovie', {
                                category: genre.replace(/ /g, "-").toLowerCase(),
                                title: element.permalink.toLowerCase()
                            });

                        } else if (ipContry != "PH" && l_geo_access == "") {
                            $state.go('main.watchNowMovie', {
                                category: genre.replace(/ /g, "-").toLowerCase(),
                                title: element.permalink.toLowerCase()
                            });

                        } else if (ipContry != "PH" && l_geo_access == "GLOBAL") {
                            $state.go('main.watchNowMovie', {
                                category: genre.replace(/ /g, "-").toLowerCase(),
                                title: element.permalink.toLowerCase()
                            });

                        } else if (ipContry != "PH" && l_geo_access == "PH") {
                            // setGeoBlock()
                            swal("Sorry", "Content Not Available for this Country", "error");
                        }
                        // added condition for geoblocking, hardcoded workaround [end]----------------------

                        return;
                    }
                    else if (element.content_types_id == 3) {
                        // original code ----------------------------------------
                        // $state.go('main.watchNowSeries', {
                        //     category: genre.replace(/ /g, "-").toLowerCase(),
                        //     title: element.permalink.toLowerCase()
                        // });
                        // -------------------------------------------------------

                        // added condition for geoblocking, hardcoded workaround [start]----------------------
                        if (ipContry == "PH") {
                            $state.go('main.watchNowSeries', {
                                category: genre.replace(/ /g, "-").toLowerCase(),
                                title: element.permalink.toLowerCase()
                            });

                        } else if (ipContry != "PH" && l_geo_access == "") {
                            $state.go('main.watchNowSeries', {
                                category: genre.replace(/ /g, "-").toLowerCase(),
                                title: element.permalink.toLowerCase()
                            });

                        } else if (ipContry != "PH" && l_geo_access == "GLOBAL") {
                            $state.go('main.watchNowSeries', {
                                category: genre.replace(/ /g, "-").toLowerCase(),
                                title: element.permalink.toLowerCase()
                            });

                        } else if (ipContry != "PH" && l_geo_access == "PH") {
                            // setGeoBlock()
                            swal("Sorry", "Content Not Available for this Country", "error");
                        }
                        // added condition for geoblocking, hardcoded workaround [end]----------------------

                        return;
                    }
                // }, 2000);

                



            }
                          
        });
    }

    

    $rootScope.clearSearchData = function(){
        $("#searchform").val("");
    }
}])
//==============================================================================
// MODAL
//==============================================================================
.controller('ModalInstanceCtrl', ['$rootScope', '$scope', '$uibModalInstance', 'content', '$window',function ($rootScope, $scope, $uibModalInstance, content, $window){
    $rootScope.modalContent =   content; {};

    $rootScope.ok = function(){
        $uibModalInstance.close();
    }

    $rootScope.cancel = function(){
        $uibModalInstance.dismiss('cancel');
    }

}])

.controller('ResetPasswordPageCtrl', ['transformRequestAsFormPost', '$scope','$http','$stateParams', '$state', '$window',function (transformRequestAsFormPost, $scope,$http,$stateParams, $state, $window){

    $scope.user     =   {};
    $scope.resetPassword = function(){

        if($scope.user.password == "" || $scope.user.password.length == 0 ){
            swal("Sorry", "Please enter your new password", "error");
            return;
        }
        if($scope.user.password.length < 8 ){
            swal("Sorry", "Password length should be 8 characters long", "error");
            return;
        }
        if($scope.user.password != $scope.user.newPassword ){
            swal("Sorry", "Password does not match", "error");
            return;
        }
        $http({
            method   : "POST",
            url      : apiUrl+'/user/update-user-password',
            data     : {
                user_id     :   $stateParams.id,
                password    :   $scope.user.newPassword
            }
        }).then(function successCallback(response){
            console.log(response);
            if(response.data.code == 200){
                swal("Done!", "Password changed successfully!", "success");
                $state.go("main.main");
            }

        }, function errorCallback(response){

        });
    };

 

}])
