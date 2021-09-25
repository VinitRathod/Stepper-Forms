import React from 'react';
import { Formik,Form } from 'formik';
import { TextField } from './TextField'
import * as Yup from 'yup';

export const Info = () =>{
    const validate = Yup.object({
        firstname: Yup.string()
            .max(25,"Must be 25 character of less")
            .required("Required"),
        lastname: Yup.string()
            .max(25,"Must be 25 character of less")
            .required("Required"),
        email: Yup.string()
            .email("Email is Invalid")
            .max(150,"Must be less than or equal to 150 characters")
            .required("Required"),
        contact: Yup.string()
            .max(25,"Must be 25 character of less")
            .required("Required"),
        address: Yup.string()
            .max(200,"Must be 200 or less than 200")
            .required("Required"),
        age: Yup.number()
            .required("Required"),
        clg: Yup.string()
            .max(25,"Must be 25 character of less")
            .required("Required"),
    })
    return(
        <Formik
            initialValues={{
                firstname:'',
                lastname:'',
                email:'',
                contact:'',
                address:'',
                age:'',
                clg:''
            }}
            validationSchema={validate}
        >

            {formik => (
                <div>

                    {console.log(formik.values)}
                    <Form style={{marginLeft:"4rem"}}>
                        <TextField label="First Name" name="firstname" type="text" />
                        <TextField label="Age" name="age" type="number" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Interests" name="interest" type="text" />
                        {/* <button className="btn btn-primary mt-3 mb-3" type="submit">Submit</button>                    */}
                    </Form>
                </div>
            )}
        </Formik>
    );
}