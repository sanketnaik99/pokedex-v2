import {
    HydrationBoundary
    , QueryClient
    , dehydrate
} from '@tanstack/react-query';
import axios from 'axios';
import { PokemonList } from './pokemon-list';

const Page = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery( {
        queryKey: [ 'pokemon' ]
        , queryFn: () => axios
            .get( 'https://pokeapi.co/api/v2/pokemon?limit=20' )
            .then( res => res.data )
            .catch( err => console.log( err ) )
    } );

    return (
        <HydrationBoundary state={ dehydrate( queryClient ) }>
            <PokemonList />
        </HydrationBoundary>
    );
};

export default Page;
