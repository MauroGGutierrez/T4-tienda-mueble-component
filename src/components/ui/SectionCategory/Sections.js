import React from 'react'
import "./Sections.css"
import AddCategory from './addSection'

import img1 from '../../../assets/images/categoria1.jpg'
import img2 from '../../../assets/images/categoria2.jpg'
import img3 from '../../../assets/images/categoria3.jpg'

const Section = () => {
  return (
    <section className="categori-contenedor">
      <h2 className="text-categori">Categoría de Productos</h2>
      <div className='section-box'>
        <AddCategory img={ img1 } title='Oficina' alt='Oficina' />
        <AddCategory img={ img2 } title='Hogar' alt='Hogar' />
        <AddCategory img={ img3 } title='Cocina' alt='Cocina' />
      </div>
    </section>
  )
}

export default Section;