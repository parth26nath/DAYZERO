import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        { url: '/',  priority: 1.0 },
    ];
}
