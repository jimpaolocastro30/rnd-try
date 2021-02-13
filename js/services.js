boysen

    // =========================================================================
    // Malihu Scroll - Custom Scroll bars
    // =========================================================================
    .service('scrollService', function() {
        var ss = {};
        ss.malihuScroll = function scrollBar(selector, theme, mousewheelaxis) {
            $(selector).mCustomScrollbar({
                theme: theme,
                scrollInertia: 100,
                axis:'yx',
                mouseWheel: {
                    enable: true,
                    axis: mousewheelaxis,
                    preventDefault: true
                }
            });
        }

        return ss;
    })

    .service('deleteArrayItem',function(){
          this.delete = function(parent,item){
              var index = parent.indexOf(item);
              parent.splice(index, 1);
          }
    })

    //==============================================
    // BOOTSTRAP GROWL
    //==============================================
    .service('growlService', function(){
        var gs = {};
        gs.growl = function(message, type) {
            $.growl({
                message: message
            },{
                type: type,
                allow_dismiss: false,
                label: 'Cancel',
                className: 'btn-xs btn-inverse zIndexAboveHeader',
                placement: {
                    from: 'top',
                    align: 'right'
                },
                delay: 10000,
                z_index: 1050,
                animate: {
                        enter: 'animated bounceIn',
                        exit: 'animated bounceOut'
                },
                offset: {
                    x: 20,
                    y: 140
                }
            });
        }

        return gs;
    })

    //===============================================================
    // Check input if null, empty or 0 supports text and select input
    //===============================================================
    .service('inputChecker', function(){
        this.textInput = function(fields){
            if(fields != undefined){
                var i   =   fields.length;
                var res =   false;
                while(i--){
                    var thisInput = angular.element("#"+fields[i]).val();

                    if(thisInput.trim().length == 0){
                        angular.element("#"+fields[i]+"Container").removeClass('has-success');
                        angular.element("#"+fields[i]+"Container").addClass('has-error');
                        res = true;
                    }
                    else{
                        angular.element("#"+fields[i]+"Container").removeClass('has-error');
                        angular.element("#"+fields[i]+"Container").addClass('has-success');
                    }
                }
                return res;
            }
        }
        this.selectInput = function(fields){
            if(fields != undefined){
                var i =   fields.length;
                var res =   false;
                while(i--){
                    var thisInput = angular.element("#"+fields[i]).val();
                    if(thisInput == "" || thisInput == null){
                        angular.element("#"+fields[i]+"Container").removeClass('has-success');
                        angular.element("#"+fields[i]+"Container").addClass('has-error');
                        res = true;
                    }
                    else{
                        angular.element("#"+fields[i]+"Container").removeClass('has-error');
                        angular.element("#"+fields[i]+"Container").addClass('has-success');
                    }
                }
                return res;
            }
        }
        this.maskInput = function(fields){
            if(fields != undefined){
                var i =   fields.length;
                var res =   false;
                while(i--){
                    if(!$("#"+fields[i]).inputmask("isComplete")){
                        angular.element("#"+fields[i]+"Container").removeClass('has-success');
                        angular.element("#"+fields[i]+"Container").addClass('has-error');
                        res = true;
                    }
                    else{
                        angular.element("#"+fields[i]+"Container").removeClass('has-error');
                        angular.element("#"+fields[i]+"Container").addClass('has-success');
                    }
                }
                return res;
            }
        }

    })

    //============================================
    // Create modal
    //============================================
    .service('createModal',function($uibModal,$log){
        var md  =   {};

        md.modalInstances   =   function(animation, size, backdrop, keyboard,content,templateUrl, scope){
            var modalInstance   =   $uibModal.open({
                animation   :   animation,
                templateUrl :   templateUrl,
                controller  :   'ModalInstanceCtrl',
                size        :   size,
                scope       :   scope,
                backdrop    :   backdrop,
                keyboard    :   keyboard,
                resolve     :   {
                    content :   function () {
                        return content;
                    }
                }
            });
        }

        return md;
    })

    //============================================
    // Swal prompt
    //============================================
    .service('prompt',function(){
        this.success = function(message){
           swal('Success',message,'success');
        }
        this.warning = function(message){
           swal('Oops',message,'warning');
        }
        this.error = function(message){
           swal('Error',message,'error');
        }
    })

    //============================================
    // Get user token
    //============================================
    .service('userSession',function(webStorage){
        this.getToken = function(){
			if(webStorage.local.has("token")){
				return "Bearer " + webStorage.local.get("token");
			}
			return null;
        }

        this.getCompanyId = function(){
			if(webStorage.local.has("session")){
                var x = webStorage.local.get("session");
				return parseInt(x.company_id);
			}
			return null;
        }

        this.getCompanyIdCrypt = function(){
            if(webStorage.local.has("session")){
                var x = webStorage.local.get("session");
                return x.company_id_crypt;
            }
            return null;
        }

        this.getCompanyName = function(){
            if(webStorage.local.has("session")){
                var x = webStorage.local.get("session");
                if(x.company_name == ""){
                    return "DEFAULT";
                }
                return x.company_name;
            }
            return null;
        }
        this.getUserId = function() {
            if (webStorage.local.has("session")) {
                var x = webStorage.local.get("session");
                if (x.id == "") {
                    return "No user id found!";
                }
                return x.id;
            }
        }
        this.getUserToken = function() {
            if (webStorage.local.has("session")) {
                var x = webStorage.local.get("session");
                if (x.crypt == "") {
                    return "No user id token found!";
                }
                return x.crypt;
            }
        }
        this.getUserHash = function() {
            if (webStorage.local.has("session")) {
                var x = webStorage.local.get("session");
                if (x.user_hash == "") {
                    return "No user id token found!";
                }
                return x.user_hash;
            }
        }
        this.getCompanyHash = function() {
            if (webStorage.local.has("session")) {
                var x = webStorage.local.get("session");
                if (x.company_hash == "") {
                    return "No user id token found!";
                }
                return x.company_hash;
            }
        }
        this.getUpdateId = function(type) {
            if (type == "sss") {
                if (webStorage.local.has("payroll_update")) {
                    var x = webStorage.local.get("payroll_update");
                    if (x.sss == 0) {
                        return "NO UPDATES AVAILABLE";
                    }
                    return x.sss;
                }
            }else if (type == "hdmf") {
                if (webStorage.local.has("payroll_update")) {
                    var x = webStorage.local.get("payroll_update");
                    if (x.hdmf == 0) {
                        return "NO UPDATES AVAILABLE";
                    }
                    return x.hdmf;
                }
            }else if (type == "philhealth") {
                if (webStorage.local.has("payroll_update")) {
                    var x = webStorage.local.get("payroll_update");
                    if (x.philhealth == 0) {
                        return "NO UPDATES AVAILABLE";
                    }
                    return x.philhealth;
                }
            }else if (type == "tax-excemption") {
                if (webStorage.local.has("payroll_update")) {
                    var x = webStorage.local.get("payroll_update");
                    if (x.taxexemption == 0) {
                        return "NO UPDATES AVAILABLE";
                    }
                    return x.taxexemption;
                }
            }else if (type == "taxtable") {
                if (webStorage.local.has("payroll_update")) {
                    var x = webStorage.local.get("payroll_update");
                    if (x.taxtable == 0) {
                        return "NO UPDATES AVAILABLE";
                    }
                    return x.taxtable;
                }
            }

        }
    })

    //============================================
    // search, delete array object
    //============================================
	.service('arrayFunc', function(){
		this.deleteByAttr = function(arr, attr, value){
		  var i = arr.length;
		  while(i--){
			 if( arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value ) ){
				 arr.splice(i,1);
			 }
		  }
		  return arr;
		}

		//remove content that thats not belong to logCompanyId adn retain global content
		this.deleteByAttr2 = function(arr, attr, value){
		  var i = arr.length;
		  while(i--){
			  if( arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)){
				  //content for logCompanyId
			  }
			  else if( arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === "0")){
				  //global admin content
			  }
			  else{
				  arr.splice(i,1); //remove does not belong to that logCompanyId
			  }

		  }
		  return arr;
		}

		this.searchByAttr = function(arr, attr, value){
		  var i = arr.length;
		  while(i--){
			 if( arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value )){
				  return true;
			 }
		  }
		  return false;
		}
	})
    //============================================
    // Validate inputs
    //============================================
    .service('validateInputs', function() {
        this.EMAIL = function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        this.TELEPHONE = function(telephone) {
            return telephone.match(/\d/g).length===9;
        }
        this.FAX = function(fax) {
            return fax.match(/\d/g).length===9;
        }
        this.SSS = function(sss) {
            return sss.match(/\d/g).length===10;
        }
        this.PHILHEALTH = function(philhealth) {
            return philhealth.match(/\d/g).length===12;
        }
        this.HDMF = function(hdmf) {
            return hdmf.match(/\d/g).length===10;
        }
        this.TIN  = function(tin) {
            return tin.match(/\d/g).length===9;
        }
    })

    .service('getFile', function() {
        /*
            Use this to path your file
            to do this you might want to initialize your globale path in all.js
            ex. logoPath then pass the logo parameter and remove it's qoute if string
            lastly return it as a string
        */
        this.Logo = function(logo) {
            var path = logoPath+logo.replace(/['"]+/g, '')
            return path.toString();
        }
    })

    .service('validState',function(webStorage){
        var role = webStorage.local.get('crudRole');
        this.add = function(successState) {
            if (webStorage.local.has('crudRole')) {
                return permission = role.add == 0 ? true : false;
            }
        }
        this.edit = function(successState) {
            if (webStorage.local.has('crudRole')) {
                return permission = role.edit == 0 ? true : false;
            }
        }
        this.delete = function(successState) {
            if (webStorage.local.has('crudRole')) {
                return permission = role.delete == 0 ? true : false;
            }
        }
        this.update = function(successState) {
            if (webStorage.local.has('crudRole')) {
                return permission = role.update == 0 ? true : false;
            }
        }
    })

    .service('httpPromisedRequest', ['$http','$q',function($http, $q){
      this.getRequestData = function(url, data = null){
        var deferredAbort = $q.defer();
        var request = $http({
            method: 'GET',
            url: url,
            headers :   {
                'Content-Type'  :   'application/x-www-form-urlencoded; charset=UTF-8',
                // 'Authorization' :   userSession.getBearerToken(),
            },
            params: data,
            timeout: deferredAbort.promise
        });
        var promise = request.then(
            function( response ) {
                return( response.data );
            },
            function( response ) {
                return( response.data );
            }
        );
        promise.abort = function() {
            deferredAbort.resolve();
        };
        promise.finally(
            function() {
                promise.abort = angular.noop;
                deferredAbort = request = promise = null;
            }
        );
        return( promise );
      }

      this.customHttpRequest = function(method, url, data = null){
          var deferredAbort = $q.defer();
          var request = $http({
              method: method,
              url: url,
              headers :   {
                  'Content-Type'  :   'application/x-www-form-urlencoded; charset=UTF-8',
                  // 'Authorization' :   userSession.getBearerToken(),
              },
              data: data,
              timeout: deferredAbort.promise
          });
          var promise = request.then(
              function( response ) {
                  return( response.data );
              },
              function( response ) {
                  return( response.data );
              }
          );
          promise.abort = function() {
              deferredAbort.resolve();
          };
          promise.finally(
              function() {
                  promise.abort = angular.noop;
                  deferredAbort = request = promise = null;
              }
          );
          return( promise );
        }
    }])

    // =========================================================================
    // HEADER POPUP
    // =========================================================================

    .service('headerPopup', function(){
      this.hide = function(){
        $('.header-popup').animate({ 'margin-top': '-100px' }, 300, function(){
          $(this).remove();
        });
      }
      this.show = function(){
        var popup = '<div style="position: fixed; width: 100%; z-index: 2; height:  calc(100px / 2.2); margin-top: -100px;" class="header-popup"> ' +
                    '  <div class="header-popup-content" style="width:  99%; height: 100%; background:  green; margin: 3px auto; border: 1px solid #000000;"> ' +
                    '    <span style="margin-left: calc(100% / 2.2);" class="popup"> ' +
                    '      <div class="popup-close" style="display:  inline-block;"> ' +
                    '        <a class="popup-close-button" href="#" style="color: #000000; font-size:  30px;">×</a> ' +
                    '      </div> ' +
                    '    </span><span style="font-size: 17px; position: absolute; margin: 8px 0 0 10px;" class="popup"> ' +
                    '      <a href="#" style="color: #000000; text-decoration:  underline;" class="popup-link">asdasdaas</a> ' +
                    '    </span> ' +
                    '  </div> ' +
                    '</div> ';
        $('header').after(popup);
        $('.header-popup').animate({ 'margin-top': 0 }, 'slow');
      }
    })
    .service('facebookService', function($q) {
        this.getMyLastName = function() {
                var deferred = $q.defer();
                FB.api('/me', {
                    fields: 'last_name'
                }, function(response) {
                    if (!response || response.error) {
                        deferred.reject('Error occured');
                    } else {
                        deferred.resolve(response);
                    }
                });
                return deferred.promise;
            }
    })
    .service('genericServices',function(){
        this.fancyTimeString = function(sec){
            return moment().startOf('day')
            .seconds(parseInt(sec))
            .format('mm:ss');
        }
    });
