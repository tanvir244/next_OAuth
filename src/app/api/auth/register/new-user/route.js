import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        const newUser = await request.json();
        const res = await userCollection.insertOne(newUser);
        return new NextResponse(JSON.stringify({ message: "New user created", userId: res.insertedId }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.error('Error creating user:', error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
