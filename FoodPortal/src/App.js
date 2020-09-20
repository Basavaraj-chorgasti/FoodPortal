import React, { Component } from "react";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Home from "./FoodPortal/Home";
import Aboutus from "./FoodPortal/Aboutus";
import PageNotFound from "./FoodPortal/PageNotFound";
import ContactUs from "./FoodPortal/ContactUs";
import Mycart from "./FoodPortal/Mycart";
import Login from "./FoodPortal/Login";
import Menu from "./FoodPortal/Menu";
import Signin from "./FoodPortal/Signin";
import Forget from "./FoodPortal/Forget";
import Admin from "./FoodPortal/Admin";
import Logout from "./FoodPortal/Logout"; 
import "./FoodPortal/Mystyle.module.css";
import Insert from "./FoodPortal/Insert";
import Order from "./FoodPortal/Order";
import SignUp from "./FoodPortal/SignUp";
import "./FoodPortal/f.css";



class App extends Component {
  
  render() {
     var a = JSON.parse(localStorage.getItem('LOG'))
     if(a==null)
     {
       a=[]
       a[0] = 'User';
       a[1] = false;
     }
     if(a[1])
     {
       if(a[0]=="ADMIN"){
      return (
        <div className="container" >
          <BrowserRouter>
          <div>
          <img src="baZira.png" style={{float:"left"}} width="50px" height="40px"/>
          <ul>
          <li><NavLink  style={{textDecoration:"none",color:"black"}} to='/logout'> log_out</NavLink></li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/menu'>Menu</NavLink></li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/admin'> Admin </NavLink></li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/contactus'> Contact_us </NavLink></li>
          <li> <NavLink style={{textDecoration:"none",color:"black"}} to='/aboutus' >About_us</NavLink>  </li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/'> Home </NavLink></li>
          </ul>
          </div>
          <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/menu' exact component={Menu}></Route>
          <Route  path='/contactus' component={ContactUs}></Route>
          <Route path='/aboutus' component={Aboutus} ></Route>
          <Route path='/mycart/:name' exact component={Mycart}></Route>
          <Route path='/mycart' exact component={Mycart}></Route>
          <Route path='/signin' exact component={Signin}></Route>
          <Route path='/SignUp' exact component={SignUp}></Route>
          <Route path='/Forget' exact component={Forget}></Route>
          <Route path='/Admin' exact component={Admin}></Route>
          <Route path='/logout' exact component={Logout}></Route>
          <Route path = '/insert' exact component={Insert}></Route>
          <Route component={PageNotFound}></Route>
          </Switch>
          </BrowserRouter>
          <div class="footer">
            <center>
  <p>© 2020 BaZiRa </p></center>
</div>
        </div>
      );
       }
       else{
        return (
          <div className="container" >
            <BrowserRouter>
            <div>
            <img src="baZira.png" style={{float:"left"}} width="50px" height="40px"/>
            <ul>
            <li><NavLink  style={{textDecoration:"none",color:"black"}} to='/logout'> log_out</NavLink></li>
            <li><NavLink style={{textDecoration:"none",color:"black"}} to='/menu'>Menu</NavLink></li>
            <li><NavLink style={{textDecoration:"none",color:"black"}} to='/mycart'> My_Cart </NavLink></li>
            <li><NavLink style={{textDecoration:"none",color:"black"}} to='/contactus'> Contact_us </NavLink></li>
          <li> <NavLink style={{textDecoration:"none",color:"black"}} to='/aboutus' >About_us</NavLink>  </li>

            <li><NavLink style={{textDecoration:"none",color:"black"}} to='/'> Home </NavLink></li>
            </ul>
            </div>
            <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/menu' exact component={Menu}></Route>
            <Route  path='/contactus' component={ContactUs}></Route>
            <Route path='/aboutus' component={Aboutus} ></Route>
            <Route path='/mycart/:name' exact component={Mycart}></Route>
            <Route path='/mycart' exact component={Mycart}></Route>
            <Route path='/signin' exact component={Signin}></Route>
            <Route path='/SignUp' exact component={SignUp}></Route>
            <Route path='/Forget' exact component={Forget}></Route>
            <Route path='/Admin' exact component={Admin}></Route>
            <Route path='/logout' exact component={Logout}></Route>
            <Route path = '/insert' exact component={Insert}></Route>
            <Route path ='/order' exact component={Order}></Route>
            <Route component={PageNotFound}></Route>
            </Switch>
            </BrowserRouter>
            <div class="footer">
            <center>
  <p>© 2020 BaZiRa </p></center>
</div>
          </div>
        );
       }
    }
    else{
      return (
        <div className="container" >
          <BrowserRouter>
          <div>
          <img src="baZira.png" style={{float:"left"}} width="50px" height="40px"/>
          <ul>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/signin'> log_in</NavLink></li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/menu'>Menu</NavLink></li>
          {/* <li>/NavLink style={{textDecoration:"none",color:"black"}} to='/mycart'> My_Cart </NavLink></li> */}
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/contactus'> Contact_us </NavLink></li>
          <li> <NavLink style={{textDecoration:"none",color:"black"}} to='/aboutus' >About_us</NavLink>  </li>
          <li><NavLink style={{textDecoration:"none",color:"black"}} to='/'> Home </NavLink></li>
          </ul>
          </div>
          <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/menu' exact component={Menu}></Route>
          <Route  path='/contactus' component={ContactUs}></Route>
          <Route path='/aboutus' component={Aboutus} ></Route>
          <Route path='/mycart' exact component={Mycart}></Route>
          <Route path='/mycart/:name' exact component={Mycart}></Route>
          <Route path='/signin' exact component={Signin}></Route>
          <Route path='/SignUp' exact component={SignUp}></Route>
          <Route path='/Forget' exact component={Forget}></Route>
          <Route path='/Admin' exact component={Admin}></Route>
          <Route path='/logout' extact component={Logout}></Route>
          <Route path = '/insert' exact component={Insert}></Route>
          <Route path ='/order' exact component={Order}></Route>
          <Route component={PageNotFound}></Route>
          </Switch>
          </BrowserRouter>
          <div class="footer">
            <center>
  <p>© 2020 BaZiRa </p></center>
</div>
        </div>
      );
    }

  }
}

export default App;