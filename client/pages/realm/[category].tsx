import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Post = () => {
  const router = useRouter();
  const { category } = router.query;

  return <Layout>{<h1>category</h1>}</Layout>;
};

export default Post;
