angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {

  // var processStartOfDrive = function(zendriveDriveStartInfo) {
  //   console.log("Detected trip start");
  //   cordova.plugins.notification.local.schedule({
  //     id: 1,
  //     text: "Currently tracking your trip"
  //   });
  // };
  // var processEndOfDrive = function(zendriveDriveInfo) {
  //   console.log("Detected trip end");
  //   cordova.plugins.notification.local.schedule({
  //     id: 2,
  //     text: "Trip has ended"
  //   });
  // };
  // var processLocationDenied = function() {
  //   console.log("Location denied, please enable location services to keep Zendrive working");
  // };
  //
  // $scope.initZendrive = function(){
  //   var applicationKey = "QBACZvxnFRs4eowTD6L5iGwrcOm1UANF";
  //   var driverId = "4747";
  //   var config = new Zendrive.ZendriveConfiguration(applicationKey, driverId);
  //   var driverAttributes = new Zendrive.ZendriveDriverAttributes();
  //
  //   driverAttributes.email = "test-zendrive-sdk@fleetio.com";
  //   driverAttributes.group = "18";
  //   config.driverAttributes = driverAttributes;
  //   config.driveDetectionMode = Zendrive.ZendriveDriveDetectionMode.ZendriveDriveDetectionModeAutoON;
  //
  //   var zendriveCallback = new Zendrive.ZendriveCallback(processStartOfDrive, processEndOfDrive, processLocationDenied);
  //
  //   Zendrive.setup(config, zendriveCallback,
  //     function() {
  //       alert("Zendrive Setup done!");
  //     },
  //     function (error) {
  //       alert("Zendrive Setup failed: " + error);
  //     }
  //   )
  // }
  //
  // $scope.$on("$ionicView.enter", function(event, data){
  //   if(window.cordova) {
  //     $timeout(function () {
  //       $scope.initZendrive();
  //     }, 5000);
  //   }
  // });

})

.controller('PlaylistsCtrl', function($scope) {
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
