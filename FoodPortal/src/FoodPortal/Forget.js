import React, { Component } from 'react';

class Forget extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            userid:"",
            rror:"",
    
        }
    }
    // static propTypes = {
    //     histroy : this.PropTypes.objects.isRequired
    // }
    HandleData = (e) =>
    {
       this.setState({
       [e.target.name]:e.target.value,
     });
   };
   ve=()=>
   {
      if(!(this.state.userid.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)))
     {

       return false;
     }
     else
       return true;
   };
   SubmitData=(e)=>
   {

       if(this.ve())
       {

            var arr = JSON.parse(localStorage.getItem('USER'));
            var c = 0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].e==this.state.userid)
                {
                    alert("your password is"+ arr[i].pd)
                    this.props.history.push(`/Signin`);
                    c++;
                }
            }
            if(c==0)
            {
               alert(this.state.userid + " not registered");
               this.props.history.push(`/SignUp`);
            }
        }
        else
        {
            e.preventDefault();
            this.setState(
                {
                    rror:"INVALID ",
                }
            )
            
        }
   }
    render() {
        const {userid} = this.state;
        return (
            <div style={{ textAlign: "center" }} className="a">
                <br></br><br></br><br></br>
            <h1>Forget Password </h1>
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
                            {this.state.rror}
                        </div></center></td>
               
                </tr>
            
               <tr><td colSpan="2"><center><button type="submit" className="btn btn-success"> SUBMIT </button></center></td></tr>
                
         </table>
         </form>
         <br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <br></br>

         
         </center>
                
            </div>
        );
    }
}

export default Forget;