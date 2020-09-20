import React, { Component } from 'react';
import Login from './Login';

class Admin extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            n:"",
            c:"",
        }
    }
    Handname=(e)=>
    {
        this.state.n=e.target.value
    }
    Handcost=(e)=>
    {
        this.state.c=e.target.value
    }
    
    insert=()=>
    {
        this.props.history.push('/insert')    
        
    }
    delete=()=>
    {
        
        var a = JSON.parse(localStorage.getItem('ITEM'))
         
        for(var i=0;i<a.length;i++)
        {
            var image = a[i].fi; 
            var name = a[i].fn;
            var cost = a[i].fc;
            
            var b = i;
            var dl="del"+b;
            var ed="edit"+b;
            var ud = "update"+b;
            var html='<table><tr><td><center><img src='+'"'+image+'"'+' height="50px" width="50px"/></center></td><td><center><input type="text" name='+'"'+b+'"'+'value='+'"'+name+'"'+' disabled /></center></td><td><center><input type="text" name='+'"'+b+'"'+'value='+'"'+cost+'"'+' disabled ></center></td><td><center><button id ='+dl+' type="text" value='+'"'+b+'"'+' class ="btn btn-success" >DELETE</button></center></td><td><center><button id ='+ed+' type="text" value='+'"'+b+'"'+' class ="btn btn-success" >EDIT</button></center></td><td><center><button id ='+ud+' type="text" value='+'"'+b+'"'+' class ="btn btn-success" >UPDATE</button></center></tr><table>';
            document.getElementById("d").insertAdjacentHTML('beforeend',html);
            document.getElementById(dl).addEventListener('click',this.delete1)
            document.getElementById(ed).addEventListener('click',this.edit)
            document.getElementById(ud).addEventListener('click',this.update)          
        }
    }
    update=(e)=>
    {
        // alert(this.state.n+this.state.c);
        // alert(e.target.value)
        var fi;
        var fc;
        var fn;
        var obj;

        var a = JSON.parse(localStorage.getItem('ITEM'))
        for(var i=0;i<a.length;i++)
        {
            if(i==e.target.value)
            {
                
                fi=a[i].fi;
                // alert(a[i].fi)
            }
        }
        fn=this.state.n;
        fc = this.state.c;
        obj={fi,fn,fc}
        //alert(obj.fc+obj.fn+obj.f) 
        a.splice(e.target.value,1)
        a.splice(e.target.value,0,obj) 
        localStorage.setItem('ITEM',JSON.stringify(a))
        var a = document.getElementsByName(e.target.value)
        for(var i = 0;i<a.length;i++)
        {
            a[i].disabled = true;
        }
        this.delete();
    }
    delete1=(e)=>{
        var a = JSON.parse(localStorage.getItem('ITEM'))
        a.splice(e.target.value,1);
        localStorage.setItem('ITEM',JSON.stringify(a))
        window.location.reload(false);
    

    }
    edit=(e)=>
    {
        
        var a = document.getElementsByName(e.target.value)
        for(var i = 0;i<a.length;i++)
        {
            a[i].removeAttribute('disabled');
        }
        this.state.n = a[0].value;
        this.state.c = a[1].value;
        a[0].addEventListener('change',this.Handname)
        a[1].addEventListener('change',this.Handcost)

    }
    order=()=>
    {
        
        var a = JSON.parse(localStorage.getItem('ORDER'))
        if(a!=null){
        var htl='<table><tr><td><center>Customer</center></td><td><center>Date</center></td><td><center>Order id</center></td><td><center>Order Amount</center></td></tr><table>';
        document.getElementById("d").insertAdjacentHTML('beforeend',htl)
        for(var i=0;i<a.length;i++)
        {
            var name = a[i].name; 
            var date = a[i].d;
            var oid = a[i].id;
            var amount = a[i].oa;
            var html='<table><tr><td><center>'+name+'</center></td><td><center>'+date+'</center></td><td><center>'+oid+'</center></td><td><center>'+amount+'</center></td></tr><table>';
            document.getElementById("d").insertAdjacentHTML('beforeend',html);
        }
        var h='<table><tr><td colspan="4"><center><button type="submit" id="clr" class="btn btn-success">CLEAR HISTORY</button></center></td></tr>';
        document.getElementById("d").insertAdjacentHTML('beforeend',h)
        document.getElementById("clr").addEventListener('click',this.clr);
        
    }
    else
    {
        alert(" NO ORDER HISTROY IS PRESENT ")
    }
}
clr=()=>{
    localStorage.removeItem('ORDER');
    window.location.reload(false);
}

    render() {
        return (
            <div className="container">
                <br></br>
                <center>
                    
                <tr><td><button text="submit" onClick={this.insert} className="btn btn-success">insert item</button></td>
                {/* <div id ="insert"></div> */}
                <td><button text="submit" onClick={this.delete} className="btn btn-success">delete item</button></td>
                <td><button text ="submit" onClick={this.order} className="btn btn-success">HISTORY</button></td></tr>
               <table id="d">
                   </table> 
                </center>
            </div>
        );
    }
}

export default Admin;