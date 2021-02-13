boysen

    // =========================================================================
    // CALENDAR WIDGET
    // =========================================================================

    .directive('fullCalendar', function(){
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.fullCalendar({
                    contentHeight: 'auto',
                    theme: true,
                    header: {
                        right: '',
                        center: 'prev, title, next',
                        left: ''
                    },
                    defaultDate: '2014-06-12',
                    editable: true,
                });
            }
        }
    })


    // =========================================================================
    // MAIN CALENDAR
    // =========================================================================

    .directive('calendar', function($compile,$state){
        return {
            restrict: 'A',
            scope: {
                select: '&',
                actionLinks: '=',
            },
            link: function(scope, element, attrs) {

                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();

                //Generate the Calendar
                element.fullCalendar({
                    header: {
                        right: '',
                        center: 'prev, title, next',
                        left: ''
                    },

                    theme: true, //Do not remove this as it ruin the design
                    selectable: true,
                    selectHelper: true,
                    editable: false,
                    defaultView : 'month',

                    //On Day Select
                    select: function(start) {
                        scope.select({
                            start: start,
                        });
                    },

                    eventClick: function(event){
                        swal({
                            title                 :   "Are you sure?",
                            text                  :   "You're about to delete this workshift.",
                            type                  :   "warning",
                            showCancelButton      :   true,
                            confirmButtonClass    :   "btn-success",
                            confirmButtonText     :   "Yes, delete it!",
                            closeOnConfirm        :   true
                        },function(isConfirm){
                            if(isConfirm){
                                $('#calendar-widget').fullCalendar('removeEvents' ,[event._id])
                            }
                        });;
                    },
                    viewRender: function (view, element){

                        var obj = $("#calendar-widget").fullCalendar('getDate');
                        var datecalendar = obj._d;
                        var month  = [
                              'Jan',
                              'Feb',
                              'Mar',
                              'Apr',
                              'May',
                              'Jun',
                              'Jul',
                              'Aug',
                              'Sep',
                              'Oct',
                              'Nov',
                              'Dec' ];
                        scope.$parent.clctrl.renderView();
                    },
                    events: []
                });
            }
        }
    })


    //Change Calendar Views
    .directive('calendarView', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function(){
                    $('#calendar').fullCalendar('changeView', attrs.calendarView);
                })
            }
        }
    })
