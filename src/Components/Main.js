import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import { Route } from 'react-router-dom';
import Auth from './Auth/Auth';

const Main = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Route exat path="/login" component={Auth} />
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/" component={BurgerBuilder} />
            </div>
        </div>
    )
}

export default Main
