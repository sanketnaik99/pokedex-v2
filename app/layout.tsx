'use client';

import { Poppins } from 'next/font/google';
import './globals.css';
import {
    useEffect
    , useState
} from 'react';
import { Navbar } from './navbar';

const poppins = Poppins( {
    subsets: [ 'latin' ]
    , weight: [ '400', '500', '600', '700' ]
} );

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
        <html lang='en'>
            <body className={ [ poppins.className, currentTheme === 'dark' ? 'dark' : '' ].join( ' ' ) }>
                <Navbar
                    handleToggle={ () => {
                        currentTheme === 'dark' ? setTheme( 'light' ) : setTheme( 'dark' );
                    } }
                    hasDarkModeEnabled={ currentTheme === 'dark' }
                />
                { children }
            </body>
        </html>
    );
}
