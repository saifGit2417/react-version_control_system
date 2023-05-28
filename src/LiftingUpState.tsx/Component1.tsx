import React from "react";

interface Props {
  label: string;
  text: string;
  onChangeHandler: (e:any) => void;
}

const Component1: React.FC<Props> = ({ label, text, onChangeHandler }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" value={text} onChange={(e) => onChangeHandler(e)} />
    </div>
  );
};

export default Component1;
