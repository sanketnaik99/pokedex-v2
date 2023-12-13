import Link from 'next/link';
import { Pokemon } from '../types/pokemon';
import Image from 'next/image';

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ( { pokemon }: Props ) => {

    const typesBadges = pokemon.types.map( type => (
        <div
            className='badge select-none capitalize mx-1 px-4 py-2 rounded-full bg-gradient-to-br from-gray-600/40 to-gray-800/40 text-white shadow-lg'
            key={ type.type.name }
        >
            { type.type.name }
        </div>
    ) );

    // Convert Weight, Height and get HP
    const weight = pokemon.weight / 10;
    const height = pokemon.height / 10;
    const hp = pokemon.stats.find( stat => stat.stat.name === 'hp' )?.base_stat;

    return (
        <div className={ [ 'rounded-2xl shadow-lg flex overflow-hidden flex-col', `${ pokemon.types[ 0 ].type.name }-gradient` ].join( ' ' ) }>
            <div className='flex flex-row justify-center'>
                <Image
                    src={ pokemon.sprites.other?.[ 'official-artwork' ]?.front_default || '' }
                    alt={ pokemon.name }
                    width={ 200 }
                    height={ 200 }
                    className='w-60 mx-10'
                />
            </div>
            <div className='flex flex-row p-2 pb-4 justify-center'>{ typesBadges }</div>
            <div className='px-4 py-2 bg-white dark:bg-gray-700 dark:text-gray-100 color-transition'>
                <div className='font-bold text-3xl mb-2 text-center capitalize'>
                    { pokemon.name }
                </div>

                <div className='flex flex-row mt-2'>
                    <div className='flex flex-1 flex-col items-center border-r-2 border-gray-200 dark:border-gray-600'>
                        <span className='font-medium text-lg mb-0 pb-0'>Weight</span>
                        <span className='font-light text-lg mt-0 pt-0'>{ weight } Kg</span>
                    </div>
                    <div className='flex flex-1 flex-col items-center  '>
                        <span className='font-medium text-lg'>Height</span>
                        <span className='font-light text-lg'>{ height } m</span>
                    </div>
                </div>
                <div className='mt-0.5 flex flex-col items-center'>
                    <span className='font-medium text-lg'>HP</span>
                    <span className='font-light text-lg'>{ hp }</span>
                </div>
                <Link
                    href={ `/pokemon/${ pokemon.id }` }
                    className='mt-4 mb-3 py-2 px-4 sm:mx-8 md:mx-4 mx-2 rounded-xl shadow-sm  cursor-pointer font-bold bg-gradient-to-br from-red-400 to-red-600 text-white flex flex-row justify-center hover:shadow-lg'
                >
                    <span className='capitalize text-center'>
                        More About { pokemon.name }
                    </span>
                </Link>
            </div>
        </div>
    );
};
