import {Fonts} from './Fonts';
import {theme} from "../theme";
import { fontFamily, fontSize, fontWeight } from '@mui/system';

export default{
    title:'Fonts',
    component: Fonts
}

const template = (args) => <Fonts {...args} />

const FontExample = template.bind({});

const fonts = Object.keys(theme.typography)
console.log(fonts)
let fontArgs=[]
let variants = [theme.typography.body1, theme.typography.body2, theme.typography.button, theme.typography.caption, theme.typography.h1, theme.typography.h2, theme.typography.h3, theme.typography.h4, theme.typography.h5, theme.typography.h6, theme.typography.overline, theme.typography.subtitle1, theme.typography.subtitle2]
let variantTitle = ["body1", "body2", "button", "caption", "h1", "h2","h3", "h4", "h5", "h6","overline", "subtitle1", "subtitle2" ]

 for(let i= 0; i  <= variantTitle.length-1; i){
     for(let v of variants){
    FontExample.args={
        variant:variantTitle[i],
        fontFamily:`${v.fontFamily}`,
        fontWeight:`${v.fontWeight}`, 
        fontSize:`${v.fontSize}`, 
        key:`${v}`
    }
    fontArgs.push(FontExample.args)
    i++
}
}
console.log(fonts)
console.log(fontArgs)
export const ExampleFonts = () =>(
    <ul>
        {fontArgs.map((args) =>{ 
        return ( 
            <li key={args.key}>
             {`${args.variant} `
             +  
             `${args.fontWeight} `+ 
             `${args.fontSize}`}
                <FontExample {...args}/>
                </li>
        )
        }
)
}
</ul>
)
