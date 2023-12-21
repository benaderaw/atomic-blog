import { faker } from "@faker-js/faker";

import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { usePosts, PostProvider } from "./PostContext";
import Button from "./components/Button";
import { FakeProvider } from "./FakerContext";

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// APP
export default function App() {
  return (
    <section>
      <FakeProvider>
        <Button />
      </FakeProvider>

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export { usePosts };
