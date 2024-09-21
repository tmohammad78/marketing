import Link from "next/link";
import Data from "../../db/data";
import Image from "next/image";

const Post = ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const  { title ,description} = getPost(id)
  return (
    <div>
      <main>
        <h1>This is {title}.</h1>
        <p>{description}</p>
        <p style={{ color: "#0070f3" }}>
          <Link href="/">Back to Home</Link>
        </p>
      </main>
    </div>
  );
};

export const getPost = (id: string) => {
  if (!id) {
    return { props: {} };
  }
  
  const post = Data.find(post => post.id === id);

  return post
}

export const generateStaticParams = async () => {
  const posts = Data;  

  return posts.map((post) => ({
    params: { id: post.id },
  }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}) {
  const { title } = getPost(id)
  return {
    title,
  }
}

export default Post;