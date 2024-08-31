import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div className="flex min-h-screen justify-center">
      <div className="container mx-auto flex flex-col justify-center py-10 pt-[80px]">
        <div className="flex flex-col items-center justify-center gap-8 xl:flex-row-reverse">
          <div>
            <img
              src="/images/headshot-square.jpg"
              alt=""
              className="max-w-64 rounded-full md:max-w-96"
            />
          </div>
          <div className="xl:w-7/12">
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
        <div className="invisible flex justify-center md:visible md:mt-8 lg:mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-8 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
export default HomePage;
