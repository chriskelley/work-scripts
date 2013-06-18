function lightsToNulls()
{
	app.beginUndoGroup("Lights to Nulls");
  
	var activeComp = app.project.activeItem; 
	var layerColl = activeComp.layers;
 	var selectedLayerColl  = activeComp.selectedLayers; // all selected layers 
  	
	for(a=1; a<selectedLayerColl.length; a++){
		
		var thisLayer = selectedLayerColl[a];
		
		//add a light at the null location
		var newLight = layerColl.addLight(thisLayer.name, [0,0])
		newLight.transform.position.setValue(thisLayer.transform.position.value);

		//remove the original
		thisLayer.remove()
	}
   	

	app.endUndoGroup();
}


lightsToNulls();
	
	
