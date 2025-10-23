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
