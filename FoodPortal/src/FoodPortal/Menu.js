import React, { Component } from 'react';

class Menu extends Component {
    componentDidMount()
    {
        
        var a = JSON.parse(localStorage.getItem('ITEM'))
        
        for(var i=0;i<a.length;i++)
        {
            var image = a[i].fi; 
            var name = a[i].fn;
            var cost = a[i].fc;
            var b = i;
            var html='<table><tr><td><center><img src='+'"'+image+'"'+' height="50px" width="50px"/></center></td><td><center>'+name+'</center></td><td><center>'+cost+'</center></td><td><center><button id ='+b+' type="text" value='+'"'+image+'"'+' class ="btn btn-success" >ADD TO CART</button></center></td></tr><table>';
            document.getElementById("d").insertAdjacentHTML('beforeend',html);
            document.getElementById(i).addEventListener('click',this.add)
        }
    }
    add=(e)=>
    {
        var name;
        var dish = e.target.value;
       var img;
       var nm;
       var ct;
       var obj;
        var a = JSON.parse(localStorage.getItem('LOG'))
        if(a[1])
        {
            if(a[0]!="ADMIN")
            {
                name=a[0];
                var mycart = JSON.parse(localStorage.getItem('MYCART'))
                //var mycart1 = JSON.parse(localStorage.getItem('MYCART1'))
                var item = JSON.parse(localStorage.getItem('ITEM'))
                if(mycart==null)
                {
                    mycart=[];
                    for(var i=0;i<item.length;i++)
                    {
                        //mycart[0] = {name,dish};
                        if(dish ==  item[i].fi)
                        {
                            img = item[i].fi;
                            nm = item[i].fn;
                            ct = item[i].fc;
                            obj={name,img,nm,ct};
                        }
                    }
                    mycart.push(obj);
                    localStorage.setItem('MYCART',JSON.stringify(mycart))
                }
                else
                {
                    var c=0;
                    for(var i=0;i<mycart.length;i++)
                    {
                        if(mycart[i].img==dish)
                        {
                            c++;
                            break;
                        }
                    }
                    if(c>0)
                    {
                        alert(" already add to mycart");
                    }
                    else
                    {
                        for(var i=0;i<item.length;i++)
                        {
                            //mycart[0] = {name,dish};
                            if(dish ==  item[i].fi)
                            {
                                img = item[i].fi;
                                nm = item[i].fn;
                                ct = item[i].fc;
                                obj={name,img,nm,ct};
                            }
                        }
                            mycart.push(obj);
                            localStorage.setItem('MYCART',JSON.stringify(mycart))
                    }
                }
            }
            else
            {
                alert("ADMIN NOT ADD ITEM TO MY CARD");
            }
        }
        else
        {
            alert(" LOG IN FRIST ");
            this.props.history.push(`/signin`)
            
        }
    }
    render() {

        return (
            <div className="container">
             <center>
            <table id="d">
                <tr>
                    <th><center>FOOD IMAGE</center></th><th><center>FOOD NAME</center></th><th><center>FOOD COST</center></th><th><center>ADD TO CART</center></th>
            
                </tr>
                

                
            </table>
            </center>
            {/* <button type="submit" onClick={this.display}>display</button> */}

            </div>
        );
    }
}

export default Menu;