import "./App.css";
import { useContext } from "react";
import WrapperContext from './context'
const InputComponent = ({placeholder, onChange,  inputName,disabled=false}) => {
  const { state } = useContext(WrapperContext);
  return (
    <>
      <input
        type="text"
        className="inputField"
        name={inputName}
        placeholder={placeholder}
        value={state[inputName]}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

export default InputComponent;
