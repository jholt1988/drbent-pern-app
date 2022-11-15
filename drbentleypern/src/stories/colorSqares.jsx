import Box from "@mui/material/Box";

export default function ColorBox(props){
    const {backgroundColor, label, key} = props;
    
    return (
        <Box className="colorBox" backgroundColor={backgroundColor} key={key}>{`${label}`}</Box>
    )
}

