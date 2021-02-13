boysen
    .controller('commentsMaintenanceCtrl', ['$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', 'inputChecker', 'prompt', 'growlService', '$sce', 'webStorage', function ($http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, inputChecker, prompt, growlService, $sce, webStorage){
    
        $scope.wordData    = [];
        $scope.word    = '';
        $scope.isEditMode = false;
        $scope.id = false;
        $scope.id_crypt = false;

        $scope.adminRoleAccess_View = false;
        $scope.adminRoleAccess_Create = false;
        $scope.adminRoleAccess_Update = false;
        $scope.adminRoleAccess_delete = false;

        $scope.adminUsers = webStorage.get('AdminUser');
        $scope.adminUsersId = $scope.adminUsers.role.admin_role_access;//$scope.adminUsers["msg"]["user_data"]["id"];

        $scope.adminRoleAccess_View = $scope.adminUsersId.comment.view;
        $scope.adminRoleAccess_Create = $scope.adminUsersId.comment.create;
        $scope.adminRoleAccess_Update = $scope.adminUsersId.comment.update;
        $scope.adminRoleAccess_delete = $scope.adminUsersId.comment.delete;
        
        $scope.categorypreroll = 0;
        $scope.categorymidroll = 0;

        $scope.toArray = function(number){
            return new Array($scope.categoryData.length);
        }

        $scope.getCommentsData = function(){
            
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
                      url: apiUrl +'/boysen/commentManagement/get',
                      params   : {
                          page    : page,
                          row     : count,
                      }
                  }).then(function successCallback(response){
                        $scope.tableBasic.total(response.data.total);
                        $scope.wordData = response.data.list == null ? [] : response.data.list;

                        data = $filter('orderBy')($scope.wordData, params.orderBy())
                        $defer.resolve(data);
                        
                  }, function errorCallback(response){
                        swal("Sorry", response.data.error.errorDev.dev, "error");
                  });
                }
            });
        };

        $scope.insertNewWord = function(){
         
            if ($scope.word == null || $scope.word == "") {
                swal("Sorry", "Word cannot be emptied", "error");
            } else {
                $http({
                    method   : "POST",
                    url: apiUrl +'/boysen/commentManagement/set',
                    data     : {
                        word     : $scope.word,
                       
                    }
                }).then(function successCallback(response){
                     
                    swal("Done!", response.data.dev, "success");
                    $scope.getCommentsData();
                }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            }
            
        };

        $scope.deleteWord = function(id, idCrypt){
         
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
                    url: apiUrl +'/boysen/commentManagement/delete',
                    data   : {
                        id       : id,
                        id_crypt : idCrypt
                    }
                }).then(function successCallback(response){
                    $scope.getCommentsData();
                    swal("Done!", response.data.dev, "success");
                }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            });
        };

        $scope.editMode = function (id, id_crypt, word){
            $scope.word = word;
            $scope.isEditMode = true;
            $scope.id = id;
            $scope.id_crypt = id_crypt;
        }

        $scope.editWord = function(){

            if ($scope.isEditMode){
                if ($scope.word == undefined)
                {

                }
                else if ($scope.word == "")
                {
                    swal("Sorry", "Enter word", "error");
                    $scope.isEditMode = !$scope.isEditMode;
                }
                else
                {
                    swal({
                        title: "Are you sure?",
                        text: "",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#F44336",
                        confirmButtonText: "Update",
                        closeOnConfirm: false
                    }, function(){
                          
                        $http({
                            method   : "PUT",
                            url: apiUrl +'/boysen/commentManagement/update',
                            data   : {
                                id                  : $scope.id,
                                id_crypt            : $scope.id_crypt,
                                word                : $scope.word,
                            }
                        }).then(function successCallback(response){
                            $scope.getCommentsData();
                            $scope.word = '';
                            $scope.isEditMode = false;
                            swal("Done!", response.data.dev, "success");
                        }, function errorCallback(response){
                            swal("Sorry", response.data.error.errorDev.dev, "error");
                        });
                    });
                }
            }
        };

        $scope.cancelWord = function() {
            $scope.isEditMode = false;   
            $scope.word = '';     
        }
    }]
);