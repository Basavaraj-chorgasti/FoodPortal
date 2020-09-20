import React, { Component } from 'react';

class Mycart extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            sum:0,
            b:false,
        }
    }
    componentDidMount()
    {
        var mycart = JSON.parse(localStorage.getItem('MYCART'))
        if(mycart==null)
        {
            alert(" YOUR CART IS EMPTY");
        }
        else{
        var htm = '<tr><th><center>FOOD IMAGE</center></th><th><center>FOOD NAME</center></th><th><center>FOOD COST</center></th><th><center>FOOD QUANTITY</center></th><th><center>ORDER</center></th><th><center>DELETE</center></th></tr>';
        document.getElementById("d").insertAdjacentHTML('beforeend',htm);
        
        for(var i=0;i<mycart.length;i++)
        {
            var image = mycart[i].img; 
            var name = mycart[i].nm;
            var cost = mycart[i].ct;
            var b = i;
            var c = i+"input";
            var d = i+"order";
            
            var html='<table><tr><td><center><img src='+'"'+image+'"'+' height="50px" width="50px"/></center></td><td><center>'+name+'</center></td><td><center>'+cost+'</center></td><td><center><input type="text" name='+'"'+image+'"'+'id='+'"'+c+'"'+' value='+'"'+0+'"'+'/></center></td><td><center><button id ='+d+' type="submit" name='+'"'+image+'"'+' value='+'"'+image+'"'+' class ="btn btn-success" >ORDER</button></center></td><td><center><button id ='+b+' type="submit" value='+'"'+image+'"'+' class ="btn btn-success" >DELETE</button></center></td></tr><table>';
            document.getElementById("d").insertAdjacentHTML('beforeend',html);
            document.getElementById(i).addEventListener('click',this.delete);
            document.getElementById(d).addEventListener('click',this.order);
            
        }
        var ht ='<tr><td colSpan="4"><center> TATAL COST IS :&nbsp;&nbsp;&nbsp; <span id ="t"></span>&nbsp;&nbsp;&nbsp;</center></td><td colspan="2"><center><button text="submit" id="b" class="btn btn-success">PLACE ORDER</button></center></td></tr>';
        document.getElementById("d").insertAdjacentHTML('beforeend',ht);
        document.getElementById("b").addEventListener('click',this.pay);
        
    }
    }
    order=(e)=>
    {
        var a  = document.getElementsByName(e.target.value)
       var image = a[1].value;
       var qty=a[0].value;
       var cost;
       var mycart = JSON.parse(localStorage.getItem('MYCART'))
       for(var i=0;i<mycart.length;i++)
       {
           if(image == mycart[i].img)
           {
               cost = mycart[i].ct;
           }
        }
        a[0].disabled = true
        // alert(cost*qty)
        this.state.b=true

        this.state.sum = this.state.sum + (cost*qty);
        document.getElementById("t").innerHTML=this.state.sum;
    }
    delete=(e)=>
    {
        var mycart = JSON.parse(localStorage.getItem('MYCART'))
        var c;
        for(var i=0;i<mycart.length;i++)
        {
            if(mycart[i].img==e.target.value)
            {
                c=i;

            }
        }
        mycart.splice(c,1)
        localStorage.setItem('MYCART',JSON.stringify(mycart))
        window.location.reload(false);
        
    }
    pay=()=>
    {
        if(this.state.b){
        var order = JSON.parse(localStorage.getItem('ORDER'))
        if(order==null)
        {
            order=[]
        }
        var a = JSON.parse(localStorage.getItem('LOG'))
        var name = a[0];
        var date = new Date();
        var d = date.getDate() +"-"+date.getMonth()+"-"+date.getFullYear();
        var id = Math.floor(Math.random()*500);
        var oa = this.state.sum;
        var obj={name,d,id,oa};
        order.splice(0,0,obj)
        localStorage.setItem('ORDER',JSON.stringify(order))
        localStorage.removeItem('MYCART')
        this.props.history.push('/order');

    }
    else{
        alert(" ATLEAST ORDER ONE ITEM ");
    }

        
    }

    render() {
        return (
            <div className="container">
             <center>
            <table id="d">
                
                

                
            </table>
                  </center>
            {/* <button type="submit" onClick={this.display}>display</button> */}

            </div>
        );
    }
}

export default Mycart;