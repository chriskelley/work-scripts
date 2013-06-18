
itemsToMove = [];
function init(){	unsortDeepFolders();}


function collectItemsToMove(coll){
	for(var i=1; i<=coll.length; i++){
		if(coll[i] instanceof FolderItem){
			collectItemsToMove(coll[i].items);
		}else{
			itemsToMove.push(coll[i]);
		}
	}
	
	return true;
}

function unsortDeepFolders(dur){	 app.beginUndoGroup("unsortDeepFolders");   	var selectedItems = app.project.selection;   // selected items
		
	if(selectedItems.length < 1){
		alert("Please select a parent folder to unsort.");
	}else if(selectedItems.length > 1){
		alert("Please only select one parent folder to unsort.");
	}else{
		var parent = selectedItems[0];
		
		if(selectedItems[0] instanceof FolderItem){
			collectItemsToMove(selectedItems[0].items);

			for(i=0;i<itemsToMove.length;i++){
				itemsToMove[i].parentFolder = parent;
			}
		}else{
			alert("Selection must be a folder to unsort.");
		}
		
	}            app.endUndoGroup();}



init();		