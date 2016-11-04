var app=angular.module("myApp", []);
app.controller("myController",["$scope","$http","$window", function($scope,$http,$window) {
	var refresh=function() {
	$http.get("/contactList").success(function(response) {
	$scope.contactList=response;	
	$scope.contact="";
	//$scope.contact=response;
	console.log(response);
	$scope.namee=function(people) {
			$scope.callee_name=people.name;
			$scope.callee_phone=people.mobile;
			$scope.callee_email=people.email;
			}
	});
	}
	
	refresh();
	$scope.getVideoPage=function(){
		
		
		$window.location="VideoCalling.html";
		
	}

	$scope.addContact=function() {
	$http.post("/contactList",$scope.contact).success(function(response) {
	
	
	document.getElementById('status').innerHTML=" registered successfully";
	$scope.contact="";
	console.log(response);
	})
	refresh();
	}	

	$scope.editContact=function() {
	$http.get("/contactList/" +id).success(function(response) {
	
	
	})
	}

	/*$http.get("/myloginlist").success(function(response){
		$scope.contact=response;

		$scope.contact="";
				console.log("succes dataaaa");

	})*/
	$scope.goMain=function(){


		$window.location="index.html";
	}

		$scope.mylogin=function(){
		var name=$scope.name;
		var password=$scope.password;

		
		$http.post("/myloginlist").success(function(response){
			

			angular.forEach(response, function(value1, key1) {

    		
    			
        if (value1.name === name && value1.password === password) {
          
           $window.location="/profile.html";
           }

    });
			//$scope.contact="";
		})
	}


}]);


