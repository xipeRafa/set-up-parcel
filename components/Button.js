import React from 'react'
import './button.css';

const Button = () => {
      return (
            <div>
                 <input 
                        type="button" 
                        value='Button'
                        className='storybook-button  storybook-button--primary' 
                  /> 
                            <input 
                        type="button" 
                        value='Button'
                        className='storybook-button storybook-button--secondary' 
                  /> 
            </div>
      )
}

export default Button
