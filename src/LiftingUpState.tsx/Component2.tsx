import React, { useState } from "react";

interface Props {
  title: string;
  children: string;
  active: boolean;
  onShow: () => void;
}

const Component2: React.FC<Props> = ({ title, children, active, onShow }) => {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {active ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => onShow}>Show</button>
      )}
    </section>
  );
};

export default Component2;
