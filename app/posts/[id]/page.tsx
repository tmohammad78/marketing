import Link from "next/link";
import Data from "../../db/data";

const Post = ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const data = getPost(id)
  if(!data){
    return
  }
  return (
    <div>
      <main>
        <h1>This is {data?.title}.</h1>
        <p>{data?.description}</p>
        <p style={{ color: "#0070f3" }}>
          <Link href="/">Back to Home</Link>
        </p>
      </main>
    </div>
  );
};

const getPost = (id: string) => {
  if (!id) {
    return;
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
  const data = getPost(id)
  return {
    title: data?.title,
  }
}

export default Post;