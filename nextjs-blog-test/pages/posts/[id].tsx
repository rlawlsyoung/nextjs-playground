import { getAllPostIds, getPostData, getSortedPostsData } from "@/lib/post";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

const Page = ({
  postData,
}: {
  postData: { title: string; date: string; contentHtml: string };
}) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  // [{params: {id:'pre-rendering'}, {param...}}]

  return {
    paths,
    fallback: true,  
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const postData = await getPostData(params.id as string);

    return { props: { postData } };
  }

  return { props: {} };
};
