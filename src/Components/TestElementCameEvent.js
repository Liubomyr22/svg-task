import React from "react";

const TestElementCameEvent = ({ text, index }) => {
  return (
    <>
      <circle
        cx="14.5"
        cy={`${(index + 1) * 33 + 35}px`}
        r="4.5"
        fill="#CCFF66"
      />
      <text
        style={{ fontSize: "10px" }}
        x={"30px"}
        y={`${(index + 1) * 33 + 36}px`}
        dominantBaseline="middle"
        fill="#646464"
      >
        {text}
      </text>
    </>
  );
};

export default TestElementCameEvent;
