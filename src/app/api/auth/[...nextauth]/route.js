import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", required: true, placeholder: "Your email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Your password" }
            },

            async authorize(credentials) {
                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }

                if (email) {
                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({ email });
                    // const currentUser = users.find((user) => user.email === email);
                    if (currentUser) {
                        if (parseInt(currentUser.password) === parseInt(password)) {
                            return currentUser;
                        }
                    }
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        }
    }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };