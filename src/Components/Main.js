import React, { Component } from 'react';
// import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth/Auth';
import { connect } from 'react-redux';
import { authcheck } from '../Redux/authActionCrators';
import Logout from './Auth/Logout';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authcheck()),
    }
}



class Main extends Component {
    componentDidMount() {
        this.props.authCheck();
    }
    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route exact path="/login" component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )
        }
        else {
            routes = (
                <Switch>
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/orders" component={Orders} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/" component={BurgerBuilder} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <div>
                <Header />
                <div className="container">
                    {routes}
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

