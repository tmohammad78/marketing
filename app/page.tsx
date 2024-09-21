import { CMS_NAME } from "./lib/constant";
import Link from 'next/link'
import Data from "./db/data";

function Intro() {
  return (
    <section className="flex flex-col items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="!text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Marketing Content
      </h1>
      <div>
        This is <strong>{CMS_NAME}</strong> Application
      </div>
    </section>
  );
}

export default function Home() {
  const posts = Data;
  return (
    <div className="container mx-auto px-5">
      <Intro />
      <p>

          <h2>Check out Posts</h2>
          <ul style={{ color: "#0070f3" }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        </p>
    </div>
  );
}