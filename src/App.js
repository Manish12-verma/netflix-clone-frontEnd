import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import {auth} from "./firebase"
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user =useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
  const unsubscribe =  auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      //LoggedIn
      console.log(userAuth)
      dispatch(
        login({
        uid:userAuth.uid,
        email:userAuth.email, 
      }))
    }else{
      //loggedOUT
      dispatch(logout())
    }
   });
   return unsubscribe; 
  },[dispatch])

  return (
    <div className="app">
     
      <Router>
        {!user ?(
          <LoginScreen/>
        ):(
          <Switch>
            <Route path='/profile'>
              <ProfileScreen/>
            </Route>
          <Route exact path="/">
          <HomeScreen/>
          </Route>
        </Switch> 
        )}
    </Router>
    </div>
  ); 
}

export default App;
