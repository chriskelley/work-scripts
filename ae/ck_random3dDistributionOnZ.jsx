
function init(){
	var size = prompt("How large of a gap between layers? (in pixels)","");
	
	if(size != null){
		size = parseInt(size);
		distribute_on_z(size);
	}
}



function distribute_on_z(size){
	app.beginUndoGroup("Distribute Layers on Z");
  
	var activeComp = app.project.activeItem; 
 	var layerColl  = activeComp.selectedLayers; // all selected layers 
  	
	for(a=0; a<layerColl.length; a++){
		var thisLayer = layerColl[a];

		if(thisLayer.threeDLayer){
			var pos = thisLayer.transform.position.valueAtTime(0, false);

			if(a>0){
				thisLayer.property("position").setValue([pos[0],pos[1],pos[2] + (a * size)]); 
			}
		}
	}
   
	app.endUndoGroup();
}


init();
	
	
