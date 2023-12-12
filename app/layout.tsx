'use client';

import { Poppins } from 'next/font/google';
import './globals.css';
import {
    useEffect
    , useState
} from 'react';
import { Navbar } from './navbar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
    QueryClient
    , QueryClientProvider
} from '@tanstack/react-query';
import dynamic from 'next/dynamic';

const poppins = Poppins( {
    subsets: [ 'latin' ]
    , weight: [ '400', '500', '600', '700' ]
} );

const ReactQueryDevtoolsProduction = dynamic( () =>
    import( '@tanstack/react-query-devtools/production' ).then( d => ( {
        default: d.ReactQueryDevtools
    } ) ),
);

const queryClient = new QueryClient( { defaultOptions: { queries: { staleTime: 1000 * 30 } } } );

export default function RootLayout ( {
    children
}: {
  children: React.ReactNode;
} ) {

    const [ currentTheme, setTheme ] = useState( 'light' );
    const [ hasLoaded, setLoaded ] = useState( false );

    useEffect( () => {
    // Get stored theme.
    // Initially there is no theme in storage so storedTheme will be null.
        const storedTheme = localStorage.getItem( 'theme' );

        // Check if theme has been stored and if it is the first load.
        // If the theme has been stored in local storage and hasLoaded is false -> Then make the theme from localstorage as the currentTheme.
        if ( hasLoaded === false && storedTheme ) {
            setLoaded( true );
            setTheme( storedTheme );
        }

        // If currentTheme is updated, update LocalStorage.
        if ( currentTheme !== storedTheme && hasLoaded ) {
            localStorage.setItem( 'theme', currentTheme );
        }
    }, [ currentTheme ] );

    return (
        <html
            lang='en'
            className={ currentTheme === 'dark' ? 'dark' : '' }
        >
            <QueryClientProvider client={ queryClient }>
                <body className={ [ poppins.className, 'bg-white dark:bg-gray-900' ].join( ' ' ) }>
                    <Navbar
                        handleToggle={ () => {
                            currentTheme === 'dark' ? setTheme( 'light' ) : setTheme( 'dark' );
                        } }
                        hasDarkModeEnabled={ currentTheme === 'dark' }
                    />
                    { children }
                    { process.env.NODE_ENV === 'development' && <ReactQueryDevtools /> }
                    { process.env.NODE_ENV === 'production' && <ReactQueryDevtoolsProduction /> }
                </body>
            </QueryClientProvider>
        </html>
    );
}
