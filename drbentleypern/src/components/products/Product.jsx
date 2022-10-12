import React,{setState} from "react";
import { Box, Typography, Stack } from "@mui/material";
import "./Product.css"

export default function Product(props) {
   
    const { name, description, price, img, skuId, quantity } = props
    
    return (
        <Box skuId={skuId}>
            <Stack className={"productItem"}>
                <img src={img} alt={`${name} `} className="productImage" border-bottom="2px solid theme.secondary"width="300px"/>
                <Typography className={"productDetails"} variant="body">{name}</Typography>
                <Typography className={"productDetails"} variant="body">{price}</Typography>
            </Stack>
            
        </Box>
    )
}