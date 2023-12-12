'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { LoadingSkeleton } from '../components/loading-skeleton';
import { PokemonCardWrapper } from '../components/pokemon-card-wrapper';

export interface PokemonData {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export const PokemonList = () => {

    const {
        isLoading
        , data: pokemonData
    } = useQuery( {
        queryKey: [ 'pokemon' ]
        , queryFn: () => axios
            .get<PokemonData>( 'https://pokeapi.co/api/v2/pokemon?limit=12' )
            .then( res => res.data )
            .catch( err => console.log( err ) )
    } );

    return (
        <div className='container p-4 mx-auto'>
            <div className='sm:mt-8 mx-auto sm:mx-auto mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-y-4 md:gap-y-8 gap-x-8'>
                {
                    isLoading && Array( 20 ).fill( 0 ).map( ( item, index ) => (
                        <LoadingSkeleton key={ index } />
                    ) )
                }
                {
                    pokemonData?.results.map( pokemon => (
                        <PokemonCardWrapper
                            key={ pokemon.name }
                            name={ pokemon.name }
                            url={ pokemon.url }
                        />
                    ) )
                }
            </div>
        </div>
    );
};
