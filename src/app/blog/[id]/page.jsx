async function getData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getData(id);

  return {
    title: `Blog ${post.title} | My Site`,
  };
}

export default async function BlogPageId({ params }) {
  const { id } = await params;
  const post = await getData(id);

  return (
    <section className="content">
      <h2 className="section-title">{post.title}</h2>
      <p>{post.body}</p>
    </section>
  );
}
