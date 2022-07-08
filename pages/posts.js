import React from "react";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import PostCard from "../components/PostCard";

const posts = ({ posts }) => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Blogs
              </span>
              <h2
                className="
                      font-bold
                      text-3xl
                      sm:text-4xl
                      md:text-[40px]
                      text-dark
                      mb-4
                      "
              >
                Our Recent News
              </h2>
              <p className="text-base text-body-color">
                Here are some of our blogs
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          {posts.map((post) => {
            return <PostCard key={post.uri} post={post}></PostCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default posts;

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
          excerpt
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
