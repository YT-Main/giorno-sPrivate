// pages/menu.js

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Section from '../components/Section';
import MobileSidebar from '../components/MobileSidebar';
import Footer from '../components/Footer';

const appetizers = [
    { title: "Bruschetta", description: "Toasted bread with tomatoes, garlic, olive oil, and basil", price: "$6.99" },
    { title: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze", price: "$8.99" },
    { title: "Arancini", description: "Crispy fried risotto balls filled with mozzarella", price: "$7.50" },
    { title: "Prosciutto e Melone", description: "Thinly sliced prosciutto with fresh melon", price: "$9.99" },
    { title: "Calamari Fritti", description: "Lightly fried calamari served with marinara sauce", price: "$10.99" },
    { title: "Garlic Bread", description: "Crispy bread with garlic butter and herbs", price: "$5.50" },
    { title: "Antipasto Platter", description: "Selection of Italian cheeses, meats, and olives", price: "$12.99" },
    { title: "Minestrone Soup", description: "Traditional Italian vegetable soup", price: "$6.99" },
    { title: "Zuppa Toscana", description: "Tuscan soup with sausage, potatoes, and kale", price: "$7.99" },
    { title: "Stuffed Mushrooms", description: "Mushrooms filled with herbed breadcrumbs and cheese", price: "$8.50" }
];
const mains = [
    { title: "Spaghetti Carbonara", description: "Classic pasta with eggs, cheese, pancetta, and pepper", price: "$14.99" },
    { title: "Lasagna", description: "Layered pasta with beef, ricotta, and marinara sauce", price: "$16.99" },
    { title: "Risotto al Funghi", description: "Creamy risotto with mushrooms and Parmesan cheese", price: "$15.50" },
    { title: "Margherita Pizza", description: "Tomato, mozzarella, and basil on a thin crust", price: "$13.50" },
    { title: "Chicken Parmigiana", description: "Breaded chicken breast topped with marinara and mozzarella", price: "$17.99" },
    { title: "Eggplant Parmesan", description: "Baked eggplant with marinara sauce and mozzarella cheese", price: "$15.99" },
    { title: "Fettuccine Alfredo", description: "Fettuccine pasta in a creamy Alfredo sauce", price: "$14.50" },
    { title: "Osso Buco", description: "Braised veal shanks with vegetables and broth", price: "$22.99" },
    { title: "Seafood Linguine", description: "Linguine pasta with shrimp, mussels, and clams in a tomato sauce", price: "$19.99" },
    { title: "Pesto Gnocchi", description: "Potato gnocchi in a fresh basil pesto sauce", price: "$16.50" }
];
const desserts = [
    { title: "Tiramisu", description: "Layered coffee-soaked ladyfingers with mascarpone cream", price: "$8.99" },
    { title: "Cannoli", description: "Crispy pastry shells filled with sweet ricotta", price: "$7.50" },
    { title: "Panna Cotta", description: "Creamy vanilla pudding with berry sauce", price: "$6.99" },
    { title: "Gelato", description: "Italian ice cream in various flavors", price: "$5.99" },
    { title: "Lemon Ricotta Cake", description: "Moist lemon cake with ricotta cheese", price: "$8.50" },
    { title: "Affogato", description: "Espresso poured over vanilla gelato", price: "$6.50" },
    { title: "Sfogliatella", description: "Shell-shaped pastry with citrus and ricotta filling", price: "$7.99" },
    { title: "Zabaglione", description: "Light custard dessert made with egg yolks, sugar, and Marsala wine", price: "$7.50" },
    { title: "Chocolate Hazelnut Tart", description: "Rich chocolate tart with a hazelnut crust", price: "$8.99" },
    { title: "Biscotti", description: "Twice-baked almond cookies, perfect with coffee", price: "$5.50" }
];
const drinks = [
    { title: "Espresso", description: "Strong black coffee", price: "$3.50" },
    { title: "Cappuccino", description: "Espresso with steamed milk and foam", price: "$4.50" },
    { title: "Aperol Spritz", description: "Aperol, Prosecco, and soda water", price: "$8.00" },
    { title: "Chianti", description: "Classic red wine from Tuscany", price: "$9.00 per glass" },
    { title: "Limoncello", description: "Italian lemon liqueur", price: "$7.00" }
];


const MenuPage = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <MobileSidebar />
            <Section title="Appetizers" items={appetizers} />
            <Section title="Mains" items={mains} />
            <Section title="Desserts" items={desserts} />
            <Section title="Drinks" items={drinks} />
            <Footer />
        </div>
    );
};


export default MenuPage;
