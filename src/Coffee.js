function Coffee({handleAddItem, coffeeObj}){
    return(
      <div className="coffee">
        <img src={coffeeObj.photoName} alt={coffeeObj.name}></img>
        <div>
          <h3>{coffeeObj.name}</h3>
          <p>{coffeeObj.description}</p>
          <span>{coffeeObj.price}</span>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
  
      </div>
    )
  }

  export default Coffee;