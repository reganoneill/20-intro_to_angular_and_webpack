'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayLab = angular.module('cowsayLab', []);

cowsayLab.controller('CowsayController', ['$log','$scope', CowsayController]);

function CowsayController($log, $scope){
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welp, looks like u made it 2 Cowville, hmmm??';

  cowsayCtrl.speak = function(input){
    $log.debug('cowsayCtrl.speak');
    return cowsay.say({text: input || 'I am just a cow!'});
  };

  cowsayCtrl.logger = function(input){
    $log.debug('cowsayCtrl.logger');
    $log.log(input);
  };

  cowsayCtrl.copyCow = function(input){
    $log.debug('cowsayCtrl.copyCow');

  };


};
