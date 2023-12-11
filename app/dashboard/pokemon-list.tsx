'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { LoadingSkeleton } from '../components/loading-skeleton';

export const PokemonList = () => {

    const {
        isLoading
        , data: pokemonData
    } = useQuery( {
        queryKey: [ 'pokemon' ]
        , queryFn: () => axios
            .get( 'https://pokeapi.co/api/v2/pokemon?limit=12' )
            .then( res => res.data )
            .catch( err => console.log( err ) )
    } );

    return (
        <div className='container p-8'>
            <h1>Pokemon List</h1>
            <div className='sm:mt-8 mx-2 sm:mx-auto mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-y-4 md:gap-y-8 gap-x-8'>
                {
                    isLoading && Array( 12 ).fill( 0 ).map( ( item, index ) => (
                        <LoadingSkeleton key={ index } />
                    ) )
                }
                {
                    JSON.stringify( pokemonData )
                }
            </div>
        </div>
    );
};
