import React from "react";
import logo from "../images/trashpanda.png";
import { useHistory } from 'react-router-dom';


function SignUp() {

  let history = useHistory();

  function goBack() {
    history.push("/login");
  }

  return (
    <div className="App bg-primary" style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <img src={logo} alt="Logo" class="pt-2" style={{ height: '200px' }} />
          </div>
          <div className="text-center justify-content-center">
            <button type="button" onClick={goBack} class="custom-btn mx-2" style={{ display: "inline" }}>go back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
