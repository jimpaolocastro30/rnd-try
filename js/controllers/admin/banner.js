boysen
    .controller('bannerCtrl', ['$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', 'inputChecker', 'prompt', 'growlService', '$sce', 'webStorage', function ($http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, inputChecker, prompt, growlService, $sce, webStorage){
    
    $scope.muviBannerList = [];
    $scope.bannerList = [];
    // $scope.getMuviData = function(){
    //     $http({
    //         method   : "GET",
    //         url      : apiUrl+'/boysen/banner-section-list/get',
    //         // params   : {
    //         //     authToken : apiToken,
    //         // }
    //     }).then(function successCallback(response){
    //         $scope.muviBannerList = response.data.banners;
    //     }, function errorCallback(response){

    //     });
    // };
    $scope.myImage = '';
	$scope.myCroppedImage = ''; // in this variable you will have dataUrl of cropped area.
    $scope.resultImage = '';
    $scope.resultImageView = '';
    $scope.id_crypt = '';
    $scope.banner_id = 0;
    $scope.image_url = '';

        $scope.adminRoleAccess_View = false;
        $scope.adminRoleAccess_Create = false;
        $scope.adminRoleAccess_Update = false;
        $scope.adminRoleAccess_delete = false;

        $scope.adminUsers = webStorage.get('AdminUser');
        $scope.adminUsersId = $scope.adminUsers.role.admin_role_access;//$scope.adminUsers["msg"]["user_data"]["id"];

        $scope.adminRoleAccess_View = $scope.adminUsersId.banner.view;
        $scope.adminRoleAccess_Create = $scope.adminUsersId.banner.create;
        $scope.adminRoleAccess_Update = $scope.adminUsersId.banner.update;
        $scope.adminRoleAccess_delete = $scope.adminUsersId.banner.delete;

        $scope.show_result_image = false;


        // $scope.myCroppedImage = '';
        // $scope.myImage = '';
       $scope.editMode = false;
       
        $scope.rectangleWidth = 100;
        $scope.rectangleHeight = 100;

        $scope.cropper = {
            cropWidth: $scope.rectangleWidth,
            cropHeight: $scope.rectangleHeight
        };

     

        var handleFileSelect = function (evt) {
            $scope.show_result_image = true;
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.myImage = evt.target.result; 
                    // var canvas = document.getElementsByTagName("canvas")[0];
                    // canvas.height = 100;
                    // canvas.width = 1000;
                    // // canvas.width = window.innerWidth;
                    // // canvas.height = window.innerHeight;
                    // console.log("sample:", canvas.height);
                });
            };
            reader.readAsDataURL(file);
          
        };

        // $scope.resizeCanvas = function () {
        //     console.log("sample:",1);
        //     // var canvas = document.getElementsByTagName("canvas")[0];
        //     // canvas.height = 600;
        //     // canvas.width = 1000;
        //     // console.log("sample:", canvas.height);
        // }

        var handleFileSave = function (evt) {
            $scope.base64 = $scope.resultImage;
            swal("Done!", "Successfully Cropped!", "success");
            //   var canvas = document.getElementsByTagName("canvas")[0];
            //         canvas.height = 600;
            //         canvas.width = 1000;
            //         canvas.width = window.innerWidth;
            //         // canvas.height = window.innerHeight;
            //         console.log("sample:", canvas.height);
           
        }
        

        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
        angular.element(document.querySelector('#fileSave')).on('click', handleFileSave);

        $scope.getBanner = function () {
           
            $scope.tableBasic = new ngTableParams({
                page: 1,            // show first page
                count: 10           // count per page
            }, {
                total: 0, // length of data
                getData: function ($defer, params) {
                    var page = params.page();
                    var count = params.count();
                    
                    $http({
                        method: "GET",
                        url: apiUrl + '/boysen/bannermanagement/get',
                        params: {
                            page: page,
                            row: count,
                        }
                    }).then(function successCallback(response) {
                        $scope.getBannerMUVI();
                        $scope.bannerList = response.data.list == null ? [] : response.data.list;
                       
                        $scope.tableBasic.total(response.data.total);
                        data = $filter('orderBy')($scope.bannerList, params.orderBy());
                        $defer.resolve(data);
                        // $scope.getSpecificRole();
                    }, function errorCallback(response) {
                        
                        swal("Sorry", response.data.error.errorDev.dev, "error");
                    });

                 }
                
             });
        };

        $scope.getBannerMUVI = function () {
            // console.log("getBannerMUVI");

            // $scope.tableBasic = new ngTableParams({
            //     page: 1,
            //     count: 10
            // }, {
            //     total: 0, // length of data
            //     getData: function ($defer, params) { 
            //         var page = params.page();
            //         var count = params.count();
            // $scope.tableBasic = new ngTableParams({
            //     page: 1,            // show first page
            //     count: 10           // count per page
            // }, {
            //     total : 0,
            //     getData: function ($defer, params) {
            //             $http({
            //                 method: "GET",
            //                 url: apiUrl + '/boysen/banner-section-list/get', //bannerSectionList
            //                 params: {
            //                     page: 1,
            //                     row: 10,
            //                 }
            //             }).then(function successCallback(response) {
            //                 $scope.banners = response.data.banners;
                           

            //                 $scope.tableBasic.total(response.data);
            //                 data = $filter('orderBy')($scope.banners, params.orderBy());
            //                 $defer.resolve(data);

            //             }, function errorCallback(response) {
            //                 swal("Sorry", response.data.error.errorDev.dev, "error");
            //             });
            //     }
            // });
      
        };

        $scope.getMuviDataAndSave = function(){
            $http({
                method: "GET",
                url: apiUrl + '/boysen/bannermanagement/get-muvi-banners',
            }).then(function successCallback(response) {
                $scope.getBanner();
                swal("Done!", response.data.dev, "success");
            }, function errorCallback(response) {
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.insertBanner = function () {

            var checkText = ['id_buttonlink', 'id_bannertitle', 'id_bannerdescription'];
            // var checkDropdown = ['type'];

            var checkerA = inputChecker.textInput(checkText);
            // var checkerB = inputChecker.selectInput(checkDropdown);

            if (!$scope.resultImage) {
                growlService.growl('Please upload a banner', 'warning');    
            }

            if (checkerA) {
                growlService.growl('Please fill out all fields', 'warning');    
            } else {
                if ($scope.base64 == $scope.resultImage) {
                    $http({
                        method: "POST",
                        url: apiUrl + '/boysen/bannermanagement/set',
                        data: {
                            base64: $scope.base64,
                            buttonLink: $scope.buttonLink,
                            bannerTitle: $scope.bannerTitle,
                            bannerDesc: $scope.bannerDesc
                        }
                    }).then(function successCallback(response) {

                        $scope.getBanner();
                        swal("Done", "Successfully uploaded!", "success");
                        // $scope.bannerList = response.data.list == null ? [] : response.data.list;
                        // $scope.tableBasic.total(response.data.total);
                        // data = $filter('orderBy')($scope.userList, params.orderBy())
                        // $defer.resolve(data);
                    }, function errorCallback(response) {

                    });
                }
                else {
                    swal("Sorry", "Crop The image first", "error");
                } 
            }
       
        };


        $scope.deleteBanner = function (id, idCrypt, image_url) {
            
            swal({
                title: "Are you sure?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#F44336",
                confirmButtonText: "Delete",
                closeOnConfirm: false
            }, function () {
                    
                $http({
                    method: "DELETE",
                    url: apiUrl + '/boysen/bannermanagement/delete',
                    data: {
                        id: id,
                        id_crypt: idCrypt,
                        ixmage_url: image_url
                    }
                }).then(function successCallback(response) {
                    $scope.getBanner();
                    swal("Done!", response.data.dev, "success");
                }, function errorCallback(response) {
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            });
        };

        $scope.editModeBanner = function (id, id_crypt, image_url, button_link, banner_title, banner_desc, image_url_path) {
            // console.log("test", id, id_crypt, image_url, button_link, banner_title, banner_desc);
            // resizeCanvas();
            $scope.editMode = true;
            $scope.banner_id = id;
            $scope.id_crypt = id_crypt;
            $scope.buttonLink = button_link;
            $scope.bannerTitle = banner_title;
            $scope.bannerDesc = banner_desc;
            $scope.myImage = image_url_path;
            
            $scope.image_url = image_url;
          

            // if (category.is_edit) {
            //     if (category.newName == undefined) {

            //     }
            //     else if (category.newName == "") {
            //         swal("Sorry", "Enter category name", "error");
            //         category.is_edit = !category.is_edit;
            //     }
            //     else {
            //         swal({
            //             title: "Are you sure?",
            //             text: "",
            //             type: "warning",
            //             showCancelButton: true,
            //             confirmButtonColor: "#F44336",
            //             confirmButtonText: "Update",
            //             closeOnConfirm: false
            //         }, function () {
            //             if (category.newName == undefined) {
            //                 category.newName = category.name;
            //             }
            //             $http({
            //                 method: "PUT",
            //                 url: apiUrl + '/boysen/bannermanagement/update',
            //                 data: {
            //                     id: category.id,
            //                     id_crypt: category.id_crypt,
            //                     name: category.newName,
            //                     is_show: category.is_show,
            //                 }
            //             }).then(function successCallback(response) {
            //                 $scope.getCategoryData();
            //                 category.newName = category.name;
            //                 swal("Done!", response.data.dev, "success");
            //             }, function errorCallback(response) {
            //                 swal("Sorry", response.data.error.errorDev.dev, "error");
            //             });
            //         });
            //     }
            // }
        };

        $scope.editBanner = function () {
            
            $http({
                method: "PUT",
                url: apiUrl + '/boysen/bannermanagement/update',
                data: {
                        id          : $scope.banner_id,
                        id_crypt    : $scope.id_crypt,
                        button_link : $scope.buttonLink,
                        banner_title: $scope.bannerTitle,
                        banner_desc : $scope.bannerDesc,
                        myImage     : $scope.myImage,
                        resultImage : $scope.resultImage,
                        image_url   : $scope.image_url,
                        base64      : $scope.base64
                        
                }
            }).then(function successCallback(response) {
                swal("Done!", response.data.dev, "success");
                $scope.editMode = false;
                $scope.buttonLink = '';
                $scope.bannerTitle = '';
                $scope.bannerDesc = '';
                $scope.myCroppedImage = '';
                $scope.resultImage = '';
                $scope.resultImageView = '';
               
                $scope.myImage = '';
                $scope.image_url = '';

                $scope.show_result_image = false;
                $scope.getBanner();

            }, function errorCallback(response) {
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

       

    }]
);