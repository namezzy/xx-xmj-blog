import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const blogPosts = getAllPosts();

  return (
    <div className="content-paper">
      <header>
        <h1>Levi</h1>
      </header>

      <main>
        {/* Blog Section */}
        <section>
          <h2>Blog</h2>
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

        {/* About Section */}
        <section>
          <h2>About</h2>
          <p>
            享受当下，无限进步
          </p>
          <p>
            Limitless progress
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:xmj@xx-xmj.com">
                xmj@xx-xmj.com
              </a>
              {' '}via email
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
