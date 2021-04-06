import React from "react";

const TestElementDescription = ({ description }) => {
  return (
    <svg
      width="219"
      height="90"
      viewBox="0 0 219 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      text-anchor="middle"
    >
      <text x="50%" y="50%" fill="#979797" style={{ fontSize: "13px" }}>
        {description}
      </text>
      <line
        x1="-2.18557e-08"
        y1="17.75"
        x2="219"
        y2="17.75"
        stroke="#BBBBBB"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default TestElementDescription;
