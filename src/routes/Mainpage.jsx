import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLock } from '@fortawesome/free-solid-svg-icons';
import backgroundImg from "../assets/backgroundimage.png"
import './Mainpage.css'

function  HomePage() {
    return (
        
            <div className="container">
             
              <div className="sidebar">
                <div>
                  <h1>Pocket Notes</h1>
                </div>
                <div className="add-button">
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              
              <div className="main-content">
                <img
                  src={backgroundImg}
                  alt="Illustration of people holding a large notebook and pencils"
                  
                  className='backgroundImage'
                 />
                <h2 id='Poketnote'>Pocket Notes</h2>
                <p id='PoketMassage'>
                  Send and receive messages without keeping your phone online.
                  <br />
                  Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>
                <p className="encryption">
                  <FontAwesomeIcon icon={faLock} /> &ensp;
                  end-to-end encrypted
                </p>
              </div>
            </div>
    )
}

export default  HomePage
