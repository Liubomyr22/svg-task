import React from "react";

const TestElementName = ({ name }) => {
  return (
    <svg
      width="219"
      height="25"
      viewBox="0 0 219 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      text-anchor="middle"
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H209C214.523 0 219 4.47715 219 10V25H0V10Z"
        fill="#313549"
      />
      <text
        style={{
          fontSize: "13px",
          fontFamily: "inherit",
          width: "24px",
          height: "14px",
        }}
        x="50%"
        y="50%"
        dominantBaseline="middle"
        fill="white"
      >
        {name}
      </text>
    </svg>
  );
};

export default TestElementName;
