# Work Scripts #

A collection of scripts I've created for streamlining my compositing workflow in After Effects and Cinema 4D. 

## AE ##

#### ck_Batch1080toD1_v1.0.jsx ####
Downres all selected comps to 720x486 and .91 pixel aspect ratio. Also scales and re-positions all layers within the comp to D1.
Use case: You have a bunch of HD final renders that also need to be delivered at NTSC.  Select them all, run this script, boom. Ready to render. 

#### ck_BatchAddCompLength_v1.0.jsx ####
Adds the user-specified number of frames to the end of all selected comps.

#### ck_BatchDuration_v1.0.jsx ####
Modifies the duration of all selected comps to the user-specified frame duration.

#### ck_BatchExtendLayersToCompLength.jsx ####
Extends the length of all layers within a selected comp to the end of the comp.
Use case: I use this if I've imported and comped a bunch of frame sequences that aren't done rendering yet. Since AE will leave the sequences trimmed to the length they were when you first imported them, this script will let you setup their precomps at the correct duration (see ck_BatchDuration!) and then when they are done rendering, select all the precomps and run this script to extend the sequences to their full duration. 

#### ck_BatchFramerates_v1.0.jsx ####
Modifies the frame-rate of all selected comps to the user-specified frame rate.
Use case: Oops everything is 24 and it needs to be 23.976... select the comps and run this. 
Note: This will not quantize your keyframes, so when you switch between framerates you might have some keyframes that fall between frames.

#### ck_BatchNameReplace_v1.0.jsx ####
Replaces a specified string within the comp name of all selected comps.
Use case: You have a bunch of comps called "foo_v01r01" and you want them to be "foo_v01r02". Select the comps you want to rename, enter "v01r01" at the first prompt and "v01r02" at the second, boom your done.

#### ck_BatchPrecompAndTrim.jsx ####
Precomps a single layer and adds user-specified heads/tails to new comp before trimming. 
Use case: You've got a big long select that you've trimmed into different edit layers, and you want to render them out as individual plates. Select your layers, run this script, and it will precomp the large select, breaking it into the individual shots and give each shot your specified number of frames for heads/tails. Original in/out points will be retained.

#### ck_BatchResizeAndRescale_AUTO-HD_v1.0.jsx ####
Modifies all selected comps to be 1920x1080, and scales layers to fit the new dimensions.
Use case: I like to render my 3D at half res for speed and reduced bandwidth at the beginning of a job.  But comping at half-res is a big time no-no - otherwise when yo upres later, all your masks and keyframes will break!  With this script you can import your 960x540 renders, drop them in precomps, upres those precomps using this script, and comp away to your hearts content.  Then later when you import your fullsize renders, you can swap out for these comps with ease.  

#### ck_BatchResizeAndRescale_v1.0.jsx ####
Modifies all selected comps to be a user-specified height and width, and scales layers to fit the new dimensions.
Use case: Same as above but you can specify comp size.

#### ck_BatchResize_v1.0.jsx ####
Modifies all selected comps to be a user-specified height and width.

#### ck_FixUnMult.jsx ####
Normalizes all instances of the Unmult plugin. It will identify all uses of the plugin, and update it project-wide to be the same version.
Use case: There are multiple "types" of the UnMult plugin floating around. This script is useful when project files have mixed instances of uUnMult or a project is opened on a machine that uses a different version of the plugin than the one in the file.

#### ck_SearchDrivePath_v1.0.jsx ####
Searches all project items to identify items located on the user-specified drive, and dumps the result to a text file.
Use case: You are referencing a bunch of files on an external drive, but aren't sure which files.  Run this and you'll end up with a text file listing all items stored on the specified drive.

#### ck_UnsortDeepFolders.jsx ####
This is to fix a pesky error in AE when folders get too deep.  You might see this error if you've imported project files which have imported other project files, so on and so forth.  It will recursively go through the selected folder and "un-bury" all subfolders, putting them in the root of the selected folder.

#### ck_add360expression.jsx ####
This is was a very project-specific script to ease the implementation of an expression we were using, but I'm keeping it around because it could be repurposed for something similar another time.

#### ck_addOneFramePerSecond.jsx ####
This is another pretty specific and mostly non-useful script, but it will take a layer and split it up, adding one blended frame every second. So if your layer is 30 seconds long, now it's going to be 31 seconds!

#### ck_lightsToNulls.jsx ####
This will take all selected layers and replace them with lights, REMOVING the original layers.
Use case: If you had a bunch of locator nulls imported from a 3D package and you wanted to replace them with lights to use with Optical Flares.

#### ck_random3dDistributionOnZ.jsx ####
Will randomly distribute all selected layers on the Z axis, leaving a user-specified gap between each layer.

#### ck_selectAllUnparented.jsx ####
This will select all layers in a comp that are not parented to anything.
Use case: I use this if I want to change transforms on all the layers in a comp, but I don't want to mess up parented layers.  This will allow me to isolate non-parented layers.

#### ck_shyAllInvisible.jsx ####
This will enabled "shy mode" on all layers that are not visible.
Use case: I'm generally very against "shy mode", it's a recipe for confusion, but in certain cases you might need to reduce clutter for just a bit.


## C4D ##

#### ck_BatchRenameSelected_v1.py ####
This will rename all of your selected layers to a user-specified string and add incrementing numbers to the end.
Use case:  You baked a cloner, now you have 100 arbitrarily named cubes called "Cube.1", "Cube.1.1" "Cube.1.2" etc.  Select all the objects you want to rename, run this, enter a string (e.g. "box") and you'll get a nice clean "box01", "box02", "box03", so on and so forth. 

#### ck_ShowFilepath_v1.py ####
This is a really simple little script that will just pop open a message box showing the full path to the current file.  Since c4d doesn't show the full path in the window title bar (Why not!?!?) this will tell you where you are. '
Use case: I submitted a render to the farm.  I got a glass of water, come back to my machine.  Wait, is this my original file or the file collected to the farm? Doh!


## BASH ##

#### kill_after_effects ####
(/bin has a .app file you can run, and /src has a shell file you can run)
THIS WILL CRASH AFTER EFFECTS. (OSX Only). 
I use this when Optical Flares hangs. Most annoying bug ever.  AE will become unrecoverable, and force-quitting will not save a version of your project. By using this script to kill AE, you will invoke AE's crash recovery to save a version of your file before it crashes. Last resort!   
