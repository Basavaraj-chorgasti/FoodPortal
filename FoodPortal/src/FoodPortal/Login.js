import React, { Component } from 'react';
//import "../FoodPortal/mystyle.css";
class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fname: "",
        lname: "",
        dob:"",
        email:"",
        phone:"",
        address: "",
        gender:"",
        pass:"",
        cpass:"",
        Username:"",
        rror:"",
//        data:[],
        
      };
    }
  
    HandleData = (e) =>
     {
        const value=e.target.name==='fname'?e.target.value.toUpperCase():e.target.value
        this.setState({
        [e.target.name]: value,
      });
    };
   
    vf=()=>
    {
      if(!(this.state.fname.match(/^([a-zA-Z\s]{1,10})$/)))
      {
        this.state.rror = "invalid fristname";
        return false;
      }
      else
        return true;
    };
  
    vl=()=>
    {
      if(!(this.state.lname.match(/^([a-zA-Z\s]{1,10})$/)))
       {
         this.state.rror =  "invalid lastname";
         return false;
       }
       else
         return true;
     };
     vd=()=>
     {
         return true;
     };
     ve=()=>
     {
        if(!(this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)))
       {
         this.state.rror = "invalid email";
         return false;
       }
       else
         return true;
     };
     vp=()=>
     {
        if(!(this.state.phone.match(/^[7-9]{1}[0-9]{9}$/)))
       {
         this.state.rror = "invalid phone";
         return false;
       }
       else
         return true;
     }
     vpass=()=>
     {
       if(!(this.state.pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)))
       {
         this.state.rror = "invalid password";
         return false;
       }
       else
         return true;
     }
     vcpass=()=>
     {
         return true;
     }
     vg=()=>
     {
       if(this.state.gender=="" && this.state.gender=="select")
       {
         this.state.rror = "select the option";
         return false;
       }
       else
         return true;
     };
     va=()=>
     {
       if(this.state.address=="")
       {
         this.state.rror = "Enter the ADDRESS";
         return false;
       }
       else
         return true;
     };
     SubmitData = (e) => {
     e.preventDefault();
     
      if(this.vf() && this.vl() && this.vd() && this.ve() && this.vp() && this.va() && this.vg() && this.vpass() && this.vcpass())
      {
        if(this.state.pass==this.state.cpass)
        {
            var f = this.state.fname;
            var l = this.state.lname;
            var d = this.state.dob;
            var e = this.state.email;
            var p = this.state.phone;
            var a = this.state.address;
            var g = this.state.gender;
            var pd = this.state.pass;
            var cp = this.state.cpass;
            var u = this.state.Username;
            var arr = JSON.parse(localStorage.getItem('USER'));
            if(arr==null){
                arr=[];
            }
            var obj={f,l,d,e,a,p,g,pd,cp,u}
            arr.push(obj);
            localStorage.setItem('USER',JSON.stringify(arr));

          
            this.props.history.push(`/signin`);
        }
        else
        {
              e.preventDefault();
              alert("password mismatch");
        }
      }
      else
      {
        e.preventDefault()
        alert(`${this.state.rror}`);
      }
    };
    Resetdata=()=>
    {
      window.location.reload(false);
    }
    render() {
      const { fname,lname,dob,email,phone, address,gender,pass,cpass,Username } = this.state;
      return (
        <div style={{ textAlign: "center" }}>
          <h1>SIGN UP </h1>
          <center>
          <form onSubmit={this.SubmitData} onReset={this.Resetdata}>
            <table>
            <tr>
              <td><label> FIRST NAME : </label></td>
              <td><input
                type="text"
                value={fname}
                name="fname"
                onChange={this.HandleData}
              /></td>
              </tr>
            <tr>
              <td>
              <label> LAST NAME : </label></td>
              <td>
              <input
                type="text"
                value={lname}
                name="lname"
                onChange={this.HandleData}
              /></td>
              </tr>
            <tr>
              <td>
              <label> DATE OF BIRTH : </label></td>
              <td>
              <input
                type="date"
                value={dob}
                name="dob"
                onChange={this.HandleData}
              /></td>
              </tr>
            
            <tr>
            <td><label> EMAIL : </label></td>
            <td><input
                type="text"
                value={email}
                name="email"
                onChange={this.HandleData}
              /></td>
            </tr>
            <tr>
              <td>
              <label> PHONE NUMBER : </label></td>
              <td><input
                type="text"
                value={phone}
                name="phone"
                onChange={this.HandleData}
              /></td>
            </tr>
            <tr>
              <td><label> ADDRESS : </label></td>
              <td><textarea
                value={address}
                name="address"
                onChange={this.HandleData}
              ></textarea>
              </td>
            </tr>
            <tr>
              <td><label> GENDER : </label></td>
              <td><select value={gender} onChange={this.HandleData} name="gender">
                <option value="select"> select</option>
  
                <option value="MALE"> MALE</option>
                <option value="FEMALE"> FEMALE</option>
                <option value="OTHRES"> OTHERS</option>
              </select>
              </td>
            </tr>
            <tr>
              <td><label> PASSWORD : </label></td>
              <td><input
                type="password"
                value={pass}
                name="pass"
                onChange={this.HandleData}
              /></td>
            </tr>
            <tr>
              <td><label> CONFIRM PASSWORD : </label></td>
              <td><input
                type="password"
                value={cpass}
                name="cpass"
                onChange={this.HandleData}
              /></td>
            </tr>
           
           <tr><td> <button type="submit" className="btn btn-success"> SUBMIT </button></td><td>
           <button type="reset" className="btn btn-danger"> RESET </button></td>
           </tr>
            </table>
          </form>
          </center>
        </div>
      );
    }
  }
  
  export default Login;
  