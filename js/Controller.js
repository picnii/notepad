function MainCtrl ($scope, $rootScope) {
	// body...
	$rootScope.loadNotes = function()
	{
		//check if have notes in localStorage
		if(typeof(localStorage['notes']) == 'undefined' || localStorage['notes'] == '')
		{
			var notes = [];
			localStorage['notes'] = JSON.stringify(notes);
			return notes;
		}else
		{
			var notes = JSON.parse(localStorage['notes']);
			return notes;
		}
	}

	$scope.notes = $rootScope.loadNotes();
	console.log($scope.notes);
}

function EditorCtrl ($scope, $rootScope, $routeParams) {
	// body...

	$scope.notes = $rootScope.loadNotes();
	//console.log($routeParams.id);

	if(typeof($routeParams.id) == 'undefined')
	{
		//Create New Page
	}else
	{
		//edit page
	}


	$scope.save = function()
	{
		//create new
		var id = $scope.notes.length;
		var save_object = {id:id, name:$scope.subject, content:$scope.content};
		console.log(save_object);

		//check if there are localstorage
		if(typeof(localStorage['notes']) == 'undefined' || localStorage['notes'] == '')
		{
			var save_array = [];
			save_array.push(save_object);

			localStorage['notes'] = JSON.stringify(save_array);
		}else
		{

			save_array = JSON.parse(localStorage['notes']);
			save_array.push(save_object);
			localStorage['notes'] = JSON.stringify(save_array);
		}
	}	
}