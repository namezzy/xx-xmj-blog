import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

// 生成静态路径
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  // 如果文章不存在，显示 404
  if (!post) {
    notFound();
  }
  return (
    <div className="content-paper">
      <div style={{ marginBottom: '24px' }}>
        <a href="/">
          ← Back to home
        </a>
      </div>

      <article>
        <header>
          <h1>{post.title}</h1>
          <div style={{ fontSize: '14px', color: '#666666', marginBottom: '24px' }}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </header>

        <div 
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </article>
    </div>
  );
}
