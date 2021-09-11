import Section from "../components/Section"

const Menu = (props) => {
    return (
        <div>
            {/* I wil pass a menuData using props
                I need a section for each section (appet/salads) and component */}
            <Section name="Appetizers" menuItems={props.menuData.appetizers}/>
            <Section name="Soups" menuItems={props.menuData.soups}/>
            <Section name="Salads" menuItems={props.menuData.salads}/>
            <Section name="Entrees" menuItems={props.menuData.entrees}/>
            <Section name="Deserts" menuItems={props.menuData.deserts}/>
            <Section name="Drinks" menuItems={props.menuData.drinks}/>
        </div>
    )
}

export default Menu
