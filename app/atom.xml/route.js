import { getPosts, metadata } from "../(home)/page";
import { generateFeed } from "../feed";

export async function GET() {
  const posts = await getPosts();
  const feed = generateFeed(posts, metadata);
  return new Response(feed.atom1());
}
