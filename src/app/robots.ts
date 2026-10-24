import type { MetadataRoute } from "next";
import { siteIndexable, siteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return siteIndexable && siteOrigin
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteOrigin}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
