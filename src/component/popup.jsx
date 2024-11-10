import React, { useState, useRef, useEffect } from 'react';
import './module_popup.css'

function Popupmenu({ onClose, onCreate}) {
  const [groupName, setGroupName] = useState('');
  const [color, setColor] = useState('#f28b82'); 
  const popupRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleCreate = () => {
    if (groupName.trim() === '') return;
    onCreate(groupName, color);
  };

  return (
    <div className="popup-overlay">
      <div className="popup" ref={popupRef}>
        <h2>Create New Group</h2>
        <label>Group Name</label>
        <input
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <label>Choose colour</label>
        <div className="color-options">
          {['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb'].map((c) => (
            <span
              key={c}
              onClick={() => setColor(c)}
              style={{ backgroundColor: c, border: color === c ? '2px solid black' : 'none' }}
              className="color-circle"
            />
          ))}
        </div>
        <button onClick={handleCreate} className="create-button">Create</button>
      </div>
    </div>
  );
}

export default Popupmenu;