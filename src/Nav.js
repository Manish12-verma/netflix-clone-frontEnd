import React, { useEffect,useState } from 'react'
import "./Nav.css"
import { useHistory } from 'react-router-dom';

function Nav() {
  const[show,handleShow]  = useState(false);
  const history  = useHistory();


  const transitionNavBar = ()=>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  };

  useEffect(()=>{
window.addEventListener("scroll",transitionNavBar)
return ()=>window.removeEventListener('scoll',transitionNavBar)
  },[]);
  return (
  <div className={`nav ${show &&`nav__black`}`}>
    <div className="nav__contents">
        <img 
        onClick={()=>history.push("/")}
        className="nav__logo"
        src="./images/netflix-logo.png"
        alt="Image not found" />
        <img 
        onClick={() => history.push("/profile")}
        className ="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar not found" />
    </div>
    </div> 
  )
} 

export default Nav
