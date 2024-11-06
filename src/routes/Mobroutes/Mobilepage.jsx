import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Mobilepage.css'

function MobileHomePage() {
    return (
        <div className="MObcontainer">
             
            <div className="Mobsidebar">
                <div>
                    <h1>Pocket Notes</h1>
                </div>
                <div className="Mobadd-button">
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileHomePage
