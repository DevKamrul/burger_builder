import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const INGREDIENT_PRICES = {
    Salad: 20,
    Cheese: 80,
    Meat: 90,
}

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredient: [
                { type: 'Salad', amount: 0 },
                { type: 'Cheese', amount: 0 },
                { type: 'Meat', amount: 0 }
            ],
            totalPrice: 80,
            modalOpen: false,
            purchesable: false,
        }
    }
    addIngredientHandle = type => {
        const ingredient = [...this.state.ingredient];
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        for (let item of ingredient) {
            if (item.type === type) {
                item.amount++
            }
        }
        this.setState({ ingredient: ingredient, totalPrice: newPrice });
        this.updatepurchesable(ingredient);
    }
    removeIngredientHandle = type => {
        const ingredient = [...this.state.ingredient];
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        for (let item of ingredient) {
            if (item.type === type) {
                if (item.amount <= 0) return
                item.amount--;
            }
        }
        this.setState({ ingredient: ingredient, totalPrice: newPrice });
        this.updatepurchesable(ingredient);
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    updatepurchesable = ingredient => {
        const sum = ingredient.reduce((sum, element) => {
            return sum + element.amount;
        }, 0);
        this.setState({ purchesable: sum > 0 })
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredient={this.state.ingredient} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.state.totalPrice}
                        toggleModal={this.toggleModal}
                        purchesable={this.state.purchesable} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summery</ModalHeader>
                    <ModalBody>
                        <h5>Total Price : {this.state.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.state.ingredient} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleModal}>Continue to checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
