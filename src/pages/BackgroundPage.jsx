const BackgroundPage = () => {
  return (
    <div className="container -z-50 mx-auto flex flex-col justify-between py-10 lg:flex-row">
      <div className="">
        <h1 className="sticky top-[70px] mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
          Background
        </h1>
      </div>

      <div className="lg:w-8/12">
        <p className="mb-6">
          A Masters Degree Software Engineering graduate from the University of
          Calgary. My tech journey began with a strong interest in web
          development, after taking a computer science course at loughborough
          college
        </p>
        <p className="mb-6">
          I built my first static website by memorizing HTML tags and basic CSS
          styles using notepad, and has lead me to work with cutting-edge
          technologies such as React, Tailwind CSS, React Native, Express,
          SpringBoot, AWS, SQL and NoSQL Databases.
        </p>
        <p className="mb-6">
          I thrive in dynamic environments where I can leverage my skills to
          solve complex problems and contribute to impactful projects. My
          experience spans from designing intuitive user interfaces to
          optimizing back-end functionality, ensuring a well-rounded approach to
          full-stack development.
        </p>
        <p className="mb-6">
          When I’m not coding, you might find me playing video games, watching
          anime, lifting heavy weight, exploring the latest tech trends, or
          diving into new tools and frameworks.
        </p>
      </div>
    </div>
  );
};
export default BackgroundPage;
