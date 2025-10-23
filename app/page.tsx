import { getAllPosts } from "@/lib/posts";
import Image from "next/image";

export default function Home() {
  const blogPosts = getAllPosts();

  return (
    <div className="content-paper">
      <header style={{ position: 'relative' }}>
        <h1>Levi</h1>
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
        }}>
          <Image
            src="https://avatars.githubusercontent.com/u/26276606?s=400&u=cc7fa5f60e8399504797485ba86ed8894e003964&v=4"
            alt="Levi's Avatar"
            width={80}
            height={80}
            className="avatar-image"
            priority
          />
        </div>
      </header>

      <main>
        {/* Contact Section - 放在最上面 */}
        <section>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="https://x.com/Levi" target="_blank" rel="noopener noreferrer">
                @Levi
              </a>
              {' '}on X
            </li>
            <li>
              <a href="https://github.com/namezzy" target="_blank" rel="noopener noreferrer">
                @Levi
              </a>
              {' '}on Github
            </li>
            <li>
              <a href="mailto:xmj@xx-xmj.com">
                xmj@xx-xmj.com
              </a>
              {' '}via email
            </li>
          </ul>
        </section>

        {/* Interests Section */}
        <section>
          <h2>Interests</h2>
          <p>
            I love to build
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/namezzy/xx-xmj-blog" target="_blank" rel="noopener noreferrer">
                Personal Website
              </a>
              {' '}— A minimalist blog built with Next.js
            </li>
            <li>
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                Next.js Applications
              </a>
              {' '}— Modern web applications with React
            </li>
            <li>
              <a href="https://github.com/namezzy" target="_blank" rel="noopener noreferrer">
                Open Source Contributions
              </a>
              {' '}— Contributing to the developer community
            </li>
          </ul>
        </section>

        {/* Interesting Links Section */}
        <section>
          <h2>Interesting Links</h2>
          <ul>
            <li>
              <a href="https://gregbrockman.com" target="_blank" rel="noopener noreferrer">
                Greg Brockman
              </a>
              {' '}— Design inspiration for this site
            </li>
            <li>
              <a href="https://paulgraham.com" target="_blank" rel="noopener noreferrer">
                Paul Graham
              </a>
              {' '}— Essays on startups and technology
            </li>
            <li>
              <a href="https://waitbutwhy.com" target="_blank" rel="noopener noreferrer">
                Wait But Why
              </a>
              {' '}— Long-form exploration of interesting topics
            </li>
            <li>
              <a href="https://www.youtube.com/@3blue1brown" target="_blank" rel="noopener noreferrer">
                3Blue1Brown
              </a>
              {' '}— Beautiful math visualizations
            </li>
            <li>
              <a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer">
                Hacker News
              </a>
              {' '}— Tech news and discussions
            </li>
          </ul>
        </section>

        {/* Writing and Talks Section */}
        <section>
          <h2>Writing and talks</h2>
          <div>
            {blogPosts.map((post) => (
              <div key={post.slug} style={{ marginBottom: '16px' }}>
                <div>
                  <a href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                </div>
                <div style={{ fontSize: '14px', color: '#666666', marginTop: '4px' }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
