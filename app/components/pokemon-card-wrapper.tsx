'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pokemon } from '../types/pokemon';
import { LoadingSkeleton } from './loading-skeleton';
import { PokemonCard } from './pokemon-card';

interface Props {
  name: string;
  url: string;
}

export const PokemonCardWrapper = ( {
    name
    , url
}: Props ) => {

    const pokemonQuery = useQuery( {
        queryKey: [ 'pokemon', name ]
        , queryFn: () => axios.get<Pokemon>( url )
            .then( res => res.data )
            .catch( err => console.log( err ) )
    } );

    if ( pokemonQuery.isLoading ) {
        return <LoadingSkeleton />;
    }

    if ( pokemonQuery.data ) {
        return (
            <PokemonCard pokemon={ pokemonQuery.data } />
        );
    }
};
