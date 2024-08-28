"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);
    // console.log(session?.data?.user?.image);

    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Contact",
            path: '/contact'
        }
    ]

    const handler = () => {
        router.push("/api/auth/signin");
    }

    return (
        <nav className={`flex justify-between ${session ? 'py-6' : 'py-0'} px-12 bg-teal-700 text-white`}>
            <h1 className='text-4xl font-bold flex items-center'>OAuth</h1>
            <ul className='flex gap-8 items-center'>
                {
                    links.map((link) => <Link key={link.path} href={link.path} className={`${pathname === link.path && "text-lime-400"}`}>{link.title}</Link>)
                }
            </ul>
            <div className='flex items-center'>
                {session.status === "authenticated" ? <button onClick={() => signOut()} className='btn bg-white text-teal-700 px-4 py-2 font-bold rounded-lg'>Sign Out</button> : (<div className='flex gap-4'>
                    <button onClick={handler} className='btn bg-white text-teal-700 px-4 py-2 font-bold rounded-lg'>Sign In</button>
                    <Link href={'/api/auth/register'}>
                        <button className='btn bg-white text-teal-700 px-4 py-2 font-bold rounded-lg'>Sign Up</button>
                    </Link>
                </div>)}
            </div>
            {session.status === "authenticated" ? (
                <div className='h-[90px] flex flex-col items-center justify-center'>
                    <div className='w-[60px] h-[60px] border border-black overflow-hidden rounded-full'>
                        <Image
                            src={session?.data?.user?.image || '/default-profile.png'}
                            alt="Profile Picture"
                            width={60}
                            height={60}
                            className='object-cover'
                        />
                    </div>
                    <p className='mt-2 text-center'>{session?.data?.user?.name}</p>
                </div>
            ) : null}

        </nav>
    );
};

export default Navbar;