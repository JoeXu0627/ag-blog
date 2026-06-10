import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  // 显式拼上 base 前缀，避免 new URL 相对解析丢掉子路径（如 /ag-blog）
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const sitemapURL = new URL(`${base}sitemap-index.xml`, site);
  return new Response(getRobotsTxt(sitemapURL));
};
