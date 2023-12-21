import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { usePosts } from "../App-v1";

export default function Header() {
  const { setPosts } = usePosts();

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
