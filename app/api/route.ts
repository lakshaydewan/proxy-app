import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {

    const user = await currentUser();
    const userId = user?.id as string;

    const keys = await prisma.apiKey.findMany({
            where: { clerkUserId: userId },
            orderBy: { createdAt: "desc" }
        })

    return NextResponse.json({
        keys
    })
} 