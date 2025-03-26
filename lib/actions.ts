'use server'
import { cache } from "react";
import { prisma } from "./prisma";

export const getKeys = cache(async (userId: string) => {
    console.log("from server");
    const keys = await prisma.apiKey.findMany({
        where: { clerkUserId: userId },
        orderBy: { createdAt: "desc" }
    })
    return keys;
});