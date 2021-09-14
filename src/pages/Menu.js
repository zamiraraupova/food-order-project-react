import Section from "../components/Section"

const Menu = (props) => {    
    //console.log(props.menuData.appetizers)
    
    return (
        <div className="menu-page">
            {/* I will pass a menuData using props
                I need a section for each section (appet/salads) and component */}
                    
            <Section addToCart={props.addToCart} name="Appetizers" menuItems={props.menuData.appetizers} />
            <Section addToCart={props.addToCart} name="Soups" menuItems={props.menuData.soups}/>
            <Section addToCart={props.addToCart} name="Salads" menuItems={props.menuData.salads}/>
            <Section addToCart={props.addToCart} name="Entrees" menuItems={props.menuData.entrees}/>
            <Section addToCart={props.addToCart} name="Deserts" menuItems={props.menuData.deserts}/>
            <Section addToCart={props.addToCart} name="Drinks" menuItems={props.menuData.drinks}/>
        </div>
    )
}

export default Menu
