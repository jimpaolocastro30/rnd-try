boysen
    .controller('userRolesMaintenanceCtrl', ['$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', 'inputChecker', 'prompt', 'growlService', '$sce','webStorage',function($http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, inputChecker, prompt, growlService, $sce,webStorage){
        $scope.userList = [];
        $scope.userStats = {};
        $scope.adminList = [];
        $scope.adminForm = {};
        $scope.adminRoleList = [];
        $scope.roleField = {};
        $scope.userRoleId = 0; 
        $scope.idCrypt = '';
        $scope.roleName = '';
        $scope.isEditActive = false;

        $scope.editRole = function (id, id_crypt, role_name,role_access){
            $scope.isEditActive = true;
            $scope.roleField = role_access;
            $scope.userRoleId = id;
            $scope.idCrypt = id_crypt;
            $scope.roleName = role_name;
        };

        $scope.getUserRoleData = function(){
            
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
                      url: apiUrl +'/user/userRolesManagement/get',
                      params   : {
                          page    : page,
                          row     : count,
                      }
                  }).then(function successCallback(response){     
                        var newArray = [];
                        $scope.tableBasic.total(response.data.total);
                        for(var i = 0 ; i < response.data.list.length ; i++){
                           
                            newArray.push({ "id": response.data.list[i].id,"id_crypt": response.data.list[i].id_crypt,"role_name":response.data.list[i].role_name,role_access:JSON.parse(response.data.list[i].role_access)});
                        }
                        $scope.userRolesList = newArray == null ? [] : newArray;
                        data = $filter('orderBy')($scope.userList, params.orderBy())
                        $defer.resolve(data);
                  }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                  });
                }
            });
        };

        $scope.saveUserRole = function () {


            $http({
                method: "POST",
                url: apiUrl + '/user/userRolesManagement/set',
                data: {
                    role_name: $scope.roleName,
                    role_field: JSON.stringify($scope.roleField)
                }
            }).then(function successCallback(response) {
                $scope.getUserRoleData();
                $scope.roleField = {};
                $scope.roleName = '';

            }, function errorCallback(response) {

            });
        };

        $scope.deleteUserRole = function (id, id_crypt) {

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
                    url: apiUrl + '/user/userRolesManagement/delete',
                    data: {
                        id: id,
                        id_crypt: id_crypt
                    }
                }).then(function successCallback(response) {
                    $scope.getUserRoleData();
                    swal("Done!", response.data.dev, "success");
                }, function errorCallback(response) {
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            });
        };


        $scope.editUserRole = function () {
            // console.log("editUserRole:", $scope.userRoleId,
            //     $scope.idCrypt,
            //     $scope.roleName, $scope.roleField);
            $http({
                method: "PUT",
                url: apiUrl + '/user/userRolesManagement/update',
                data: {
                    id: $scope.userRoleId,
                    id_crypt: $scope.idCrypt,
                    role_name: $scope.roleName,
                    role_field: JSON.stringify($scope.roleField),
                }
            }).then(function successCallback(response) {
                swal("Done!", response.data.dev, "success");
                $scope.getUserRoleData();
                $scope.roleField = {};
                $scope.roleName = '';
                $scope.isEditActive = false;

            }, function errorCallback(response) {
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        };

 

    }]
);