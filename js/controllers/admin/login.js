boysen
    .controller('loginCtrl', ['$scope','httpPromisedRequest','webStorage', '$state',function($scope,httpPromisedRequest,webStorage, $state){

        $scope.login = {};
        $scope.goLogin = function(){
            if ( $scope.login.username != undefined && $scope.login.password != undefined &&
                $scope.login.username != "" && $scope.login.password != "" ){
                httpPromisedRequest.customHttpRequest('POST',apiUrl+'/user/backend-auth',$scope.login).then(function(data){
                    if (data.code == 200){
                        data.role.admin_role_access = JSON.parse(data.role.admin_role_access);
                        webStorage.set('AdminUser',data);
                        window.location = "/admin/dashboard";
                    }else{
                        swal("Sorry", data.dev, "error");
                        console.log(data);
                    }
                });
            }
        };
    }]);