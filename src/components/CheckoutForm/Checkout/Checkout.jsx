import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './styles';
import AddressForm from "../AddressForm";
import PaymentForm from '../PaymentForm';
<<<<<<< HEAD
=======

>>>>>>> fe89c9d58235ee4ee5d6dda21a85795ffb26d52e

const steps = ["Shipping address", "Payment details"];
const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
<<<<<<< HEAD
     const Confirmation = () => (
=======
    const Confirmation = () => (
>>>>>>> fe89c9d58235ee4ee5d6dda21a85795ffb26d52e
        <div>
            confirmation
        </div>
    );
<<<<<<< HEAD
    const Form = () => activeStep === 0
        ? <AddressForm />
        :<PaymentForm/>
=======
    const Form = ( ) => (activeStep === 0
        ? <AddressForm  />
        : <PaymentForm  />);
>>>>>>> fe89c9d58235ee4ee5d6dda21a85795ffb26d52e
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper} >
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
<<<<<<< HEAD
                    { activeStep === steps.length  ? <Confirmation /> :<Form/>}
=======
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
>>>>>>> fe89c9d58235ee4ee5d6dda21a85795ffb26d52e
                </Paper>
            </main>
        </>
    )
}

export default Checkout
