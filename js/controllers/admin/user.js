boysen
    .controller('userMaintenanceCtrl', ['$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', 'inputChecker', 'prompt', 'growlService', '$sce','webStorage',function($http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, inputChecker, prompt, growlService, $sce,webStorage){
        $scope.userList = [];
        $scope.userStats = {};
        $scope.adminList = [];
        $scope.adminForm = {};
        $scope.adminRoleList = [];
        $scope.navigationState = "";
        $scope.setPasswordData = "";
        $scope.adminSetPasswordParams = $stateParams;
        $scope.filterParams           = {};
        $scope.filterParams.filter_type = "date";
        $scope.isFiltered             = false;
        
        $scope.username = '';
        $scope.email = '';
        $scope.role_name = '';
        $scope.is_activated = '';

        $scope.editMode = false;

        $scope.AdminRoles        = $scope.isAdminLoggedIn ? webStorage.get('AdminUser') : null;
        $scope.isAdminRoles      = $scope.AdminRoles == null ? null : $scope.AdminRoles;
        $scope.isRoles           = $scope.isAdminRoles == null ? null : $scope.AdminRoles.role;
        $scope.isUserExist       = $scope.AdminRoles == null ? null : ($scope.AdminRoles.role == null ? null : ($scope.AdminRoles.role.admin_role_access.user == null ? false : true));
        $scope.isUserViewOnly    = $scope.isUserExist ? $scope.AdminRoles.role.admin_role_access.user.viewMainUser : null;
        // console.log($scope.AdminRoles.role.admin_role_access.user.viewMainUser);
        $scope.navigationState = $scope.isUserViewOnly ? "MAIN USERS" : "ADMIN USERS";
        $scope.restrictUser = $scope.isUserViewOnly ? false : true;
        
        if($scope.isUserViewOnly){
            setTimeout(function(){
                $scope.getUserData();
            },10);
        }

        if($state.$current.self.name == "adminMain.setPassword"){
            // console.log("asdjkhadkjha");
            if(webStorage.has('AdminUser')){
                webStorage.local.remove('AdminUser');
                location.reload();
            }
        }
        
        $scope.getUserData = function(){
            $scope.navigationState = 'MAIN USERS';
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
                      url      : apiUrl+'/user/get-user-list/get',
                      params   : {
                          page         : page,
                          row          : count,
                          name         : $scope.filterParams.comment_name_filter,
                          date_from    : $scope.filterParams.comment_date_filter_from,
                          date_to      : $scope.filterParams.comment_date_filter_to,
                          filter       : $scope.filterParams.filter_type,
                      }
                  }).then(function successCallback(response){
                        $scope.userStats = response.data.stats;
                        $scope.userStats.totalUsers = response.data.total;
                        $scope.tableBasic.total(response.data.total);
                        $scope.userList = response.data.list == null ? [] : response.data.list;
                        data = $filter('orderBy')($scope.userList, params.orderBy())
                        $defer.resolve(data);
                  }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                  });
                }
            });
        };

        $scope.getUserRoleList = function(){
            $http({
                method   : "GET",
                url      : apiUrl+'/user/user-role/get',
            }).then(function successCallback(response){
                  $scope.adminRoleList = response.data;
                
            }, function errorCallback(response){
              swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

        $scope.getAdminUsers = function () {
            $scope.navigationState = 'ADMIN USERS';
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
                            url: apiUrl + '/user/adminUserManagement/get',
                            params: {
                                page: page,
                                row: count,
                            }
                        }).then(function successCallback(response) {
                            $scope.adminUserList = response.data.list;
                            $scope.tableBasic.total(response.data.total);
                            $scope.adminUserList = response.data.list == null ? [] : response.data.list;
                            console.log($scope.adminUserList);
                            data = $filter('orderBy')($scope.adminUserList, params.orderBy())
                            $defer.resolve(data);
                        }, function errorCallback(response) {
                            swal("Sorry", response.data.error.errorDev.dev, "error");
                        });
                    }
                });
        };

        $scope.insertAdminUsers = function () {
           
            $http({
                method: "POST",
                url: apiUrl + '/user/adminUserManagement/set',
                data: $scope.adminForm
            }).then(function successCallback(response) {
                $scope.getAdminUsers();
                $scope.adminForm = {};
                // $scope.bannerList = response.data.list == null ? [] : response.data.list;
                // $scope.tableBasic.total(response.data.total);
                // data = $filter('orderBy')($scope.userList, params.orderBy())
                // $defer.resolve(data);
            }, function errorCallback(response) {

            });
        };

        $scope.setPassword = function(){
            if($scope.setPasswordData != ""){
                $http({
                    method: "PUT",
                    url: apiUrl + '/user/adminUserManagement/update',
                    data: {
                        password: $scope.setPasswordData,
                        email: $scope.adminSetPasswordParams.email,
                        userCrypt: $scope.adminSetPasswordParams.userCrypt,
                        expireAt: $scope.adminSetPasswordParams.expireAt,
                    }
                }).then(function successCallback(response) {
                    $state.go('adminMain.login');
                    $scope.setPasswordData = '';
                    swal("Done!", "Password has been set.", "success");
                }, function errorCallback(response) {
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            }
            else {
                swal("Sorry", "Set a Password", "error");
            }
        };

        $scope.resendEmail = function (username, email, role_name, is_activated) {
            
            $http({
                method: "POST",
                url: apiUrl + '/user/adminUserManagement/resend',
                data: {
                    username: username,
                    email: email,
                    role_name: role_name,
                    is_activated: is_activated ? 'Active' : 'Inactive',
                }
            }).then(function successCallback(response) {
                $scope.getAdminUsers();
                // $scope.adminForm = {};
                // $scope.bannerList = response.data.list == null ? [] : response.data.list;
                // $scope.tableBasic.total(response.data.total);
                // data = $filter('orderBy')($scope.userList, params.orderBy())
                // $defer.resolve(data);
                 swal("Done!", "Mail has been resent.", "success");
            }, function errorCallback(response) {
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };



        $scope.deleteUser = function (id, id_crypt) {
            
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
                    url: apiUrl + '/user/adminUserManagement/delete',
                    data: {
                        id: id,
                        id_crypt: id_crypt
                    }
                }).then(function successCallback(response) {
                    $scope.getAdminUsers();
                    $scope.adminForm = {};
                    swal("Done!", response.data.dev, "success");
                }, function errorCallback(response) {
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            });
        };


        $scope.editModeBanner = function (id, id_crypt,username, email, role_name, is_activated) { 
            $scope.editMode = true;
            $scope.id           = id;
            $scope.id_crypt     = id_crypt;
            $scope.username     = username;
            $scope.email        = email;
            $scope.role_name    = role_name;
            $scope.is_activated = is_activated ? "Active" : "Inactive";
           
            $scope.adminForm.email = $scope.email;
            $scope.adminForm.username = $scope.username;
            $scope.adminForm.admin_role= $scope.role_name;


        };

        $scope.editAdminUsers = function() {
          
            $http({
                method: "PUT",
                url: apiUrl + '/user/adminUserManagement/updaterecord',
                data: {
                    id : $scope.id,
                    id_crypt : $scope.id_crypt, 
                    username: $scope.adminForm.username, 
                    email: $scope.adminForm.email, 
                    role_name: $scope.adminForm.admin_role, 
                    is_activated : $scope.is_activated

                }
            }).then(function successCallback(response) {
                swal("Done!", response.data.dev, "success");
                $scope.adminForm = {};
                $scope.editMode = false;
                $scope.getAdminUsers();

            }, function errorCallback(response) {
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        }


        $scope.exportMainUsers = function () {
                        $http({
                            method: "POST",
                            url: apiUrl + '/user/adminUserManagement/exportMainUsers',
                            data: {
                                name: $scope.filterParams.comment_name_filter,
                                date_from: $scope.filterParams.comment_date_filter_from,
                                date_to: $scope.filterParams.comment_date_filter_to,
                                filter: $scope.filterParams.filter_type,
                            }
                        }).then(function successCallback(response) {
                           
                            downloadFile(response.data.dev);
                        
                        }, function errorCallback(response) {
                            swal("Sorry", response.data.error.errorDev.dev, "error");
                        });
                
        }

        function downloadFile(filePath) {
            // var link = document.createElement('a');
            // link.target = "_blank";
            // link.href = filePath;
            // link.download = apiUrl + "/export/" + filePath.substr(filePath.lastIndexOf('/') + 1);
            // link.click();
            // window.open(apiUrl + "/export/" + filePath.substr(filePath.lastIndexOf('/') + 1));
            
            window.open(filePath);
        }


    }]
);