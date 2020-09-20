import React, { Component } from 'react'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:'',
             address:'',
             mobNo:'',
             email:'',
             password:'',
             confirmpass:'',
             fullNameError:'',
             addessError:'',
             mobError:'',
             emailError:'',
             passwordError:''
        }
    }
    validate=()=>{
        var isValid=true;
        if(this.state.fullName.length===0){
            this.setState({
                fullNameError:'Name should not be empty'
            })
            isValid=false
        }
        else if(this.state.fullName.length>0){
            this.setState({
                fullNameError:''
            })
            isValid=true
        }
        if(this.state.address.length===0){
            this.setState({
                addessError:'Addess should not be empty'
            })
            isValid=false
        }
        else if(this.state.address.length>0){
            this.setState({
                addessError:''
            })
            isValid=true
        }
        if(!this.state.mobNo.match(/^\d{10}$/)){
            this.setState({
                mobError:'enter 10 digit number'
            })
            isValid=false;
        }
        else if(this.state.mobNo.match(/^\d{10}$/)){
            this.setState({
                mobError:''
            })
            isValid=true;
        }
        if(!this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
            this.setState({
                emailError:'email should contain @ and .'
            })
            isValid=false
        }
        else if(this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
            this.setState({
                emailError:''
            })
            isValid=true
        }
        if(!this.state.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}/)){
            this.setState({
                passwordError:'password should contain 1 special symbol 1 capital and length 8 char'
            })
            isValid=false
        }
        else if(this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/)){
                    this.setState({
                        passwordError:''
                    })
                    isValid=true
        }
        if(this.state.password!=this.state.confirmpass){
            this.setState({
                passwordError:'password and confirm password not match'
            })
            isValid=false
        }
        else if(this.state.password=this.state.confirmpass){
            this.setState({
                passwordError:''
            })
            isValid=true
        }
        return isValid
    }
    changeData=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
            
        })
    }
    submitData=(e)=>{
        e.preventDefault();
        const validForm=this.validate();
        const initialState={
                fullName:'',
                address:'',
                mobNo:'',
                email:'',
                password:'',
                confirmpass:'',
                fullNameError:'',
                addessError:'',
                mobError:'',
                emailError:'',
                passwordError:''
        }
        var arr=JSON.parse(localStorage.getItem('USER'))
        var emailUser=true
        if(arr!=null){
            arr.map(user=>{
                if(user.e===this.state.email){
                    emailUser=false;
                }
            })
        }
        if(arr==null){
            arr=[]
        if(validForm==true){
            const userDetails={
                
                f:this.state.fullName,
                a:this.state.address,
                p:this.state.mobNo,
                e:this.state.email,
                pd:this.state.password,
                cp:this.state.confirmpass
            }
            arr.push(userDetails);
            localStorage.setItem('USER',JSON.stringify(arr))
            alert('submitted successfully')
            this.props.history.push('/signin')
            this.setState(initialState);
        }
    }
    else if(arr!=null){
        if(validForm==true){
            if(emailUser==true){
            const userDetails={
                //isAdmin:false,
               // isLoggedIn:false,
                f:this.state.fullName,
                a:this.state.address,
                p:this.state.mobNo,
                e:this.state.email,
                pd:this.state.password,
                cp:this.state.confirmpass
            }
            arr.push(userDetails);
            localStorage.setItem('USER',JSON.stringify(arr))
            alert('submitted successfully')
            this.setState(initialState);
            this.props.history.push('/signin')
        }
        else{
            alert('your email is already register. please signup with another email')
            this.setState(initialState);
            
        }
        }
        else{
            alert('Somethng is wrong')
        }
    }
        
        
    }
    
    render() {
        const {fullName,address,mobNo,email,password,confirmpass}=this.state;
        return (
            <div>
                <div className="container">
                    <center>
                    <form autoComplete='off'>
                        <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>Full Name<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="text" required className='form-control' name='fullName' 
                            value={fullName} placeholder="Full name" onChange={this.changeData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.fullNameError}
                        </div>
                        <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>Address<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="text" required className='form-control' 
                            value={address} name='address' placeholder="Address" onChange={this.changeData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.addessError}
                        </div>
                        <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>Contact Number<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="text" required className='form-control' 
                            value={mobNo} name='mobNo' placeholder="Contact number" onChange={this.changeData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.mobError}
                        </div>
                        <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>Email Id<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="text" required className='form-control'
                            value={email} name='email' placeholder="Email Id" onChange={this.changeData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.emailError}
                        </div>
                        <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>Password<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="password" required className='form-control' 
                            value={password} name='password' placeholder="Password" onChange={this.changeData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.passwordError}
                        </div>
                        <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>Confirm Password<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="password" required className='form-control' 
                            value={confirmpass} name='confirmpass' placeholder="Confirm Password" onChange={this.changeData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.passwordError}
                        </div>
                        <div>
                        <button type="button" className='btn btn-primary m-2'>Reset</button>
                             
                            <button type="button" className='btn btn-success m-2'onClick={this.submitData}>Sign Up</button>
                            </div>
                    </form>
                    </center>
                </div>
                
            </div>
        )
    }
}

export default SignUp
