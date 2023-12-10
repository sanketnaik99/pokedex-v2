'use client';

import {
    usePathname
    , useRouter
} from 'next/navigation';

const Layout = ( { children }: {children: React.ReactNode} ) => {

    const pathname = usePathname();
    const router = useRouter();

    return (
        <div>
            <div className='max-w-md mx-auto p-8'>
                <div className='mb-4 flex space-x-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md ring-2 ring-pokemon-red-600 dark:ring-0'>
                    <button
                        className={ [ 'flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-pokemon-red transition-all duration-300', pathname === '/' ? 'bg-pokemon-red-600 text-white' : 'bg-gray-100 shadow-md dark:bg-gray-600 dark:text-white' ].join( ' ' ) }
                        onClick={ () => router.push( '/', { scroll: false } ) }
                    >
                        Pokemon
                    </button>
                    <button
                        className={ [ 'flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-pokemon-red transition-all duration-300', pathname === '/items' ? 'bg-pokemon-red-600 text-white' : 'bg-gray-100 shadow-md dark:bg-gray-600 dark:text-white' ].join( ' ' ) }
                        onClick={ () => router.push( '/items', { scroll: false } ) }
                    >
                        Items
                    </button>
                    <button
                        className={ [ 'flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-pokemon-red transition-all duration-300', pathname === '/favorites' ? 'bg-pokemon-red-600 text-white' : 'bg-gray-100 shadow-md dark:bg-gray-600 dark:text-white' ].join( ' ' ) }
                        onClick={ () => router.push( '/favorites', { scroll: false } ) }
                    >
                        Favorites
                    </button>
                </div>
            </div>
            { children }
        </div>
    );
};

export default Layout;
