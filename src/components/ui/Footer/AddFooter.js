import React from "react";
import "./AddFooter.css"

const AddFooter = ({ title, items }) => {
  return (
    <div className='card-container'>
        <h3>{ title }</h3>
        <div className='text-container'>
            {
                items.map(item => (
                    <a href="#" key={ item }>{ item }</a>
                ))
            }
        </div>
    </div>
  )
}

export default AddFooter;