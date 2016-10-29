var app=angular.module("myApp", []);
app.controller("myController",["$scope","$http", function($scope,$http) {
	var refresh=function() {
	$http.get("/contactList").success(function(response) {
	$scope.contactList=response;	
	$scope.contact="";
	});
	}
	
	refresh();

	$scope.addContact=function() {
	$http.post("/contactList",$scope.contact).success(function(response) {
	console.log(response);
	refresh();
	})
	}	

/*	$scope.editContact=function() {
	$http.get("/contactList/:id",$scope.contact).success(function(response) {
	console.log(response);
	refresh();
	})
	}*/



}]);


