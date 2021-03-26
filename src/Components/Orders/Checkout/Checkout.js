import React, { Component } from 'react'
import { Button } from 'reactstrap';

class Checkout extends Component {
    state = {
        values: {
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
        console.log(this.state.values)
    }

    render() {
        return (
            <div>
                <form style={
                    {
                        border: "1px solid grey",
                        boxShadow: "1px 1px #888888",
                        borderRadius: "5px",
                        padding: "20px"
                    }
                }>
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

export default Checkout;




