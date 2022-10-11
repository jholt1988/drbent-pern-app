import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import SearchBar from "../searchbar/searchbar";
import ButtonIcon from '../button/iconbutton';
import logo from "../../PBEE_Logo.svg"
import AccountBox from "@mui/icons-material/AccountBox";
import Create from "@mui/icons-material/Create";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Box from "@mui/material/Box"



export default function Header() {
    const { auth, setAuth } = useState(false);
   
    return (
        <AppBar auth={auth} position="relative" display="flex" sx={{ backgroundColor: "theme.secondary", flexFlow:"row" , alignItems:"center", justifyContent:"space-between"}}>
           <Box flexShrink={2}> <img src={logo} alt="logo" width="150vh" /></Box>
            <SearchBar/>
            <Box>
                <ButtonIcon label="Login" icon={<AccountBox />} />
                <ButtonIcon label="Sign-Up" icon={<Create />} />
                <ButtonIcon label="Shopping Cart" icon={<ShoppingCart/>} />
                
            </Box>
            
        </AppBar>
    )

}