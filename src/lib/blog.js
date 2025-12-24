import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'blog');

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}

/**
 * Get all blog posts with metadata
 */
export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => {
      const fullPath = path.join(blogDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author || 'Anonymous',
        image: data.image || '/blog/default.png',
        tags: data.tags || [],
        content,
      };
    })
    // Sort posts by date in descending order
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return posts;
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author || 'Anonymous',
    image: data.image || '/blog/nextjs.png',
    tags: data.tags || [],
    content,
  };
}

/**
 * Get recent blog posts (limited number)
 */
export function getRecentPosts(limit = 3) {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

/**
 * Format date to readable string
 */
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
