import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import { Route } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/" component={BurgerBuilder} />
            </div>
        </div>
    )
}

export default Main
