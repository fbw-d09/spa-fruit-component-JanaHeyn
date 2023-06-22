import React, {useState} from 'react';
import './Fruit.scss';

const colors = ["red", "blue", "green", "yellow", "purple"];

function Fruit({name, onDelete}) {
    const [ textColor, setTextColor ] =useState('');

    const handleChangeColor = () => {
        const newColor = colors[Math.floor(Math.random() *colors.length)];
        setTextColor(newColor);
        // console.log(newColor);
    }

    return (
        <div data-testid='fruit' className='Fruit'>

            <p 
                className='Fruit__text'
                style={{color: textColor}}
            >   {name}
            </p>

            <div className='buttonWrapper'>
                <button 
                    className='buttonWrapper__deleteBtn'
                    onClick={onDelete}
                >   
                    delete
                    <span>X</span>
                </button>

                <button 
                    className='buttonWrapper__changeColorBtn'
                    onClick={handleChangeColor}
                >
                    change color 
                    <span></span>
                </button>    
            </div>
        </div>
    )
}

export default Fruit