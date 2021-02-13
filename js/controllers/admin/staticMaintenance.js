boysen
    .controller('staticMaintenanceCtrl', ['$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', 'inputChecker', 'prompt', 'growlService', '$sce',function($http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, inputChecker, prompt, growlService, $sce){
    
        $scope.aboutUs = "";
        $scope.privacyPolicy = "";
        $scope.termsOfUse = "";
        $scope.greenBannerContent = "";

        $scope.getStaticMaintenance = function(){
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/staticContents/get',
            }).then(function successCallback(response){
                $scope.aboutUs = response.data.about_us;
                $scope.privacyPolicy = response.data.privacy_policy;
                $scope.termsOfUse = response.data.terms_of_use;
                $scope.greenBannerContent = response.data.green_banner_text;
                $scope.faqContent = response.data.faq_text;
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        }

        $scope.saveStaticMaintenance = function(field){
            var data = "";
            if(field == 'aboutUs')           { data = $scope.aboutUs; }
            else if(field == 'privacyPolicy'){ data = $scope.privacyPolicy; }
            else if(field == 'termsOfUse')   { data = $scope.termsOfUse; }
            else if(field == 'greenBannerContent')   { data = $scope.greenBannerContent; }
            else if(field == 'faqContent')   { data = $scope.faqContent; }
            $http({
                method   : "POST",
                url      : apiUrl+'/boysen/staticContents/set',
                data   : {
                    field : field,
                    data  : data
                }
            }).then(function successCallback(response){
                swal("Done!", "Updated", "success");
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
        }
    }]
);