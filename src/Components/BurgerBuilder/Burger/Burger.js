import React, { isValidElement } from 'react';
import Ingredient from '../Ingredient/Ingredient'

const Burger = (props) => {

    let ingredientArr = props.ingredient.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={Math.random()} />
        })

    })

    return (
        <div>
            <Ingredient type="bread-top" />
            {ingredientArr}
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger
