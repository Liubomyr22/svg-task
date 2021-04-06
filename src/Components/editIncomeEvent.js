import React from "react";

const EditIncomeEvent = ({ addNewIncomeEvent, changeNewIncomeEvent }) => {
  let newEvent = React.createRef();

  let addEvent = () => {
    let incomeEvent = newEvent.current.value;
    addNewIncomeEvent(incomeEvent);
  };

  let onEventChange = (e) => {
    if (
      newEvent.current.value.length === 0 ||
      newEvent.current.value.length > 30
    ) {
      return alert("Income event is not correct.");
    }
    e.preventDefault();
    changeNewIncomeEvent();
  };

  return (
    <form onSubmit={onEventChange}>
      <input
        type="text"
        placeholder="  Add new incoming event"
        ref={newEvent}
        onChange={addEvent}
      />
      <button style={{ marginLeft: "5px", width: "150px" }}>
        Add income event
      </button>
    </form>
  );
};

export default EditIncomeEvent;
