require('./_create-gallery.scss')

module.exports = {
  template: require('./create-gallery.html'),
  controller: ['$log', 'galleryService', CreateGalleryController],
  controllerAs: 'createGalleryCtrl'
};

function CreateGalleryController($log, galleryService) {
  $log.debug('hit the CreateGalleryController');
  this.gallery = {};

  this.createGallery = function() {
    galleryService.createGallery(this.gallery)
    .then(() => {
      this.gallery.name = null;
      this.gallery.desc = null;
    });
    console.log('gallery', this.gallery);
  };
};
