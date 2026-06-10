import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import { useTranslations } from "@/i18n";
import config from "@/config";

export async function GET() {
  const posts = (await getCollection(
    "postsEn"
  )) as unknown as CollectionEntry<"posts">[];
  const sortedPosts = getSortedPosts(posts);
  const t = useTranslations("en");

  return rss({
    title: t.site.title,
    description: t.site.description,
    site: config.site.url,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, "en"),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
