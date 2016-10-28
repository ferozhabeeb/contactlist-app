var app=angular.module("myApp", []);
app.controller("myController",["$scope","$http", function($scope,$http) {
	var person1={
		name:"Habeeb",
		email:"ferozhabeeb@gmail.com",
		mobile:"7416786987"
	}
	var person2={
		name:"Ashraf",
		email:"ferozhabeeb9@gmail.com",
		mobile:"1234567890"
	}
	var person3={
		name:"feroz",
		email:"habeebashraf.sk@gmail.com",
		mobile:"2345678910"
	}	
	var contactList=[person1,person2,person3];
	$scope.contactList=contactList;
}])
