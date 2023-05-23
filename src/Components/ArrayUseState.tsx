import React, { useState } from "react";

const ArrayUseState = () => {
  const [number, setNumber] = useState<number>(0);
  const [array, setArray] = useState<any>([0, 1, 2, 3, 4, 5, 6]);

  const hanldeArrayManipulation = () => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element === number) {
        setArray(array.filter((value: number) => value != number));
      } else {
        const changeToNumber: number = +number;
        setArray([...array, changeToNumber]);
        console.log("else code block is runing");
      }
    }
    return array;
  };

  console.log(array);
  return (
    <div>
      <h1>managing state in ARRAY</h1>
      <h3>
        We will take a number from user , and if input number is alreday
        existing in our array then we will remove that number from our original
        array. but if number inserted by user is not presnt in array then we
        will add that number to our array
      </h3>
      <input
        type="number"
        value={number}
        onChange={(e: any) => setNumber(e.target.value)}
      />
      <button onClick={hanldeArrayManipulation}> set array </button>
      <h2>result</h2>
      <p> {array} </p>
    </div>
  );
};

export default ArrayUseState;
