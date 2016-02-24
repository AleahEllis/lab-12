var app = angular.module('myModule', ['ngMaterial']);
// This is declaring a module. More on this in a moment
app.controller('theController', function($scope){


// var app = angular.module('myModule', ['ngRoute','ui.bootstrap']);
// // This is declaring a module. More on this in a moment
// app.controller('theController', function(){
	var vm = this;

	vm.items = [
		{info: 'Go to the grocery store', date: '05/24'},
	    {info: 'clean the bathroom', date: '05/20'},
	    {info: 'workout', date: '05/21'},
	    {info: 'study', date: '05/05'},
    ];


	vm.displayInput=function(){
		vm.items.push(
			{info: vm.list, date: vm.date
			}

		)
	}
});

 // function vm($scope) {
 //      $scope.list = [
 //        {item: 'Go to the grocery store'},
 //        {item: 'clean the bathroom'},
 //        {item: 'workout'},
 //        {item: 'study'},
 //      ];
 //    }

 	// {'Go to the grocery store', 05/24}
  // 		{'clean the bathroom', 03/31}
  // 		{'workout', 05/06} 
  // 		{'study', 05/18}
  // 		 ];