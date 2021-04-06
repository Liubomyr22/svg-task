import React from "react";
import "./App.css";
import DeleteFormContainer from "./Components/DeleteFormContainer";
import EditFormContainer from "./Components/EditFormContainer";
import TestElementContainer from "./Components/TestElementContainer";

const App = ({store}) => {
 


  return (
    <>
      <TestElementContainer store={store} />
      <EditFormContainer store={store} />
      <DeleteFormContainer store={store} />
    </>
  );
};

export default App;
