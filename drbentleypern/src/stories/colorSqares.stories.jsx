import ColorBox from "./colorSqares";
import {theme} from "../theme";

export default {
    title: 'Color Squares',
    component : ColorBox
}

const template = (args) => <ColorBox {...args} />

export const Primary = template.bind({});
let color = theme.palette.primary
let argsArray= []
for(let col in color){
    Primary.args= {
        label:`${col}`,
        backgroundColor:color[`${col}`],

      
    
}
argsArray.push(Primary.args)
console.log(color)
console.log(color[`${col}`])
}
export const colorWall = (props) => (
    <ul>
        Primary
       { argsArray.map(args => {
           return (
           <li key={args.label}>
           <Primary height={100} width={100} {...args} /> 
       </li>
           )
        })
        }
    </ul>
)

export const Secondary = template.bind({});
let colorSec = theme.palette.secondary
let argsArraySec= []
for(let col in colorSec){
    Secondary.args= {
        label:`${col}`,
        backgroundColor:colorSec[`${col}`],

      
    
}
argsArraySec.push(Secondary.args)
console.log(colorSec)
console.log(colorSec[`${col}`])
}
export const colorWallSec = (props) => (
    <ul>
        Secondary
       { argsArraySec.map(args => {
           return (
           <li key={args.label}>
           <Secondary height={100} width={100} {...args} /> 
       </li>
           )
        })
        }
    </ul>
)

export const TextColor = template.bind({});
let textColors = theme.palette.text
let argsArrayText= []
for(let col in textColors){
    TextColor.args= {
        label:`${col}`,
        backgroundColor:textColors[`${col}`],

      
    
}
argsArrayText.push(TextColor.args)
console.log(textColors)
console.log(textColors[`${col}`])
}
export const colorWallText = (props) => (
    <ul>
        Text Colors
       { argsArrayText.map(args => {
           return (
           <li key={args.label}>
           <Secondary height={100} width={100} {...args} /> 
       </li>
           )
        })
        }
    </ul>
)
export const Background = template.bind({});
let colorBackground = theme.palette.background
let argsArrayBackground= []
for(let col in colorBackground){
    Background.args= {
        label:`${col}`,
        backgroundColor:colorBackground[`${col}`],

      
    
}
argsArrayBackground.push(Background.args)
console.log(colorBackground)
console.log(colorBackground[`${col}`])
}
export const colorWallBackground = (props) => (
    <ul>
        Background
       { argsArrayBackground.map(args => {
           return (
           <li key={args.label}>
           <Background height={100} width={100} {...args} /> 
       </li>
           )
        })
        }
    </ul>
)

