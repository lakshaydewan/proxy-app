'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from '../lib/prisma'
import jwt from "jsonwebtoken";

export async function createApiKey(userId: string, projectName: string) {
    const token = jwt.sign({
        userId: userId,
        projectName: projectName
    }, process.env.JWT_SECRET as string)

    const apiKey = await prisma.apiKey.create({
        data: {
            clerkUserId: userId,
            projectName: projectName,
            key: token,
            status: "ACTIVE"
        }
    })

    return apiKey
}

export async function deleteApiKey(keyId: string): Promise<"success" | "failure"> {
    const res = await prisma.apiKey.delete({
        where: {
            id: keyId
        }
    })
    revalidatePath("/keys")
    if (!res) {
        return "failure"
    } else {
        return "success"
    }
}

export async function changeStatus(keyId: string, status: string) {
    await prisma.apiKey.update({
        where: {
            id: keyId
        },
        data: {
            status: status
        }
    })
    revalidatePath("/keys")
}