import React from "react"
import AddProduct from "./cardProduct";
import "./ProductsCard.css"
import productImg1 from '../../../assets/images/producto1.jpg' 
import productImg2 from '../../../assets/images/producto2.jpg' 
import productImg3 from '../../../assets/images/producto3.jpg' 
import productImg4 from '../../../assets/images/producto4.jpg' 
import productImg5 from '../../../assets/images/producto5.jpg' 
import productImg6 from '../../../assets/images/producto6.jpg' 
const itemsProduct = {
    name: 'Producto 1',
    paragraph: `Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris`,
    cash: '$1.000.000.00'
}

const MainProducts = () => {
  return (
    <>
    <h2>Nuestros Productos</h2>
    <div className="product-container container">
      <AddProduct itemsProduct={itemsProduct} img={productImg1} itemClass="card1"/>
      <AddProduct itemsProduct={itemsProduct} img={productImg2} itemClass="card2"/>
      <AddProduct itemsProduct={itemsProduct} img={productImg3} itemClass="card3"/>
      <AddProduct itemsProduct={itemsProduct} img={productImg4} itemClass="card4"/>
      <AddProduct itemsProduct={itemsProduct} img={productImg5} itemClass="card5"/>
      <AddProduct itemsProduct={itemsProduct} img={productImg6} itemClass="card6"/>
    </div>
    </>
  )
}

export default MainProducts;