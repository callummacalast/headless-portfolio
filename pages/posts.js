import React from 'react'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'
import PostCard from '../components/PostCard'

const posts = ({ posts }) => {
  return (
    <>
      <div className="bg-gray-800 text-gray-50">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="post-image flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto">
            <div className="flex flex-col items-center p-8 py-12 text-center">
              <span>12 June</span>
              <h1 className="py-4 text-5xl font-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
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
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?2"
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
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?3"
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
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?4"
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
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default posts

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
  `
  const response = await client.query({
    query: GET_POSTS,
  })
  const posts = response?.data?.posts?.nodes
  return {
    props: {
      posts,
    },
  }
}
