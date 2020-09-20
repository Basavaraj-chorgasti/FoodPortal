import React, { Component } from 'react';

class Insert extends Component {
    
    constructor(props)
    {
        super(props)
        this.state={
            foodimg:"",
            foodname:"",
            foodcost:"",
            ffe:"",
            fne:"",
            fce:"",
        }
    }
    HandleData=(e)=>
    {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    SubmitData=(e)=>
    {
        var fimage=this.state.foodimg;
        var f = fimage.split("\\");
        var fi = f[2];
        
        var fn = this.state.foodname;
        var fc = this.state.foodcost;
        if(fi!='')
        {
          if(fn!='')
          {
            if(fc!='')
            {
              var obj={fi,fn,fc};
              var a = JSON.parse(localStorage.getItem('ITEM'))
              if(a==null)
              {
                a=[];
              }
              a.push(obj);
              localStorage.setItem('ITEM',JSON.stringify(a));
              this.props.history.push('/admin');
            }
            else{
                this.setState({
                  fce:"invalid cost",
                })
            }
          }
          else
          {
            this.setState({
              fne:"invalid name",})
          }
        }
        else{
          this.setState({
            ffe:"no file",})
        }
    }
    render() {
        const {foodimg,foodname,foodcost}=this.state
        
        return (
            <div className="container" >
              
                <center>
                <h1>INSERT ITEM </h1>

          <form onSubmit={this.SubmitData}>
            <table>
            <tr>
            <td><center> <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>FOOD IMAGE<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="file" required className='form-control' name="foodimg" 
                            value={foodimg}  onChange={this.HandleData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.ffr}
                        </div></center></td>
              
              </tr>
            <tr>
            <td><center> <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>FOOD NAME<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="text" required className='form-control' name="foodname" 
                            value={foodname} placeholder="enter the food name" onChange={this.HandleData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.fne}
                        </div></center></td>
              
              </tr>
            <tr>
              <td>
              <center> <div className='form-group col-md-10'>
                            <label className='float-left block-text text-darken-2 s'>FOOD COST<span aria-hidden='true' style={{color:'red'}}> *</span></label>
                            <input type="text" required className='form-control' name="foodcost" 
                            value={foodcost} placeholder="enter the cost" onChange={this.HandleData}/>
                        </div>
                        <div style={{textAlign:"center" ,fontSize:12,color:"red"}}>
                            {this.state.fce}
                        </div></center></td>
               </tr>
              <tr><td colSpan="2"><center>  <button type="submit" className="btn btn-success"> ADD ITEM </button></center></td></tr>

              </table>
              </form>
                </center>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Insert;