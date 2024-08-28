"use client"
import { POST } from '@/app/api/auth/[...nextauth]/route';
import { useRouter } from 'next/navigation';
import React from 'react';

const Register = () => {

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const newUser = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            image: form.image.value,
            type: form.type.value
        }
        const res = await fetch('http://localhost:3000/api/auth/register/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })

        console.log(res);
    }

    // const router = useRouter()

    // async function handleSubmit(event) {
    //     event.preventDefault();

    //     try {
    //         const formData = new FormData(event.currentTarget);

    //         const name = formData.get('name');
    //         const email = formData.get('email');
    //         const password = formData.get('password');

    //         const response = await fetch(`/api/register`, {
    //             method: 'POST',
    //             headers: {
    //                 "content-type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 password
    //             })
    //         });

    //         response.status === 201 && router.push('/login');

    //     } catch (e) {
    //         console.error(e.message)
    //     }
    // }

    return (
        <div className="w-[620px] mx-auto bg-gray-800 text-white rounded-lg px-12 py-16">
            <h1 className="text-center font-semibold text-5xl mb-12">Register Now</h1>
            <form onSubmit={handleRegister}>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Name</span>
                        <input type="text" name="name" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Email</span>
                        <input type="email" name="email" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter email" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Password</span>
                        <input type="password" name="password" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter password" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Image</span>
                        <input type="text" name="image" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter email" />
                    </div>
                    <div className="space-y-2 flex flex-col">
                        <span className="text-base font-semibold">Type</span>
                        <select name="type" className="text-base text-black font-semibold p-2 rounded-md w-full">
                            <option value="" disabled selected>Type</option>
                            <option value="admin">Admin</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                </div>
                <button className="w-full py-2 bg-white text-black mt-8 rounded-lg font-semibold">Register</button>

            </form>
        </div>
    );
};

export default Register;