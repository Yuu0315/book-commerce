import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "../prisma";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error("Missing GitHub OAuth credentials");
}

export const authOptions: NextAuthOptions = {
    debug: true,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: ({session, user}) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                }
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
