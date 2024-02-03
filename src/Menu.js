import Coffee from './Coffee';

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

function Menu({handleAddItem}){
    
    return(
      <main className="menu">
        <h2>Our Menu:</h2>
        <ul className="coffees">
          {/*Use data from coffeeData in Coffee comp to build menu */}
          {/*Pass coffee object into Coffee component*/}
          {coffeeData.map((coffee) => (
            <Coffee coffeeObj={coffee} key={coffee.name} handleAddItem={handleAddItem}/>
          ))}
        </ul>
  
      </main>
    )
  
  }

  export default Menu;