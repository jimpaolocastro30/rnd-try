boysen
    .controller('categoryMaintenanceCtrl', ['$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', 'inputChecker', 'prompt', 'growlService', '$sce', 'webStorage', function ($http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, inputChecker, prompt, growlService, $sce, webStorage){
    
        $scope.categoryData    = [];
        $scope.categoryName    = "";

        $scope.adminRoleAccess_View = false;
        $scope.adminRoleAccess_Create = false;
        $scope.adminRoleAccess_Update = false;
        $scope.adminRoleAccess_delete = false;
        $scope.categoryTotal          = 0;

        $scope.adminUsers = webStorage.get('AdminUser');
        $scope.adminUsersId = $scope.adminUsers.role.admin_role_access;//$scope.adminUsers["msg"]["user_data"]["id"];

        $scope.adminRoleAccess_View = $scope.adminUsersId.category.view;
        $scope.adminRoleAccess_Create = $scope.adminUsersId.category.create;
        $scope.adminRoleAccess_Update = $scope.adminUsersId.category.update;
        $scope.adminRoleAccess_delete = $scope.adminUsersId.category.delete;
        
        $scope.categorypreroll = 0;
        $scope.categorymidroll = 0;

        $scope.id = 0;
        $scope.id_crypt = '';
        $scope.isrequiredlogin = 0;

        $scope.checkBoxDisplay = true;

        $scope.isEditMode = false;

        $scope.toArray = function(number){
            return new Array($scope.categoryData.length);
        }

        $scope.getCategoryData = function(){
            $scope.tableBasic = new ngTableParams({
                page: 1,            // show first page
                count: 10           // count per page
            }, {
                total: 0, // length of data
                getData: function ($defer, params) {
                  var page = params.page();
                  var count = params.count();
                  $http({
                      method   : "GET",
                      url      : apiUrl+'/boysen/categories/get',
                      params   : {
                          page    : page,
                          row     : count,
                      }
                  }).then(function successCallback(response){
                        $scope.tableBasic.total(response.data.total);
                        $scope.categoryTotal = response.data.total;
                        $scope.categoryData = response.data.list == null ? [] : response.data.list;
                        
                        data = $filter('orderBy')($scope.categoryData, params.orderBy())
                        $defer.resolve(data);
                        
                  }, function errorCallback(response){
                        swal("Sorry", response.data.error.errorDev.dev, "error");
                  });
                }
            });
        };

        $scope.insertNewCategory = function(){
            $scope.pre_roll = $scope.categorypreroll ? 1 : 0;
            $scope.mid_roll = $scope.categorymidroll ? 1 : 0;
            $scope.isloginrequired = $scope.isrequiredlogin ? 1 : 0;
            
            if($scope.categoryName == "" || $scope.categoryName == null || $scope.categoryName == undefined){
                swal("Sorry", "You Entered Empty Category Name", "error");
            }
            else{
                $http({
                    method   : "POST",
                    url      : apiUrl+'/boysen/categories/set',
                    data     : {
                        name     : $scope.categoryName,
                        pre_roll : $scope.pre_roll,
                        mid_roll : $scope.mid_roll,
                        isloginrequired: $scope.isloginrequired,
                        geo_access: $scope.geoaccess
                    }
                }).then(function successCallback(response){
                    $scope.categoryName = "";
                    $scope.categorypreroll = false; 
                    $scope.categorymidroll = false;
                    $scope.isrequiredlogin = false;
                    $scope.geoaccess = "";
                    swal("Done!", response.data.dev, "success");
                    $scope.getCategoryData();
                }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            }
        };

        $scope.deleteCategory = function(id, idCrypt){
            swal({
                title: "Are you sure?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#F44336",
                confirmButtonText: "Delete",
                closeOnConfirm: false
            }, function(){
                $http({
                    method   : "DELETE",
                    url      : apiUrl+'/boysen/categories/delete',
                    data   : {
                        id       : id,
                        id_crypt : idCrypt
                    }
                }).then(function successCallback(response){
                    $scope.getCategoryData();
                    swal("Done!", response.data.dev, "success");
                }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            });
        };

        $scope.editMode = function (id, id_crypt, newName, is_required_login, mid_roll, geo_access) {
            // console.log(id, id_crypt, newName, is_required_login, mid_roll);
            $scope.id = id; 
            $scope.id_crypt = id_crypt;
            $scope.categoryName = newName;
            $scope.isrequiredlogin = is_required_login; 
            $scope.categorymidroll = mid_roll;
            $scope.geoaccess = geo_access;
            $scope.isEditMode = true;

            document.getElementById("CategoryName").focus();
            
        }

        $scope.editCategory = function(){

            $scope.pre_roll = $scope.categorypreroll ? 1 : 0;
            $scope.mid_roll = $scope.categorymidroll ? 1 : 0;
            $scope.isloginrequired = $scope.isrequiredlogin ? 1 : 0;


            
            // if(category.is_edit){
            //     if(category.newName == undefined)
            //     {

            //     }
            //     else if(category.newName == "")
            //     {
            //         swal("Sorry", "Enter category name", "error");
            //         category.is_edit = !category.is_edit;
            //     }
            //     else
            //     {
                    swal({
                        title: "Are you sure?",
                        text: "",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#F44336",
                        confirmButtonText: "Update",
                        closeOnConfirm: false
                    }, function(){
                        // if(category.newName == undefined){
                        //     category.newName = category.name;
                        // }
                        $http({
                            method   : "PUT",
                            url      : apiUrl+'/boysen/categories/update',
                            data   : {
                                id       : $scope.id,
                                id_crypt:  $scope.id_crypt,
                                name: $scope.categoryName,
                                // is_show  : category.is_show,
                                pre_roll: $scope.pre_roll,
                                mid_roll: $scope.mid_roll,
                                isloginrequired: $scope.isloginrequired,
                                geo_access: $scope.geoaccess
                            }
                        }).then(function successCallback(response){
                            $scope.getCategoryData();
                            $scope.categoryName = "";
                            $scope.id = 0;
                            $scope.id_crypt = "";
                            $scope.categoryName = "";
                                        // is_show  : category.is_show,
                            // $scope.pre_roll = 0;
                            // $scope.mid_roll = 0;
                            $scope.isloginrequired = 0;

                            $scope.categorypreroll = false;
                            $scope.categorymidroll = false;
                            $scope.isrequiredlogin = false;
                            $scope.geoaccess = "";

                            $scope.isEditMode = false;
                            swal("Done!", response.data.dev, "success");
                        }, function errorCallback(response){
                            swal("Sorry", response.data.error.errorDev.dev, "error");
                        });
                    });
            //     }
            // }
        };

        $scope.setOrdering = function(index,id,id_crypt){
            $scope.ordering = parseInt(index);
            

            $http({
                method: "PUT",
                url: apiUrl + '/boysen/categories/updateOrder',
                data: {
                    id: id,
                    id_crypt: id_crypt,
                    ordering: $scope.ordering,
                }
            }).then(function successCallback(response) {
                $scope.categoryData = [];
                $timeout(function(){ $scope.getCategoryData(); },1);
                swal("Done!", response.data.dev, "success");
            }, function errorCallback(response) {
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        }

        $scope.refreshCategory = function (id,id_crypt) {
                console.log("refreshCategory");
                $http({
                    method: "POST",
                    url: apiUrl + '/boysen/categories/refresh',
                    data: {
                        name: $scope.categoryName,
                        id: id,
                        id_crypt: id_crypt
                    }
                }).then(function successCallback(response) {
                    swal("Done!", response.data.dev, "success");
                    $scope.getCategoryData();
                }, function errorCallback(response) {
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
        };


    }]
);