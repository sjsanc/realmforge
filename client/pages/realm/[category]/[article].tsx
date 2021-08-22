import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { article } = router.query;

  return <p>Post: {article}</p>;
};

export default Post;
