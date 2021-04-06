import React from 'react';

const EditOutEvent = ({changeNewExitEvent,addNewExitEvent}) => {

    let newOutEvent = React.createRef()

  const addOutEvent = (e) => {
    e.preventDefault()
    let exitEvent = newOutEvent.current.value
    addNewExitEvent(exitEvent)
  }

  let onEventChange = (e) => {
    if(newOutEvent.current.value.length === 0 || newOutEvent.current.value.length > 30){
     return alert("Out event is not correct.")
    }
    e.preventDefault();   
    changeNewExitEvent()
  }



    return <>
        <form onSubmit={onEventChange}>
            <input type="text" placeholder="  Add new out event" ref={newOutEvent} onChange={addOutEvent} />
            <button style={{width:"150px",marginLeft:"5px"}}>Add out event</button>
        </form>
    </>
}

export default EditOutEvent;