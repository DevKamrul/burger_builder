import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls'

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredient: [
                { type: 'Salad', amount: 0 },
                { type: 'Cheese', amount: 0 },
                { type: 'Meat', amount: 0 }
            ]
        }
    }
    addIngredientHandle = type => {
        const ingredient = [...this.state.ingredient];
        for (let item of ingredient) {
            if (item.type === type) {
                item.amount++
            }
        }
        this.setState({ ingredient: ingredient })
    }
    removeIngredientHandle = type => {
        const ingredient = [...this.state.ingredient];
        for (let item of ingredient) {
            if (item.type === type) {
                if (item.amount <= 0) return
                item.amount--;
            }
        }
        this.setState({ ingredient: ingredient })
    }

    render() {
        return (
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredient={this.state.ingredient} />
                <Controls
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemoved={this.removeIngredientHandle} />
            </div>
        )
    }
}
