boysen
    .directive('changeLayout', function(){

        return {
            restrict: 'A',
            scope: {
                changeLayout: '='
            },

            link: function(scope, element, attr) {

                //Default State
                if(scope.changeLayout === '1') {
                    element.prop('checked', true);
                }

                //Change State
                element.on('change', function(){
                    if(element.is(':checked')) {
                        localStorage.setItem('ma-layout-status', 1);
                        scope.$apply(function(){
                            scope.changeLayout = '1';
                        })
                    }
                    else {
                        localStorage.setItem('ma-layout-status', 0);
                        scope.$apply(function(){
                            scope.changeLayout = '0';
                        })
                    }
                })
            }
        }
    })

    .directive('sparklineBar', function(){
        return {
            restrict: 'A',
            link: function(scope, element) {
                function sparkLineBar(selector, values, height, barWidth, barColor, barSpacing) {
                   $(selector).sparkline(values, {
                        type        :   'bar',
                        height      :   height,
                        barWidth    :   barWidth,
                        barColor    :   barColor,
                        barSpacing  :   barSpacing
                   });
                }
                sparkLineBar('.stats-bar', [30,12,22,8,6,10,4,5,4,5,7,26], '45px', 3, '#fff', 5);
            }
        }
    })

    .directive('sparklineLine', function(){
        return {
            restrict: 'A',
            link: function(scope, element) {
                function sparkLineLine(selector, values, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor) {
                    $(selector).sparkline(values, {
                        type                :   'line',
                        width               :   width,
                        height              :   height,
                        lineColor           :   lineColor,
                        fillColor           :   fillColor,
                        lineWidth           :   lineWidth,
                        maxSpotColor        :   maxSpotColor,
                        minSpotColor        :   minSpotColor,
                        spotColor           :   spotColor,
                        spotRadius          :   spotRadius,
                        highlightSpotColor  :   hSpotColor,
                        highlightLineColor  :   hLineColor
                    });
                }
               sparkLineLine('.stats-total-amount', [9,4,6,5,6,4,5,7,9,3,6,5], 85, 45, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)');
            }
        }
    })

    .directive('toggleSidebar', function(){

        return {
            restrict: 'A',
            scope: {
                modelLeft: '=',
                modelRight: '='
            },

            link: function(scope, element, attr) {
                element.on('click', function(){

                    if (element.data('target') === 'mainmenu') {
                        if (scope.modelLeft === false) {
                            scope.$apply(function(){
                                scope.modelLeft = true;
                            })
                        }
                        else {
                            scope.$apply(function(){
                                scope.modelLeft = false;
                            })
                        }
                    }

                    if (element.data('target') === 'chat') {
                        if (scope.modelRight === false) {
                            scope.$apply(function(){
                                scope.modelRight = true;
                            })
                        }
                        else {
                            scope.$apply(function(){
                                scope.modelRight = false;
                            })
                        }

                    }
                })
            }
        }

    })

    .directive('toggleSubmenu', function(){

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    element.next().slideToggle(200);
                    element.parent().toggleClass('toggled');
                });
            }
        }
    })

    .directive('stopPropagate', function(){
        return {
            restrict: 'C',
            link: function(scope, element) {
                element.on('click', function(event){
                    event.stopPropagation();
                });
            }
        }
    })

    .directive('aPrevent', function(){
        return {
            restrict: 'C',
            link: function(scope, element) {
                element.on('click', function(event){
                    event.preventDefault();
                });
            }
        }
    })

    .directive('print', function(){
        return {
            restrict: 'A',
            link: function(scope, element){
                element.click(function(){
                    window.print();
                })
            }
        }
    })

    .directive('acceptValidName', function() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {
                    if (inputValue == null)
                    return ''
                    cleanInputValue = inputValue.replace(/[^\w\s'-\.]/gi, '');
                    if (cleanInputValue != inputValue) {
                        modelCtrl.$setViewValue(cleanInputValue);
                        modelCtrl.$render();
                    }
                    return cleanInputValue;
                });
            }
        }
    })

    .directive('noSpecialChar', function() {
        return {
          require: 'ngModel',
          restrict: 'A',
          link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue) {
              if (inputValue == null)
                return ''
              cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
              if (cleanInputValue != inputValue) {
                modelCtrl.$setViewValue(cleanInputValue);
                modelCtrl.$render();
              }
              return cleanInputValue;
            });
          }
        }
    })

    .directive('forNamesOnly', function() {
        return {
          require: 'ngModel',
          restrict: 'A',
          link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue) {
              if (inputValue == null)
                return ''
              cleanInputValue = inputValue.replace(/[^a-zA-ZñÑ.\-s ]/g, '');
              if (cleanInputValue != inputValue) {
                modelCtrl.$setViewValue(cleanInputValue);
                modelCtrl.$render();
              }
              return cleanInputValue;
            });
          }
        }
      })

    .directive('emailOnly', function() {
          return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl) {
              modelCtrl.$parsers.push(function(inputValue) {
                if (inputValue == null)
                  return ''
                cleanInputValue = inputValue.replace(/[\s]/gi,'');
                if (cleanInputValue != inputValue) {
                  modelCtrl.$setViewValue(cleanInputValue);
                  modelCtrl.$render();
                }
                return cleanInputValue;
              });
            }
          }
        })

      .directive('passwordOnly', function(){
         return {
             require: 'ngModel',
             restrict: 'A',
             link: function(scope, element, attrs, modelCtrl) {
                 modelCtrl.$parsers.push(function(inputValue) {
                   if (inputValue == null)
                     return ''
                   cleanInputValue = inputValue.replace(/[\s]/gi,'');
                   if (cleanInputValue != inputValue) {
                     modelCtrl.$setViewValue(cleanInputValue);
                     modelCtrl.$render();
                   }
                   return cleanInputValue;
                 });
             }
         }
      })

    .directive('numberOnly', function() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {
                    if (inputValue == null){
                        return ''
                    }

                    cleanInputValue = inputValue.replace(/[^0-9]/g, '');

                    if (cleanInputValue != inputValue) {
                        modelCtrl.$setViewValue(cleanInputValue);
                        modelCtrl.$render();
                    }
                    return cleanInputValue;
                });
            }
        }
    })

    .directive('ipAddressOnly', function() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue){
              if (inputValue == null)
                return ''
              cleanInputValue = inputValue.replace(/[^0-9.]/g, '');
              if (cleanInputValue != inputValue) {
                modelCtrl.$setViewValue(cleanInputValue);
                modelCtrl.$render();
              }
              return cleanInputValue;
            });
          }
        }
      })

    .directive('autofocus', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link : function($scope, $element) {
                $timeout(function() {
                    $element[0].focus();
                });
            }
        }
    }])

    .directive("limitTo", [function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var limit = parseInt(attrs.limitTo);
                angular.element(elem).on("keypress", function(e) {
                    if (this.value.length == limit) e.preventDefault();
                });
            }
        }
    }])

    .directive('myEnter', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, event) {
            element.bind("keydown keypress", function (ev) {
                if(ev.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.myEnter);
                    });
                    ev.preventDefault();
                }
            });
          }
        }
    })

    .directive('onFinishRender', function ($timeout) {
        return {
         restrict: 'A',
         link: function (scope, element, attr) {
             if (scope.$last === true) {
                 $timeout(function () {
                     scope.$emit('ngRepeatFinished');
                 });
             }
         }
        }
    })

    .directive('capitalizeFirst', function (uppercaseFilter, $parse) {
        return {
          require: 'ngModel',
          scope: {
              ngModel: "="
          },
          link: function (scope, element, attrs, modelCtrl) {

              scope.$watch("ngModel", function () {
                  if(scope.ngModel != null){
                      scope.ngModel = scope.ngModel.replace(/^(.)|\s(.)/g, function(v){ return v.toUpperCase( ); });
                  }
              });
          }
        };
    })

    .directive('appFilereader', function($q) {
        var slice = Array.prototype.slice;

        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, element, attrs, ngModel) {
              if (!ngModel) return;

              ngModel.$render = function() {};
              element.bind('change', function(e) {
                  var element = e.target;

                  $q.all(slice.call(element.files, 0).map(readFile))
                      .then(function(values) {
                          if (element.multiple) ngModel.$setViewValue(values);
                          else ngModel.$setViewValue(values.length ? values[0] : null);
                      });

                  function readFile(file) {
                      var deferred = $q.defer();

                      var reader = new FileReader();
                      reader.onload = function(e) {
                          deferred.resolve(e.target.result);
                      };
                      reader.onerror = function(e) {
                          deferred.reject(e);
                      };
                      reader.readAsDataURL(file);

                      return deferred.promise;
                  }

              });
          }
        };
    })

    .directive('datepickerLocaldate', ['$parse', function ($parse) {
          var directive = {
              restrict: 'A',
              require: ['ngModel'],
              link: link
          };
          return directive;

          function link(scope, element, attr, ctrls) {
              var ngModelController = ctrls[0];
              ngModelController.$parsers.push(function (viewValue) {
                  viewValue.setMinutes(viewValue.getMinutes() - viewValue.getTimezoneOffset());
                  return viewValue.toISOString().substring(0, 10);
              });
          }
    }])

    .directive('initializeLoader', function () {
        return {
        restrict: 'AC',
        link: function($scope, element) {
          element.bind('click', function(e){
                if($scope.oldNavigationState != $scope.navigationState){
                    $scope.oldNavigationState = e.currentTarget.dataset.menuItem
                    angular.element("#spinnerContainer").removeClass("hidden");

                    setTimeout(function(){
                        angular.element("#spinnerContainer").addClass("hidden");
                    },500)
                }
          });
        }
        };
    })

    .directive('decimalNumber', function() {
        return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return;
          }

          var origClean = "";

          ngModelCtrl.$parsers.push(function(val) {
            if (angular.isUndefined(val)) {
                var val = '';
            }
            var clean = val.replace(/[^0-9\.]/g, '');
            var decimalCheck = clean.split('.');

            if(!angular.isUndefined(decimalCheck[1])) {
                decimalCheck[1] = decimalCheck[1].slice(0,2);
                clean =decimalCheck[0] + '.' + decimalCheck[1];
            }

            origClean = clean;

            if (val !== clean) {
                ngModelCtrl.$setViewValue(clean);
                ngModelCtrl.$render();
            }

            return clean;
          });

          element.bind('keypress', function(event) {
            if(event.keyCode === 32) {
              event.preventDefault();
            }
          });

          element.bind('blur', function(event){
              if(origClean != ""){
                  var decimalCheck = origClean.split('.');

                  if(angular.isUndefined(decimalCheck[1])){
                      newClean = origClean + ".00";
                      scope.$apply(function() {
                          ngModelCtrl.$setViewValue(newClean);
                          ngModelCtrl.$render();
                      });
                  }
                  else if(decimalCheck[1] == ""){
                      newClean = origClean + "00";
                      scope.$apply(function() {
                          ngModelCtrl.$setViewValue(newClean);
                          ngModelCtrl.$render();
                      });
                  }
                  else if(decimalCheck[1].length == 1){
                      newClean = origClean + "0";
                      scope.$apply(function() {
                          ngModelCtrl.$setViewValue(newClean);
                          ngModelCtrl.$render();
                      });
                  }
              }
          });
        }
        };
    })

    .directive('updateToBol', function ($parse) {
        return {
          require: '?ngModel',
          link: function (scope, element, attrs, ngModel) {
              var ngModelGet = $parse(attrs.ngModel);
              scope.$watch(attrs.ngModel, function () {
                  if (ngModelGet(scope) == '1') {
                      var model = $parse(attrs.ngModel);
                      model.assign(scope, true);
                  }
                  else if (ngModelGet(scope) == '0') {
                      var model = $parse(attrs.ngModel);
                      model.assign(scope, false);
                  }
              });
          }
        }
    })

    .directive('floatLabel', function() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl,$event) {
                modelCtrl.$parsers.push(function(inputValue) {

                    if (inputValue.trim().length != 0){
                        var x = event.target.offsetParent;
                        angular.element(x).addClass('fg-toggled-alt');
                    }
                    else{
                        var x = event.target.offsetParent;
                        angular.element(x).removeClass('fg-toggled-alt');
                    }
                });
            }
        }
    })

    .directive('fglineDefault', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, ngModelCtrl, $event) {
                ngModelCtrl.$parsers.push(function(inputValue) {
                    if (inputValue == null || inputValue == ''){
                        var x = element[0].id;
                        angular.element("#"+x+"Container").removeClass('has-success');
                        angular.element("#"+x+"Container").removeClass('has-error');
                    }
                    else{
                        element[0].focus();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('uppercaseOnly', [ function() {
        return {
          restrict: 'A',
          require: 'ngModel',
          link: function(scope, element, attrs, ctrl) {
            element.on('keypress', function(e) {
              var char = e.char || String.fromCharCode(e.charCode);
            });

            function parser(value) {
              if (ctrl.$isEmpty(value)) {
                return value;
              }
              var formatedValue = value.toUpperCase();
              if (ctrl.$viewValue !== formatedValue) {
                ctrl.$setViewValue(formatedValue);
                ctrl.$render();
              }
              return formatedValue;
            }

            function formatter(value) {
              if (ctrl.$isEmpty(value)) {
                return value;
              }
              return value.toUpperCase();
            }

            ctrl.$formatters.push(formatter);
            ctrl.$parsers.push(parser);
          }
        };
    }])

    .directive('floatContent', function($timeout){
        return {
            restrict: 'A',
            priority: -1,
            link: function(scope, element, attr) {
                scope.$watch(attr.ngModel,function(value){
                    $timeout(function () {
                        if (value){
                            element.parent('.fg-line').addClass('fg-toggled').addClass('fg-toggle-off');
                        } else if(element.attr('placeholder') === undefined) {
                            if(!element.is(":focus"))
                            element.trigger("blur");
                        }
                    });
                });
            }
        };
    })
    .directive('statusSwitcher', function($http, userSession, prompt){
        return {
            restrict:   'A',
            scope   :   {
                info :  "="
            },
            link: function(scope, element, attr) {
                if (scope.info.status == 1) {
                    element.prop("checked", true);
                }else{
                    element.prop("checked", false);
                }
                element.bind('click', function(){
                    var currentStatus   =   element.is(':checked');
                    element.prop("checked", !currentStatus);
                    swal({
                        title               : "Are you sure?",
                        type                : "warning",
                        showCancelButton    : true,
                        confirmButtonColor  : "#DD6B55",
                        confirmButtonText   : "Ok!",
                        closeOnConfirm      : false
                    }, function(isConfirm){
                        if (isConfirm) {
                            element.prop("checked", currentStatus);
                            $http({
                                method  : 'PATCH',
                                url     :  baseUrl + "/api/v1/update-company-status",
                                headers : {
                                    'Content-Type' : 'application/json',
                                    'Authorization':  userSession.getToken()
                                },
                                data : {
                                    Data    : {
                                        id        :     scope.info.id,
                                        id_crypt  :     scope.info.company_id_crypt,
                                        status    :     currentStatus == true ? 1 : 0
                                    }
                                }
                            }).then(function successCallback(response) {
                                prompt.success(response.data);
                            }, function errorCallback(response){
                                prompt.error(response.data);
                            });
                        }
                    });
                })
            }
        }
    })

    .directive('caseChecker', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue) {
                if (inputValue == null)
                    return ''
                    cleanInputValue = inputValue.replace(/[^.-\w\s]/gi, '');
                    if (cleanInputValue != inputValue) {
                        modelCtrl.$setViewValue(cleanInputValue);
                        modelCtrl.$render();
                    }
                    return cleanInputValue;
                });
            }
        }
    })

    .directive('timeInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask(
                            "hh:mm:ss",
                            {
                               placeholder: "HH:MM XM",
                               insertMode: false,
                               showMaskOnHover: false,
                               hourFormat: 12,
                               mask: "h:s t\\M",
                            }
                        );
                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('durationInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask(
                            "HH:mm",
                            {
                               placeholder: "HH:MM",
                               insertMode: false,
                               showMaskOnHover: false,
                               hourFormat: 24,
                               mask: "h:s",
                            }
                        );
                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('telephoneInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask({
                            mask: "(99) 999 9999",
                            showMaskOnHover: false,
                        });
                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('mobileInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask({
                            mask: "+(99) 999 999 9999",
                            showMaskOnHover: false,
                        });

                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('sssInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask({
                            mask: "99 - 9999999 - 9",
                            showMaskOnHover: false,
                        });

                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('hdmfInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask({
                            mask: "9999 - 9999 - 99",
                            showMaskOnHover: false,
                        });

                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('philhealthInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask({
                            mask: "99 - 999999999 - 9",
                            showMaskOnHover: false,
                        });

                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('tinInput', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl){
                modelCtrl.$parsers.push(function(inputValue){
                    if (inputValue == null){
                        return '';
                    }
                    else{
                        $(element).inputmask({
                            mask: "999 - 999 - 999",
                            showMaskOnHover: false,
                        });

                        modelCtrl.$setViewValue(inputValue);
                        modelCtrl.$render();
                    }
                    return inputValue;
                });
            }
        }
    })

    .directive('tableHeadFixer', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attr){
                setTimeout(function () {
                    $(element).tableHeadFixer({"head": false, "foot": true,"left" : 2});
                }, 10);
            }
        };
    })

    .directive('moneyValidate',function(){
        return {
            retrict : "A",
            link    : function(scope,element,attr){
                element.bind("keyup",function(){
                    var newValue = element.val().replace(/[^0-9.]+/g, "")
                    element.val(newValue);
                });
                element.on("blur",function(){
                    var newValue = element.val().replace(/[^0-9.]+/g, "")
                    element.val(newValue);
                });
            }
        }
    })

    .directive('numberToString', function(){
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(value){
                    return '' + value;
                });
                ngModel.$formatters.push(function(value){
                    return value + '';
                });

            }
        }
    })

    .directive('triggerChosen', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attr){
                setTimeout(function(){
                    $(element).chosen();
                },150)
            }
        };
    })

    .directive('formatDefaultDate', function(){
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$formatters.push(function(value){
                    return moment(new Date(value)).format('MMMM DD, YYYY');
                });

            }
        }
    })

    // .directive("owlCarousel", function() {
    //     return {
    //         restrict: 'E',
    //         transclude: false,
    //         link: function(scope) {
    //             scope.initCarousel = function(element) {
    //                 // provide any default options you want
    //                 var defaultOptions = {};
    //                 var customOptions = scope.$eval($(element).attr('data-options'));
    //                 // combine the two options objects
    //                 for (var key in customOptions) {
    //                     defaultOptions[key] = customOptions[key];
    //                 }
    //                 // init carousel
    //                 var curOwl = $(element).data('owlCarousel');
    //                 if (!angular.isDefined(curOwl)) {
    //                     $(element).owlCarousel(defaultOptions);
    //                 }
    //                 scope.cnt++;
    //             };
    //         }
    //     };
    // }).directive('owlCarouselItem', [
    //     function() {
    //         return {
    //             restrict: 'A',
    //             transclude: false,
    //             link: function(scope, element) {
    //                 // wait for the last item in the ng-repeat then call init
    //                 if (scope.$last) {
    //                     console.log('lst element');
    //                     scope.initCarousel(element.parent());
    //                 }
    //             }
    //         };
    //     }
    // ])

    .directive('lazyLoad', [function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                const observer = new IntersectionObserver(loadImg)
                const img = angular.element(element)[0];
                observer.observe(img)
    
                function loadImg(changes){
                    changes.forEach(change => {
                        if(change.intersectionRatio > 0){
                            change.target.src = attrs.src;
                            change.target.classList.remove('img-blur');
                        }
                    })
                }    
    
            }
        }
    }])
    .directive('hires', function() {
        return {
          restrict: 'A',
          scope: { hires: '@' },
          link: function(scope, element, attrs) {
              element.one('load', function() {
                  element.attr('src', scope.hires);
              });
          }
        };
    })
    .directive('onScroll', function($timeout) {
        'use strict';
    
        return {
            scope: {
                onScroll: '&onScroll',
            },
            link: function(scope, element) {
                var scrollDelay = 250,
                    scrollThrottleTimeout,
                    throttled = false,
                    scrollHandler = function() {
                        if (!throttled) {
                            scope.onScroll();
                            throttled = true;
                            scrollThrottleTimeout = $timeout(function(){
                                throttled = false;
                            }, scrollDelay);
                        }
                    };
    
                element.on("scroll", scope.onScroll);
    
                scope.$on('$destroy', function() {
                    element.off('scroll', scrollHandler);
                });
            }
        };
    })
    .directive('scrollOnClick', function() {
        return {
          restrict: 'A',
          link: function(scope, $elm) {
            $elm.on('click', function() {
              $("body").animate({scrollTop: $elm.offset().top}, "slow");
            });
          }
        }
      })
      .directive('sbLoad', ['$parse', function ($parse) {
        return {
          restrict: 'A',
          link: function (scope, elem, attrs) {
            var fn = $parse(attrs.sbLoad);
            elem.on('load', function (event) {
               scope.$apply(function() {
                fn(scope, { $event: event });
              });
            });
          }
        };
      }])
      .directive('ddTextCollapse', ['$compile', function($compile) {


        return {
            restrict: 'A',
            scope: true,
            link: function(scope, element, attrs) {
      
      
                /* start collapsed */
                scope.collapsed = false;
      
      
                /* create the function to toggle the collapse */
                scope.toggle = function() {
                    scope.collapsed = !scope.collapsed;
                };
      
      
                /* wait for changes on the text */
                attrs.$observe('ddTextCollapseText', function(text) {
      
      
                    /* get the length from the attributes */
                    var maxLength = scope.$eval(attrs.ddTextCollapseMaxLength);
      
      
                    if (text.length > maxLength) {
                        /* split the text in two parts, the first always showing */
                        var firstPart = String(text).substring(0, maxLength);
                        var secondPart = String(text).substring(maxLength, text.length);
      
      
                        /* create some new html elements to hold the separate info */
                        var firstSpan = $compile('<span>' + firstPart + '</span>')(scope);
                        var secondSpan = $compile('<span ng-if="collapsed">' + secondPart + '</span>')(scope);
                        var moreIndicatorSpan = $compile('<span ng-if="!collapsed">... </span>')(scope);
                        var lineBreak = $compile('<br ng-if="collapsed">')(scope);
                        var toggleButton = $compile('<a style="cursor: pointer;" class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "Read Less" : "Read More"}}</a>')(scope);
      
      
                        /* remove the current contents of the element
                         and add the new ones we created */
                        element.empty();
                        element.append(firstSpan);
                        element.append(secondSpan);
                        element.append(moreIndicatorSpan);
                        element.append(lineBreak);
                        element.append(toggleButton);
                    }
                    else {
                        element.empty();
                        element.append(text);
                    }
                });
            }
        };
      }]);