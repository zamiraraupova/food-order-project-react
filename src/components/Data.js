import hummus from '../images/hummus.jpeg'
import babagh from '../images/babagh.jpeg'
import falafel from '../images/falafel.jpeg'
import lentil from '../images/lentil.jpeg'
import chickennoodle from '../images/chicken-noodle.jpeg'
import vegsoup from '../images/veggy-soup.jpeg'
import garden from '../images/garden.jpeg'
import greek from '../images/greek.jpeg'
import caesar from '../images/caesar.jpeg'
import chickenkebab from '../images/chicken-kebab.jpeg'
import lambkebab from '../images/lamb-kebab.jpeg'
import beefkebab from '../images/beef-kebab.jpeg'
import baklava from '../images/baklava.jpeg'
import cake from '../images/cake.png'
import cheesecake from '../images/cheesecake.jpeg'
import ayran from '../images/ayran.jpeg'
import water from '../images/water.jpeg'
import soda from '../images/soda.jpeg'



const menuList = {
    
    appetizers: [
        {   
            image: `${hummus}`,
            name: "Hummus",
            description: "Cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
            price: 4,
            
        },
        {
            image: `${babagh}`,
            name: "Baba ghanoush",
            description: "Cooked eggplant, olive oil, lemon juice, various seasonings",
            price: 4
        },
        {
            image: `${falafel}`,
            name: "Falafel",
            description: "A deep-fried ball made from ground chickpeas, broad beans",
            price: 4
        }
    ],
    soups: [
        {
            image: `${lentil}`,
            name: "Lentil soup",
            description: "Based on lentils;",
            price: 6
        },
        {
            image: `${chickennoodle}`,
            name: "Chicken soup",
            description: "Classic chicken soup consists of chicken,vegetables and noodles",
            price: 6
        },
        {
            image: `${vegsoup}`,
            name: "Vegetable soup",
            description: "prepared using vegetables and leaf vegetables as primary ingredients",
            price: 6
        }
    ],
    salads: [
        {
            image: `${garden}`,
            name: "Garden salad",
            description: "Made of lettuce, endive, tomatoes, radishes, carrots, and cucumbers",
            price: 5
        },
        {
            image: `${caesar}`,
            name: "Caesar salad",
            description: "Classic Caesar salad",
            price: 5
        },
        {
            image: `${greek}`,
            name: "Greek salad",
            description: "Consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.",
            price: 4
        }
    ],
    entrees: [
        {
            image: `${chickenkebab}`,
            name: "Chicken kebab",
            description: "Served with rice and salad",
            price: 13
        },
        {
            image: `${lambkebab}`,
            name: "Lamb kebab",
            description: "Served with rice and salad",
            price: 15
        },
        {
            image: `${beefkebab}`,
            name: "Beef kebab",
            description: "Served with rice and salad",
            price: 13
        }
    ],
    deserts: [
        {
            image: `${baklava}`,
            name: "Baklava",
            description: "Layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey.",
            price: 4
        },
        {
            image: `${cake}`,
            name: "Home-style cake",
            description: "Vanila with berries",
            price: 7
        },
        {
            image: `${cheesecake}`,
            name: "Cheese cake",
            descririon: "Strawberry and vanila",
            price: 7
        }
    ],
    drinks: [
        {
            image: `${ayran}`,
            name: "Ayran",
            description: "Yogurt drink",
            price: 2
        },
        {
            image: `${soda}`,
            name: "Soda",
            description: "Coke products",
            price: 2
        },
        {
            image: `${water}`,
            name: "Water",
            description: "Aquafina water",
            price: 1
        }
    ]
        
    
}        

export default menuList