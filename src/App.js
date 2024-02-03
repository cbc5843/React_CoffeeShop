import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Cart from './Cart';
import { useState } from "react";

function App(){
    //Destructure 
    const [cartItems, setItems] = useState(0)

    //Add item to cart
    function handleAddItem(){
        setItems(cartItems + 1)
    }


    return <div className="container">
      <Header />
      <Menu handleAddItem={handleAddItem}/>
      <Footer />
      <Cart cartItems={cartItems}/>
    </div>
  
  }

  export default App;