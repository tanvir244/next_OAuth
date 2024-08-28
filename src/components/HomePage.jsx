import connectDB from '@/lib/connectDB';
import React from 'react';

const HomePage = () => {

    return (
        <div className="py-28">
            <div className="bg-green-500 w-[650px] mx-auto py-12 text-center">
                <h1 className="text-5xl mb-4">What are we learning Today?</h1>
                <h1>Ans: How to empliment credentials based authentication in NextAuth</h1>
            </div>
        </div>
    );
};

export default HomePage;