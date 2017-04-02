/**
 * Created by apple on 1/4/17.
 */

angular.module('CASChillerApp')
    .controller('FacilityCtrl',['$scope','$compile','facilityService',function($scope,$compile,facilityService){


     $scope.facilities = facilityService.facilityinfo;


     $scope.addfacilityrow = function () {
          $scope.inserted = {
      id: $scope.facilities .length+1,
      facilityname: '',
      equipment:null
    };

            $scope.facilities.push($scope.inserted);

     };

     $scope.savefacility = function(data, id) {

    //$scope.user not updated yet
      console.log(id);
  };

  // remove user
  $scope.removefacility = function(index) {
    $scope.facilities.splice(index, 1);
  };
$scope.chart = c3.generate({
        bindto: '#chart',

        data: {
            xs: {
            'layout': 'x1',
            'data2': 'x2',
                'data3':'x3',
        },

            columns: [

                ['x1',800,800,0,0,300],
                ['layout',400,0,0,400],
                ['x2',10],
                ['data2',30],
                ['data3',40],
                ['x3',100]

            ]

        },
        axis: {
            y: {
                max:400,
                min: 0,
                 padding: {top:0, bottom:0}
            },
            x:{
                max:800,
                min: 0,
                 padding: {top:0, bottom:0}
            }

        },
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        },
    size: {
        height: 240,
        width: 500
    },

    });

var html='<button class="divvy" ng-click="myfunction($event)" left="100px",top="700px">here</button>',
    el = document.getElementById('chart');

angular.element(el).append( $compile(html)($scope) );

  $scope.myfunction = function($event){
    console.log($event);
 off =angular.element($event.target).prop('offsetLeft');
  angular.element($event.target).text(off)

}





}]);