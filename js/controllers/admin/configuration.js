boysen
  .controller('configurationCtrl', ['$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', 'inputChecker', 'prompt', 'growlService', '$sce', 'webStorage', function ($http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, inputChecker, prompt, growlService, $sce,webStorage){
      
      $scope.page = 1;
      $scope.sideContents = {};
      $scope.sideContents.image = {};
      $scope.sideContents.videos = [1,1,1];
      $scope.edit_index = 0;


//$scope.adminRoleAccess_View = false;
//$scope.adminRoleAccess_Create = false;
  // $scope.adminRoleAccess_Update = false;
  // $scope.adminRoleAccess_delete = false;


    // $scope.adminUsers = (webStorage.get('AdminUser') == null) || (webStorage.get('AdminUser') == undefined) ? null : webStorage.get('AdminUser');
    $scope.adminUsers = webStorage.get('AdminUser');
    if ($scope.adminUsers != null) {
      $scope.adminUsersId = $scope.adminUsers.role.admin_role_access;//$scope.adminUsers["msg"]["user_data"]["id"];
      $scope.adminRoleAccess_View = $scope.adminUsersId.side_content.view;
      $scope.adminRoleAccess_Create = $scope.adminUsersId.side_content.create;
      $scope.adminRoleAccess_Update = $scope.adminUsersId.side_content.update;
      $scope.adminRoleAccess_delete = $scope.adminUsersId.side_content.delete;
    }
   

      $scope.placeHolderImg = {
        "poster_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
        "content_types_id": "no"
      };

      $scope.sideContents.image.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC";
      
      $scope.initData = function(){
        $scope.sideContents(true);
      };
      // NEW SIDE CONTENT
      $scope.addSideContent = function(){
        var checkText = ['url', 'filename'];
        var checkDropdown = ['type'];

        var checkerA = inputChecker.textInput(checkText);
        var checkerB = inputChecker.selectInput(checkDropdown);

        if(checkerA || checkerB){
          growlService.growl('Please fill out all fields', 'warning');
          
        }
        // if($scope.sideContent.type == 'image'){
        //   if(inputChecker.textInput(['linkTo'])){
        //     growlService.growl('Please fill out all fields', 'warning');
            
        //   }
        // }

        $http({
            method   : "POST",
            url      : apiUrl+'/boysen/side-content/set',
            data   : {
                videoId   : 42918,
                name      : $scope.sideContent.filename,
                url       : $scope.sideContent.url,
                type      : $scope.sideContent.type,
                active    : 1,
                linkTo    : $scope.sideContent.linkTo
            }
        }).then(function successCallback(response){
          swal("Done!", "Successfully Added!", "success");
          
          $scope.reloadPage();
        }, function errorCallback(response){
          growlService.growl('Failed to create new record', 'warning');
            
        });
      }
      
      $scope.initVideoPlayer = function(){
        setTimeout(function(){
          for(var i = 0 ; i < 3 ; i++){
            if(document.querySelector('.sideDiv-'+i) != null){
              videojs(document.querySelector('.sideDiv-'+i),{
                fluid: true,
                preload: 'auto',
                aspectRatio: "16:9",
              });
            }
          }
        },1000);
      }
      // GET SIDE CONTENTS TO FRONTEND
      $scope.getSideContents = function(){

        $scope.initVideoPlayer();
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/side-content/get',
            params   : {
                all       : false,
                videoId   : null
            }
        }).then(function successCallback(response){
          $scope.sceVideos = [];
          angular.forEach(response.data.videos, function(value, key){
             $scope.sceVideos.push({
               active   : value.active,
               id       : value.id,
               name     : value.name,
               type     : value.type,
               url      : value.url,
               videoId  : value.video_id,
               divId    : '.sideDiv-'+ key
             });
          });
          $scope.sideContents = {
            'image' : response.data.image,
            'videos' : $scope.sceVideos
          };
        }, function errorCallback(response){
          swal("Sorry", response.data.error.errorDev.dev, "error");
        })
        .finally(function(){
          setTimeout(function(){
            $scope.initiateVideoPlayer();
          }, 2000);
        });
      }

      $scope.onImgLoad = function (event) {
        angular.element('#sideImage').removeClass('tile__img');
      }

      $scope.initiateVideoPlayer = function(){
        angular.forEach($scope.sceVideos, function(value,key){
          angular.element('.sideDiv-'+ key).removeClass('bring-down');
          var div = document.querySelector(value.divId);
          try{
            videojs(div.id).src([{ "type": "video/youtube", "src": value.url}]);
            videojs(div.id).controlBar.addChild('QualitySelector');
          }
          catch(err){
            div.classList.add('image-fit-to-height');
            div.classList.add('image-fit-to-width');
            videojs(div).src([{ "type": "video/youtube", "src": value.url}]);
            videojs(div).controlBar.addChild('QualitySelector');
          }
          // videojs(div.id,{
          //   fluid: true,
          //   preload: 'auto',
          //   techOrder:["youtube"],
          //   sources:[{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}]
          // });
        });
      };

      // GET SIDE CONTENTS TO ADMIN
      $scope.sideContents = function(all){
        //Basic Example
        $scope.tableBasic = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
              $scope.page = params.page();
              var count = params.count();
              $http({
                  method   : "GET",
                  url      : apiUrl+'/boysen/side-content/get',
                  params   : {
                      all       : all,
                      offset    : $scope.page,
                      limit     : count,
                      orderBy   : params.orderBy()[0]
                  }
              }).then(function successCallback(response){
                $scope.tableBasic.total(response.data.total);
                $scope.sideContents = response.data.payload == null ? [] : response.data.payload;
                data = $filter('orderBy')($scope.sideContents, params.orderBy())
                $defer.resolve(data);
              }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
              });
            }
        })
      }

      $scope.deleteSideContent = function(sideContentId, sideContentIdCrypt){
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
              url      : apiUrl+'/boysen/side-content/delete',
              data     : {
                  id       : sideContentId,
                  id_crypt : sideContentIdCrypt
              }
          }).then(function successCallback(response){
            $scope.reloadPage();
            swal("Done!", response.data.dev, "success");
          }, function errorCallback(response){
            swal("Sorry", response.data.error.errorDev.dev, "error");
          });
        });
      };

      $scope.setUpdateData = function(sideContentData, index){
        $scope.edit_index = index;
        $scope.sideContent = sideContentData;
        $scope.sideContent.filename = sideContentData.name;
        $scope.sideContent.is_edit = true;
        document.getElementById("url").focus();
      };

      $scope.updateSideContent = function(){
        var sideContentData = $scope.sideContent;
        console.log(sideContentData);
        if(sideContentData.is_edit){
            sideContentData.newName = $scope.sideContent.filename;
            sideContentData.newUrl = $scope.sideContent.url;
            sideContentData.newType = $scope.sideContent.type;
            console.log($scope.sideContent);
            console.log(sideContentData);
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
                url      : apiUrl+'/boysen/side-content/update',
                data     : sideContentData
              }).then(function successCallback(response){
                swal("Done!", response.data.dev, "success");
                $scope.edit_index = 0;
                $scope.sideContent.is_edit = false;
                $scope.reloadPage();
              }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
              });
            });
        }
      };

      /* For User Role */  
      $scope.getSpecificRole = function () {
        $scope.adminUsers = webStorage.get('AdminUser');
        $scope.adminUsersId = $scope.adminUsers["msg"]["user_data"]["id"];
        
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
                url: apiUrl + '/user/get-specific-roles',
                params: {
                  page: page,
                  row: count,
                  id: $scope.adminUsersId
                }
              }).then(function successCallback(response) {
                $scope.adminRoleAccess = JSON.parse(response.data.adminRolesList[0]["admin_role_access"]);
                
                $scope.adminRoleAccess_View   = $scope.adminRoleAccess_View == undefined ? false : $scope.adminRoleAccess["side_content"]["view"];
                $scope.adminRoleAccess_Create = $scope.adminRoleAccess_Create == undefined ? false : $scope.adminRoleAccess["side_content"]["create"];
                $scope.adminRoleAccess_Update = $scope.adminRoleAccess_Update == undefined ? false : $scope.adminRoleAccess["side_content"]["update"];
                $scope.adminRoleAccess_delete = $scope.adminRoleAccess_delete == undefined ? false : $scope.adminRoleAccess["side_content"]["view"];
                // console.log($scope.adminRoleAccess_View);
                
              }, function errorCallback(response) {
                swal("Sorry", response.data.error.errorDev.dev, "error");
              });
            }
          });
      };


    }])
