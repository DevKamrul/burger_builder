import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state) => {
    return {
        ingredient: state.ingredient,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

class Checkout extends Component {
    state = {
        values: {
            name: " ",
            deliveryAddress: " ",
            phone: " ",
            paymentType: "Cash on delivery",
        }
    }

    goBack = () => {
        this.props.history.goBack("/");
    }

    inputChangerHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }

    submitHandler = () => {
        const order = {
            ingredient: this.props.ingredient,
            Price: this.props.totalPrice,
            customer: this.state.values,
            orderTime: new Date(),
        }
        axios.post("https://burger-builder-app-cbe43-default-rtdb.firebaseio.com/orders.json", order)
            .then(Response => console.log(Response))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h4 style={
                    {
                        border: "1px solid grey",
                        boxShadow: "1px 1px #888888",
                        borderRadius: "5px",
                        padding: "20px"
                    }
                }>Total Price : {this.props.totalPrice} BDT</h4>
                <form style={
                    {
                        border: "1px solid grey",
                        boxShadow: "1px 1px #888888",
                        borderRadius: "5px",
                        padding: "20px"
                    }
                }>
                    <div class="form-group">
                        <input onChange={(e) => this.inputChangerHandler(e)} name="name" value={this.state.values.name} className="form-control" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                        <textarea onChange={(e) => this.inputChangerHandler(e)} name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Delivery Address"></textarea>
                    </div>
                    <div class="form-group">
                        <input onChange={(e) => this.inputChangerHandler(e)} name="phone" value={this.state.values.phone} className="form-control" placeholder="Phone" />
                    </div>
                    <div class="form-group">
                        <select onChange={(e) => this.inputChangerHandler(e)} name="paymentType" value={this.state.values.paymentType} className="form-control">
                            <option value="Cash on delivery"> Cash on delivery</option>
                            <option value="Bkash">Bkash</option>
                        </select>
                    </div>
                    <Button style={{ backgroundColor: "#d70f64" }} onClick={this.submitHandler} className="mr-auto">Place Order</Button>
                    <Button style={{ backgroundColor: "#d70f64" }} onClick={this.goBack} className="ml-1">Cancel</Button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Checkout);




