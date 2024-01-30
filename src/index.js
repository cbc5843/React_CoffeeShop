import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const coffeeData = [
  {
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 6,
    photoName: "images/latte.jpeg",
    soldOut: false,
  },
  {
    name: "Americano",
    description: "Espresso with hot water",
    price: 8,
    photoName: "images/americano3.jpeg",
    soldOut: false,
  },
  {
    name: "Espresso",
    description: "1oz Espresso",
    price: 5,
    photoName: "images/espresso2.webp",
    soldOut: false,
  },
  {
    name: "Flat White",
    description: "Espresso with steamed milk",
    price: 8,
    photoName: "images/flat.webp",
    soldOut: false,
  },
  {
    name: "Cappuccino",
    description: "Espresso, steamed milk and foam",
    price: 7,
    photoName: "images/cappuccino.webp",
    soldOut: true,
  },
  {
    name: "Cortado",
    description: "1oz espresso and 1 oz steamed milk",
    price: 4,
    photoName: "images/cortado.jpeg",
    soldOut: false,
  },
  {
    name: "Macchiato",
    description: "Espresso shot with foam",
    price: 8,
    photoName: "images/macchiato.jpeg",
    soldOut: false,
  },
  {
    name: "Mocha",
    description: "Espresso, chocolate and steamed milk",
    price: 7,
    photoName: "images/mocha.jpeg",
    soldOut: false,
  },
];

//Components
function App(){
  return <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>

}

function Header(){
  return(
    <header className="header">
      <h1>React Coffee Co.</h1>
    </header>
  )
}

function Footer(){
  return(
    <footer className="footer">
      <h3>Hours: 5 - 8 Tues - Sat</h3>
    </footer>
  )
}

function Menu(){
  return(
    <main className="menu">
      <h2>Our Menu:</h2>
      <ul className="coffees">
        {/*Use data from coffeeData in Coffee comp to build menu */}
        {/*Pass coffee object into Coffee component*/}
        {coffeeData.map((coffee) => (
          <Coffee coffeeObj={coffee} key={coffee.name} />
        ))}
      </ul>

    </main>
  )

}

function Coffee(props){
  return(
    <div className="coffee">
      <img src={props.coffeeObj.photoName} alt={props.coffeeObj.name}></img>
      <div>
        <h3>{props.coffeeObj.name}</h3>
        <p>{props.coffeeObj.description}</p>
        <span>{props.coffeeObj.price}</span>
      </div>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

