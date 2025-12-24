'use client';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    // Fetch recent blog posts
    fetch('/api/blog/recent')
      .then(res => res.json())
      .then(data => setRecentPosts(data))
      .catch(err => console.error('Error fetching blog posts:', err));
  }, []);

  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Blog posts={recentPosts} />
    <Contact/>
    </>
  );
}
