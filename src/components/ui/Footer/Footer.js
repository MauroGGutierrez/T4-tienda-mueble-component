import React from "react";
import AddFooter from "./AddFooter";
import "./Footer.css"


const Footer = () => {
  const categorys = ['Concina', 'Oficina', 'Jardin', 'Cochera', 'Dormitorio']
  const aboutUs = ['Nuestra Historia', 'Mision, Vision y Valores', 'Carreras', 'Politicas de Privacidad', 'Terminos del Servicio']
  const suport = ['Preguntas Frecuentes', 'Ayuda en linea', 'Confianza y Seguridad']

  return (
    <footer className="site-footer">
    <div className='footer-container'>
      <AddFooter title='Categorias' items={categorys} />
      <AddFooter title='Sobre Nosotros' items={aboutUs} />
      <AddFooter title='Soporte' items={suport}/>
    </div>
    <p className="copyright text-center">Todos los Derechos Reservados - TiendaMueble</p>
    </footer>
  )

}

export default Footer;