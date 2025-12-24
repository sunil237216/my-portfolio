import React from 'react';
import Link from 'next/link';
import { assets } from '../../../assets/assets';
import Image from 'next/image';

const Blog = ({ posts }) => {
  return (
    <div id='blog' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Latest Articles</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Blog</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Explore my thoughts and insights on web development, technology, and programming.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <Link 
              key={index} 
              href={`/blog/${post.slug}`}
              className='group cursor-pointer'
            >
              <div className='aspect-[3/2] bg-no-repeat bg-center bg-cover rounded-lg overflow-hidden relative'>
                <Image 
                  src={post.image || '/blog/nextjs.png'} 
                  alt={post.title}
                  width={800}
                  height={600}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='w-full h-full bg-gradient-to-b from-transparent to-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              
              <div className='my-4'>
                <div className='flex items-center gap-2 mb-2 flex-wrap'>
                  {post.tags && post.tags.slice(0, 2).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className='text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className='text-xl font-semibold font-Ovo mb-2 group-hover:text-blue-600 transition-colors'>
                  {post.title}
                </h3>
                
                <p className='text-sm text-gray-600 mb-2 line-clamp-2'>
                  {post.excerpt}
                </p>
                
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='col-span-full text-center text-gray-500'>No blog posts available yet.</p>
        )}
      </div>

      <div className='text-center mt-8'>
        <Link 
          href='/blog'
          className='inline-flex items-center gap-2 px-8 py-3 border border-gray-500 rounded-full hover:bg-gray-50 transition-colors font-Ovo'
        >
          View All Posts
          <Image src={assets.arrow_icon} alt='Arrow' className='w-3' />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
