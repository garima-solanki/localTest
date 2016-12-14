shantiGaushala.directive('userMenu', [function () {
    var usermenu = {
        restrict: "EA",
        templateUrl: "Templates/Menu/userMenuTemplate.html",
        replace: false,
        transclude: true,
    };
    return usermenu;
}])