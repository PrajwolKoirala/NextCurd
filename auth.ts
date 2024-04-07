
import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { getUserByID } from "./data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { UserRole } from "@prisma/client";


console.log("AUTH_SECRET:", process.env.AUTH_SECRET);
// const secret = process.env.AUTH_SECRET ; 
// const secret = "Nqxbzt8xNNKV2/Nn4k1nv3j/V98doBTlTwaW+JIkllo=";
const secret = "DCeAsbBG7oxbdKzQ0kHNjLH1UxJhZfFIuOSeEinzVvM="
// Check if the AUTH_SECRET environment variable is properly set

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // pages: {
  //   signIn:"/auth/logn",
  //   error:"/auth/error"
  // },
events: {
 async linkAccount({ user }) {
    await db.user.update({
      where: { id:user.id },
      data: { emailVerified: new Date()}
    })
  } 
},

  callbacks: {
    async session({ session, token }) {
      console.log({ sessionToken: token, session });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserByID(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  secret: secret,
});
