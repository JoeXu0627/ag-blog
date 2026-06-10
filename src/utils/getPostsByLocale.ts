import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Returns the post collection for the given locale.
 * Chinese posts live in `src/content/posts`, English translations in
 * `src/content/posts-en` (paired by file name). The two collections share an
 * identical schema, so English entries are safely cast to the `posts` entry
 * type for reuse in shared components (Card, etc.).
 */
export async function getPostsByLocale(
  locale: string | undefined
): Promise<CollectionEntry<"posts">[]> {
  if (locale === "en") {
    const posts = await getCollection("postsEn");
    return posts as unknown as CollectionEntry<"posts">[];
  }
  return await getCollection("posts");
}
