import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from "axios";
// import * as Yup from 'yup';

// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.


const OnboardForm = () => {

    return (
        <div className="user-form">
            <h2>User Onboarding Form</h2>
            <Form> 
                <Field type="text" name="name" placeholder="Username" />
                <Field type="email" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <label className="terms-container" >
                    Agree to Terms of Service
                    <Field type="checkbox" name="terms" 
                    //ADD CHECKED={VALUES.TERMS}
                    />
                </label>
                <button type="submit">Submit!</button>
            </Form>
        </div>
    )
}

const FormikOnboardForm = withFormik({
    mapPropsToValues( { name, email, password, terms } ) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },

    handleSubmit(values, {setStatus}) {
        axios
            .post("https://reqres.in/api/users")
            .then(res => console.log("res", res))
            // .then()
            .catch(err => console.log("Error", err));

    }

})(OnboardForm);


export default FormikOnboardForm;