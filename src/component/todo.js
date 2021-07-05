import {useState} from 'react'

// useState is used to change what we see on the Screen

import BackDrop from './Backdrop';
// backdrop component
import Modal from './Modal';
// modal component
function Todo(props) {

    const [modalisOpen,setModalisOpen]=useState(false);
    // useState returns array of two elements
    function deleteHandler(){
        setModalisOpen(true)
    }
    function CloseModal(){
        setModalisOpen(false)
    }
    return (
        <div className='card'>
      <h2>{props.text}</h2>
      <div className="actions">
      <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalisOpen ? <Modal  onDelete={CloseModal}/> : null }
      {/* or you can use  {modalisOpen && <Modal />} */}
      {modalisOpen && <BackDrop onCancel={CloseModal} />}
      
     </div>
    );
}

export default Todo