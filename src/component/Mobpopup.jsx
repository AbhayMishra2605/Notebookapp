import React, { useState, useRef, useEffect } from 'react';
import './Mobpopup.css'

function MobPopupmenu({ onClose, onCreate}) {
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
    <div className="mobpopup-overlay">
      <div className="mobpopup" ref={popupRef}>
        <h2>Create New Group</h2>
        <label id='l1'>Group Name</label> &ensp;
        <input
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <label id='l2'>Choose colour</label>
        <div className="mobcolor-options">
          {['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb'].map((c) => (
            <span
              key={c}
              onClick={() => setColor(c)}
              style={{ backgroundColor: c, border: color === c ? '2px solid black' : 'none' }}
              className="mobcolor-circle"
            />
          ))}
        </div>
        <button onClick={handleCreate} className="mobcreate-button">Create</button>
      </div>
    </div>
  );
}

export default MobPopupmenu;