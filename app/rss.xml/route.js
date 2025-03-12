import { getPosts, metadata } from "app/(home)/page";
import { generateFeed } from "../feed";

export async function GET() {
  const posts = await getPosts();
  const feed = generateFeed(posts, metadata);
  return new Response(feed.rss2());
}
