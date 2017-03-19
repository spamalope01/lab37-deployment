'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controller: ['$log', 'picService', thumbnailContainerController],
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<'
  }
};

function thumbnailContainerController($log, picService) {
  $log.debug('thumbnailContainerController()')
}
