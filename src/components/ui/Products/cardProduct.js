import React from "react"
import "./cardProduct.css"

const AddProduct = ({ itemsProduct, img, itemClass }) => {
return (
    <div className={ itemClass }>
      <div className='product-img'>
        <img src={img} alt={itemsProduct.name} />
      </div>
      <div className='product-text'>
        <h3>{itemsProduct.name}</h3>
        <p>{itemsProduct.paragraph}</p>
        <p><span>{itemsProduct.cash}</span></p>
        <a href="#" className="btn">Agregar al carrito</a>
      </div>
    </div>
  )
}

export default AddProduct;