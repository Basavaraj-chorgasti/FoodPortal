import React, { Component } from 'react'

export class Home extends Component {
    constructor(props)
    {
        super(props)
    }
    go=(e)=>
    {
      //  document.getElementsByName(e.target.name).disabled=true;
        var name;
        var dish = e.target.name;
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
                            alert("HII");
                            img = item[i].fi;
                            nm = item[i].fn;
                            ct = item[i].fc;
                            obj={name,img,nm,ct};
                            alert(obj);
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
        var a = JSON.parse(localStorage.getItem('LOG'))
        if(a==null)
        {
            a=[];
            a[0]="USER";
            a[1] = false;
            localStorage.setItem('LOG',JSON.stringify(a))
        }

        return (
            <div>
            <center>

                WELLCOME {a[0]} <br></br>
                </center>
                <div>
        <img  src="food.jpg" style={{float:"left",width:"100%",height:"200px"}} />
        {/* <img className ="myslide" src="food.jpg" style={{width:"440px",height:"200px"}} /> */}
		
        </div>
        <br/>
        <marquee><div style={{color:"red"}}>OFFER FOR THE DAY</div></marquee>
        
        <center>        <table>
        
        <tr>    
        <td><img style={{width:"110px",height:"50px"}}src="cupcake.jpg" /><br/></td>&nbsp;&nbsp;
        <td><img style={{width:"110px",height:"50px"}}src="chocopie.jpg"/><br/></td>&nbsp;&nbsp;
        <td><img style={{width:"110px",height:"50px"}}src="cupcake2.jpg"/><br/></td>&nbsp;&nbsp;
        </tr>
        
        <tr>
        <td><input type="button" value="ADD TO CART" onClick={this.go}   className="btn btn-success" name="cupcake.jpg"/> </td>&nbsp;&nbsp;
        <td><input type="button" value="ADD TO CART" onClick={this.go}  className="btn btn-success" name="chocopie.jpg"/> </td>&nbsp;&nbsp;
        <td><input type="button" value="ADD TO CART" onClick={this.go} className="btn btn-success" name="cupcake2.jpg"/> </td>&nbsp;&nbsp;
        </tr>
        <br/>
        <tr>
        <td><img style={{width:"110px",height:"50px"}}src="dosa.jpg"/><br/></td>&nbsp;&nbsp;
        <td><img style={{width:"110px",height:"50px"}}src="idly.jpg"/><br/></td>&nbsp;&nbsp;
        <td><img style={{width:"110px",height:"50px"}}src="mendu_vada.jpg"/><br/></td>&nbsp;&nbsp;
        </tr>
        
        <tr>
        <td><input type="button" value="ADD TO CART" onClick={this.go}   className="btn btn-success" name="dosa.jpg"/> </td>&nbsp;&nbsp;
        <td><input type="button" value="ADD TO CART" onClick={this.go}   className="btn btn-success" name="idly.jpg"/> </td>&nbsp;&nbsp;
        <td><input type="button" value="ADD TO CART" onClick={this.go}   className="btn btn-success" name="mendu_vada.jpg"/> </td>&nbsp;&nbsp;
        </tr>
        </table>

        
            </center>
        </div>    
        )
    }
}

export default Home
