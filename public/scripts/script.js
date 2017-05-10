var myApp=angular.module( 'myApp', [] );
myApp.controller( 'WhereMyPeeps', [ '$http', function( $http ){
  var vm = this;
  vm.allTheRecords = [];

  vm.addRecord = function(){
    var objectToSend ={
      name: vm.nameIn,
      location: vm.locationIn
    };

    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    }).then(function( response ){
      console.log( 'back from POST with:', response.statusText );
      vm.nameIn ='';
      vm.locationIn='';
    }, function myError( response ){
      console.log( response.statusText );
    });
  };

  vm.getRecords = function(){
    $http({
    method: 'GET',
    url: '/getRecords',
    }).then( function( response ){
      vm.allTheRecords = response.data;
      console.log( vm.allTheRecords );
    }, function myError( response ){
      console.log( response.statusText );
    });
  };

  vm.deleteRecord = function ( id ){
    var objectToDelete = {
      _id: id
    };

    $http({

    }).then( function ( response ) {
      console.log( response.statusText );
    }, function myError( response ) {
      console.log( response.statusText );
    });
  };
}]);
