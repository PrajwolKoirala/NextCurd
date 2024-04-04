import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider  from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!
          }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text"
                },
                password: {  
                    label: "Password:", 
                    type: "password"
                }
            },
            async authorize(credentials) {
                const user = { id: "11", name: "prajwol", password: "password" }
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user; 
                } else {
                    return null;
                }
            }
        })
    ]
}
