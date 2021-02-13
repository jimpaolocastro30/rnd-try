boysen
    .controller('homeCtrl', ['$scope', '$http', '$rootScope', '$timeout', '$window', 'webStorage', function ($scope, $http, $rootScope, $timeout, $window, webStorage){

      $window.sendGAPage("/","Home Page");
      $scope.index          = 0;
      $scope.myInterval     = 5000;
      $scope.active         = 0;
      $scope.slides         = [];
      $scope.allData        = {};
      $scope.categoryList   = {};
      $scope.viewSpecific   = false;
      $scope.viewedCategory = "";
      $scope.continueWatching = [];
      $scope.catGeoAccess = [];
      $scope.cwGenre   = [];
        $scope.boysenGeoAccess = "";
      $scope.bannerArrayLinkGenre   = [];
      $scope.placeHolderImg = {
        "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
        "content_types_id": "no"
        };
      $scope.categoryTitle  = "";
      $scope.categoryUrl    = "";
      $scope.specificView   = false;
      var arrayOfLoadingImages = [
        {
        "content_types": "no"
        },
        {
        "content_types_id": "no"
        },
        {
        "content_types_id": "no"
        },
        {
        "content_types_id": "no"
        },
        {
        "content_types_id": "no"
        },
        {
        "content_types_id": "no"
        },
        {
        "content_types_id": "no"
        }
      ];
      $scope.scrollValue = screen.width < 480 ? 3 : screen.width < 1023 ? 5 : 7;
      $scope.categoryList   = [
        // { categoryName: 'Boysen Now', categoryUrl: 'boysen-now', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true },
        // { categoryName: 'Boysen Classics', categoryUrl: 'boysen-classics', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true },
        // { categoryName: 'Boysen Beats', categoryUrl: 'boysen-beats', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true },
        // { categoryName: 'Box Office' + ( (screen.width < 376) ? "" : " Presents"), categoryUrl: 'box-office-presents', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages , show: true},
        // { categoryName: 'Binge', categoryUrl: 'binge', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true},
        // { categoryName: 'Big Time Bouts', categoryUrl: 'big-time-bouts', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true },
        // { categoryName: 'Beyond Borders', categoryUrl: 'beyond-borders', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true },
        // { categoryName: 'Beam', categoryUrl: 'beam', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true },
        // { categoryName: 'Brave and Bold', categoryUrl: 'brave-and-bold', currentPage: 1, page: 1, dataArray:arrayOfLoadingImages, show: true },
      ];
      $scope.specificCategoryAllData = [];
      $scope.countryCode = "";
      $scope.isLoggedIn = webStorage.has('user');
      $scope.loggedData = $scope.isLoggedIn ? webStorage.get('user') : null;

      $scope.initData = function(){
        $http({
            method : "GET",
            url    : "https://ipapi.co/json/",
        }).then(function successCallback(response){
            $scope.countryCode = response.data.country;
            $rootScope.countryCode = response.data.country;
            
        }, function errorCallback(response){
        });
        $scope.getBannerSlides();
        $scope.getBoysenData();
      };

      $scope.initCategoriesGeo = function(){
          $http({
              method : "GET",
              url: apiUrl + "/boysen/geoaccess/get"
          }).then(function successCallback(response){
              console.log("re: ", response.data);
              var categoriesGeo = response.data;
              for(var i = 0; i < categoriesGeo.length; i++){
                $scope.catGeoAccess.push({
                      categoryName: categoriesGeo[i].categoryName,
                      categoryAccess: categoriesGeo[i].geoAccess
                });
              }
              console.log("q: " + $scope.catGeoAccess[0].categoryName + "qq: " + $scope.catGeoAccess[0].categoryAccess);
          })
      }


    //   $scope.getCategoryGeo = function() {
    //       for (var i = 0; i <= $scope.catGeoAccess.length; i++){
    //         //   console.log($scope.catGeoAccess[i].cate);
    //       }
    //   }

      $scope.setGeoBlock = function(){
        swal("Sorry", "Content Not Available for this Country", "error");
      };

      $rootScope.$on('resetCategory',function(){
        $scope.specificView  = false;
        angular.forEach($scope.categoryList, function(value, key){
            value.show = true;
        });
      });

      $scope.setCategoryView = function(categoryName){
          console.log("setCategoryView");
        $window.sendGAEvent('View Category', $scope.categoryTitle == "" ? categoryName : $scope.categoryTitle);

        $scope.specificCategoryAllData  = [];
        $timeout(function(){
            angular.element("#grid-content").addClass('opacity-none');
        });
        var found                       = false
        $scope.specificView             = true;
        $scope.categoryTitle            = $scope.categoryTitle == "" ? categoryName : $scope.categoryTitle;
        // setTimeout(function(){ $scope.specificCategoryAllData  = []; },0);
        angular.forEach($scope.categoryList, function(value, key){
            if(!found){
                if(value.categoryName == categoryName){
                    $scope.categoryUrl  = value.categoryUrl;
                    if(parseInt(value.totalItems) != value.dataArray.length){
                        value.dataArray     = [];
                        $http({
                            method   : "GET",
                            url      : apiUrl+'/boysen/content-list/get',
                            params   : {
                                // authToken : apiToken,
                                permalink : "movie",
                                genre     : value.categoryName
                            }
                        }).then(function successCallback(response){
                            $scope.specificCategoryAllData  = [];
                            $scope.categoryTitle            = categoryName;
                            $scope.specificCategoryAllData  = response.data.movieList;
                          
                            
                            for (var i = 0; i < $scope.specificCategoryAllData.length; i++) {
                              
                                $scope.boysenGeoAccess = $scope.specificCategoryAllData[i].geo_access;

                            }
                                        
                           
                            value.dataArray                 = response.data.movieList;
                            angular.element("#grid-content").removeClass('opacity-none');
                            angular.element('html,body').animate({
                                scrollTop: angular.element("#grid-list").offset().top},
                            'slow');
                        }, function errorCallback(response){

                        });
                    }
                    else{
                        $timeout(function(){
                            $scope.categoryTitle            = categoryName;
                            $scope.specificCategoryAllData  = value.dataArray;
                            console.log("specificCategory else");

                            for (var i = 0; i < $scope.specificCategoryAllData.length; i++) {

                                $scope.boysenGeoAccess = $scope.specificCategoryAllData[i].geo_access;

                            }

                            // console.log("specificCategoryAllData", $scope.specificCategoryAllData.geo_access);
                            $timeout(function(){
                                angular.element("#grid-content").removeClass('opacity-none');
                                angular.element('html,body').animate({
                                    scrollTop: angular.element("#grid-list").offset().top},
                                'slow');
                            },10);
                        },1000)
                    }
                    found = true;
                }
            }
            value.show = false;
        });
      };

      $scope.checkIfMaxScroll = function(category){
        var element = angular.element('#'+category.categoryUrl);
        var clientWidth = element.get(0).clientWidth,
            scrollWidth = element.get(0).scrollWidth,
            scrollLeft  = element.scrollLeft();
        if(screen.width < 1023){
            if(scrollLeft == (scrollWidth - clientWidth)){
                $scope.getBoysenDataSpecific(category);
            }
        }
      };

      $scope.getBoysenDataSpecific = function(category){
          
        var element = angular.element('#'+category.categoryUrl);
        var clientWidth = element.get(0).clientWidth,
            scrollWidth = element.get(0).scrollWidth,
            scrollLeft  = element.scrollLeft();
            category.currentPage++;
            var newScrollLeft = screen.width > 480 ? scrollLeft+clientWidth : scrollLeft+clientWidth;
            if(parseInt(category.totalItems) > category.dataArray.length){
                if(category.page == category.currentPage){
                    $http({
                        method   : "GET",
                        url      : apiUrl+'/boysen/content-list/get',
                        params   : {
                            permalink : "movie",
                            genre     : category.categoryName,
                            page      : category.page,
                            row       : screen.width < 480 ? 4 : 7
                        }
                    }).then(function successCallback(response){
                        category.page++;
                        var movieList = response.data.movieList;
                        angular.forEach(movieList, function(value, key){
                            category.dataArray.push(value);
                        });

                        
                        element.animate({scrollLeft: newScrollLeft}, 'slow');
                    }, function errorCallback(response){

                    });
                }
                else{
                    if(screen.width > 480){
                        element.animate({scrollLeft: newScrollLeft}, 'slow');
                    }
                }
            }
            else{
                category.currentPage++;
                if(screen.width > 480){
                    element.animate({scrollLeft: newScrollLeft}, 'slow');
                }
            }
      };

      $scope.scrollNextandPrev = function(direct){
        var element = angular.element('#continue-watching');
        var clientWidth = element.get(0).clientWidth,
            scrollWidth = element.get(0).scrollWidth,
            scrollLeft  = element.scrollLeft();
        var newScrollLeft = screen.width > 480 ? scrollLeft+clientWidth : scrollLeft+clientWidth;
        if(direct == 'right'){
            element.animate({scrollLeft: newScrollLeft}, 'slow');
        } else {
            element.animate({scrollLeft: (scrollLeft-clientWidth)}, 'slow');
        }
      }

      $scope.cleanPermalinkCategory = function(string){
          return JSON.parse(string)[0].toLowerCase().replace(/ /g, '-');
      }

      $scope.getBoysenData = function(){
            if($scope.isLoggedIn){
                $http({
                    method:"GET",
                    url:apiUrl+'/boysen/duration-view-logs/continue-watching',
                    params: {
                        user: $scope.loggedData.user_info.id
                    }
                }).then(function successCallback(response){
                    // $scope.continueWatching = response.data.data;
                    // response.data.list.forEach(function(data){
                    //     $scope.continueWatching.forEach(function(data2){
                    //         if(data2 ==)
                    //     });
                    //     console.log(data);
                    // });
                    $scope.continueWatching = response.data.data;
                    console.log("continueWatching",$scope.continueWatching);
                    for(var i = 0 ; i < $scope.continueWatching.length ; i++){
                        $scope.cwGenre.push({ 
                            cwGenre: $scope.continueWatching[i].movie.genre.replace("[\"","").replace("\"]",""), 
                            geo_access: $scope.continueWatching[i].geo_access,
                        });
                       
                    }
                }, function errorCallback(response){
                    
                });
            }
            $http({
                    method:"GET",
                    url:apiUrl+'/boysen/boysen-data/get',
            }).then(function successCallback(response){
                
                // console.log(response.data.category_content_list);
                for(var i = 0 ; i < response.data.category_content_list.length ; i++){
                    $scope.categoryList.push({ 
                        categoryName: response.data.category_content_list[i].category_name, 
                        categoryUrl: response.data.category_content_list[i].category_name.replace(/\s+/g, '-').toLowerCase(), 
                        currentPage: 1, 
                        page: 2, 
                        dataArray:JSON.parse(response.data.category_content_list[i].category_init_data).movieList,
                        totalItems:JSON.parse(response.data.category_content_list[i].category_init_data).item_count,
                        geoAccess: response.data.category_content_list[i].geo_access,
                        show: true });
                }
                // var randIndex = Math.floor(Math.random() * 6);
                // $scope.categoryList.splice(randIndex, 0, { 
                //     categoryName: "Continue Watching", 
                //     categoryUrl: "Continue-Watching", 
                //     currentPage: 1, 
                //     page: 2, 
                //     dataArray:{},
                //     totalItems:0,
                //     show: true 
                // });

                // console.log("categoryList", $scope.categoryList);
                webStorage.set('staticContent', response.data);
                
                // $scope.view_about_us            = encodeURI(response.data.about_us);
                // $scope.view_faq_text            = encodeURI(response.data.faq_text);
                // $scope.view_green_banner_text   = encodeURI(response.data.green_banner_text);
                // $scope.privacy_policy           = encodeURI(response.data.privacy_policy);
                // $scope.terms_of_use             = encodeURI(response.data.terms_of_use);
                
                
                
            }, function errorCallback(response){
                
            });
            // angular.forEach($scope.categoryList, function(value, key){
            //     value.dataArray = [];
            //     $http({
            //         method   : "GET",
            //         url      : apiUrl+'/boysen/content-list/get',
            //         params   : {
            //             permalink : "movie",
            //             genre     : value.categoryName,
            //             page      : value.page,
            //             row       : screen.width < 480 ? 4 : 7
            //         }
            //     }).then(function successCallback(response){
            //         $timeout(function () {
            //             $scope.$apply(function () {
            //                 value.page++;
            //                 value.dataArray  = response.data.movieList;
            //                 value.totalItems = response.data.item_count;
            //             });
            //         },5000).then(function(){
            //             if(parseInt(value.totalItems) > value.dataArray.length){
            //                 $http({
            //                     method   : "GET",
            //                     url      : apiUrl+'/boysen/content-list/get',
            //                     params   : {
            //                         // authToken : apiToken,
            //                         permalink : "movie",
            //                         genre     : value.categoryName
            //                     },
            //                     ignoreLoadingBar: true
            //                 }).then(function successCallback(response){
            //                     $timeout(function () {
            //                         $scope.$apply(function () {
            //                             value.dataArray  = response.data.movieList;
            //                         });
            //                     },10);
            //                 }, function errorCallback(response){

            //                 });
            //             }
            //         });
            //     }, function errorCallback(response){

            //     });
            // });
            // $http({
            //     method   : "GET",
            //     url      : apiUrl+'/boysen/get-all-data/get',
            //     params   : {
            //         // authToken : apiToken,
            //         permalink : "movie",
            //         genre     : value.categoryName,
            //         page      : value.page,
            //         row       : screen.width < 480 ? 4 : 7
            //     }
            // }).then(function successCallback(response){
            //     var movieList = response.data.movieList;
            //     angular.forEach($scope.categoryList, function(value, key){
            //         value.dataArray = [];
            //         for(var i = 0; i < movieList.length; i++){
            //             if(movieList[i].genre.indexOf(value.categoryName) != -1){
            //                 value.dataArray.push(movieList[i]);
            //             }
            //         }
            //     });
            // }, function errorCallback(response){

            // });

       };

      

      $scope.getBannerSlides  = function(){          
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/banner-section-list/get',
            // params   : {
            //     authToken : apiToken,
            // }
        }).then(function successCallback(response){
            $scope.slides = response.data.banners;

            // $scope.bannerButtonLink = $scope.slides.banner_button_link.split('/');
            for(var x = 0; x<$scope.slides.length; x++){
                var split = $scope.slides[x].banner_button_link.split('/');
                $scope.slides[x].banner_array_link = split;
                $scope.slides[x].banner_array_link[4] = $scope.slides[x].banner_array_link[4].replace(/ /g, '-')
                // $scope.
                // console.log("Slides,", $scope.slides, $scope.slides[x].geo_access);
                $scope.bannerArrayLinkGenre.push({
                    bGenre: $scope.slides[x].banner_array_link[4].split("-").join(" "),
                    geo_access: $scope.slides[x].geo_access,                 
                });
                                
            }
            setInterval(function(){
                $scope.index = $scope.index < $scope.slides.length ? 0 : $scope.index++;
                for(var x = 0; x<$scope.slides.length; x++){
                   if (x == $scope.index){
                    $scope.slides[x].active = true;
                   }else{
                    $scope.slides[x].active = false;
                   }
                }
                // console.log($scope.slides);
            }, 3000);
        }, function errorCallback(response){

        });
      };

      $scope.prevButton = function(category){
        category.currentPage--;
        console.log(category);
        var element = angular.element('#'+category.categoryUrl);
        var clientWidth = element.get(0).clientWidth,
            scrollWidth = element.get(0).scrollWidth,
            scrollLeft  = element.scrollLeft();
        element.animate({scrollLeft: (scrollLeft-clientWidth)}, 'slow');
      };
    //   $timeout(function(){ $("#banner-carousel").css("padding-top",$("#header").height()+"px"); },500);

    }])
    .controller('categoryCtrl', ['$scope','$http','httpPromisedRequest','$stateParams', '$timeout', '$rootScope', '$window', function($scope,$http,httpPromisedRequest,$stateParams, $timeout, $rootScope, $window){

      $scope.myInterval     = 0;
      $scope.slides         = [];
      $scope.categoryList   = [
        { categoryName: 'Boysen Now', categoryUrl: 'boysen-now' },
        { categoryName: 'Boysen Classics', categoryUrl: 'boysen-classics' },
        { categoryName: 'Box Office Presents', categoryUrl: 'box-office-presents' },
        { categoryName: 'Binge', categoryUrl: 'binge' },
        { categoryName: 'Big Time Bouts', categoryUrl: 'big-time-bouts' },
        { categoryName: 'Beyond Borders', categoryUrl: 'beyond-borders' },
        { categoryName: 'Beam', categoryUrl: 'beam' },
        { categoryName: 'Brave and Bold', categoryUrl: 'brave-and-bold' },
      ];
      $scope.placeHolderImg = {
        "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
        "content_types_id": "no"
        };
      $scope.boysenNowList  = [];
      $scope.categoryTitle  = $stateParams.category.replace(/-/g,' ');
      $scope.categoryTitleRaw = $stateParams.category;
      console.log($stateParams);
      $(window).scrollTop(0);
      $timeout(function(){ angular.element('#grid-content').addClass('opacity-none'); },0);
      $timeout(function(){ angular.element('#grid-content').removeClass('opacity-none'); },500);
      $scope.getBannerSlides  = function(){
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/banner-section-list/get',
            // params   : {
            //     authToken : apiToken,
            // }
        }).then(function successCallback(response){
            console.log(response.data);
            $scope.slides = response.data.banners;
        }, function errorCallback(response){

        });
      };

      $scope.getBoysenNowList = function(){
          console.log("getBoysenNowList");
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/content-list/get',
            params   : {
                // authToken : apiToken,
                permalink : "movie",
                genre     : $scope.categoryTitle
            }
        }).then(function successCallback(response){
            $scope.boysenNowList = response.data.movieList;
        }, function errorCallback(response){

        });
      };

    }])
    .controller('watchNowMoviesCtrl', ['$scope','$http','webStorage','$stateParams','$timeout', '$sce','$rootScope', 'growlService','prompt', '$window','$state','genericServices',function($scope,$http,webStorage,$stateParams, $timeout, $sce,$rootScope, growlService,prompt, $window,$state,genericServices){

        $scope.videoSpecs               = $stateParams;
        $scope.isLoggedIn               = webStorage.has('user');
        $scope.readmoreValue            = screen.width < 480 ? 300 : 500;
        $scope.loggedData               = $scope.isLoggedIn ? webStorage.get('user') : null;
        $scope.firstLetter              = webStorage.has('user') ? $scope.loggedData.user_info.display_name.charAt(0).toUpperCase() : null;
        $scope.profilePicture           = webStorage.get('user') ? ($scope.loggedData.user.profile_image == "" ? "/img/User Icons/"+  $scope.firstLetter  +".png" : $scope.loggedData.user.profile_image) : "/img/User Icons/"+  $scope.firstLetter  +".png" ;
        $scope.videoMuviId              = "";
        $scope.commentPage              = 2;
        $scope.commentData              = [];
        $scope.totalComments            = 0;
        $scope.resolutions              = {};
        $scope.poster                   = "";
        $scope.ads                      = {};
        $scope.midAds                   = {};
        $scope.videoDuration            = 600;
        $scope.resumePlay               = false;
        $scope.resumePlayData           = {};
        $scope.isRequireLogin           = false;
        $scope.isMidrollAdsPlay         = false;
        $scope.videoSuggestions         = [{
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types": "no"
            },
            {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
            },
            {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
            },
            {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
            },
            {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
            },
            {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
            },
            {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
            }];
        $scope.placeHolderImg = {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
        };
        $scope.isAdsPlayed              = false;
        $scope.isAdsPlaying             = false;
        $scope.isMidrollAdsPlayed       = false;
        $scope.isMidrollAdsPlaying      = false;
        $(window).scrollTop(0);

        $scope.initVideoPlayer = function(){
            videojs(document.querySelector('.main-videojs'),{
                fluid: true,
                preload: 'auto',
                aspectRatio: "16:9",
                html5: {
                    hls: {
                      overrideNative: true
                    }
                },
                autoplay: true
            },function(){
                $('.vjs-loading-spinner').html('<center><img src="/img/boysen_2.gif" alt="Loading..."></center>');

                var adText = "Ads",
                html = '<div class="thisIsAnAd" style="position:  absolute; bottom: 30px; width: 100%;background:transparent;"> ' +
                            '<div class="adsTextContainer" style="float:  right; text-align:  center; padding: 10px 15px; border: 1px solid #fff; background: #756e6e;">' +
                                '<span style="font-size:  14px;" id="adText"> '+ adText +'</span>' +
                            '</div> ' +
                        '</div>';

                $('.vjs-big-play-centered.main-videojs').append(html);
                $('.thisIsAnAd').hide();
                this.on('play',function(e){
                    if($scope.isRequireLogin){
                        if(!$scope.isLoggedIn){
                            $rootScope.$emit('requireLogin');
                            this.pause();
                        }
                    }
                    // if(!$scope.isLoggedIn && ($scope.videoSpecs.category == 'binge' || $scope.videoSpecs.category == 'box-office-presents' || $scope.videoSpecs.category == 'big-time-bouts' || $scope.videoSpecs.category == 'beyond-borders' || $scope.videoSpecs.category == 'beam' || $scope.videoSpecs.category == 'brave-and-bold')){
                    //     prompt.warning('Please Login First');
                    //     this.pause();
                    // }
                });
                this.controlBar.addChild('QualitySelector');
            });
        }

        $scope.getContentDetails = function(){
            $window.sendGAPage("/" + $scope.videoSpecs.title, 'MovieTitle');

            $scope.initVideoPlayer();
            var newResolutionList = [];
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/content-details/get',
                params   : {
                    permalink   : $scope.videoSpecs.title,
                    user_id     : $scope.isLoggedIn ? $scope.loggedData.user_info.id : null,
                    recommended : 10
                }
            }).then(function successCallback(response){
                $scope.videoEmbedUrl = $sce.trustAsHtml("<iframe width = \"100%\" height = \"100%\" style=\"background-color:#000\" id = \"myIframe_282715\" src = \""+response.data.movie.embeddedUrl.replace('http','https')+"\" frameborder = \"0\" allowfullscreen > </iframe><script>var viewPortTag=document.createElement('meta');viewPortTag.name='viewport';viewPortTag.content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;';window.parent.document.getElementsByTagName('head')[0].appendChild(viewPortTag);</script>");
                $scope.imgBanner        = response.data.movie.poster;
                $scope.videoDesc        = response.data.movie.story;
                $scope.videoTitle       = response.data.movie.name;
                $scope.videoMuviId      = response.data.movie.id;
                if(response.data.movie.resumePlay != null){
                    $scope.resumePlay               = true;
                    $scope.resumePlayData           = response.data.movie.resumePlay;
                }
                $scope.commentData      = response.data.comments;
                $scope.totalComments    = response.data.totalComments;
                $scope.videoSuggestions = $scope.randomArray(response.data.recommended);
                $scope.isRequireLogin   = response.data.require_login;
                $scope.isMidrollAdsPlay = response.data.mid_roll_ads;
                angular.forEach(response.data.movie.resolution, function(value,key){

                    // if(newResolutionList.length < 3){
                    //     var obj = {};
                    //     obj.src     = value.url;
                    //     obj.label   = String(value.resolution);
                    //     obj.type    = 'video/mp4';
                    //     if(key == 1){
                    //         obj.selected = true;
                    //     }
                    //
                    //     newResolutionList.unshift(obj);
                    // }
                    if(key == 0 || key == 2){
                        var obj = {};

                        value.resolution = (key == 2) ? 360 : value.resolution; // Ehddver Cabiten

                        obj.src     = value.url;
                        obj.label   = String(value.resolution);
                        obj.type    = 'video/mp4';
                        if(key == 1){
                            obj.selected = true;
                        }

                        newResolutionList.unshift(obj);
                    }

                });
                $scope.resolutions = newResolutionList;
                $scope.poster      = response.data.movie.poster;
                $scope.ads         = $scope.randomArray(response.data.ads)[0];
                $scope.midAds      = $scope.randomArray(response.data.ads)[0];
                angular.element('.video-content-image img').removeClass('tile__img');
                angular.element('.video-content-desc h3').removeClass('tile__img2');
                angular.element('.video-content-desc #series-desc').removeClass('tile__img');
                angular.element('.videoPlayer').removeClass('tile__img3');
                angular.element('.videoPlayer div').removeClass('bring-down');
            }, function errorCallback(response){
                if(response.data.error.errorDev.code == 414)
                {
                    swal("Sorry", "Content Not Available for this Country", "error");
                    // $state.go("main.geoBlocking",{title:$scope.videoSpecs.title,country:response.data.error.errorDev.countryCode});
                }
            })
            .finally(function(){
                var player = videojs(document.querySelector('.main-videojs'));
                timeoutID2 = setInterval(function(){
                    if(player.paused()){
                        $('.videojs-logo').addClass('showViaOpacity');
                    }else{
                        $('.videojs-logo').removeClass('showViaOpacity');
                    }
                },10);
                if($scope.resumePlay){
                    if($scope.isMidrollAdsPlay){
                        $scope.playerSetAds(player, parseInt($scope.resumePlayData.duration) + 1);
                        player.currentTime(parseInt($scope.resumePlayData.duration));
                        player.pause();
                    }
                    else{
                        player.src($scope.resolutions);
                        player.currentTime(parseInt($scope.resumePlayData.duration));
                        player.pause();
                        player.on('playing', function(event){
                            timeoutID = setInterval(function() {
                                if($scope.isLoggedIn){
                                    $http({
                                        method   : "POST",
                                        url      : apiUrl+'/boysen/videoDuration/set',
                                        data     : {
                                            duration  : player.currentTime(),
                                            videoId   : $scope.videoMuviId,
                                            userMuvId : webStorage.get('user').user_info.id,
                                            permalink : $scope.videoSpecs.title,
                                            category_permalink : $scope.videoSpecs.category,
                                            is_series          : "0",
                                            video_length     : Math.floor(player.duration())
                                        },
                                        ignoreLoadingBar : true,
                                    }).then(function successCallback(response){
                                    },function errorCallback(response){
                                    });
                                }
                            }, 5000);
                        });
                    }
                }
                else{
                    if($scope.isMidrollAdsPlay){
                        $scope.playerSetAds(player, 1);
                    }
                    else{
                        player.src($scope.resolutions);
                        player.on('playing', function(event){
                            timeoutID = setInterval(function() {
                                if($scope.isLoggedIn){
                                    $http({
                                        method   : "POST",
                                        url      : apiUrl+'/boysen/videoDuration/set',
                                        data     : {
                                            duration  : player.currentTime(),
                                            videoId   : $scope.videoMuviId,
                                            userMuvId : webStorage.get('user').user_info.id,
                                            permalink : $scope.videoSpecs.title,
                                            category_permalink : $scope.videoSpecs.category,
                                            is_series          : "0",
                                            video_length     : Math.floor(player.duration())
                                        },
                                        ignoreLoadingBar : true,
                                    }).then(function successCallback(response){
                                    },function errorCallback(response){
                                    });
                                }
                            }, 5000);
                        });
                    }
                }
                });
        };

        $scope.playerSetAds = function(player, timeAdsShow){
            player.src($scope.resolutions);
            timeoutID2 = setInterval(function(){
                if(player.paused()){
                    $('.videojs-logo').addClass('showViaOpacity');
                }else{
                    $('.videojs-logo').removeClass('showViaOpacity');
                }
                if($scope.isAdsPlaying || $scope.isMidrollAdsPlaying){
                    $('.vjs-control-bar').first().addClass('visibility-none');
                    $('.thisIsAnAd div span').text('(Ad) ' + genericServices.fancyTimeString(player.remainingTimeDisplay()));
                    $('.thisIsAnAd').show();
                }
                else{
                    $('.vjs-control-bar').first().removeClass('visibility-none');
                }
            },10);
            player.on('playing', function(event){
                timeoutID = setInterval(function() {
                    if((!$scope.isAdsPlaying && $scope.isLoggedIn) && (!$scope.isMidrollAdsPlaying && $scope.isLoggedIn)){
                        $http({
                            method   : "POST",
                            url      : apiUrl+'/boysen/videoDuration/set',
                            data     : {
                                duration  : player.currentTime(),
                                videoId   : $scope.videoMuviId,
                                userMuvId : webStorage.get('user').user_info.id,
                                permalink : $scope.videoSpecs.title,
                                category_permalink : $scope.videoSpecs.category,
                                is_series          : "0",
                                video_length     : Math.floor(player.duration())
                            },
                            ignoreLoadingBar : true,
                        }).then(function successCallback(response){
                        },function errorCallback(response){
                        });
                    }
                }, 5000);
            });
                player.on('timeupdate', function() {
                    var currentTime = this.currentTime();
                    if(!$scope.isAdsPlayed && !$scope.isAdsPlaying){
                        if (currentTime >= timeAdsShow && ($scope.isMidrollAdsPlay)){
                            $('.thisIsAnAd div span').text('Please Wait...');
                            $('.thisIsAnAd').show();
                            $scope.videoDuration = currentTime;
                            player.src($scope.ads.video_url);
                            player.play();
                            $('.thisIsAnAd div span').text('(Ad) ' + genericServices.fancyTimeString(player.remainingTimeDisplay()));
                            $scope.isAdsPlaying = true;
                            $('.vjs-marker').addClass('display-none');
                        }
                    }
                    if(!$scope.isMidrollAdsPlayed && !$scope.isMidrollAdsPlaying){
                        if (!$scope.resumePlay){
                            if (currentTime >= 600 && ($scope.isMidrollAdsPlay)){
                                $('.thisIsAnAd div span').text('Please Wait...');
                                $('.thisIsAnAd').show();
                                $scope.videoDuration = currentTime;
                                player.src($scope.midAds.video_url);
                                player.play();
                                $('.thisIsAnAd div span').text('(Ad) ' + genericServices.fancyTimeString(player.remainingTimeDisplay()));
                                $scope.isMidrollAdsPlaying = true;
                                $('.vjs-marker').addClass('display-none');
                            }
                        }
                    }
                    player.on("seeking", function(event) {
                        if($scope.isAdsPlaying || $scope.isMidrollAdsPlaying){
                            if (currentTime < player.currentTime()) {
                                player.currentTime(currentTime);
                            }
                        }
                    });

                    player.on("seeked", function(event) {
                        if($scope.isAdsPlaying || $scope.isMidrollAdsPlaying){
                            if (currentTime < player.currentTime()) {
                                player.currentTime(currentTime);
                            }
                        }
                    });

                    setInterval(function() {
                        if (!player.paused()) {
                        currentTime = player.currentTime();
                        }
                    }, 1000);
                });
                player.on('ended', function() {
                    // player.markers.destroyAll();
                    console.log("video eneded");
                    player.src($scope.resolutions);
                    $('.thisIsAnAd div span').text('Please Wait...');
                    if($scope.isAdsPlayed && $scope.isMidrollAdsPlayed){
                        $scope.videoDuration = 0;
                        player.pause();
                    }
                    if($scope.isAdsPlayed){
                        $scope.isMidrollAdsPlayed = true;
                        $scope.isMidrollAdsPlaying = false;
                    }
                    $scope.isAdsPlayed = true;
                    $scope.isAdsPlaying = false;
                });
                player.on('loadedmetadata', function(){
                    if($scope.isAdsPlayed || $scope.isMidrollAdsPlayed){
                        player.currentTime($scope.videoDuration);
                        $('.thisIsAnAd').hide();
                        if($scope.videoDuration != 0){
                            player.play();
                            if(!$scope.isMidrollAdsPlay){
                                player.pause();
                            }
                        }
                        else{
                            player.pause();
                        }
                    }
                    if($scope.isAdsPlayed && $scope.isMidrollAdsPlayed){
                        player.pause();
                    }
                });
        };

        $scope.postComment = function(){
            var commentContents = angular.element('#main-comment').val();
            if(commentContents.trim() == "" && comment == null){
                growlService.growl("Input Comment", "warning");
                return true;
            }
            if(comment != null){
                if(comment.childrenComment.trim() == ""){
                    growlService.growl("Input Comment", "warning");
                    return true;
                }
            }
            if(!webStorage.has('user')){
                growlService.growl("Login First", "warning");
                return true;
            }
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/comment/set',
                data     : {
                    comment   : comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    videoId   : $scope.videoMuviId,
                    userId    : webStorage.get('user').user.user_id,
                    userMuvId : webStorage.get('user').user_info.id,
                    commentId : comment != null ? comment.id : null,
                }
            }).then(function successCallback(response){
                var commentBackUp  = $scope.commentData == null ? [] : $scope.commentData;
                commentBackUp.unshift({
                    comment_id: comment != null ? comment.id : null,
                    posted_at: new Date().toLocaleString(),
                    user: $scope.loggedData.user_info.display_name,
                    userComment: comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    userImage: $scope.profilePicture,
                    user_id: $scope.loggedData.user.user_id,
                    comment_count: "0",
                    id: response.data.comment_id
                });
                if(comment != null){
                    comment.childrenComment = "";
                    comment.show = false;
                }
                else{
                    $scope.totalComments++;
                    angular.element('#main-comment').val('');
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
                // setTimeout(function(){  },100);
            }, function errorCallback(response){

            });
        };

        $scope.postComment = function(comment){
            var commentContents = angular.element('#main-comment').val();
            if(commentContents.trim() == "" && comment == null){
                growlService.growl("Input Comment", "warning");
                return true;
            }
            if(comment != null){
                if(comment.childrenComment.trim() == ""){
                    growlService.growl("Input Comment", "warning");
                    return true;
                }
            }
            if(!webStorage.has('user')){
                growlService.growl("Login First", "warning");
                return true;
            }
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/comment/set',
                data     : {
                    comment   : comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    videoId   : $scope.videoMuviId,
                    userId    : webStorage.get('user').user.user_id,
                    userMuvId : webStorage.get('user').user_info.id,
                    commentId : comment != null ? comment.id : null,
                }
            }).then(function successCallback(response){
                var commentBackUp  = $scope.commentData == null ? [] : $scope.commentData;
                commentBackUp.unshift({
                    comment_id: comment != null ? comment.id : null,
                    posted_at: new Date().toLocaleString(),
                    user: $scope.loggedData.user_info.display_name,
                    userComment: comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    userImage: $scope.profilePicture,
                    user_id: $scope.loggedData.user.user_id,
                    comment_count: "0",
                    id: response.data.comment_id
                });
                if(comment != null){
                    comment.childrenComment = "";
                    comment.show = false;
                }
                else{
                    $scope.totalComments++;
                    angular.element('#main-comment').val('');
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
                // setTimeout(function(){  },100);
            }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.updateComment = function(comment){
            if(comment.userComment == comment.childrenCommentUpdate){
                $timeout(function(){
                    comment.edit = !comment.edit;
                    comment.childrenCommentUpdate = "";
                },0);
                return true;
            }
            if(comment.childrenCommentUpdate == ""){
                $timeout(function(){
                    comment.edit = !comment.edit;
                    comment.childrenCommentUpdate = "";
                },0);
                growlService.growl("Input Comment", "warning");
                return true;
            }
            $http({
                method   : "PUT",
                url      : apiUrl+'/boysen/comment/update',
                data     : {
                    comment   : comment.childrenCommentUpdate,
                    videoId   : $scope.videoMuviId,
                    userId    : webStorage.get('user').user.user_id,
                    userMuvId : webStorage.get('user').user_info.id,
                    commentId : comment.id,
                }
            }).then(function successCallback(response){
                setTimeout(function(){
                    comment.edit = !comment.edit;
                    comment.userComment = comment.childrenCommentUpdate;
                },1);
            }, function errorCallback(response){
                setTimeout(function(){
                    comment.edit = !comment.edit;
                    comment.userComment = comment.childrenCommentUpdate;
                },10);
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.getComment = function(){
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/comment/get',
                params   : {
                    videoId   : $scope.videoMuviId,
                    commentId : commentId,
                    page      : $scope.commentPage,
                    row       : 5,
                    user_id   : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0
                }
            }).then(function successCallback(response){
                var commentBackUp  = angular.copy($scope.commentData);
                response.data.forEach(function(item){
                    commentBackUp.push(item);
                });
                if(commentId == null){
                    $scope.commentPage++;
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
                // $scope.totalComments = $scope.totalComments + response.data.length;
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.getComment = function(commentId){
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/comment/get',
                params   : {
                    videoId   : $scope.videoMuviId,
                    commentId : commentId,
                    page      : $scope.commentPage,
                    row       : 5,
                    user_id   : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0
                }
            }).then(function successCallback(response){
                var commentBackUp  = angular.copy($scope.commentData);
                response.data.forEach(function(item){
                    commentBackUp.push(item);
                });
                if(commentId == null){
                    $scope.commentPage++;
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
                // $scope.totalComments = $scope.totalComments + response.data.length;
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.likeUnlikeComment = function(action, comment){
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/like/comment',
                data     : {
                    action        : action,
                    user_id       : webStorage.get('user').user_info.id,
                    action_id     : comment.id,
                },
                ignoreLoadingBar : true,
            }).then(function successCallback(response){
                try{
                    if(comment.like_data.user_like.like_type != action){
                        comment.like_data.user_like.like_type   = action;
                        if(action == 'like'){
                            comment.like_data.total_like        = comment.like_data.total_like < 0 ? 0 : comment.like_data.total_like + 1;
                            comment.like_data.total_dislike     = comment.like_data.total_dislike < 0 ? 0 : comment.like_data.total_dislike == 0 ? 0 : comment.like_data.total_dislike - 1;
                        }
                        else{
                            comment.like_data.total_like        = comment.like_data.total_like < 0 ? 0 : comment.like_data.total_like == 0 ? 0 : comment.like_data.total_like - 1;
                            comment.like_data.total_dislike     = comment.like_data.total_dislike < 0 ? 0 : comment.like_data.total_dislike + 1;
                        }
                    }
                }
                catch(err){
                    comment.like_data                       = {};
                    comment.like_data.user_like             = {};
                    comment.like_data.user_like.like_type   = action;
                    comment.like_data.user_like.like_to     = "comment";
                    comment.like_data.user_like.like_to_id  = comment.id;
                    comment.like_data.user_like.user_id     = webStorage.get('user').user_info.id;
                    comment.like_data.total_like            = comment.like_data.total_like == undefined ? 0 : comment.like_data.total_like;
                    comment.like_data.total_dislike         = comment.like_data.total_dislike == undefined ? 0 : comment.like_data.total_dislike;
                    if(action == 'like'){
                        comment.like_data.total_like        = comment.like_data.total_like < 0 ? 0 : comment.like_data.total_like + 1;
                        comment.like_data.total_dislike     = comment.like_data.total_dislike <= 0 ? 0 : comment.like_data.total_dislike - 1;
                    }
                    else{
                        comment.like_data.total_like        = comment.like_data.total_like <= 0 ? 0 : comment.like_data.total_like - 1;
                        comment.like_data.total_dislike     = comment.like_data.total_dislike < 0 ? 0 : comment.like_data.total_dislike + 1;
                    }
                }
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.randomArray = function(array){
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }

            return array;
        };

        $scope.videoSuggestionScroll = function(where){
            var element = angular.element('#video-suggestions');
            var clientWidth = element.get(0).clientWidth,
                scrollWidth = element.get(0).scrollWidth,
                scrollLeft  = element.scrollLeft();
            if(where == 'next'){
                element.animate({scrollLeft: (scrollLeft+clientWidth)}, 'slow');
            }
            else{
                element.animate({scrollLeft: (scrollLeft-clientWidth)}, 'slow');
            }
        };

        $scope.readMore = function(isDescFull){
            $scope.isDescFull = !isDescFull ? true : false;

            if ($scope.isDescFull)
            {
                $("#series-desc").removeClass("read-more-desc");
                $("#read-more").text("Read Less");
            }
            else{
                $("#series-desc").addClass("read-more-desc");
                $("#read-more").text("Read More");
            }

        };

    }])
    .controller('watchNowSeriesCtrl', ['$scope', '$http', 'webStorage', '$stateParams', 'createModal', '$sce','growlService','prompt', '$timeout', '$window','genericServices','$rootScope',function($scope, $http, webStorage, $stateParams, createModal, $sce,growlService,prompt, $timeout, $window,genericServices,$rootScope){

        $scope.videoSpecs               = $stateParams;
        $scope.loggedData               = $scope.isLoggedIn ? webStorage.get('user') : null;
        $scope.readmoreValue            = screen.width < 480 ? 300 : 500;
        $scope.isLoggedIn               = webStorage.has('user');
        $scope.firstLetter              = webStorage.has('user') ? $scope.loggedData.user_info.display_name.charAt(0).toUpperCase() : null;
        $scope.profilePicture           = webStorage.get('user') ? ($scope.loggedData.user.profile_image == "" ? "/img/User Icons/"+  $scope.firstLetter  +".png" : $scope.loggedData.user.profile_image) : "/img/User Icons/"+  $scope.firstLetter  +".png" ;
        $scope.videoMuviId              = "";
        $scope.commentPage              = 2;
        $scope.commentData              = [];
        $scope.totalComments            = 0;
        $scope.imgBanner                = "";
        $scope.videoDesc                = "";
        $scope.episodeTitle             = "";
        $scope.firstLoad                = true;
        $scope.seriesDetails            = [];
        $scope.seriesEpisode            = [];
        $scope.isDescFull               = false;
        $scope.videoSuggestions         = [];
        $scope.externalContent          = [];
        $scope.resolution               = {};
        $scope.poster                   = "";
        $scope.adsList                  = [];
        $scope.isAdsPlayed              = false;
        $scope.isAdsPlaying             = false;
        $scope.isMidrollAdsPlayed       = false;
        $scope.isMidrollAdsPlaying      = false;
        $scope.isResumePlayed           = false;
        $scope.videoDuration            = 600;
        $scope.adsTimer                 = 1;
        $scope.seasonNumberName         = "Season 1";
        $scope.isRequireLogin           = false;
        $scope.isMidrollAdsPlay         = false;
        var endedCtr = false;
        var loadedCtr = false;
        $scope.episodeData              = {};
        $scope.placeHolderImg = {
            "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            "content_types_id": "no"
            };
        $(window).scrollTop(0);

        $scope.initVideoPlayer = function(){
            videojs(document.querySelector('.main-videojs'),{
                fluid: true,
                preload: 'auto',
                aspectRatio: "16:9",
                html5: {
                    hls: {
                      overrideNative: true
                    }
                },
                autoplay: true
            },function(){
                $('.vjs-loading-spinner').html('<center><img src="/img/boysen_2.gif" alt="Loading..."></center>');
                var adText = "Please Wait...",
                            html = '<div class="thisIsAnAd" style="position:  absolute; bottom: 30px; width: 100%;background:transparent;"> ' +
                                        '<div class="adsTextContainer" style="float:  right; text-align:  center; padding: 10px 15px; border: 1px solid #fff; background: #756e6e;"> ' +
                                            '<span style="font-size:  14px;" id="adText"> '+ adText +'</span> ' +
                                        '</div> ' +
                                    '</div>';

                $('.vjs-big-play-centered.main-videojs').append(html);
                $('.thisIsAnAd').hide();
                this.on('play',function(e){
                    if($scope.isRequireLogin){
                        if(!$scope.isLoggedIn){
                            $rootScope.$emit('requireLogin');
                            this.pause();
                        }
                    }
                    // if(!$scope.isLoggedIn && ($scope.videoSpecs.category == 'binge' || $scope.videoSpecs.category == 'box-office-presents' || $scope.videoSpecs.category == 'big-time-bouts' || $scope.videoSpecs.category == 'beyond-borders' || $scope.videoSpecs.category == 'beam' || $scope.videoSpecs.category == 'brave-and-bold')){
                    //     prompt.warning('Please Login First');
                    //     this.pause();
                    // }
                });
                this.controlBar.addChild('QualitySelector');
            });
        };

        $scope.getSeriesEpisodes  = function (number, seasonNumber){
            $window.sendGAPage("/" + $stateParams.title, 'MovieTitle');

            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/episode-details/get',
                params   : {
                    permalink       : $stateParams.title,
                    seasonNumber    : seasonNumber,
                    user_id         : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0,
                }
            }).then(function successCallback(response){
                $scope.seriesDetails[number]['episodes'] = response.data;
                episodesList      = [];
                for(var j = 0; j < parseInt(response.data.length); j++){
                    episodesList.unshift(response.data[j]);
                }
                $scope.seriesDetails[number]['episodes'] = episodesList;
                if($scope.seriesDetails[number]['episodes'].length != 0 ){
                    $scope.arrangeSeriesEpisodes(number);

                }
            }, function errorCallback(response){

            });
        };

        $scope.arrangeSeriesEpisodes = function (season){
            angular.element('#series-buttons').addClass('season-button-placing');
            console.log($scope.seriesDetails[season]);
            $scope.seasonNumberName = $scope.seriesDetails[season].name;
            if($scope.seriesDetails[season]['episodes'].length == 0){
                $scope.getSeriesEpisodes(season, $scope.seriesDetails[season]["seasonNumber"]);
            }
            else{
                var rawEpisodes     = $scope.seriesDetails[season]['episodes'];
                if(rawEpisodes.length % 2 === 0){
                    var middlePoint     = Math.floor(rawEpisodes.length / 2);
                    console.log(middlePoint + 'even');
                }
                else{
                    var middlePoint     = Math.floor(rawEpisodes.length / 2) + 1;
                    console.log(middlePoint + 'odd');
                }
                var polishedArray   = [];
                for(var i = 0; i < rawEpisodes.length; i++){
                    if( i+1 <= middlePoint) {
                        polishedArray.push(rawEpisodes[i]);
                    }
                    polishedArray.push(rawEpisodes[i+middlePoint]);
                }
                $scope.seriesEpisode = screen.width == 320 ? rawEpisodes : polishedArray;
                $scope.setEpisodeDetails();
            }
        };

        $scope.setEpisodeDetails = function(){
            if($scope.isRequireLogin){
                if(!$scope.isLoggedIn){
                    prompt.warning('Please Login First');
                    // this.pause();
                }
            }
            var episode = episodeNumber == null ? $scope.seriesEpisode[0] : episodeNumber;

            console.log(episode, 'TEST');

            $scope.episodeData = episodeNumber == null ? $scope.seriesEpisode[0] : episodeNumber;
            $scope.isAdsPlayed   = false;
            $scope.isAdsPlaying  = false;
            $scope.isMidrollAdsPlayed       = false;
            $scope.isMidrollAdsPlaying      = false;
            $scope.isResumePlayed           = false;
            $scope.videoEmbedUrl = $sce.trustAsHtml("<iframe width = \"100%\" height = \"100%\" style=\"background-color:#000\" id = \"myIframe_282715\" src = \""+episode.embeddedUrl+"\" frameborder = \"0\" allowfullscreen > </iframe><script>var viewPortTag=document.createElement('meta');viewPortTag.name='viewport';viewPortTag.content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;';window.parent.document.getElementsByTagName('head')[0].appendChild(viewPortTag);</script>");
            $scope.imgBanner     = episode.poster_url;
            $scope.videoDesc     = episode.episode_story;
            $scope.videoMuviId   = episode.id;
            $scope.episodeTitle  = episode.episode_title;
            $scope.adsList       = $scope.randomArray($scope.adsList);
            $scope.epNumber  = episode.episode_number; // Ehddver Cabiten
            var newResolutionList = [];
            angular.forEach(episode.resolution, function(value,key){

                // if(newResolutionList.length < 3){
                //     var obj = {};
                //     obj.src     = value.url;
                //     obj.label   = String(value.resolution);
                //     obj.type    = 'video/mp4';
                //     if(key == 1){
                //         obj.selected = true;
                //     }
                //
                //     newResolutionList.unshift(obj);
                // }
                if(key == 0 || key == 3){
                    var obj = {};

                    value.resolution = (key == 2) ? 360 : value.resolution; // Ehddver Cabiten

                    obj.src     = value.url;
                    obj.label   = String(value.resolution);
                    obj.type    = 'video/mp4';
                    if(key == 1){
                        obj.selected = true;
                    }

                    newResolutionList.unshift(obj);
                }
            });
            $scope.resolutions = newResolutionList;
            $scope.poster      = episode.poster_url;

            // ADD LOGS
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/episode-view-logs/set',
                data   : {
                    permalink           : $stateParams.title,
                    content_name        : $scope.videoTitle,
                    userMuvId           : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0,
                    is_series           : "1",
                    episode_number      : $scope.episodeData.episode_number,
                    series_number       : $scope.episodeData.series_number,
                    videoId             : $scope.videoMuviId,
                    episode_name        : $scope.episodeTitle.replace(/  +/g, ' ')
                }
            });

            if(episode.resumePlay != null){
                $scope.isResumePlayed           = true;
                $scope.adsTimer = parseInt(episode.resumePlay.duration) + 1;
                $scope.reInitVideoPlayer();
                $timeout(function(){
                    videojs(document.querySelector('.main-videojs')).currentTime(parseInt(episode.resumePlay.duration));
                    videojs(document.querySelector('.main-videojs')).pause();
                },10);

            }
            else{
                $scope.isResumePlayed           = false;
                $scope.adsTimer = 1;
                $scope.reInitVideoPlayer();
            }
            angular.element('.videoPlayer').removeClass('tile__img3');
            angular.element('.videoPlayer div').removeClass('bring-down');
            if($scope.firstLoad){
                $scope.firstLoad = false;
            }else{
                $scope.commentPage   = 1;
                var commentBackUp    = [];
                $scope.totalComments = 0;
                $scope.commentData   = [];
                $http({
                    method   : "GET",
                    url      : apiUrl+'/boysen/comment/get',
                    params   : {
                        videoId   : $scope.videoMuviId,
                        page      : $scope.commentPage,
                        row       : 5,
                        total     : "get"
                    }
                }).then(function successCallback(response){
                    response.data.comments.forEach(function(item){
                        commentBackUp.push(item);
                    });
                    $scope.commentPage++;
                    $scope.commentData = commentBackUp;
                    $scope.totalComments = response.data.total;
                }, function errorCallback(response){

                });
            }
            $(window).scrollTop(0);
        };

        $scope.setEpisodeDetails = function(episodeNumber){
            if($scope.isRequireLogin){
                if(!$scope.isLoggedIn){
                    prompt.warning('Please Login First');
                    // this.pause();
                }
            }
            var episode = episodeNumber == null ? $scope.seriesEpisode[0] : episodeNumber;

            console.log(episode, 'TEST_2');

            $scope.episodeData = episodeNumber == null ? $scope.seriesEpisode[0] : episodeNumber;
            $scope.isAdsPlayed   = false;
            $scope.isAdsPlaying  = false;
            $scope.isMidrollAdsPlayed       = false;
            $scope.isMidrollAdsPlaying      = false;
            $scope.isResumePlayed           = false;
            $scope.videoEmbedUrl = $sce.trustAsHtml("<iframe width = \"100%\" height = \"100%\" style=\"background-color:#000\" id = \"myIframe_282715\" src = \""+episode.embeddedUrl+"\" frameborder = \"0\" allowfullscreen > </iframe><script>var viewPortTag=document.createElement('meta');viewPortTag.name='viewport';viewPortTag.content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;';window.parent.document.getElementsByTagName('head')[0].appendChild(viewPortTag);</script>");
            $scope.imgBanner     = episode.poster_url;
            $scope.videoDesc     = episode.episode_story;
            $scope.videoMuviId   = episode.id;
            $scope.episodeTitle  = episode.episode_title.replace('<br/>','');
            $scope.adsList       = $scope.randomArray($scope.adsList);
            $scope.epNumber       = episode.episode_number; // Ehddver Cabiten
            var newResolutionList = [];
            angular.forEach(episode.resolution, function(value,key){

                // if(newResolutionList.length < 3){
                //     var obj = {};
                //     obj.src     = value.url;
                //     obj.label   = String(value.resolution);
                //     obj.type    = 'video/mp4';
                //     if(key == 1){
                //         obj.selected = true;
                //     }
                //
                //     newResolutionList.unshift(obj);
                // }
                if(key == 0 || key == 2){
                    var obj = {};

                    value.resolution = (key == 2) ? 360 : value.resolution; // Ehddver Cabiten

                    obj.src     = value.url;
                    obj.label   = String(value.resolution);
                    obj.type    = 'video/mp4';
                    if(key == 1){
                        obj.selected = true;
                    }

                    newResolutionList.unshift(obj);
                }
            });
            $scope.resolutions = newResolutionList;
            $scope.poster      = episode.poster_url;
            
            // ADD LOGS
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/episode-view-logs/set',
                data   : {
                    permalink           : $stateParams.title,
                    content_name        : $scope.videoTitle,
                    userMuvId           : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0,
                    is_series           : "1",
                    episode_number      : $scope.episodeData.episode_number,
                    series_number       : $scope.episodeData.series_number,
                    videoId             : $scope.videoMuviId,
                    episode_name        : $scope.episodeTitle.replace(/  +/g, ' ')
                }
            });

            if(episode.resumePlay != null){
                $scope.isResumePlayed           = true;
                $scope.adsTimer = parseInt(episode.resumePlay.duration) + 1;
                $scope.reInitVideoPlayer();
                $timeout(function(){
                    videojs(document.querySelector('.main-videojs')).currentTime(parseInt(episode.resumePlay.duration));
                    videojs(document.querySelector('.main-videojs')).pause();
                },10);
            }
            else{
                $scope.isResumePlayed           = false;
                $scope.adsTimer = 1;
                $scope.reInitVideoPlayer();
            }
            angular.element('.videoPlayer').removeClass('tile__img3');
            angular.element('.videoPlayer div').removeClass('bring-down');
            if($scope.firstLoad){
                $scope.firstLoad = false;
            }else{
                $scope.commentPage   = 1;
                var commentBackUp    = [];
                $scope.totalComments = 0;
                $scope.commentData   = [];
                $http({
                    method   : "GET",
                    url      : apiUrl+'/boysen/comment/get',
                    params   : {
                        videoId   : $scope.videoMuviId,
                        page      : $scope.commentPage,
                        row       : 5,
                        total     : "get"
                    },
                    ignoreLoadingBar : true,
                }).then(function successCallback(response){
                    response.data.comments.forEach(function(item){
                        commentBackUp.push(item);
                    });
                    $scope.commentPage++;
                    $scope.commentData = commentBackUp;
                    $scope.totalComments = response.data.total;
                }, function errorCallback(response){

                });
            }
            $(window).scrollTop(0);
        };

        $scope.reInitVideoPlayer = function(){
            $('.thisIsAnAd').hide();
            var player = videojs(document.querySelector('.main-videojs'));
            player.pause();
            player.src($scope.resolutions);
            player.currentTime(0);
            timeoutID2 = setInterval(function(){
                if (player.paused()){
                    $('.videojs-logo').addClass('showViaOpacity');
                }else{
                    $('.videojs-logo').removeClass('showViaOpacity');
                }
                if($scope.isAdsPlaying || $scope.isMidrollAdsPlaying){
                    $('.vjs-control-bar').first().addClass('visibility-none');
                    $('.thisIsAnAd div span').text('(Ad) ' + genericServices.fancyTimeString(player.remainingTimeDisplay()));
                    $('.thisIsAnAd').show();
                }
                else{
                    $('.vjs-control-bar').first().removeClass('visibility-none');
                    $('.thisIsAnAd').hide();    
                }
            },10);
            player.on('playing', function(event){
                timeoutID = setInterval(function() {
                    if((!$scope.isAdsPlaying && $scope.isLoggedIn) && (!$scope.isMidrollAdsPlaying && $scope.isLoggedIn)){
                        $http({
                            method   : "POST",
                            url      : apiUrl+'/boysen/videoDuration/set',
                            data     : {
                                duration  : player.currentTime(),
                                videoId   : $scope.videoMuviId,
                                userMuvId : webStorage.get('user').user_info.id,
                                permalink          : $scope.videoSpecs.title,
                                category_permalink : $scope.videoSpecs.category,
                                is_series          : "1",
                                episode_number     : $scope.episodeData.episode_number.toString(),
                                series_number      : $scope.episodeData.series_number.toString(),
                                episode_name        : $scope.episodeTitle,
                                video_length     : Math.floor(player.duration())
                            },
                            ignoreLoadingBar : true,
                        }).then(function successCallback(response){
                            $scope.episodeData.resumePlay = response.data.dev;
                        },function errorCallback(response){
                        });
                    }
                }, 5000);
            });
            player.on('timeupdate', function() {
                var currentTime = player.currentTime();
                if(!$scope.isAdsPlayed && !$scope.isAdsPlaying){
                    if ((currentTime >= $scope.adsTimer) && ($scope.isMidrollAdsPlay)){
                        $scope.videoDuration = currentTime;
                        $('.thisIsAnAd div span').text('Please Wait...');
                        $('.thisIsAnAd').show();
                        $scope.adsList       = $scope.randomArray($scope.adsList);
                        player.src($scope.adsList[0].video_url);
                        endedCtr = false;
                        loadedCtr = false;
                        player.play();
                        // $('.thisIsAnAd div span').text('Video will resume after the ad');
                        $('.thisIsAnAd div span').text('(Ad) ' + genericServices.fancyTimeString(player.remainingTimeDisplay()));
                        $scope.isAdsPlaying = true;
                        $('.vjs-marker').addClass('display-none');
                    }
                }
                if(!$scope.isMidrollAdsPlayed && !$scope.isMidrollAdsPlaying){
                    if(!$scope.isResumePlayed){
                        if ((currentTime >= 600) && ($scope.isMidrollAdsPlay)){
                            $scope.videoDuration = currentTime;
                            $('.thisIsAnAd div span').text('Please Wait...');
                            $('.thisIsAnAd').show();
                            $scope.adsList       = $scope.randomArray($scope.adsList);
                            player.src($scope.adsList[1].video_url);
                            endedCtr = false;
                            loadedCtr = false;
                            player.play();
                            // $('.thisIsAnAd div span').text('Video will resume after the ad');
                            $('.thisIsAnAd div span').text('(Ad) ' + genericServices.fancyTimeString(player.remainingTimeDisplay()));
                            $scope.isMidrollAdsPlaying = true;
                            $('.vjs-marker').addClass('display-none');
                        }
                    }
                }

                player.on("seeking", function(event) {
                    if($scope.isAdsPlaying){
                        if (currentTime < player.currentTime()) {
                            player.currentTime(currentTime);
                        }
                    }
                });

                player.on("seeked", function(event) {
                    if($scope.isAdsPlaying){
                        if (currentTime < player.currentTime()) {
                            player.currentTime(currentTime);
                        }
                    }
                });

                setInterval(function() {
                    if (!player.paused()) {
                    currentTime = player.currentTime();
                    }
                }, 1000);
            });
            player.on('ended', function() {
                if(!endedCtr){
                    console.log('ended');
                    endedCtr = true;
                    loadedCtr= false;
                    $('.thisIsAnAd div span').text('Please Wait...');
                    // if($scope.isAdsPlayed && $scope.isMidrollAdsPlayed){
                    //     $scope.videoDuration = 0;
                    // }
                    if($scope.isAdsPlayed){
                        $scope.isMidrollAdsPlayed = true;
                        $scope.isMidrollAdsPlaying = false;
                    }
                    $scope.isAdsPlayed = true;
                    $scope.isAdsPlaying = false;
                    player.src($scope.resolutions);
                    console.log($scope.videoDuration);
                }
            });
            player.on('loadedmetadata', function(){
                if(!loadedCtr){
                    console.log('loaded');
                    loadedCtr = true;
                    if($scope.isMidrollAdsPlayed){
                        $scope.isMidrollAdsPlaying = false;
                        $('.thisIsAnAd').hide();
                        player.play();
                        player.currentTime($scope.videoDuration);
                        if(!$scope.isMidrollAdsPlaying){
                            if($scope.videoDuration != 0){
                                player.play();
                                if(!$scope.isMidrollAdsPlay){
                                    player.pause();
                                }
                            }
                            else{
                                player.pause();
                            }
                        }
                    }
                    else
                    {
                        if($scope.isAdsPlayed){
                            $scope.isAdsPlaying = false;
                            player.currentTime($scope.videoDuration);
                            $('.thisIsAnAd').hide();
                            if(!$scope.isAdsPlaying){
                                if($scope.videoDuration != 0){
                                    player.play();
                                    if(!$scope.isMidrollAdsPlay){
                                        player.pause();
                                    }
                                }
                                else{
                                    player.pause();
                                }
                            }
                        }
                    }
                }
            });
        }

        $scope.getContentDetails = function(){
            $scope.initVideoPlayer();
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/content-details/get',
                params   : {
                    permalink : $stateParams.title,
                    user_id   : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0
                }
            }).then(function successCallback(response){
                $scope.imgBanner     = response.data.movie.poster;
                $scope.videoDesc     = response.data.movie.story;
                $scope.videoTitle    = response.data.movie.name;
                $scope.videoMuviId   = response.data.movie.id;
                $scope.commentData   = response.data.comments;
                $scope.totalComments = response.data.totalComments;
                $scope.videoSuggestions = $scope.randomArray(response.data.recommended);
                $scope.adsList       = $scope.randomArray(response.data.ads);
                $scope.isRequireLogin   = response.data.require_login;
                $scope.isMidrollAdsPlay = response.data.mid_roll_ads;
                angular.element('.video-content-image img').removeClass('tile__img');
                angular.element('.video-content-desc h4').removeClass('tile__img2');
                angular.element('.video-content-desc #series-desc').removeClass('tile__img');
                try{
                    for(var i = 0; i < parseInt(response.data.seasons.length); i++){
                        var seasonDetails           = {};
                        seasonDetails.seasonNumber  = i+1;
                        seasonDetails.name          = "Season " + (i+1);
                        if($scope.videoSpecs.category == 'big-time-bouts'){
                            seasonDetails.name          = "Episodes";
                        }
                        seasonDetails.muviId        = response.data.movie.id;
                        seasonDetails.episodes      = [];
                        for(var j = 0; j < parseInt(response.data.episodes.episode.length); j++){
                            var episode = response.data.episodes.episode[j];
                            if (parseInt(episode.series_number) == (i+1)){
                                if($scope.videoSpecs.category == 'big-time-bouts')
                                {
                                    var episodeTitle = episode.episode_title.replace(/vs.|Vs./g,'vs. <br/>');
                                    episode.episode_title = episodeTitle;
                                }
                                seasonDetails.episodes.unshift(episode);
                            }
                        }
                        $scope.seriesDetails.push(seasonDetails);
                    }
                    $scope.arrangeSeriesEpisodes(0);
                }
                catch(err){
                    angular.element('#series-buttons').removeClass('season-button-placing');
                }
            }, function errorCallback(response){
                if(response.data.error.errorDev.code == 414)
                {
                    swal("Sorry", "Content Not Available for this Country", "error");
                    // $state.go("main.geoBlocking",{title:$scope.videoSpecs.title,country:response.data.error.errorDev.countryCode});
                }
            });
        };

        $scope.randomArray = function(array){
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;

              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }

            return array;
        };

        $scope.postComment = function(){
            var commentContents = angular.element('#main-comment').val();
            if(commentContents.trim() == "" && comment == null){
                // growlService.growl("Input Comment", "warning");
                swal("Sorry", "Please input comment", "warning");
                return true;
            }
            if(comment != null){
                if(comment.childrenComment.trim() == ""){
                    // growlService.growl("Input Comment", "warning");
                    swal("Sorry", "Please input comment", "warning");
                    return true;
                }
            }
            if(!webStorage.has('user')){
                growlService.growl("Login First", "warning");
                return true;
            }
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/comment/set',
                data     : {
                    comment   : comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    videoId   : $scope.videoMuviId,
                    userId    : webStorage.get('user').user.user_id,
                    userMuvId : webStorage.get('user').user_info.id,
                    commentId : comment != null ? comment.id : null,
                }
            }).then(function successCallback(response){
                var commentBackUp  = $scope.commentData == null ? [] : $scope.commentData;
                commentBackUp.unshift({
                    comment_id: comment != null ? comment.id : null,
                    posted_at: new Date().toLocaleString(),
                    user: $scope.loggedData.user_info.display_name,
                    userComment: comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    userImage: $scope.profilePicture,
                    user_id: $scope.loggedData.user.user_id,
                    comment_count: "0",
                    id: response.data.comment_id
                });
                if(comment != null){
                    comment.childrenComment = "";
                    comment.show = false;
                }
                else{
                    $scope.totalComments++;
                    angular.element('#main-comment').val('');
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.postComment = function(comment){
            var commentContents = angular.element('#main-comment').val();
            if(commentContents.trim() == "" && comment == null){
                // growlService.growl("Input Comment", "warning");
                swal("Sorry", "Please input comment", "warning");
                return true;
            }
            if(comment != null){
                if(comment.childrenComment.trim() == ""){
                    // growlService.growl("Input Comment", "warning");
                    swal("Sorry", "Please input comment", "warning");
                    return true;
                }
            }
            if(!webStorage.has('user')){
                growlService.growl("Login First", "warning");
                return true;
            }
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/comment/set',
                data     : {
                    comment   : comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    videoId   : $scope.videoMuviId,
                    userId    : webStorage.get('user').user.user_id,
                    userMuvId : webStorage.get('user').user_info.id,
                    commentId : comment != null ? comment.id : null,
                }
            }).then(function successCallback(response){
                var commentBackUp  = $scope.commentData == null ? [] : $scope.commentData;
                commentBackUp.unshift({
                    comment_id: comment != null ? comment.id : null,
                    posted_at: new Date().toLocaleString(),
                    user: $scope.loggedData.user_info.display_name,
                    userComment: comment == null ? angular.element('#main-comment').val() : comment.childrenComment,
                    userImage: $scope.profilePicture,
                    user_id: $scope.loggedData.user.user_id,
                    comment_count: "0",
                    id: response.data.comment_id
                });
                if(comment != null){
                    comment.childrenComment = "";
                    comment.show = false;
                }
                else{
                    $scope.totalComments++;
                    angular.element('#main-comment').val('');
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.updateComment = function(comment){
            if(comment.userComment == comment.childrenCommentUpdate){
                $timeout(function(){
                    comment.edit = !comment.edit;
                    comment.childrenCommentUpdate = "";
                },0);
                return true;
            }
            if(comment.childrenCommentUpdate == ""){
                $timeout(function(){
                    comment.edit = !comment.edit;
                    comment.childrenCommentUpdate = "";
                },0);
                // growlService.growl("Input Comment", "warning");
                swal("Sorry", "Please input comment", "warning");
                return true;
            }
            $http({
                method   : "PUT",
                url      : apiUrl+'/boysen/comment/update',
                data     : {
                    comment   : comment.childrenCommentUpdate,
                    videoId   : $scope.videoMuviId,
                    userId    : webStorage.get('user').user.user_id,
                    userMuvId : webStorage.get('user').user_info.id,
                    commentId : comment.id,
                }
            }).then(function successCallback(response){
                setTimeout(function(){
                    comment.edit = !comment.edit;
                    comment.userComment = comment.childrenCommentUpdate;
                },10);
            }, function errorCallback(response){
                setTimeout(function(){
                    comment.edit = !comment.edit;
                    comment.userComment = comment.childrenCommentUpdate;
                },1);
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.getComment = function(){
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/comment/get',
                params   : {
                    videoId   : $scope.videoMuviId,
                    commentId : commentId,
                    page      : $scope.commentPage,
                    row       : 5,
                    user_id   : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0
                }
            }).then(function successCallback(response){
                var commentBackUp  = $scope.commentData;
                response.data.forEach(function(item){
                    commentBackUp.push(item);
                });
                if(commentId == null){
                    $scope.commentPage++;
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
                // $scope.totalComments = $scope.totalComments + response.data.length;
            }, function errorCallback(response){

            });
        };

        $scope.getComment = function(commentId){
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/comment/get',
                params   : {
                    videoId   : $scope.videoMuviId,
                    commentId : commentId,
                    page      : $scope.commentPage,
                    row       : 5,
                    user_id   : $scope.isLoggedIn ? $scope.loggedData.user_info.id : 0
                }
            }).then(function successCallback(response){
                var commentBackUp  = $scope.commentData;
                response.data.forEach(function(item){
                    commentBackUp.push(item);
                });
                if(commentId == null){
                    $scope.commentPage++;
                }
                $timeout(function(){
                    $scope.commentData = [];
                },0).then(function(){
                    $timeout(function(){
                        $scope.commentData = commentBackUp;
                    },0);
                });
                // $scope.totalComments = $scope.totalComments + response.data.length;
            }, function errorCallback(response){

            });
        };

        $scope.likeUnlikeComment = function(action, comment){
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/like/comment',
                data     : {
                    action        : action,
                    user_id       : webStorage.get('user').user_info.id,
                    action_id     : comment.id,
                },
                ignoreLoadingBar : true,
            }).then(function successCallback(response){
                try{
                    if(comment.like_data.user_like.like_type != action){
                        comment.like_data.user_like.like_type   = action;
                        if(action == 'like'){
                            comment.like_data.total_like        = comment.like_data.total_like < 0 ? 0 : comment.like_data.total_like + 1;
                            comment.like_data.total_dislike     = comment.like_data.total_dislike < 0 ? 0 : comment.like_data.total_dislike == 0 ? 0 : comment.like_data.total_dislike - 1;
                        }
                        else{
                            comment.like_data.total_like        = comment.like_data.total_like < 0 ? 0 : comment.like_data.total_like == 0 ? 0 : comment.like_data.total_like - 1;
                            comment.like_data.total_dislike     = comment.like_data.total_dislike < 0 ? 0 : comment.like_data.total_dislike + 1;
                        }
                    }
                }
                catch(err){
                    comment.like_data                       = {};
                    comment.like_data.user_like             = {};
                    comment.like_data.user_like.like_type   = action;
                    comment.like_data.user_like.like_to     = "comment";
                    comment.like_data.user_like.like_to_id  = comment.id;
                    comment.like_data.user_like.user_id     = webStorage.get('user').user_info.id;
                    comment.like_data.total_like            = comment.like_data.total_like == undefined ? 0 : comment.like_data.total_like;
                    comment.like_data.total_dislike         = comment.like_data.total_dislike == undefined ? 0 : comment.like_data.total_dislike;
                    if(action == 'like'){
                        comment.like_data.total_like        = comment.like_data.total_like < 0 ? 0 : comment.like_data.total_like + 1;
                        comment.like_data.total_dislike     = comment.like_data.total_dislike <= 0 ? 0 : comment.like_data.total_dislike - 1;
                    }
                    else{
                        comment.like_data.total_like        = comment.like_data.total_like <= 0 ? 0 : comment.like_data.total_like - 1;
                        comment.like_data.total_dislike     = comment.like_data.total_dislike < 0 ? 0 : comment.like_data.total_dislike + 1;
                    }
                }
            }, function errorCallback(response){

            });
        };

        $scope.readMore = function(isDescFull){
            $scope.isDescFull = !isDescFull ? true : false;

            if ($scope.isDescFull)
            {
                $("#series-desc").removeClass("read-more-desc");
                $("#read-more").text("Read Less");
            }
            else{
                $("#series-desc").addClass("read-more-desc");
                $("#read-more").text("Read More");
            }

        }
        $scope.videoSuggestionScroll = function(where){
            var element = angular.element('#video-suggestions');
            var clientWidth = element.get(0).clientWidth,
                scrollWidth = element.get(0).scrollWidth,
                scrollLeft  = element.scrollLeft();
            if(where == 'next'){
                element.animate({scrollLeft: (scrollLeft+clientWidth)}, 'slow');
            }
            else{
                element.animate({scrollLeft: (scrollLeft-clientWidth)}, 'slow');
            }
        }

    

    }]);
