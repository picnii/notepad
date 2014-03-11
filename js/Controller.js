function MainCtrl ($scope) {
	// body...
}

function EditorCtrl ($scope) {
	// body...
	$scope.save = function()
	{
		var save_object = {name:$scope.subject, content:$scope.content};
		console.log(save_object);
	}	
}