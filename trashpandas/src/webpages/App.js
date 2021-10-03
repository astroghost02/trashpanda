import React from "react";
import { useHistory } from 'react-router-dom';
import logo from "../images/trashpanda.png";

function App() {

  let history = useHistory();

  function goLogin() {
    history.push("/login");
  }

  function goSignup() {
    history.push("/signup");
  }

  return (
    <div className="App bg-primary" style={{ height: '200vh' }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <img src={logo} alt="Logo" class="pt-2" style={{ height: '270px' }} />
          </div>
          <div className="text-center">
            <span className="text-secondary cursive" style={{ fontSize: "50px" }}>Welcome to TrashPanda!</span>
          </div>
          <div className="text-center justify-content-center">
            <button type="button" onClick={goLogin} class="custom-btn mx-2" style={{ display: "inline" }}>Login</button>
            <button type="button" onClick={goSignup} class="custom-btn mx-2" style={{ display: "inline" }}>Create An Account</button><br/>
            <div className="text-center m-3">
            <span className="text-secondary cursive" style={{ fontSize: "20px" }}>As we are celebrating the sustainability week from Monday, and supporting the United nation cause to build this world sustainable. Clean environment is one of the pillar of sustainability, here comes our application TrashPanda, it is an interactive app helping the volunteers in finding places with trash and report them. The difference between our application and other websites which provides information of voluntary services is that we will take and provide information respectively from our user's only. The project allows users to take pictures of garbage and report it on our app with the area, it saves the location and time of the reported trash. And if enough people have seen it and a threshold amount is reached an event is created at the place for people to volunteer and clean it up. The event is arbitrated by volunteers and is  open to anyone who wants to take the initiative. The app has various rewards for the people who actually volunteer for the event. The app also gives you notifications showing places where the trash is there and you can rsvp for the event. We can work on every scale from small community to helping clean rivers as well.
              From idea to developing the application we have learned a lot about various things on how cleaning up a certain percentage of trash could impact Earth and how volunteers can use something easy to help nature. In coming years trashPanda can be a great example of technology and human collaboration to save the environment. In future this app can take major projects for creating events like cleaning beaches, oceans and various other places. We are planning to add more features to TrashPanda like establishing a correlation between trash and its generation in specific areas with its frequency.
            </span>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
