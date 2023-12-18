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
            <div className='flex flex-row justify-between pt-3 px-3'>
                <h3 className='text-inherit text-2xl capitalize font-bold'>{ pokemon.name }</h3>
                <h4 className='text-inherit text-2xl font-bold'>{ hp } HP</h4>
            </div>
            <div className='flex flex-row justify-center'>
                <Image
                    src={ pokemon.sprites.other?.[ 'official-artwork' ]?.front_default || '' }
                    alt={ pokemon.name }
                    width={ 200 }
                    height={ 200 }
                    className='w-60 mx-10'
                />
            </div>
            <div className='flex flex-row pb-2 justify-center'>{ typesBadges }</div>
            <div className='px-4 py-2 color-transition'>
                <div className='flex flex-row mt-2'>
                    <div className='flex flex-1 flex-col items-center'>
                        <span className='text-lg font-semibold'>Weight</span>
                        <span className='font-light text-lg'>{ weight } Kg</span>
                    </div>
                    <div className='flex flex-1 flex-col items-center  '>
                        <span className='text-lg font-semibold'>Height</span>
                        <span className='font-light text-lg'>{ height } m</span>
                    </div>
                </div>
                <div className='py-2 flex flex-col gap-1'>
                    { pokemon.stats.map( stat => (
                        <div
                            className=''
                            key={ stat.stat.name }
                        >
                            <div className='flex mb-2 items-center justify-between'>
                                <div>
                                    <span
                                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gradient-to-br from-gray-600/40 to-gray-800/40 text-white shadow-sm'
                                    >
                                        { stat.stat.name }
                                    </span>
                                </div>
                                <div className='text-right'>
                                    <span
                                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full color-transition bg-gradient-to-br from-gray-600/40 to-gray-800/40 text-white shadow-sm'
                                    >
                                        { stat.base_stat }
                                    </span>
                                </div>
                            </div>
                            <div
                                className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gradient-to-br from-gray-600/40 to-gray-800/40 shadow-md'
                            >
                                <div
                                    style={ { width: `${ stat.base_stat }%` } }
                                    className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white rounded-full'
                                />
                            </div>
                        </div>
                    ) ) }
                </div>
            </div>
        </div>
    );
};
