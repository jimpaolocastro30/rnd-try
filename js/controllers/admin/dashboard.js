boysen
    .controller('dashboardCtrl', ['webStorage', '$http', '$rootScope', '$scope', '$state', '$stateParams', 'httpPromisedRequest', '$timeout', '$filter', 'ngTableParams', '$uibModal', function (webStorage, $http, $rootScope, $scope, $state, $stateParams, httpPromisedRequest, $timeout, $filter, ngTableParams, $uibModal, $modalInstance){
      var allBoysenData             = '';
      $scope.readmoreValue          = 500;
      $scope.siteUrl                = window.location.origin;
      $scope.contentMainDetail      = {};
      $scope.contentDetail          = {};
      $scope.contentComment         = [];
      $scope.contentTotalComment    = 0;
      $scope.contentEpisodeList     = [];
      $scope.contentSeasonCount     = [];
      $scope.imagePlaceholder       = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC";
      $scope.seasonEpisodes         = "1";
      $scope.selectedEpisode        = {};
      $scope.videoId                = "";
      $scope.commentList            = [];
      $scope.commentTotal           = 0;
      $scope.adminUsers             = webStorage.get('AdminUser');
      $scope.adminUsersId           = $scope.adminUsers.role.admin_role_access;//$scope.adminUsers["msg"]["user_data"]["id"];
      $scope.subComment             = [];
      $scope.subCommentTotal        = 0;
      $scope.filterParams           = {};
      $scope.filterParams.filter_type = "name";
      $scope.isFiltered             = false;

      $scope.logsFilterParams       = {};
      $scope.contentViewLogsList    = {};

      $scope.logsFilterParams2      = {};
      $scope.episodeViewLogsList    = {};

      $scope.logsFilterParams3      = {};
      $scope.durationViewLogsList   = {};
  
      $scope.adminRoleAccess_View = $scope.adminUsersId.comment.view;
      $scope.adminRoleAccess_delete = $scope.adminUsersId.comment.delete;
      $scope.adminRoleAccess_reply = $scope.adminUsersId.comment.reply;
      $scope.pageViewsList = {};
    $scope.isUploadCsv = false;

      $scope.genrePermalink = function(genre){
        return genre.replace(/ /g, '-').toLowerCase();
      };

      $scope.getBoysenData = function(){
        //Basic Example
        
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
                  url      : $scope.filterParams.video_content == "" || $scope.filterParams.video_content == undefined ? apiUrl+'/boysen/get-all-data/get' : apiUrl+'/boysen/search/get',
                  params   : {
                      permalink : "movie",
                      offset    : page,
                      limit     : count,
                      orderBy   :   params.orderBy()[0],
                      queryParams : $scope.filterParams.video_content
                  }
              }).then(function successCallback(response){
                  if($scope.filterParams.video_content == "" || $scope.filterParams.video_content == undefined){
                    $scope.isFiltered = false;
                    $scope.tableBasic.total(response.data.item_count);
                    $scope.videoList = response.data.movieList == null ? [] : response.data.movieList;
                    data = $filter('orderBy')($scope.videoList, params.orderBy())
                    $defer.resolve(data);
                  }
                  else
                  {
                    $scope.isFiltered = true;
                    $scope.tableBasic.total(response.data.item_count);
                    $scope.videoList = response.data.search == null ? [] : response.data.search;
                    data = $filter('orderBy')($scope.videoList, params.orderBy())
                    $defer.resolve(data);
                  }
              }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
              });
            }
        })
      };

      $scope.getCommentList = function(){

        $scope.tableBasic2 = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
              var page = params.page();
              var count = params.count();
              $http({
                  method   : "GET",
                  url      : apiUrl+'/boysen/admin-comment/get',
                  params   : {
                    page    : page,
                    row     : count,
                    orderBy : params.orderBy()[0],
                    name    : $scope.filterParams.comment_name_filter,
                    date    : $scope.filterParams.comment_date_filter,
                    filter  : $scope.filterParams.filter_type,
                  }
              }).then(function successCallback(response){
                    $scope.tableBasic2.total(response.data.total);
                    $scope.commentList = response.data.list == null ? [] : response.data.list;
                    data = $filter('orderBy')($scope.commentList, params.orderBy())
                    $defer.resolve(data);
              }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
              });
            }
        });
      };

      $scope.deleteComment = function(id,crypt,from){
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
                method   : "DELETE",
                url      : apiUrl+'/boysen/admin-comment/delete',
                data     : {
                    id       : id,
                    crypt    : crypt,
                }
            }).then(function successCallback(response){
                if(from == "dashboard"){ $scope.getCommentList(); }
                if(from == "details"){ $scope.getComment();$scope.subComment = [];$scope.subCommentTotal = 0; }
                swal("Done!", response.data.dev, "success");
            }, function errorCallback(response){
                
            });
        });
      };

      $scope.replyComment = function(comment,from){
        if(from == 'dashboard'){
            if(comment.reply == undefined || comment.reply == "")
            {
                swal("Sorry", "Enter Reply", "warning");
            }
            else
            {
                console.log(comment);
                $http({
                    method   : "POST",
                    url      : apiUrl+'/boysen/comment/set',
                    data     : {
                        comment   : comment.reply,
                        videoId   : comment.video_id,
                        userId    : "0",
                        userMuvId : "0",
                        commentId : comment.id,
                    }
                }).then(function successCallback(response){
                    $scope.getCommentList();
                    comment.replyViaComment = !comment.replyViaComment;
                    comment.reply = "";
                }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            }
        }
        else if(from == "details"){
            console.log(comment);
            if(comment.reply == undefined || comment.reply == "")
            {
                swal("Sorry", "Enter Reply", "warning");
            }
            else{
                $http({
                    method   : "POST",
                    url      : apiUrl+'/boysen/comment/set',
                    data     : {
                        comment   : comment.reply,
                        videoId   : comment.video_id,
                        userId    : "0",
                        userMuvId : "0",
                        commentId : comment.id,
                    }
                }).then(function successCallback(response){
                    $scope.getComment();
                    $scope.getSubComment(comment);
                    comment.reply = "";
                }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            }
        }
        else if(from == "subcomment"){
            console.log(comment);
            if(comment.reply == undefined || comment.reply == "")
            {
                swal("Sorry", "Enter Reply", "warning");
            }
            else{
                $http({
                    method   : "POST",
                    url      : apiUrl+'/boysen/comment/set',
                    data     : {
                        comment   : comment.reply,
                        videoId   : comment.video_id,
                        userId    : "0",
                        userMuvId : "0",
                        commentId : comment.comment_id,
                    }
                }).then(function successCallback(response){
                    $scope.getComment();
                    comment.id = comment.comment_id;
                    $scope.getSubComment(comment);
                    comment.reply = "";
                }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
                });
            }
        }
      };

      $scope.getBoysenSpecificData = function(){
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/content-details/get',
            params   : {
                permalink : $stateParams.videoname,
            }
        }).then(function successCallback(response){
            $scope.contentMainDetail    = response.data.movie;
            $scope.contentDetail        = response.data.movie; // initailize if not series
            $scope.contentTotalComment  = response.data.totalComments;
            $scope.videoId              = response.data.movie.id;
            if($scope.contentMainDetail.content_types_id == "3")
            {
                $scope.contentSeasonCount = response.data.seasons;
                $scope.contentEpisodeList = response.data.episodes.episode;
                // $scope.contentDetail      = response.data.episodes.episode[response.data.episodes.episode.length - 1];
                // $scope.videoId            = response.data.episodes.episode[response.data.episodes.episode.length - 1].id;
                // $scope.getComment();
            }
            $scope.getComment();
        }, function errorCallback(response){
            swal("Sorry", response.data.error.errorDev.dev, "error");
        });
      };

      $scope.getComment = function(){
            angular.element('#commentDiv').addClass('d-none');
            $scope.contentTotalComment = 0;
            $scope.tableBasic2 = new ngTableParams({
                page: 1,            // show first page
                count: 10           // count per page
            }, {
                total: 0, // length of data
                getData: function ($defer, params) {
                    var page = params.page();
                    var count = params.count();
                    $http({
                        method   : "GET",
                        url      : apiUrl+'/boysen/admin-comment/get-specific',
                        params   : {
                            videoId   : $scope.videoId,
                            page    : page,
                            row     : count,
                        }
                    }).then(function successCallback(response){
                        $scope.tableBasic2.total(response.data.total);
                        $scope.contentComment       = response.data.comments == null ? [] : response.data.comments;
                        data = $filter('orderBy')($scope.contentComment, params.orderBy())
                        $defer.resolve(data);
                        $scope.contentTotalComment  = response.data.total;
                        angular.element('#commentDiv').removeClass('d-none');
                    }, function errorCallback(response){
                        swal("Sorry", response.data.error.errorDev.dev, "error");
                    });
                }
            })
       };

       $scope.getSubComment = function(comment){
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/admin-comment/get-subcomments',
                params   : {
                    videoId   : $scope.videoId,
                    page    : 1,
                    row     : 10,
                    commentId : comment.id,
                }
            }).then(function successCallback(response){
                // $scope.tableBasic3.total(response.data.total);
                $scope.subComment       = response.data.comments == null ? [] : response.data.comments;
                $scope.subCommentTotal  = response.data.total;
                // data = $filter('orderBy')($scope.contentComment, params.orderBy())
                // $defer.resolve(data);
                // $scope.contentTotalComment  = response.data.total;
                $('html, body').animate({
                    scrollTop: $("#commentDiv").offset().top - 300
                }, 100);
            }, function errorCallback(response){
                swal("Sorry", response.data.error.errorDev.dev, "error");
            });
            // $scope.tableBasic3 = new ngTableParams({
            //     page: 1,            // show first page
            //     count: 10           // count per page
            // }, {
            //     total: 0, // length of data
            //     getData: function ($defer, params) {
            //         var page = params.page();
            //         var count = params.count();
            //         $http({
            //             method   : "GET",
            //             url      : apiUrl+'/boysen/admin-comment/get-subcomments',
            //             params   : {
            //                 videoId   : $scope.videoId,
            //                 page    : 1,
            //                 row     : 10,
            //                 commentId : comment.id,
            //             }
            //         }).then(function successCallback(response){
            //             $scope.tableBasic3.total(response.data.total);
            //             $scope.subComment       = response.data.comments == null ? [] : response.data.comments;
            //             data = $filter('orderBy')($scope.contentComment, params.orderBy())
            //             $defer.resolve(data);
            //             $scope.contentTotalComment  = response.data.total;
            //             $('html, body').animate({
            //                 scrollTop: $("#commentDiv").offset().top - 300
            //             }, 100);
            //         }, function errorCallback(response){
            //             swal("Sorry", response.data.error.errorDev.dev, "error");
            //         });
            //     }
            // });
       };

       $scope.getSeriesEpisodes  = function (seasonNumber){
        $scope.seasonEpisodes = seasonNumber;
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/episode-details/get',
            params   : {
                permalink       : $stateParams.videoname,
                seasonNumber    : seasonNumber,
            }
        }).then(function successCallback(response){
            $scope.contentEpisodeList   = response.data;
            $scope.contentDetail        = $scope.contentEpisodeList[$scope.contentEpisodeList.length - 1];
            $scope.videoId              = $scope.contentEpisodeList[$scope.contentEpisodeList.length - 1].id;
            $scope.getComment();
        }, function errorCallback(response){
            swal("Sorry", response.data.error.errorDev.dev, "error");
        });
       };

       $scope.getEpisodeDetails = function(episode){
        $scope.contentDetail = JSON.parse(episode);
        $scope.videoId       = JSON.parse(episode).id;
        $scope.subComment = [];$scope.subCommentTotal = 0;
        $scope.getComment();
       };
       
       $scope.refreshCachedData = function(permalink){
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/content-details/get',
            params   : {
                permalink   : permalink,
                user_id     : null,
                recommended : 10,
                refresh     : true
            }
        }).then(function successCallback(response){
            swal("Done!", "Data Successfully Cached", "success");
            $scope.getBoysenData();
        }, function errorCallback(response){

        });
       };

       $scope.getViewLogs = function(){
        $scope.tableContentLogs = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
              var page = params.page();
              var count = params.count();
              $http({
                  method   : "GET",
                  url      : apiUrl+'/boysen/content-view-logs/get',
                  params   : {
                    page        : page,
                    row         : count,
                    orderBy     : params.orderBy()[0],
                    dateFrom    : $scope.logsFilterParams.date_filter_from,
                    dateTo      : $scope.logsFilterParams.date_filter_to,
                    content_name: $scope.logsFilterParams.content_name
                  }
              }).then(function successCallback(response){
                    $scope.tableContentLogs.total(response.data.total);
                    $scope.contentViewLogsList = response.data.list == null ? [] : response.data.list;
                    data = $filter('orderBy')($scope.contentViewLogsList, params.orderBy())
                    $defer.resolve(data);
              }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
              });
            }
        });
       };

       $scope.getEpisodeLogs = function(){
           console.log('asdasd');
        $scope.tableEpisodeLogs = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
              var page = params.page();
              var count = params.count();
              $http({
                  method   : "GET",
                  url      : apiUrl+'/boysen/episode-view-logs/get',
                  params   : {
                    page    : page,
                    row     : count,
                    orderBy : params.orderBy()[0],
                    dateFrom: $scope.logsFilterParams2.date_filter_from,
                    dateTo  : $scope.logsFilterParams2.date_filter_to,
                    content_name: $scope.logsFilterParams2.content_name,
                    episode_name: $scope.logsFilterParams2.episode_name
                  }
              }).then(function successCallback(response){
                    $scope.tableEpisodeLogs.total(response.data.total);
                    $scope.episodeViewLogsList = response.data.list == null ? [] : response.data.list;
                    data = $filter('orderBy')($scope.episodeViewLogsList, params.orderBy())
                    $defer.resolve(data);
              }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
              });
            }
        });
       };

       $scope.getDurationLogs = function(){
        console.log('asdasd2');
        $scope.tableDurationLogs = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
            var page = params.page();
            var count = params.count();
            $http({
                method   : "GET",
                url      : apiUrl+'/boysen/duration-view-logs/get',
                params   : {
                    page    : page,
                    row     : count,
                    orderBy : params.orderBy()[0],
                    dateFrom: $scope.logsFilterParams3.date_filter_from,
                    dateTo  : $scope.logsFilterParams3.date_filter_to,
                    content_name: $scope.logsFilterParams3.content_name,
                    episode_name: $scope.logsFilterParams3.episode_name
                }
            }).then(function successCallback(response){
                    $scope.tableDurationLogs.total(response.data.total);
                    $scope.durationViewLogsList = response.data.list == null ? [] : response.data.list;
                    data = $filter('orderBy')($scope.durationViewLogsList, params.orderBy())
                    $defer.resolve(data);
            }, function errorCallback(response){
                    swal("Sorry", response.data.error.errorDev.dev, "error");
            });
            }
        });
        };
      
        $scope.upload_csv = function () {
           
            $scope.isUploadCsv = true;
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
            var isExist = [];
            $scope.arraylist = [];
            var arrayRows = [];
            var arrayRows2 = [];
            var rowsName = [];
            $scope.lengthArrayAccountNum = [];
            var modalDetails = '';
            var loopCount = 0;
            var arryCompile = '';
            $scope.globalPost = [];
            $scope.totalPageViews = "";
            $scope.totalDayIndexViews = "";
            $scope.globalPageViews = {};
            $scope.globalDayIndexViews = [];
            

            if (regex.test(fileUpload.value.toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var i = 0,
                            ri = 0;
                        var ctr = 0;
                        var rows = e.target.result.split("\n");
                        var header = "";
                        var resultRows;
                   
                        do {
                            if (rows[ri].toString().includes("#")) {
                                delete rows[ri];
                            }

                            if (rows[ri] != '' && rows[ri] != undefined) {                            
                                var resultHeader1 = rows[ri].split(",");
                                
                                
                                if (resultHeader1[0].trim() == "Page" && resultHeader1[1].trim() == "Pageviews") { 
                                     header = resultHeader1;    
                                                                 
                                } else if (resultHeader1[0].trim() == "Day Index" && resultHeader1[1].trim() == "Pageviews") { 
                                     header = resultHeader1;                                                                   
                                }

                                if (header[0].trim() == "Page" && header[1].trim() == "Pageviews") {                                     
                                    resultRows = rows[ri].split(",");
                                    // console.log(resultRows[0]);
                                    if (resultRows[0] == "") {
                                        $scope.totalPageViews = resultRows.slice(1, 3).join(",").toString();
                                    } else {         
                                        if (resultRows[0] != "Page" && resultRows[0] != "Pageviews") {
                                            $scope.globalPageViews[ctr] = { "Page": resultRows[0], "Pageview": resultRows[1] };
                                            arrayRows.push($scope.globalPageViews[ctr]);
                                            ctr++;
                                        }
                                    }                                                                                                                                                                          
                                } else if (header[0].trim() == "Day Index" && header[1].trim() == "Pageviews") { 
                                                                 
                                    resultRows = rows[ri].split(',');
                                    if (resultRows[0] == "") {                                        
                                        $scope.totalDayIndexViews = resultRows.slice(1, 3).join(",").toString();                                        
                                    } else {
                                        arrayRows2.push(resultRows);
                                    }                                                                    
                                }                                                                
                            }
                            ri++;
                            
                        } while (ri < rows.length);                    
                        $scope.globalDayIndexViews = arrayRows2;
                        $scope.pageViewsList = arrayRows;                       
                    }
                    reader.readAsText(fileUpload.files[0]);
                }
                else {
                    swal("Sorry", "This browser does not support HTML5.", "error");                                        
                }
            }
            else {
                swal("Sorry","Please upload a valid CSV file.", "error");                
            }
        }


        
        $scope.loadOrigContent = function () {
            console.log("loadOrigContent");
            $scope.isUploadCsv = false;
        };
      
       $scope.exportViewLogs = function(){
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/content-view-logs/export',
            params   : {
              dateFrom      : $scope.logsFilterParams.date_filter_from,
              dateTo        : $scope.logsFilterParams.date_filter_to,
              content_name  : $scope.logsFilterParams.content_name
            }
        }).then(function successCallback(response){            
            var filePath = response.data.dev;
            var link = document.createElement('a');
            link.target = "_blank";
            link.href = filePath;
            link.download = filePath; //filePath.substr(filePath.lastIndexOf('/') + 1);
            link.click();
        }, function errorCallback(response){
              swal("Sorry", response.data.error.errorDev.dev, "error");
        });
       };

       $scope.exportViewLogsDuration = function(){
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/duration-view-logs/export',
            params   : {
              dateFrom: $scope.logsFilterParams.date_filter_from,
              dateTo  : $scope.logsFilterParams.date_filter_to,
              content_name: $scope.logsFilterParams3.content_name,
              episode_name: $scope.logsFilterParams3.episode_name
            }
        }).then(function successCallback(response){            
            var filePath = response.data.dev;
            var link = document.createElement('a');
            link.target = "_blank";
            link.href = filePath;
            link.download = filePath; //filePath.substr(filePath.lastIndexOf('/') + 1);
            link.click();
        }, function errorCallback(response){
              swal("Sorry", response.data.error.errorDev.dev, "error");
        });
       };

       $scope.exportViewLogsEpisode = function(){
        $http({
            method   : "GET",
            url      : apiUrl+'/boysen/episode-view-logs/export',
            params   : {
              dateFrom: $scope.logsFilterParams2.date_filter_from,
              dateTo  : $scope.logsFilterParams2.date_filter_to,
              content_name: $scope.logsFilterParams2.content_name,
              episode_name: $scope.logsFilterParams2.episode_name
            }
        }).then(function successCallback(response){            
            var filePath = response.data.dev;
            var link = document.createElement('a');
            link.target = "_blank";
            link.href = filePath;
            link.download = filePath; //filePath.substr(filePath.lastIndexOf('/') + 1);
            link.click();
        }, function errorCallback(response){
              swal("Sorry", response.data.error.errorDev.dev, "error");
        });
       };
}])

 

    .controller('tableCtrl', ['$scope', '$filter', '$sce', 'ngTableParams', 'sampleData',function($scope, $filter, $sce, ngTableParams, sampleData) {
        var data = sampleData.data;

        //Basic Example
        this.tableBasic = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: data.length, // length of data
            getData: function ($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        })

        //Sorting
        this.tableSorting = new ngTableParams({
            page: 1,            // show first page
            count: 10,           // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        })

        //Filtering
        this.tableFilter = new ngTableParams({
            page: 1,            // show first page
            count: 10
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

                this.id = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.email = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.username = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.contact = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve(this.id, this.name, this.email, this.username, this.contact);
            }
        })

        //Editable
        this.tableEdit = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    }])
