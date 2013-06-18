//Dump File Paths pointing to specified drive letter
//Chris Kelley

function init(){
	var proj = app.project;//set project
	var projName = proj.file.name;
	var drive = prompt("Which drive letter would you like to check for?","");
	
	if(drive != null && drive.search(/[A-Za-z]/)>-1){
		var target_file = filePutDialog("Save the dump.", projName.substring(0,projName.length-4) + "_dump.txt", "TEXT txt");
		if (target_file != null) {
			search_for_drive(proj,drive,target_file);
		}
	}
}

function dump_to_file(file,items,open_on_finish)
{
	var out = "";
	for(n=0;n<items.length;n++)
	{
		out += items[n] + "\n";
	}
	file.open("w","TEXT","????");
	file.writeln(out);
	file.close();	
	if(open_on_finish){
		file.execute();
	}
}

function search_for_drive(proj,target_drive,target_file,){
	var projColl = proj.items;
	writeLn("Dumping Paths...");
	
	var myColl = new Array();
	for (j=0; j < projColl.length; j++){
		myColl[j] = projColl[j+1];
	}
	found_items = new Array();
	for (i=0; i <= myColl.length; i++) {
		var curItem = myColl[i];
		try
		{
			item_path = curItem.file.path + "/" + curItem.name;
			drive_letter = item_path.split("/")[1];
			if(target_drive.toUpperCase()==drive_letter.toUpperCase()){
				writeLn("Found " + item_path);
				found_items.push(item_path);
			}
		}catch(e)
		{
			//writeLn(e);
		}
		writeLn("Dump Complete");
	}
	dump_to_file(target_file,found_items,1);
}


init();
	
	