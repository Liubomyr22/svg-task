import React from "react";
import EditIncomeEvent from "./editIncomeEvent";
import EditOutEvent from "./EditOutEvent";

const EditForm = (props) => {
  let handleIncomingEventForm = props.testElement.addIncomingForm;
  let handleOutEventForm = props.testElement.addOutForm;

  let changeElementName = React.createRef();
  let changeElementDescription = React.createRef();

  const changeName = () => {
    let name = changeElementName.current.value;
    props.changeTestElementName(name);
  };

  const changeDescription = () => {
    let description = changeElementDescription.current.value;
    props.changeTestElementDescription(description);
  };

  const addNewName = (e) => {
    if (
      changeElementName.current.value.length === 0 ||
      changeElementName.current.value.length > 30
    ) {
      return alert("Title length is not correct");
    }
    e.preventDefault();
    props.addNewTestElementName();
    changeElementName.current.value = "";
  };

  const addNewDescription = (e) => {
    if (
      changeElementDescription.current.value.length === 0 ||
      changeElementDescription.current.value.length > 30
    ) {
      return alert("Description length is not correct");
    }
    e.preventDefault();
    props.addNewTestElementDescription();
    changeElementDescription.current.value = "";
  };

  const addIncomingEventForm = () => {
    props.addIncomeForm();
  };

  const addOutEventForm = () => {
    props.addOutForm();
  };

  return (
    <div
      style={{
        border: "2px solid gray",
        marginLeft: "19px",
        marginTop: "35px",
        maxWidth: "320px",
        padding: "20px",
        width: "100%",
      }}
    >
      <form onSubmit={addNewName}>
        <input
          type="text"
          placeholder="  Enter Title"
          ref={changeElementName}
          onChange={changeName}
        />
        <button style={{ width: "150px", marginLeft: "5px" }}>
          Change name
        </button>
      </form>
      <form onSubmit={addNewDescription}>
        <input
          type="text"
          placeholder="  Enter description"
          ref={changeElementDescription}
          onChange={changeDescription}
        />
        <button style={{ width: "150px", marginLeft: "5px" }}>
          Change description
        </button>
      </form>
      <br></br>
      <button style={{ width: "165px" }} onClick={addIncomingEventForm}>
        Change incoming event
      </button>
      <br></br>
      <br></br>
      {handleIncomingEventForm && (
        <EditIncomeEvent
          addNewIncomeEvent={props.addNewIncomeEvent}
          changeNewIncomeEvent={props.changeNewIncomeEvent}
        />
      )}
      <br></br>
      <button style={{ width: "165px" }} onClick={addOutEventForm}>
        Change out event
      </button>
      <br></br>
      <br></br>
      {handleOutEventForm && (
        <EditOutEvent
          changeNewExitEvent={props.changeNewExitEvent}
          addNewExitEvent={props.addNewExitEvent}
        />
      )}
    </div>
  );
};

export default EditForm;
