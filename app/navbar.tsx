import Image from 'next/image';
import Link from 'next/link';

interface Props {
    hasDarkModeEnabled: boolean;
    handleToggle: () => void;
}

export const Navbar = ( {
    handleToggle
    , hasDarkModeEnabled
}: Props ) => {
    return (
        <nav className='fixed top-0 inset-x-0 z-50 py-4 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-white transition-colors duration-500 ease-out dark:bg-gray-800 shadow-lg w-full'>
            <div className='flex justify-between items-center'>
                { hasDarkModeEnabled
                    ? (
                        <Link href='/'>
                            <Image
                                src='/assets/pokedex-logo-dark.png'
                                alt='PokeDex'
                                width={ 159 }
                                height={ 40 }
                            />
                        </Link>
                    )
                    : (
                        <Link href='/'>
                            <Image
                                src='/assets/pokedex-logo-light.png'
                                alt='PokeDex'
                                width={ 159 }
                                height={ 40 }
                            />
                        </Link>
                    ) }
                <button
                    className='py-2 px-4 bg-gray-800 dark:bg-gray-100 transition-colors duration-500 ease-out rounded-lg cursor-pointer text-white dark:text-gray-800 font-bold flex justify-around items-center shadow-sm hover:shadow-md'
                    onClick={ handleToggle }
                >
                    <span>
                        { hasDarkModeEnabled
                            ? (
                                <svg
                                    className='w-4 mr-3 transition-all ease-out duration-300'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                                    />
                                </svg>
                            )
                            : (
                                <svg
                                    className='w-4 mr-3 transition-all ease-out duration-300'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                                    />
                                </svg>
                            ) }
                    </span>
                    <span>{ hasDarkModeEnabled ? 'Light' : 'Dark' }</span>
                </button>
            </div>
        </nav>
    );
};
