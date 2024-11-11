import React, { useState ,useEffect} from 'react';
import './MobTextbook.css';
import send from '../assets/send.png';
import send1 from '../assets/send1.png'
import back from '../assets/back.png'
import { useNavigate } from "react-router-dom";

function MobTextbookArea({ notebook, initial , notes, addNote ,setShowbtn  }) {
   const navigate =useNavigate();
 
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

    const HandleNavigate=()=>{
        navigate(-0.1);
    }
 useEffect(()=>{
   
    setShowbtn(false);
 },[])


    return (
        <div id='mobtextarea'>
            <div className='mobtop'>
                <div className='mobtextnotebook-item'>
               <p onClick={HandleNavigate} id='btnhandle'> <img src={back} /></p>
                    <div
                        className="mobtextnotebook-icon"
                        style={{ backgroundColor: notebook.color }}
                    >
                        {initial}
                    </div>
                    <span>{notebook.name}</span>
                </div>
            </div>

            <div className="mobtextnote-list">
                {notes.map((note) => (
                    <div key={note.id}>
                        <p>{note.text}</p>
                        <small id='date-footer'>
    {new Date(note.createdAt).toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    })} &ensp; • &ensp; {new Date(note.createdAt).toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    })}
</small>
                    </div>
                ))}
            </div>
            <div id='mobtextboxarea'>
                <textarea
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your text here..........."
                />
                 <p className='mobbutton' onClick={handleAddNote} disabled={!noteText.trim()}>
                 <img src={noteText.trim() ? send : send1} alt="Send" />
                </p>
            </div>
        </div>
    );
}

export default MobTextbookArea;