import React, { Component } from 'react';

class Logout extends Component {

    render() {
        var a = JSON.parse(localStorage.getItem('LOG'))
        if(a==null)
        {
            a=[];
           
        }
        a[0]="USER";
        a[1] = false;
        localStorage.setItem('LOG',JSON.stringify(a))
        localStorage.removeItem('MYCART');
        this.props.history.push(`/`);
        window.location.reload(false);

        return (
            <div>
                
            </div>
        );
    }
}

export default Logout;