import React from 'react'
import './addSection.css'
const AddCategory = ({ img, title, alt }) => {
  return (
    <div>
      <div className='category'>
        {
          <img src={ img } alt={ alt } />
        }
        <a className='txt-cate' href='#'>{ title }</a>
      </div>
    </div>
  )
}

export default AddCategory;