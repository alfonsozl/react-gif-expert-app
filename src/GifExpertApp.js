
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

    console.log(categories);

    return(
        <div className="container">
            <h2>Gif-Expert App</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr></hr>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key = { category }
                            category = { category }
                        />
                    ))
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;