import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { auth } from '../../Redux/authActionCrators';
import Spiner from '../Spinner/spinner';


const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

const mapStateToProps = state => {
    return {
        authLoading: state.authLoading,
        authFaildMsg: state.authFaildMsg,
    }
}

class Auth extends Component {
    state = {
        mode: "Sign Up"
    }
    switchModeHandler = () => {
        this.setState({
            mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up"
        })
    }
    render() {
        let form = null;
        if (this.props.authLoading) {
            form = <Spiner />
        }
        else {
            form = <Formik
                initialValues={
                    {
                        email: "",
                        password: "",
                        passwordConfirm: "",
                    }
                }
                onSubmit={
                    (values) => {
                        this.props.auth(values.email, values.password, this.state.mode)
                    }
                }
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Required";
                    }
                    // else if () {
                    //     errors.email = "Invalid Email Address"
                    // }
                    if (!values.password) {
                        errors.password = "Required";
                    }
                    else if (values.password.length < 8) {
                        errors.password = "Min 8 Carecter required ";
                    }
                    if (this.state.mode === "Sign Up") {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = "Required";
                        }
                        else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = "Password Filed doesn't match"
                        }
                    }
                    return errors;
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <div style={{
                        border: "1px solid black",
                        padding: "15px",
                        borderRadius: "7px"

                    }}>
                        <button style={{
                            width: "100%",
                            padding: "5px",
                            background: "#D70F64",
                            borderRadius: "7pox",
                            marginBottom: "10px",
                            color: "#ffffff"
                        }} class="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode === "Sign Up" ? "login" : "Sign Up"}</button>
                        <form onSubmit={handleSubmit}>
                            <input name="email" placeholder="Your Email" className="form-control" value={values.email} onChange={handleChange} />
                            <span style={{ color: "red" }}>{errors.email}</span>
                            <br />
                            <input name="password" placeholder="Your Password" className="form-control" value={values.password} onChange={handleChange} />
                            <span style={{ color: "red" }}>{errors.password}</span>
                            <br />
                            {this.state.mode === "Sign Up" ?
                                <div>
                                    <input name="passwordConfirm" placeholder="Confirm Password" className="form-control" value={values.passwordConfirm} onChange={handleChange} />
                                    <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                                    <br />
                                </div> : null}

                            <button type="submit" className="btn btn-success">{this.state.mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                        </form>
                    </div>
                )
                }
            </Formik>
        }
        return (
            <div>
                {form}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

