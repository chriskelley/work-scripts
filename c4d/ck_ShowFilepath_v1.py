import c4d;
from c4d import gui; 

def main():
    mydoc = c4d.documents.GetActiveDocument()
    bc = mydoc[c4d.DOCUMENT_FILEPATH]
    gui.MessageDialog(bc)

if __name__=='__main__':
    main()