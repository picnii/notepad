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

function EditorCtrl ($scope) {
	// body...
	$scope.save = function()
	{
		var save_object = {name:$scope.subject, content:$scope.content};
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