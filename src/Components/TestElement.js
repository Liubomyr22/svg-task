import React from "react";
import TestElementCameEvent from "./TestElementCameEvent";
import TestElementDescription from "./TestElementDescription";
import TestElementExitEvent from "./TestElementExitEvent";
import TestElementName from "./TestElementName";

const TestElement = (props) => {
  let state = props.testElement;
  let cy = 14.5;
  let eventHeight = state.eventHeight;
  let elementHeight = state.elementHeight;
  console.log(eventHeight);
  return (
    <svg
      style={{
        marginTop: "35px",
        marginLeft: "19px",
        boxShadow: "0px 2px 10px rgba(209, 209, 209, 0.23)",
        borderRadius: "10px",
        background: "white",

        overflow: "scroll",
      }}
      width="219"
      height={elementHeight}
      textAnchor="start"
    >
      <TestElementName name={state.elementName} />
      <TestElementDescription description={state.description} />
      {state.incomeEvents.map((elem, i) => {
        console.log(elem);
        return (
          <>
            <TestElementCameEvent
              key={i}
              cy={cy}
              height={eventHeight}
              text={elem}
              index={i}
            />
          </>
        );
      })}

      {state.exitEvents.map((elem, i) => {
        return <TestElementExitEvent index={i} key={i} cy={cy} text={elem} />;
      })}
    </svg>
  );
};

export default TestElement;
