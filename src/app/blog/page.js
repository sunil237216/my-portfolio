import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { assets } from '../../../assets/assets';

export const metadata = {
  title: 'Blog - Sunil Portfolio',
  description: 'Read my latest articles on web development, technology, and programming',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      
      <div className='w-full px-[12%] py-10 pt-32'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-Ovo mb-4'>My Blog</h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Thoughts, tutorials, and insights on web development and technology
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
          {posts.map((post, index) => (
            <Link 
              key={index} 
              href={`/blog/${post.slug}`}
              className='group cursor-pointer'
            >
              <div className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'>
                <div className='aspect-[3/2] bg-no-repeat bg-center bg-cover relative overflow-hidden'>
                  <Image 
                    src={post.image || '/blog/default.jpg'} 
                    alt={post.title}
                    width={800}
                    height={600}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='w-full h-full bg-gradient-to-b from-transparent to-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3 flex-wrap'>
                    {post.tags && post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className='text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className='text-2xl font-semibold font-Ovo mb-3 group-hover:text-blue-600 transition-colors'>
                    {post.title}
                  </h2>
                  
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>
                  
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <div className='flex items-center gap-2 text-blue-600 font-medium'>
                      <span>Read More</span>
                      <Image src={assets.arrow_icon} alt='Arrow' className='w-3' />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-xl text-gray-500'>No blog posts available yet.</p>
          </div>
        )}
      </div>
    </>
  );
}
