import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
//import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Auction from './components/Auction';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
//import { useEffect, useState } from 'react';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';
function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  const isLoggedIn = async () => {
    try{
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });
      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }
    }catch(error){
      console.log(error);
    }
   
  }
  useEffect(() =>{
    isLoggedIn();
  },[]);

  return (
    <div>
      
        <Navbar auth={auth1}/>
        <Switch>
          <Route exact path="/" component ={Home}/>
          <Route exact path="/about" component ={About}/>
          <Route exact path="/service" component ={Service}/>
          <Route exact path="/contact" component ={Contact}/>
          <Route exact path="/auction" component ={Auction}/>
          <Protectedroute exact path="/login" component ={Login} auth={auth1}/>
          <Protectedroute exact path="/register" component ={Register} auth={auth1}/>
          <Protectedroute exact path="/dashboard" component ={Dashboard} auth={auth}/>
          <Protectedroute exact path="/logout" component ={Logout} auth={auth}/>
          
        </Switch>       
    </div>
  );
}
export default App;