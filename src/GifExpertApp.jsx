import {useState} from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Valorant']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
        //setCategories(categories => [...categories, 'Valorant']);
    };

  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>
        {/*Input*/}
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={onAddCategory}
        />
        {/*Listado de GIF*/}
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        
        {
            categories.map( (category) =>  (
                <GifGrid key={category} category={category}/>
            ))
        }
    </>
  )
}
