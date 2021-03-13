import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls'

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredient: [
                { type: 'Salad', amount: 1 },
                { type: 'Cheese', amount: 2 },
                { type: 'Meat', amount: 1 }
            ]
        }
    }

    render() {
        return (
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredient={this.state.ingredient} />
                <Controls></Controls>
            </div>
        )
    }
}
