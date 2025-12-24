# Blog Feature Documentation

## Overview
Your Next.js portfolio now includes a fully functional blog system! You can write blog posts in Markdown format and they will automatically be displayed on your website.

## Features Added

### 1. **Blog Section on Homepage**
   - Displays the 3 most recent blog posts
   - Includes post title, excerpt, tags, author, and date
   - "View All Posts" button to navigate to the full blog page

### 2. **Blog Listing Page** (`/blog`)
   - Shows all blog posts in a grid layout
   - Each post card includes metadata, tags, and excerpt
   - Click any post to read the full article

### 3. **Individual Blog Post Pages** (`/blog/[slug]`)
   - Full blog post content rendered from Markdown
   - Styled headings, paragraphs, lists, code blocks, and quotes
   - Share buttons for social media
   - Back navigation to blog list

### 4. **Navigation**
   - "Blog" link added to the main navbar
   - Available in both desktop and mobile menus

## How to Add New Blog Posts

### Step 1: Create a New Markdown File
Navigate to the `blog/` folder in your project root and create a new `.md` file. The filename will become the URL slug (e.g., `my-awesome-post.md` → `/blog/my-awesome-post`)

### Step 2: Add Frontmatter
Every blog post must start with frontmatter (metadata) at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "2024-12-15"
excerpt: "A brief description of your blog post that appears in listings."
author: "Your Name"
image: "/blog/your-image.jpg"
tags: ["Tag1", "Tag2", "Tag3"]
---
```

### Step 3: Write Your Content
After the frontmatter, write your blog content using Markdown:

```markdown
# Main Heading

Your introduction paragraph...

## Subheading

More content here...

### Smaller Heading

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

\`\`\`javascript
// Code blocks are supported
const example = "Hello World";
\`\`\`

**Bold text** and *italic text* are supported.

[Links](https://example.com) work too!
```

### Step 4: Save and View
Simply save your Markdown file in the `blog/` folder. The post will automatically appear on your website. No restart needed!

## Markdown Features Supported

- **Headings**: # H1, ## H2, ### H3, etc.
- **Paragraphs**: Normal text
- **Lists**: Ordered (1. 2. 3.) and Unordered (- * +)
- **Code**: Inline \`code\` and ```code blocks```
- **Links**: [text](url)
- **Bold**: **text** or __text__
- **Italic**: *text* or _text_
- **Blockquotes**: > quote
- **Images**: ![alt](url)

## File Structure

```
my-portfolio-application/
├── blog/                                    # Blog posts directory
│   ├── getting-started-with-nextjs.md
│   ├── mastering-react-hooks.md
│   └── web-development-trends-2025.md
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── blog/
│   │   │       └── recent/
│   │   │           └── route.js            # API route for recent posts
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.js                 # Individual blog post page
│   │   │   └── page.js                     # Blog listing page
│   │   ├── components/
│   │   │   ├── Blog.jsx                    # Blog component for homepage
│   │   │   └── Navbar.js                   # Updated with Blog link
│   │   └── page.js                         # Homepage (updated)
│   └── lib/
│       └── blog.js                          # Blog utility functions
```

## Example Blog Post Template

Create a new file in the `blog/` folder with this template:

```markdown
---
title: "My New Blog Post"
date: "2024-12-15"
excerpt: "This is a short description of what this blog post is about."
author: "Sunil"
image: "/blog/my-post-image.jpg"
tags: ["JavaScript", "Tutorial", "Web Dev"]
---

# My New Blog Post

Welcome to my new blog post! Here's what you'll learn...

## Introduction

Start with an engaging introduction...

## Main Content

### Point 1
Explain your first point...

### Point 2
Explain your second point...

## Code Example

\`\`\`javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
\`\`\`

## Conclusion

Wrap up your post with key takeaways...
```

## Tips for Great Blog Posts

1. **Use descriptive titles** - Help readers know what to expect
2. **Write clear excerpts** - This appears in blog listings
3. **Add relevant tags** - Makes your content discoverable
4. **Structure with headings** - Break up content for readability
5. **Include code examples** - Show, don't just tell
6. **Keep dates current** - Update the date field in frontmatter
7. **Be consistent** - Use the same author name across posts

## Customization

### Changing the Number of Posts on Homepage
Edit `src/app/page.js` and modify the fetch call to use a different limit:
```javascript
fetch('/api/blog/recent?limit=5')  // Shows 5 posts instead of 3
```

Also update `src/app/api/blog/recent/route.js`:
```javascript
const posts = getRecentPosts(5);  // Match the limit
```

### Styling Blog Posts
- Homepage blog section: `src/app/components/Blog.jsx`
- Blog listing page: `src/app/blog/page.js`
- Individual post page: `src/app/blog/[slug]/page.js`

All components use Tailwind CSS for styling.

## Troubleshooting

### Blog posts not showing up?
1. Check that your `.md` file is in the `blog/` folder (not in `src/app/blog/`)
2. Verify the frontmatter syntax is correct (must use `---` delimiters)
3. Ensure the date format is "YYYY-MM-DD"

### Markdown not rendering correctly?
- Check that there's no space between the opening `---` and content
- Make sure code blocks use three backticks (\`\`\`)
- Verify there are no syntax errors in your Markdown

### Build errors?
- Run `npm run build` to check for any issues
- Make sure all required frontmatter fields are present in each post

## Next Steps

1. Replace the sample blog posts with your own content
2. Add your own images (place in `public/blog/` folder)
3. Customize the styling to match your brand
4. Add more features like:
   - Search functionality
   - Categories/tags filtering
   - Comments section
   - RSS feed
   - Related posts

Enjoy blogging! 🚀
