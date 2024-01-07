import Link from "next/link";
import { getBlogPosts } from "../lib/blog";
import { formatDate } from "../lib/utils";

interface BlogPageProps {}

export const metadata = {
  title: "Blog",
  description: "A collection of my thoughts.",
};

const BlogPage = ({}: BlogPageProps) => {
  const allPosts = getBlogPosts();
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default BlogPage;
