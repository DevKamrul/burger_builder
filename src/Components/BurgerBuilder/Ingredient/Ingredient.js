import React from 'react';
import './Ingredient.css'
import BreadTop from '../../../Assets/images/top.png';
import BreadBotom from '../../../Assets/images/bottom.png';
import Meat from '../../../Assets/images/meat.png';
import Cheese from '../../../Assets/images/cheese.png';
import Salad from '../../../Assets/images/salad.png';

const Ingredient = (props) => {

    let ingredient = null;

    switch (props.type) {
        case 'bread-top':
            ingredient = <div><img src={BreadTop} alt="bread-top" /></div>
            break;
        case 'bread-bottom':
            ingredient = <div><img src={BreadBotom} alt="bread-bottom" /></div>
            break;
        case 'Meat':
            ingredient = <div><img src={Meat} alt="bread-Meat" /></div>
            break;
        case 'Cheese':
            ingredient = <div><img src={Cheese} alt="bread-Cheese" /></div>
            break;
        case 'Salad':
            ingredient = <div><img src={Salad} alt="bread-Salad" /></div>
            break;
        default:
            ingredient = null

    }

    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient
