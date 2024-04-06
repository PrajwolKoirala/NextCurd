


import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from "@/routes"

const {auth} = NextAuth(authConfig);

export default auth((req):any => {
   const { nextUrl } = req;
   const isLoggedin = !!req.auth;



const isApiAuthROute = nextUrl.pathname.startsWith(apiAuthPrefix);
const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
const isAuthRoute = authRoutes.includes(nextUrl.pathname);

if (isApiAuthROute) { 
    return null;

}

if (isAuthRoute) {
    if (isLoggedin) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null;
}

if (!isLoggedin && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl))
}


return null;
});

export const config ={
    matcher: [
        // Exclude files with a "." followed by an extension, which are typically static files.
        // Exclude files in the _next directory, which are Next.js internals.
        "/((?!.+\\.[\\w]+$|_next).*)", "/",
        // Re-include any files in the api or trpc folders that might have an extension
        "/(api|trpc)(.*)"
      ]
    
}

