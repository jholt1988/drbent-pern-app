import React from "react";
import { at } from 'lodash';
import { useField } from "formik";
import { TextField } from "@mui/material"


export default function Input(props) {
    const { errorText, type, ...rest } = props;
    const [field, meta] = useField(props)

    const renderHelperText = () => {
        const [touched, error] = at(meta, "touched", "error")
        if (touched && error) {
            return error
        }
    }
    return (
        <TextField
            type={type}
            variant="filled"
            error={meta.touched && meta.error && true}
            helperText={renderHelperText()}
            {...field}
            {...rest}
        />
    );
}


