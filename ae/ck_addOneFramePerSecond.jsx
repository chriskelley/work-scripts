function addOneFramePerSecond()
{
	app.beginUndoGroup("Add One Frame per Second");
  
	var activeComp = app.project.activeItem; 
 	var layerColl  = activeComp.layers; // all layers 
  var compDuration = activeComp.duration;

  var t = 1;
  var baseLayer = layerColl[1];

  for( currentSecond = 1; currentSecond < compDuration; currentSecond++){

  		var firstBlendLayer = baseLayer.duplicate();
      var secondBlendLayer = firstBlendLayer.duplicate();
      firstBlendLayer.moveToBeginning();
      secondBlendLayer.moveToBeginning();
      

  		firstBlendLayer.inPoint = currentSecond - (1 * activeComp.frameDuration);
  		firstBlendLayer.outPoint = currentSecond;
      secondBlendLayer.inPoint = currentSecond;

      // now scoot first layer forward a frame
      firstBlendLayer.startTime = t * activeComp.frameDuration;
      secondBlendLayer.startTime = t * activeComp.frameDuration;

      //now update the previous layer to be trimmed...
      activeComp.layer(firstBlendLayer.index + 1).outPoint = firstBlendLayer.inPoint + (activeComp.frameDuration);

      
      var thisEffect = firstBlendLayer.property("Effects").addProperty("ADBE Blend");
      thisEffect.property("ADBE Blend-0001").setValue(firstBlendLayer.index + 1);
      thisEffect.property("ADBE Blend-0003").setValue(0.5);

      t++;
  }
  	

	app.endUndoGroup();
}


addOneFramePerSecond();
	
	
