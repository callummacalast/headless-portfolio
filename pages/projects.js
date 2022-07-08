import React from "react";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import ProjectCard from "../components/ProjectCard";

const projects = ({ projects }) => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                My projects
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
                Projects
              </h2>
              <p className="text-base text-body-color">
                These are some of our blog posts
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {projects.map((project) => {
            return (
              <ProjectCard key={project.uri} project={project}></ProjectCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default projects;

export async function getStaticProps() {
  const GET_PROJECTS = gql`
    query GetAllProjects {
      projects {
        nodes {
          title
          content
          uri
          date
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_PROJECTS,
  });
  const projects = response?.data?.projects?.nodes;
  console.log(projects);
  return {
    props: {
      projects,
    },
  };
}
