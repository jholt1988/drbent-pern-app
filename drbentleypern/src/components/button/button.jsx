import React from "react";
import Button from "@mui/material/Button";

export default function DefaultButton(props){
    const { label, startIcon, type, ...rest } = props;

    return(
        <Button label={label} type={type} startIcon={startIcon} {...rest}>{label}</Button>
    )
}