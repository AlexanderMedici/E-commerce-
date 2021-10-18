import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label, required}) => {
    const { control } = useFormContext();
    const isError = false;
    const errorMessage = ' ';
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => (
                    <TextField {...field} fullWidth label={label} required={required} />
                )}
                control={control}
                name={name}
                defaultValue=" "
                error={isError}
                helperText={ errorMessage}
            />
            
        </Grid>
    );
}
export default FormInput;