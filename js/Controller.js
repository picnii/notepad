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

function EditorCtrl ($scope, $rootScope, $routeParams, $location) {
	// body...

	$scope.notes = $rootScope.loadNotes();
	$scope.isNewNote = false;
	$scope.editNoteIndex = -1;

	if(typeof($routeParams.id) == 'undefined')
	{
		//Create New Page
		$scope.isNewNote = true;
	}else
	{
		//edit page
		$scope.isNewNote = false;

		//find editNoteIndex
		for(var i = 0 ; i < $scope.notes.length; i++)
			if($scope.notes[i].id == $routeParams.id)
				$scope.editNoteIndex = i;

		//load subject
		$scope.subject = $scope.notes[$scope.editNoteIndex].name;
		$scope.content  = $scope.notes[$scope.editNoteIndex].content;
	}




	$scope.save = function()
	{
		if($scope.isNewNote)
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
		}else
		{
			//case save(edit) old note
			var save_object = {id:$routeParams.id, name:$scope.subject, content:$scope.content};
			$scope.notes[$scope.editNoteIndex] = save_object;
			localStorage['notes'] = JSON.stringify($scope.notes);
		}
		$location.path('/')
	}	
}