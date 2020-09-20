import React, { Component } from 'react';

class Order extends Component {
    render() {
        var order  =  JSON.parse(localStorage.getItem('ORDER'));
        return (
            <div className="container">
                <br/>
                <center>
                    <h1>ORDER DETAIL</h1>
                    <tr><td>customer name :</td><td>{order[0].name}</td></tr>
                    <tr><td>Order date :</td><td>{order[0].d}</td></tr>
                    <tr><td>Order id :</td><td>{order[0].id}</td></tr>
                    <tr><td>Order cost :</td><td>{order[0].oa}</td></tr>
                    <h1> THANK YOU FOR ORDERING..</h1>
                </center>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Order;