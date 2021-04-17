import React, { Component } from 'react';
import { Formik } from 'formik'

export default class Auth extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: "",
                        }
                    }
                    onSubmit={
                        (values) => {
                            console.log(values)
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
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = "Required";
                        }
                        else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = "Password Filed doesn't match"
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
                            <form onSubmit={handleSubmit}>
                                <input name="email" placeholder="Your Email" className="form-control" value={values.email} onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors.email}</span>
                                <br />
                                <input name="password" placeholder="Your Password" className="form-control" value={values.password} onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors.password}</span>
                                <br />
                                <input name="passwordConfirm" placeholder="Confirm Password" className="form-control" value={values.passwordConfirm} onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                                <br />
                                <button type="submit" className="btn btn-success">Sign Up</button>
                            </form>
                        </div>
                    )
                    }
                </Formik>
            </div>
        )
    }
}
