import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
<<<<<<< HEAD
import FormInput from './Checkout/FormInput';

const AddressForm = () => {
    const methods = useForm();
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={''}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label ='First Name' />
                    </Grid>
                </form>
            </FormProvider>
         
=======
import  FormInput  from './CustomTextField';


const AddressForm = () => {
    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address Form </Typography>
            <FormProvider {...methods}>
                <form onSubmit=' ' >
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First name" />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address1" label="Address line 1" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Zip / Postal code" />
                    </Grid>
                </form>
            </FormProvider>
>>>>>>> fe89c9d58235ee4ee5d6dda21a85795ffb26d52e
        </>
    );
}

<<<<<<< HEAD
export default AddressForm
=======
export default AddressForm;
>>>>>>> fe89c9d58235ee4ee5d6dda21a85795ffb26d52e
