shantiGaushala.config(['$stateProvider', '$urlRouterProvider', appRouter]);
function appRouter($stateProvider, $urlRouterProvider) {
    var TemplateFolder = {
        UserDashBoard: "Templates/Menu/",
        UserContacts: "Templates/User/Contacts/"
    };
    $stateProvider.state("Default", {
        url: "/",
        templateUrl: TemplateFolder.UserDashBoard + "homeTemplate.html"
    }).state("Gau Seva", {
        url: "/gauseva",
        templateUrl: TemplateFolder.UserDashBoard + "gauSevaTemplate.html"
    }).state("Home", {
        url: "/home",
        templateUrl: TemplateFolder.UserDashBoard + "homeTemplate.html"
    }).state("Gallery", {
        url: "/gallery",
        templateUrl: TemplateFolder.UserDashBoard + "galleryTemplate.html",
        controller: "GalleryImagesCntrl"
    }).state("Photos", {
        url: "/photos/:name",
        templateUrl: TemplateFolder.UserDashBoard + "photoTemplate.html",
        controller: "photoImagesCntrl"
    }).state("Contact", {
        url: "/contact",
        templateUrl: TemplateFolder.UserDashBoard + "contactTemplate.html",
    }).state("AboutUs", {
        url: "/aboutUs",
        templateUrl: TemplateFolder.UserDashBoard + "aboutTemplate.html",
    }).state("Benefits", {
        url: "/benefits",
        templateUrl: TemplateFolder.UserDashBoard + "benefitsTemplate.html",
    }).state("welcome", {
        url: "/welcome",
        templateUrl: TemplateFolder.UserDashBoard + "welcomeTemplate.html",
    }).state("importance", {
        url: "/importance",
        templateUrl: TemplateFolder.UserDashBoard + "importanceTemplate.html",
    }).state("donate", {
        url: "/donateNow",
        templateUrl: TemplateFolder.UserDashBoard + "donateNowTemplate.html",
    });
    $urlRouterProvider.otherwise("/");
         //   .state("addcontact", {
    //    url: "/addcontact",
    //    templateUrl: TemplateFolder.UserContacts + "addcontactTemplate.html",
    //    controller: "AddContactCtrl",
    //    controllerAs: "contact"
    //}).state("searchcontact", {
    //    url: "/searchcontact",
    //    templateUrl: TemplateFolder.UserContacts + "searchcontactTemplate.html",
    //    controller: "SearchCtrl",
    //    controllerAs: "search"
    //});
};