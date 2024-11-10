import React, { useState } from 'react';
import './Textbook.css';
import send from '../assets/send.png';
import send1 from '../assets/send1.png'

function TextbookArea({ notebook, initial , notes, addNote  }) {
   
    const [noteText, setNoteText] = useState('');

    const handleAddNote = () => {
        if (noteText.trim()) {
            addNote(noteText);
            setNoteText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddNote();
        }
    };




    return (
        <div id='textarea'>
            <div className='top'>
                <div className='textnotebook-item'>
                    <div
                        className="textnotebook-icon"
                        style={{ backgroundColor: notebook.color }}
                    >
                        {initial}
                    </div>
                    <span>{notebook.name}</span>
                </div>
            </div>

            <div className="textnote-list">
                {notes.map((note) => (
                    <div key={note.id}>
                        <p>{note.text}</p>
                        <small id='date-footer'>
    {new Date(note.createdAt).toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    })} • {new Date(note.createdAt).toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    })}
</small>
                    </div>
                ))}
            </div>
            <div id='textboxarea'>
                <textarea
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your text here..........."
                />
                 <p className='button' onClick={handleAddNote} disabled={!noteText.trim()}>
                 <img src={noteText.trim() ? send : send1} alt="Send" />
                </p>
            </div>
        </div>
    );
}

export default TextbookArea;