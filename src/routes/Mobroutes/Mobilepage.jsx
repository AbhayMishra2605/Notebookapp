import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Mobilepage.css';
import MobPopupmenu from '../../component/Mobpopup';
import TextbookArea from '../../component/Textbook';

function MobileHomePage() {
    const [showPopup, setShowPopup] = useState(false);
    const [notebooks, setNotebooks] = useState([]);
    const [selectedNotebook, setSelectedNotebook] = useState(null);
    const [notes, setNotes] = useState([]);
    
   
    useEffect(() => {
     
      const storedNotebooks = JSON.parse(localStorage.getItem('groups')) || [];
      const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      setNotebooks(storedNotebooks);
      setNotes(storedNotes);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('groups', JSON.stringify(notebooks));
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notebooks, notes]);
  
  
  
    const handlePopup = () => {
       setShowPopup(true);
    };
  
    const handleNotebookClick = (notebook) => {
      setSelectedNotebook(notebook); 
    };
  
    const handleCreateNotebook = (name, color) => {
      const notebookExists = notebooks.some(notebook => notebook.name.toLowerCase() === name.toLowerCase());
      
      if (notebookExists) {
        alert("A notebook with this name already exists. Please choose a different name.");
        return; 
      }
      
      const newNotebook = { id: Date.now(), name, color };  
      setNotebooks([...notebooks, newNotebook]);
      setShowPopup(false); 
  };
  
    const getInitials = (name) => {
      let initial = name.split(" ").map(word => word[0].toUpperCase()).join("");
      return initial;
    };
    
    const addNote = (text) => {
      const newNote = {
          id: Date.now(),
          groupId: selectedNotebook.id,
          text,
          createdAt: new Date().toISOString(),
          
      };
      setNotes([...notes, newNote]);
  };
  
    return (
        <div className="MObcontainer">
             
            <div className="Mobsidebar">
                <div>
                    <h1>Pocket Notes</h1>
                </div>
                <div className="mobnotebook-list">
          {notebooks.map((notebook, index) => (
            <div key={index} className="mobnotebook-item" onClick={() => handleNotebookClick(notebook)}>
              <div
                className="mobnotebook-icon"
                style={{ backgroundColor: notebook.color }}
              >
                {notebook.name && getInitials(notebook.name)}
              </div>
              <span>{notebook.name}</span>
            </div>
          ))}
          
        </div>
                <div className="Mobadd-button">
                <button onClick={handlePopup}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
                </div>
            </div>
            {showPopup && (
        <MobPopupmenu onClose={() => setShowPopup(false)} onCreate={handleCreateNotebook}  />
      )}
        </div>
    )
}

export default MobileHomePage
