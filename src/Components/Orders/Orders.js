import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fatchorders } from '../../Redux/actionCreators';
import Order from '../Orders/order/order';
import Spiner from '../Spinner/spinner';

const mapStateToProps = state => {
    return {
        order: state.order,
        orderLoading: state.orderLoading,
        orderError: state.orderErr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fatchorders: () => dispatch(fatchorders()),
    }
}

class Orders extends Component {
    componentDidMount() {
        this.props.fatchorders();
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        let orders = null;
        if (this.props.orderError) {
            orders = <p style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px"
            }}>Sorry Order Faild</p>
        }
        else {
            if (this.props.order.length === 0) {
                orders = <p style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    padding: "5px",
                    marginRight: "10px",
                }}>There have no order</p>
            }
            else {
                orders = this.props.order.map(order => {
                    return <Order order={order} key={order.id} />
                })
            }
        }
        return (
            <div>
                <p>{this.props.orderLoading ? <Spiner /> : orders}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

