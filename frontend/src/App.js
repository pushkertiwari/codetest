import { useState, useEffect, useMemo } from "react";
import InputComponent from "./inputComponent";
import WrapperContext from "./context";

const App = () => {
  //value getter method
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    employeeId: "",
  });
  const providerValue = useMemo(() => ({ state, setState }), [state, setState]);
  // value setter
  const onChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const inputEditable = (inputField) => {
    if (inputField.length === 0) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    fetch(`http://localhost:3000/employee/345342`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        setState({
          ...state,
          firstName: data.firstname,
          lastName: data.lastname,
          employeeId: data.employeeid,
        });
      })
      .catch((err) => {
        console.warn(err.message);
        setState({
          ...state,
          firstName: "",
          lastName: "",
          employeeId: "",
        });
      });
  }, []);
  return (
    <WrapperContext.Provider value={providerValue}>
      <div className="root">
        <InputComponent
          placeholder="First name"
          onChange={onChange}
          inputName="firstName"
          disabled={false}
        />
        <InputComponent
          placeholder="Last name"
          onChange={onChange}
          inputName="lastName"
          disabled={inputEditable(state.firstName)}
        />
        <InputComponent
          placeholder="Employee Id"
          onChange={onChange}
          inputName="employeeId"
          disabled={
            inputEditable(state.lastName) || inputEditable(state.lastName)
          }
        />
      </div>
    </WrapperContext.Provider>
  );
};

export default App;
