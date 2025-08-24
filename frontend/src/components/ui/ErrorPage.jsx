import React from "react";

const ErrorPage = () => {
    return (
        <section className="bg-white dark:bg-black">
            <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">

                {/* Left Column: Text */}
                <div className="w-full lg:w-1/2">
                    <p className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
                        404 error
                    </p>

                    <h1 className="mt-3 text-2xl font-heading font-semibold text-black dark:text-white md:text-3xl">
                        Page not found
                    </h1>

                    <p className="mt-4 text-muted font-body">
                        Sorry, the paper you are looking for doesn't exist. Please try again.
                    </p>
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
