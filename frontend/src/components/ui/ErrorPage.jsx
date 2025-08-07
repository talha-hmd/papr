import React from "react";

const ErrorPage = () => {
    return (
        <section className="bg-white dark:bg-black">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">

                {/* Left Column: Text */}
                <div className="w-full lg:w-1/2">
                    <p className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
                        404 error
                    </p>

                    <h1 className="mt-3 text-2xl font-heading font-semibold text-black dark:text-white md:text-3xl">
                        Page not found
                    </h1>

                    <p className="mt-4 text-muted font-body">
                        Sorry, the page you are looking for doesn't exist.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center mt-6 gap-x-3">
                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 dark:bg-black dark:text-white dark:border-gray-700 dark:hover:bg-white dark:hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Go back</span>
                        </button>

                        <button className="w-1/2 px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-black rounded-lg sm:w-auto hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                            Take me home
                        </button>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                    <img
                        src="/sad.jpg"
                        alt="Sad character"
                        className="w-full h-80 md:h-96 lg:h-[32rem] rounded-lg object-cover object-top"
                    />
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
