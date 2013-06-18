import c4d
from c4d import gui

if __name__ == "__main__":
    doc = c4d.documents.GetActiveDocument()
    selected = doc.GetActiveObjects(0)
    totalobjects = len(selected)
    
    if totalobjects > 0:  # we have one or more selected objects in the scene
        basename = gui.RenameDialog("Enter new basename...")
        
        i = 0
        for ob in selected:
            ob.SetName(basename + str(i))
            i = i+1