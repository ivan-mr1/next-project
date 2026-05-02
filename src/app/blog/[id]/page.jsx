export default async function AboutPage({ params }) {
  const { id } = await params;

  return (
    <section className="content">
      <h2 className="section-title">Blog {id} Page</h2>
    </section>
  );
}
