var shantiGaushala = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngRoute']);
shantiGaushala.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
        {
            id: 0, image: 'img_9571.jpg'
        },
        { id: 1, image: 'img_9520.jpg' }, { id: 2, image: 'img_9521.jpg' }, { id: 3, image: 'img_9518.jpg' }, { id: 4, image: 'Calf7.jpg' },
        { id: 5, image: 'img_9597.jpg' }, { id: 6, image: 'img_9568.jpg' }, { id: 7, image: 'img_9558.jpg' }, { id: 8, image: 'img_9562.jpg' }
    ];
});

shantiGaushala.controller('GalleryImagesCntrl', function ($scope) {
    $scope.GalleryImages = [
         {
             text: 'Gaushala',
             url: 'gallery1.jpg'
         }, {
             text: 'Inaugration',
             url: 'gallery2.jpg'
             },
            // {
         //    text: 'Satsang',
         //    url: 'gallery3.jpg'
         //}, 
    {
             text: 'Bhandara',
             url: 'gallery4.jpg'
         }, {
             text: 'Calves',
             url: 'img_9602.jpg'
         }, {
             text: 'Cows',
             url: 'gallery4 - Copy.jpg'
         }];
});

shantiGaushala.controller('photoImagesCntrl', function ($scope, $state, $stateParams, $uibModal) {
    var category = $stateParams.name;
    $scope.displayedImages = [];
    $scope.GalleryImages = [
         {
             text: 'Gaushala',
             url: 'img_9520.jpg'
         }, {
             text: 'Gaushala',
             url: 'img_9521.jpg'
         }, {
             text: 'Gaushala',
             url: 'img_9558.jpg'
         }, {
             text: 'Gaushala',
             url: 'img_9562.jpg'
         }, {
             text: 'Gaushala',
             url: 'img_9568.jpg'
         }, {
             text: 'Gaushala',
             url: 'img_9571.jpg'
         }, {
             text: 'Satsang',
             url: 'gallery3.jpg'
         }, {
             text: 'Bhandara',
             url: 'gallery4.jpg'
         }, {
             text: 'Calves',
             url: 'Calf1.JPG'
         }, {
             text: 'Calves',
             url: 'Calf2.JPG'
         }, {
             text: 'Calves',
             url: 'Calf4.JPG'
         }, {
             text: 'Calves',
             url: 'Calf5.JPG'
         }, {
             text: 'Calves',
             url: 'Calf7.JPG'
         }, {
             text: 'Calves',
             url: 'Calf8.JPG'
         }, {
             text: 'Calves',
             url: 'Calf9.JPG'
         }, {
             text: 'Calves',
             url: 'Calf10.JPG'
         }, {
             text: 'Calves',
             url: 'Calf11.JPG'
         }, {
             text: 'Calves',
             url: 'Calf12.JPG'
         }, {
             text: 'Calves',
             url: 'Calf13.JPG'
         }, {
             text: 'Calves',
             url: 'Calf14.JPG'
         }, {
             text: 'Calves',
             url: 'Calf15.JPG'
         }, {
             text: 'Cows',
             url: 'img_9587.jpg'
         }, {
             text: 'Cows',
             url: 'img_9597.jpg'
         }];
    for (var i = 0; i < $scope.GalleryImages.length; i++) {
        if ($scope.GalleryImages[i].text == category) {
            $scope.displayedImages.push($scope.GalleryImages[i].url);
        }
    }
   
    $scope.open = function (size, template, params) {
        return $uibModal.open({
            animation: true,
            templateUrl: template || 'myModalContent.html',
            controller: 'ModalResultInstanceCtrl',
            size: size,
            resolve: {
                params: function() {
                    return params;
                }
            }
        });
    }
});
shantiGaushala.controller('ModalResultInstanceCtrl', function ($scope, $uibModalInstance, params) {
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [];
    for (var i = 0; i < params.length; i++)
    {
        var valueToPush = {};
        valueToPush.id = i;
        valueToPush.image = params[i];
        $scope.slides.push(valueToPush);
    }
    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };
})


