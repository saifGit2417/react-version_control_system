import { useState } from "react";
import Component1 from "./Component1";

const Main = () => {
  const [textValue, setTextValue] = useState<string>("");

  const handleOnChange = (e: any) => {
    setTextValue(e.target.value);
  };
  return (
    <div>
      {/* liftimg state up from child component and passing it to parent component so that if state of one child changes it will reflect in all child components beacuse we are managing this from parent component prespective */}
      <Component1
        label="input1"
        text={textValue}
        onChangeHandler={handleOnChange}
      />
      <Component1
        label="input2"
        text={textValue}
        onChangeHandler={handleOnChange}
      />
    </div>
  );
};

export default Main;
