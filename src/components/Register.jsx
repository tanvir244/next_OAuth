"use client"
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
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register/new-user`, {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await res.json();
            
            if (res.ok) {
                console.log('Registration successful:', result.message);
                // Optional: Redirect to login page or show a success message
            } else {
                console.error('Registration failed:', result.message);
                // Optional: Show an error message to the user
            }
        } catch (error) {
            console.error('Unexpected error:', error);
        }

        form.reset();
    }

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
                        <input type="text" name="image" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter image URL" />
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


