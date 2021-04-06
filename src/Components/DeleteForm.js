import React from "react";

const DeleteForm = (props) => {
  let outV = React.createRef();
  let inV = React.createRef();

  const deleteIncomeEvent = (e) => {
    e.preventDefault();
    let incomeValue = inV.current.value;
    props.getDeleteFormValues(incomeValue, "");
    props.deleteIncomeEvent();
  };

  const deleteOutEvent = (e) => {
    e.preventDefault();
    let outValue = outV.current.value;
    props.getDeleteFormValues("", outValue);
    props.deleteOutEvent();
  };

  return (
    <div
      style={{
        marginLeft: "19px",
        border: "2px solid gray",
        width: "320px",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <form onSubmit={deleteIncomeEvent}>
        <input type="text" ref={inV} placeholder="  Enter income event" />
        <button style={{ marginLeft: "5px", width: "150px" }}>
          Delete income event
        </button>
      </form>
      <form onSubmit={deleteOutEvent}>
        <input type="text" ref={outV} placeholder="  Enter out event" />
        <button style={{ marginLeft: "5px", width: "150px" }}>
          Delete out event
        </button>
      </form>
    </div>
  );
};

export default DeleteForm;
