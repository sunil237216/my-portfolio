import "./globals.css";

export const metadata = {
  title: "Sunil Jadhav - Frontend Developer Portfolio",
  description: "Portfolio of Sunil Jadhav, a passionate frontend developer specializing in React, Next.js, Angular, and modern web technologies. Based in Pune, India.",
  keywords: "frontend developer, web developer, React, Next.js, Angular, JavaScript, TypeScript, portfolio, Pune",
  author: "Sunil Jadhav",
  robots: "index, follow",
  category: "Technology",
  classification: "Business",
  openGraph: {
    title: "Sunil Jadhav - Frontend Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and technical blog posts",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sunil Jadhav",
    "jobTitle": "Frontend Developer",
    "description": "Passionate frontend developer specializing in React, Next.js, Angular, and modern web technologies",
    "url": "https://suniljadhav.dev",
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername"
    ],
    "knowsAbout": ["React", "Next.js", "Angular", "JavaScript", "TypeScript", "Web Development"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressCountry": "India"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://suniljadhav.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="antialiased leading-8 overflow-x-hidden"
        suppressHydrationWarning={true}
      >
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Ovo&display=swap" 
          rel="stylesheet" 
        />
        {children}
      </body>
    </html>
  );
}
