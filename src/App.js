import React, {useState} from 'react'
import Fruit from './components/Fruit' ;
import './App.scss';

const fruitArr = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Mango'},
    {id: 3, name: 'Banana'},
    {id: 4, name: 'Lemon'}
];

function App() {

    const [ fruits, setFruits ] = useState(fruitArr);

    const handleDeleteFruit = (id) => {
        setFruits((prevFruits) => prevFruits.filter((fruit) => fruit.id !== id));   
    }

    const deleteAllFruits = () => {
        setFruits([]);
    }


    return (
        <div className='App'>
            <h1 className='App_header'>Fruit Component</h1>
            <button onClick={deleteAllFruits} className='deleteAllBtn'><b>Delete all</b></button>
            {
                fruits.map((fruit) => {
                    return(
                        <Fruit
                            key={fruit.id}
                            name={fruit.name}
                            onDelete={() => handleDeleteFruit(fruit.id)}
                        >

                        </Fruit>
                    )
                })
            }
        </div>
    );
}

export default App;