import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n/locales";

// Next's static route matching is case-insensitive. Reject unsupported casing
// before it can bypass the locale guard by matching a prerendered page.
export function proxy(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/")[1];
  const normalized = segment.toLowerCase();
  if (segment !== normalized && isLocale(normalized)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${normalized}/not-found`;
    return NextResponse.rewrite(url, { status: 404 });
  }
}

export const config = { matcher: ["/((?!_next/|images/).*)"] };
