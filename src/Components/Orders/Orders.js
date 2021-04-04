import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fatchorders } from '../../Redux/actionCreators'

const mapStateToProps = state => {
    return {
        order: state.order,
        orderLoading: state.orderLoading,
        orderError: state.ordererr,
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
        return (
            <div>
                <p>Orders</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

