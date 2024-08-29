import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const token = request.cookies.get('__Secure-next-auth.session-token');
    console.log(token);

    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/contact', '/about'],
};
