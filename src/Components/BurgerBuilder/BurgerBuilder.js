import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls'

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
        this.setState({ ingredient: ingredient, totalPrice: newPrice })
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
        this.setState({ ingredient: ingredient, totalPrice: newPrice })
    }

    render() {
        return (
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredient={this.state.ingredient} />
                <Controls
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemoved={this.removeIngredientHandle} 
                    price = {this.state.totalPrice} />
            </div>
        )
    }
}
