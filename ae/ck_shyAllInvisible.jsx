function shyAllInvisible()
{
	app.beginUndoGroup("Shy All Invisble Layers");
  
	var activeComp = app.project.activeItem; 
 	var layerColl  = activeComp.layers; // all layers 
  	
	for(a=1; a<layerColl.length; a++){
		var thisLayer = layerColl[a];

		if(!thisLayer.enabled){
			thisLayer.shy = true;
		}
	}
   	
	activeComp.hideShyLayers = true;

	app.endUndoGroup();
}


shyAllInvisible();
	
	
