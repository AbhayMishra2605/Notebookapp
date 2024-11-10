import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLock } from '@fortawesome/free-solid-svg-icons';
import backgroundImg from "../assets/backgroundimage.png";
import './Mainpage.css';
import Popupmenu from '../component/popup';
import TextbookArea from '../component/Textbook';

function HomePage() {
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
    
    const newNotebook = { id: Date.now(), name, color };  // Add a unique ID to each notebook
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
    <div className="container">
      <div className="sidebar">
        <div>
          <h1>Pocket Notes</h1>
        </div>
        <div className="notebook-list">
          {notebooks.map((notebook, index) => (
            <div key={index} className="notebook-item" onClick={() => handleNotebookClick(notebook)}>
              <div
                className="notebook-icon"
                style={{ backgroundColor: notebook.color }}
              >
                {notebook.name && getInitials(notebook.name)}
              </div>
              <span>{notebook.name}</span>
            </div>
          ))}
          <div className="add-button">
            <button onClick={handlePopup}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>

      <div className="main-content">
        {selectedNotebook && (
          <TextbookArea initial={getInitials(selectedNotebook.name)} notebook={selectedNotebook} 
          notes={notes.filter(note => note.groupId === (selectedNotebook && selectedNotebook.id))} addNote={addNote}  />
        )}

        <img
          src={backgroundImg}
          alt="Illustration of people holding a large notebook and pencils"
          className="backgroundImage"
        />
        <h2 id="Poketnote">Pocket Notes</h2>
        <p id="PoketMassage">
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <p className="encryption">
          <FontAwesomeIcon icon={faLock} /> &ensp; end-to-end encrypted
        </p>
      </div>

      {showPopup && (
        <Popupmenu onClose={() => setShowPopup(false)} onCreate={handleCreateNotebook}  />
      )}
    </div>
  );
}

export default HomePage;