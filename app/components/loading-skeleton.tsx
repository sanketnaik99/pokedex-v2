export const LoadingSkeleton = () => {
    return (
        <div className='rounded-2xl shadow-lg flex overflow-hidden flex-col bg-gray-200 dark:bg-gray-600'>
            <div className='flex flex-row justify-center'>
                <div className='animate-pulse w-52 h-52 bg-gray-300 dark:bg-gray-400 rounded-full my-5 mx-10' />
            </div>
            <div className='animate-pulse flex flex-row p-2 pb-4 justify-center'>
                <div className='bg-gray-300 dark:bg-gray-400 py-1 rounded-full w-24 h-7 px-5 mx-1' />
                <div className='bg-gray-300 dark:bg-gray-400 py-1 rounded-full w-24 h-7 px-5 mx-1' />
            </div>
            <div className='px-4 py-2 bg-white dark:bg-gray-700 dark:text-gray-100 color-transition'>
                <div className='animate-pulse bg-gray-200 dark:bg-gray-500 h-8 rounded-lg mx-10' />

                <div className='animate-pulse flex flex-row mt-2 bg-gray-200 dark:bg-gray-500 h-14 rounded-lg' />
                <div className='flex flex-row justify-center'>
                    <div className='animate-pulse bg-gray-200 dark:bg-gray-500 h-14 w-24 rounded-lg mt-1 ' />
                </div>
                <div className='animate-pulse mt-4 mb-3 py-2 px-4 mx-8 rounded-xl h-10 bg-gray-200 dark:bg-gray-500' />
            </div>
        </div>
    );
};
