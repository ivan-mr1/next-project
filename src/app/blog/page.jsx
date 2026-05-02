import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}

export const metadata = {
  title: "Next | Blog",
  description: "Blog page description",
};

export default async function BlogPage() {
  const posts = await getData();

  return (
    <section className="content">
      <h2 className="section-title">Blog Page</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
