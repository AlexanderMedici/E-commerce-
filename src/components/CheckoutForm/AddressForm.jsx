import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './Checkout/FormInput';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';


const AddressForm = ({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState(' ');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState(' ');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState(' ');
    const methods = useForm();
    
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const options = shippingOptions.map((sO) => ({id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol })` }))
    
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
       console.log(countries)
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);
     const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision,shippingOption }))}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name' />
                            <FormInput required name="lastName" label="Last Name" />
                                <FormInput required name="address1" label="Address Line " />
                                <FormInput required name="email" label="Email" />
                            <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Zip / Postal Code" />
                        <Grid item xs={12} sm={6}>
                             <InputLabel>Shipping Country</InputLabel>
                                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                 </MenuItem>
                            ))}
                        </Select>
                </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision
                                </InputLabel>
                                 <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                    {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                 <MenuItem key={item.id} value={item.id}>
                                {item.label}
                                </MenuItem>
                                ))}
                                 </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options
                                </InputLabel>
                                    <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                        {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                    </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                    </Grid>
                    <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                                <Button type="submit" variant="contained" color="primary">Next</Button>
                        </div>
                </form>
            </FormProvider>
         
        </>
    );
}

export default AddressForm;
