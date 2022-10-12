import React from "react";
import Product from "../components/products/Product";
import Laptop from "../laptoptest.jpg";
import "../../src/components/products/Product.css"

export default {
    title:'Product',
    component: Product
}

const Template = (args) => <Product {...args} /> 

export const Primary = Template.bind({});

Primary.args = {
    name: "Laptop",
    img: Laptop,
    price:`1500.00`
}