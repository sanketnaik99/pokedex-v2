import Image from 'next/image';
import Link from 'next/link';

export default function Home () {
    return (
        <main className='flex min-h-screen flex-col items-center p-24 bg-gradient-to-br from-white via-pokemon-red-300/50 to-stone-50 dark:from-gray-800 dark:via-pokemon-red-950/30 dark:to-stone-900'>
            <header className='text-center py-20 px-8'>
                <h1 className='text-5xl font-bold leading-tight mb-6 text-black dark:text-gray-50'>PokeDex V2</h1>
                <p className='text-xl text-gray-500 dark:text-gray-200 mb-8'>
                    A PokeDex built using Next.js, Tailwind CSS, and TypeScript.
                </p>
                <Link href='/dashboard'>
                    <button className='bg-pokemon-red-600 text-white dark:text-white hover:bg-red-700 px-5 py-3 rounded-lg hover:shadow-xl shadow-md shadow-pokemon-red-600/50'>Get started</button>
                </Link>
            </header>
            <Image
                src='/assets/pikachu.png'
                height={ 500 }
                width={ 500 }
                alt='Pikachu'
            />
        </main>
    );
}
