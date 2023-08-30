import './button.css'
const Button = ({text, color = "green"}) => {
   
 return (
    <button className ='button'style = {{ color }}>{text}</button>
 )
}
export default Button