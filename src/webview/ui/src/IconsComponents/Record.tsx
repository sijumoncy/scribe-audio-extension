import React from "react";

interface IRecordProps {
  classes: string;
}

const Record: React.FC<IRecordProps> = ({ classes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      fill="none"
    >
      <path
        stroke="current"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
      />
    </svg>
  );
};

export default Record;
