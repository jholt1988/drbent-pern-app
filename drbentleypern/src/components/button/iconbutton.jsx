import React from "react";
import IconButton from "@mui/material/IconButton";

export default function ButtonIcon(props) {
    const { label, icon, ...rest } = props;

    return (
        <IconButton icon={icon}  {...rest}>{icon}</IconButton>
    )
} 