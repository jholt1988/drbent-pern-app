import React,{setState} from "react";
import { Box , Typography, Stack} from "@mui/material";


export default function Product(props) {
    const { name, description, price, img, skuId, quantity } = props
    
    return (
        <Box>
            <Stack>
                <img src={img} alt={`${name} Image`} width="300px"/>
                <Typography variant="body">{name}</Typography>
                <Typography variant="body">{price}</Typography>
            </Stack>
            
        </Box>
    )
}