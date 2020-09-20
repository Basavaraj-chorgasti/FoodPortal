import React, { Component } from 'react';


class Signin extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            userid:"",
            password:"",
            useriderror:"",
            passworderror:""
        }
    }
    ve=()=>
    {
        
       if(!(this.state.userid.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)))
      {
        //e.perventDeflaut(false);
        this.setState({
        useriderror : "invalid email",
        })
        return false;
      }
      else
        return true;
    };
    HandleData = (e) =>
    {
       this.setState({
       [e.target.name]: e.target.value,
     });
   };
   SubmitData=(e)=>
   {
        e.preventDefault()
       
       if(this.ve())
       {
           alert("hiii")
            var arr = JSON.parse(localStorage.getItem('USER'));
            var c = 0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].e==this.state.userid)
                {
                
                    if(arr[i].pd==this.state.password)
                    {
                        if(arr[i].f=="ADMIN")
                        {
                             var a = JSON.parse(localStorage.getItem('LOG'));
                            if(a==null)
                            {
                                a=[];
                            }
                            
                            a[0] = arr[i].f;
                            a[1] = 'true';
                        
                            localStorage.setItem('LOG',JSON.stringify(a));
                            this.props.history.push(`/Admin`);
                            window.location.reload(false);
                            c++;
                        }
                        else 
                        {
                            var a = JSON.parse(localStorage.getItem('LOG'));
                            if(a==null)
                            {
                                a=[];
                            }
                            a[0] = arr[i].f;
                            a[1] = 'true';
                            localStorage.setItem('LOG',JSON.stringify(a));
                            this.props.history.push(`/`);
                            
                           window.location.reload(false);
                            
                        }
                    }
                    else{
                      //  e.perventDeflaut(false);
                        this.setState({
                        passworderror:"password is wrong",
                        })
                        c++;
                    }
                }
            }
            if(c==0)
            {
          //      e.perventDeflaut(false);
                this.setState({
                    useriderror:this.state.userid+"not registered",
                })
            }
        }
        else{
          // e.prevantDeflaut();
           this.state.useriderror= this.state.useriderror;
        }
    }
    render() {
        const {userid,password} = this.state;
        return (
            <div style={{ textAlign: "center" }} className="a">
                
            <h1>SIGN IN </h1>
            <center>
            <form onSubmit={this.SubmitData}>
              <table>
              <tr>
                <td><center> <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>USER ID<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="text" required className='form-control' name="userid" 
                            value={userid} placeholder="enter the registered email" onChange={this.HandleData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.useriderror}
                        </div></center></td>
                </tr>
              <tr>
                <td><center> <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>PASSWORD<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="password" required className='form-control' name='password' 
                            value={password} placeholder="password" onChange={this.HandleData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.passworderror}
                        </div>
                </center></td></tr>
                               <tr><td><center><button type="submit" className="btn btn-success"> SUBMIT </button></center></td></tr>
                 <tr><td><a href="Forget" style={{textDecoration:"none"}}>Forget_password?</a>
                 <a href="SignUp"style={{textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new User?</a></td></tr>
                
         </table>
         </form>
         <br></br><br></br>
         <br></br>
         <br></br>
         <br></br>

         </center>
                
            </div>
        );
    }
}

export default Signin;