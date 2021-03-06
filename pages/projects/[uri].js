import Head from "next/head";
import Footer from "../../components/Footer";
import { getPostByUri } from "../../lib/test-data";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";

export default function SlugPage({ project }) {
  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <div className="siteHeader">
        <h1 className="title font-leading text-xl ">{project.title}</h1>
        <p>
          {`${project.author.node.firstName} ${project.author.node.lastName}`} |
          🗓️ &nbsp;&nbsp;{new Date(project.date).toLocaleDateString()}
        </p>
        <p>This is an acf field woo woo{project.contactPage.phoneNumber}</p>
      </div>
      <article
        className=""
        dangerouslySetInnerHTML={{ __html: project.content }}
      ></article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POSTS_BY_URI = gql`
    query GetPostsByURI($id: ID!) {
      project(id: $id, idType: URI) {
        title
        content
        date
        uri
        author {
          node {
            firstName
            lastName
          }
        }
        contactPage {
          phoneNumber
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const project = response?.data?.project;
  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
