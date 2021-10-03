import React from "react";
import logo from "../images/trashpanda.png";
import { useHistory } from 'react-router-dom';


function SignUp() {

  let history = useHistory();

  function goBack() {
    history.push("/login");
  }

  function goAction() {
    history.push("/action");
  }

  return (
    <div className="App bg-primary" style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <img src={logo} alt="Logo" class="pt-2" style={{ height: '270px' }} />
          </div>
          <div className="text-center">
            <span className="text-secondary cursive" style={{ fontSize: "50px" }}>Welcome to TrashPanda!</span>
          </div>
          <div className="text-center justify-content-center">
            <input type="text" class="input" id="name" placeholder="Full Name" required="" color="white"/><br/>
            <input type="text" class="input" id="name" placeholder="Email" required="" color="white"/><br/>
            <input type="text" class="input" id="name" placeholder="Password" required="" color="white"/><br/>
            <input type="text" class="input" id="name" placeholder="Re-enter password" required="" color="white"/><br/>
            <button type="button" onClick={goAction} class="custom-btn mx-2" style={{ display: "inline" }}>Proceed</button>
            <button type="button" onClick={goBack} class="custom-btn mx-2" style={{ display: "inline" }}>go back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
