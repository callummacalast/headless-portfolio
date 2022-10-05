import React from 'react';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';

const projects = ({ projects }) => {
  console.log(projects);
  return (
    <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Work I have done</h2>
          <p className="font-serif text-sm text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, index) => (
            <Link href={`${p?.uri}`} key={index}>
              <article className="flex flex-col bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 bg-gray-500"
                    src="https://source.unsplash.com/200x200/?fashion?1"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline text-violet-400"
                  >
                    {p?.date}
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {p?.title}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
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
