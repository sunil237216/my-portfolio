import React from 'react';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug } from '../../../lib/blog';
import Navbar from '../../components/Navbar';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { assets } from '../../../../assets/assets';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} - Sunil Portfolio`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      <Navbar />
      
      <div className='w-full px-[12%] py-10 pt-32'>
        <div className='max-w-4xl mx-auto'>
          {/* Back button */}
          <Link 
            href='/blog'
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8'
          >
            <svg 
              className='w-5 h-5' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M15 19l-7-7 7-7' 
              />
            </svg>
            Back to Blog
          </Link>

          {/* Blog header */}
          <article>
            <header className='mb-8'>
              <div className='flex items-center gap-2 mb-4 flex-wrap'>
                {post.tags && post.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className='text-sm px-4 py-1.5 bg-gray-100 rounded-full text-gray-600'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className='text-4xl md:text-5xl font-bold font-Ovo mb-4'>
                {post.title}
              </h1>
              
              <div className='flex items-center gap-3 text-gray-600'>
                <span className='font-medium'>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
            </header>

            {/* Featured image */}
            <div className='aspect-[2/1] rounded-lg mb-8 overflow-hidden'>
              <Image 
                src={post.image || '/blog/default.svg'} 
                alt={post.title}
                width={1200}
                height={600}
                unoptimized
                className='w-full h-full object-cover'
                priority
              />
            </div>

            {/* Blog content */}
            <div className='prose prose-lg max-w-none'>
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className='text-4xl font-bold font-Ovo mt-8 mb-4' {...props} />,
                  h2: ({node, ...props}) => <h2 className='text-3xl font-bold font-Ovo mt-6 mb-3' {...props} />,
                  h3: ({node, ...props}) => <h3 className='text-2xl font-semibold font-Ovo mt-5 mb-2' {...props} />,
                  p: ({node, ...props}) => <p className='mb-4 leading-relaxed text-gray-700' {...props} />,
                  ul: ({node, ...props}) => <ul className='list-disc list-inside mb-4 space-y-2' {...props} />,
                  ol: ({node, ...props}) => <ol className='list-decimal list-inside mb-4 space-y-2' {...props} />,
                  li: ({node, ...props}) => <li className='text-gray-700 ml-4' {...props} />,
                  code: ({node, inline, ...props}) => 
                    inline 
                      ? <code className='bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600' {...props} />
                      : <code className='block bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono' {...props} />,
                  pre: ({node, ...props}) => <pre className='mb-4' {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className='border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600' {...props} />,
                  a: ({node, ...props}) => <a className='text-blue-600 hover:text-blue-700 underline' {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Share section */}
            <div className='mt-12 pt-8 border-t border-gray-200'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-xl font-semibold font-Ovo mb-2'>Share this article</h3>
                  <p className='text-gray-600'>Help others discover this content</p>
                </div>
                
                <div className='flex items-center gap-3'>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://suniljadhav.dev/blog/' + post.slug)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-500 transition-colors'
                    aria-label='Share on LinkedIn'
                  >
                    <svg className='w-5 h-5 text-blue-600' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Back to blog link */}
          <div className='mt-12 text-center'>
            <Link 
              href='/blog'
              className='inline-flex items-center gap-2 px-8 py-3 border border-gray-500 rounded-full hover:bg-gray-50 transition-colors font-Ovo'
            >
              View All Posts
              <Image src={assets.arrow_icon} alt='Arrow' className='w-3' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
