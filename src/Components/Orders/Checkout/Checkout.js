import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Modal, ModalBody } from 'reactstrap';
import axios from 'axios';
import Spinner from '../../Spinner/spinner';
import { resetIngredient } from '../../../Redux/actionCreators'

const mapStateToProps = (state) => {
    return {
        ingredient: state.ingredient,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetIngredient: () => dispatch(resetIngredient()),
    }
}

class Checkout extends Component {
    state = {
        values: {
            name: " ",
            deliveryAddress: " ",
            phone: " ",
            paymentType: "Cash on delivery",
        },
        isLoading: false,
        isModalOpen: false,
        Modalmsg: "",
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
        this.setState({ isLoading: true })
        const order = {
            ingredient: this.props.ingredient,
            Price: this.props.totalPrice,
            customer: this.state.values,
            orderTime: new Date(),
        }
        axios.post("https://burger-builder-app-cbe43-default-rtdb.firebaseio.com/orders.json", order)
            .then(Response => {
                if (Response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        Modalmsg: "Order Placed !",
                    })
                    this.props.resetIngredient();
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        Modalmsg: "Something went wrong",
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    Modalmsg: "Something went wrong",
                })
            })
    }

    render() {
        let form = (
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
                    <Button disabled={this.props.purchasable} style={{ backgroundColor: "#d70f64" }} onClick={this.submitHandler} className="mr-auto">Place Order</Button>
                    <Button style={{ backgroundColor: "#d70f64" }} onClick={this.goBack} className="ml-1">Cancel</Button>
                </form>
            </div>)
        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.Modalmsg}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);




