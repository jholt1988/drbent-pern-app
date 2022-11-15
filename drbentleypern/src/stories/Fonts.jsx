import Typography from '@mui/material/Typography'


export function Fonts (props){
    const {key, fontFamily, variant, fontWeight, fontSize} = props
    
    return(
        <Typography variant={variant}  fontWeight={fontWeight} fontSize={fontSize}fontFamily={fontFamily}>A Red Fox Jumped Over The Hill</Typography>
    )
}