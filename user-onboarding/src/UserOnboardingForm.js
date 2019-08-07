import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';

const OnboardForm = ({ errors, touched, values, handleSubmit, status  }) => {

    const [users, setUsers] = useState([]);
    console.log("users", users)

    useEffect(() => {
        if(status) {
            setUsers([...users, status]);
            console.log("status",status)
        }
    }, [status]);    

    return (
        <div className="user-form">
            <h2>User Onboarding Form</h2>
            <Form> 
                <Field type="text" name="name" placeholder="Username" />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
                <Field type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <label className="terms-container" >
                    Agree to Terms of Service
                    <Field type="checkbox" name="terms" checked={values.terms}
                    />
                    {touched.terms && errors.terms && (
                    <p className="error"> {errors.terms} </p>
                    )}
                </label>
                <button type="submit">Submit</button>
            </Form>

            {users.map(user=> (
                <p key={user.id}>UserName: {user.name}</p>
            ))}
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

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Gotta have that name, yo!"),
        email: Yup.string().email("That ain't no kinda email, son!").required("Gotta have that email, too!"),
        password: Yup.string().min(6,"You can do better than that").required("Quit messin'! Password is required!"),
        terms: Yup.bool().oneOf([true], "Must agree to Terms & Conditions before continuing.")        
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("https://reqres.in/api/users", values)
            // .then(res => console.log("res", res.data.name))
            .then(res => {
                setStatus(res.data);
            })
            .catch(err => console.log("Error", err));
    }

})(OnboardForm);

export default FormikOnboardForm;