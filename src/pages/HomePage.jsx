const HomePage = () => {
  return (
    <div className="container mx-auto flex min-h-screen justify-center transition pt-[80px]">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row-reverse">
        <img
          src="/images/headshot-square.jpg"
          alt=""
          className="max-w-64 rounded-full md:max-w-96"
        />
        <div className="lg:w-8/12">
          <p className="mb-4 text-5xl font-black text-primary md:text-6xl">
            Oluwajolasun Jaiyesimi
          </p>
          <p className="mb-6 text-3xl font-black text-secondary">
            Fullstack Developer
          </p>
          <p className="mb-8 text-xl">
            I craft solutions that meet technical demands and deliver engaging
            user experiences, by seamlessly integrating front-end and back-end
            technologies to create robust, scalable applications.
          </p>
          <div className="mx-auto w-fit">
            <a
              href="Oluwajolasun_Jaiyesimi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">Grab my resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
