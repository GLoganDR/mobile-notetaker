(function(){
  'use strict';

  angular.module('starter')

  .controller('NotesDetailCtrl', function($scope, $state, Note){
    Note.show($state.params.noteId).then(function(response){
      $scope.moment = moment;
      $scope.note = response.data;
    });
  });

})();
