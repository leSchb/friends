import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("authentication_token");

  if (!token || !token.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
