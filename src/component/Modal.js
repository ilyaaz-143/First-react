function Modal(props){
    function DeleteClicked(){
        props.onDelete();
    }
    return (
        <div className="modal">
            <p>Are You Sure?</p>
            <button className="btn btn--alt" onClick={props.onDelete}>Cancel</button>
            <button className="btn" onClick={DeleteClicked}>Delete</button>
        </div>
    );
}

export default Modal