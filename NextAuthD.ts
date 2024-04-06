import NextAuth, {DefaultSession} from "next-auth";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
    role : UserRole
}


declare module "next-auth" {
    interface Session {
        id:  string,
        user: ExtendedUser
    }
}
