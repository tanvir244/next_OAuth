import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    return (
        <div className='flex justify-center py-24 my-28'>
            <h1 className='text-4xl font-bold'>About Contents</h1>
        </div>
    );
};

export default page;