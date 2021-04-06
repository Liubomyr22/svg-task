import React from "react";

const TestElementExitEvent = ({ text, index }) => {
  return (
    <>
      <text
        style={{ fontSize: "10px" }}
        x="72px"
        y={`${(index + 1) * 33 + 55}px`}
        fill="#646464"
      >
        {text}
      </text>
      <circle
        cx="202.5"
        cy={`${(index + 1) * 33 + 52}px`}
        r="4.5"
        fill="#FCFC62"
      />
    </>
  );
};

export default TestElementExitEvent;
