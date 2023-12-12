import {
    HydrationBoundary
    , QueryClient
    , dehydrate
} from '@tanstack/react-query';
import axios from 'axios';
import {
    PokemonData
    , PokemonList
} from './pokemon-list';

const Page = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery( {
        queryKey: [ 'pokemon' ]
        , queryFn: () => axios
            .get<PokemonData>( 'https://pokeapi.co/api/v2/pokemon?limit=20' )
            .then( res => res.data )
            .catch( err => console.log( err ) )
    } );

    const prefetchedData = queryClient.getQueryData<PokemonData>( [ 'pokemon' ] );

    if ( prefetchedData ) {
        for ( const pokemon of prefetchedData.results ) {
            await queryClient.prefetchQuery( {
                queryKey: [ 'pokemon', pokemon.name ]
                , queryFn: () => axios
                    .get( pokemon.url )
                    .then( res => res.data )
                    .catch( err => console.log( err ) )
            } );
        }
    }

    return (
        <HydrationBoundary state={ dehydrate( queryClient ) }>
            <PokemonList />
        </HydrationBoundary>
    );
};

export default Page;
