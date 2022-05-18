import Head from "next/head";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/test-data";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto ">
      <main>
        <h1 className="title text-white">Headless WordPress Next.js Starter</h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
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
