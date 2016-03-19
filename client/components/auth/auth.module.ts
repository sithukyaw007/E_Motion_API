'use strict';

angular.module('emotionapiApp.auth', [
  'emotionapiApp.constants',
  'emotionapiApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
