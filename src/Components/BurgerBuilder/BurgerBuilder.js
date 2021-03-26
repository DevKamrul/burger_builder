import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addIngredient, removeIngredient, updatePurchesable } from '../../Redux/actionCreators';

const mapStateToprops = state => {
    return {
        ingredient: state.ingredient,
        totalPrice: state.totalPrice,
        purchesable: state.purchesable,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchesable: () => dispatch(updatePurchesable()),
    }
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false,
        }
    }
    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.updatePurchesable();

    }
    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchesable();
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    // updatepurchesable = ingredient => {
    //     const sum = ingredient.reduce((sum, element) => {
    //         return sum + element.amount;
    //     }, 0);
    //     this.setState({ purchesable: sum > 0 })
    // }

    handleCheckout = () => {
        this.props.history.push('./checkout')
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredient={this.props.ingredient} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchesable={this.props.purchesable} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summery</ModalHeader>
                    <ModalBody>
                        <h5>Total Price : {this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredient} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleCheckout}>Continue to checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(BurgerBuilder)
