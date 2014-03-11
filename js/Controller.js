function MainCtrl ($scope) {
	// body...
}

function EditorCtrl ($scope) {
	// body...
	$scope.save = function()
	{
		var save_object = {name:$scope.subject, content:$scope.content};
		console.log(save_object);

		//check if there are localstorage
		if(typeof(localStorage['notes']) == 'undefined')
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