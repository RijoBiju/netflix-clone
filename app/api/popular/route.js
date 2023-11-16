import requests from "@utils/moviedb";
import { NextResponse } from "next/server";

export async function GET(Request) {
  try {
    const res = await fetch(requests.fetchPopular);
    const data = await res.json();
    return new Response(JSON.stringify(data));
  } catch (error) {}
}
