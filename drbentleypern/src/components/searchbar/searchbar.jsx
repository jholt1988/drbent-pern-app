import React, {useState} from "react";
import Input from "../inputs/input";
import ButtonIcon from "../button/iconbutton";
import { InputAdornment, Box } from "@mui/material";
import  SearchOutlined  from "@mui/icons-material/SearchOutlined";
import { Form, Formik } from "formik";


export default function SearchBar(props) {
    const { searchTerm, setSearchTerm } = useState(" ");

    const { onSubmit, onChange } = props;

    return (
        <Box>
            <Formik>
            <Form>
            <Input  type="search" onChange={onChange}  name="search" InputProps={{
                startAdornment: (
                    <InputAdornment   position="end">
                        <ButtonIcon type="search" icon={<SearchOutlined />} label="Search" onSubmit={onSubmit} />
                    </InputAdornment>
                ),
            }}
            />
                </Form>
            </Formik>
        </Box>
    )
}
