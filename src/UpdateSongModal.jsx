import React, { useState } from 'react';
import "./UpdateSongModal.css"



const UpdateSongModal = (props) => {
    if (!props.show) {
        return null
    }
    return ( 
        <div>
          
            <div id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={props.onClose} className="close">&times;</span>
               <input type="text"></input>

              
                </div>
            </div>
        </div>
     );
}
 
export default UpdateSongModal;