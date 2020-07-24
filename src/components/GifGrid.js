
import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className = "animate__animated animate__headShake">{ category }</h3>
            { loading && <p className = "animate__animated animate__flash animate__slow">Loading...</p> }
            <div className = "card-grid">    
                {
                    images.map( img => (
                        <GifGridItem
                            key = { img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
