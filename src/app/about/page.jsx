import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="content">
      <h2 className="section-title">About Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        laudantium quis consequuntur esse error pariatur, laborum excepturi
        maxime optio commodi ipsa voluptas ratione illo obcaecati facere
        deleniti labore, cumque explicabo maiores, animi accusamus!
      </p>
      <Image
        src="/dodge-400-200.jpg"
        alt="photo"
        width={400}
        height={200}
        loading="eager"
      />
    </section>
  );
};

export default AboutPage;
