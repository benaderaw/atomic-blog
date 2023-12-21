import { usePosts } from "../App-v1";

export default function Results() {
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
}
