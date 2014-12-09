(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', function($http, origin){

    function count(){
      return $http.get(origin + '/notes/count');
    }

    return {count:count};
  });
})();
