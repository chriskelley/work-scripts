function Fix_UnMult(){
	 app.beginUndoGroup("Fix Unmult");

	 var matchName_versionA = "RG unmult";
	 var matchName_versionB = "KNSW Unmult";
   
   var projCollection = app.project.items;   // all items
   
   var missing_matchname = "";
   var matchname_to_use = "";
   var unmultcount = 0;
   var exceptionLevelError = false;

   for(a=1; a<projCollection.length; a++){
   		var currentComp = projCollection[a];

      // create loop to check each layer in comp.
			for (var f = 1; f <= currentComp.numLayers; ++f) {
				currentLayer = currentComp.layer(f);

				// search top level properties for "Effects"
				for (var g = 1; g <= currentLayer.numProperties; ++g) {

					if (currentLayer.property(g).name == "Effects") {
						currentEffects = currentLayer.property(g);

						// check each of the effects
						for (var h = 1; h <= currentEffects.numProperties; ++h) {

							thisEffect = currentEffects.property(h);
							thisMatchName = thisEffect.matchName;

							// see if effect contains the searchInput.text, checking against effect's current name and match name.
							if (thisMatchName == matchName_versionA || thisMatchName == matchName_versionB) {

								//only set this the first time through, we will normalize all unmults to be the alternate to this.
								if(missing_matchname==""){
									missing_matchname = thisMatchName;
								}

								if(missing_matchname==matchName_versionA){
									matchname_to_use = matchName_versionB;
								}else if(missing_matchname==matchName_versionB){
									matchname_to_use = matchName_versionA;
								}

								//add the alternate effect
								if( currentEffects.canAddProperty(matchname_to_use) ){
									//get the current effects index
									var myIndex = thisEffect.propertyIndex;

									//remove the current effect
									thisEffect.remove();

									var newEffect = currentEffects.addProperty(matchname_to_use);
									newEffect.moveTo(myIndex);

									unmultcount = unmultcount + 1;
								}else{
									exceptionLevelError = true;
								}

							}

							
						}
					}
				}
			}
   }
   
   if(unmultcount < 1){
   		if(exceptionLevelError){
   			feedback_str = "There was an error with your copy of UnMult.\nIt may not be installed, or may be corrupt.";
   		}else{
   			feedback_str = "No UnMults were replaced.";
   		}
   }else{
   		var copy_str = unmultcount == 1 ? "copy" : "copies";
   		feedback_str = unmultcount.toString() + " " + copy_str + " of UnMult replaced successfully.";
   }
   
   alert(feedback_str);
   app.endUndoGroup();
}


Fix_UnMult();
	
	