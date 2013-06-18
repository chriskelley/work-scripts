
function init(){
	var fps = prompt("What is your target framerate?","");
	
	if(fps != null){
		swap_framerates(fps);
	}
}



function swap_framerates(fps){
	 app.beginUndoGroup("changeCompFps");
   
   var projCollection = app.project.selection;   // all selected items
   
   for(a=0; a<projCollection.length; a++){

      if(projCollection[a].layers){
		 if (projCollection[a] instanceof CompItem) {
			  projCollection[a].frameRate = fps;
		   }
      }
   }
   
   app.endUndoGroup();
}


init();
	
	
