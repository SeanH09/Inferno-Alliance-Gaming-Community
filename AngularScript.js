//module main methid
var myApp = angular.module("memberModule",[]);

//Controller

myApp.controller("myController", function ($scope){
    var members = [
        {Name: 'Winstun',Age: '20',Gender: 'Male',ProfilePicture: "images/gnome.jpg"},
        {Name: 'Koek',Age: '20',Gender: 'Male',ProfilePicture: "images/gnome.jpg"},
        {Name: 'Ristien',Age: '17',Gender: 'Male',ProfilePicture: "images/gnome.jpg"}
];

    $scope.members = members;
});