import { NextRequest, NextResponse } from "next/server";
import { ResponseObject } from "../../../lib/types";
import axios from "axios";
import jwt from "jsonwebtoken";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

if (!API_KEY || !API_URL) {
  throw new Error("Missing API_KEY or API_URL in environment variables");
}

export async function GET() {

  return NextResponse.json({
    message: "Success",
    status: 200,
    data: "URL WORKIN FINE",
  });
}

async function getMistralResponse(userPrompt: string, dummyJson: unknown, newSchema: unknown): Promise<string | null> {
  try {
    const preFixForPrompt = "DONT WRITE ANYTHING BEFORE OR AFTER, PLEASE DONT ADD ANY NOTE AFTER THE RESPONSE. ONLY RETURN WHAT IS ASKED OF YOU.";

    const response: unknown = await axios.post(
      API_URL as string,
      {
        model: "mistral-medium",
        messages: [
          {
            role: "user",
            content: `${preFixForPrompt} ${userPrompt} ${JSON.stringify(dummyJson)} New Schema ${JSON.stringify(newSchema)}`
          }
        ],
        max_tokens: 2000,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    //@ts-expect-error wwell idk what im doing
    return response?.data?.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error("Error sending data to Mistral API:", error);
    return null;
  }
}


export async function POST(request: NextRequest) {
  try {
    const body: ResponseObject = await request.json();
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Missing Authorization header", status: 401 }, { status: 401 });
    }

    const result = jwt.verify(token, process.env.JWT_SECRET as string);

    if (!result) {
      return NextResponse.json({ message: "Invalid token", status: 401 }, { status: 401 });
    }

    const { url, instructions, schema } = body;
    console.log(url, instructions, schema);

    if (!url || !instructions) {
      return NextResponse.json({ message: "Missing required fields", status: 400 }, { status: 400 });
    }

    const apiResponse = await axios.get(url);
    const dummyJson = apiResponse.data;

    const finalRes = await getMistralResponse(instructions, dummyJson, schema);

    return NextResponse.json({
      message: "Success",
      status: 200,
      data: finalRes ?? "No response from AI",
    });

  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ message: "Internal Server Error", status: 500 }, { status: 500 });
  }
}
