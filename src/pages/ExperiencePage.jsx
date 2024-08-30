const ExperiencePage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between py-10 lg:flex-row">
      <div>
        <h1 className="sticky top-[70px] -z-50 mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
          Experience
        </h1>
      </div>
      <div className="lg:w-8/12">
        <ul className="timeline timeline-vertical timeline-compact timeline-snap-icon -z-50">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">September 2023 – Present</time>
              <div className="text-lg font-black">
                Software Engineer – Full Stack Developer
              </div>
              <div className="text-lg font-black">CANN Forecast Inc.</div>
              <p>
                Managed databases, developed data pipelines, and performed
                spatial analysis for water management projects.
              </p>
              <p>
                Collaborated with domain experts to create user interfaces,
                interactive maps, and data visualizations.
              </p>
              <p>
                Developed an automated email attachment downloader and uploader
                using Python; deployed via Jenkins for CI/CD.
              </p>
              <p>
                Presented project updates and results to both technical and
                non-technical audiences.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">
                September 2022 – June 2023
              </time>
              <div className="text-lg font-black">
                Software Engineer – Machine Learning
              </div>
              <div className="text-lg font-black">HiFi Engineering Inc.</div>
              <p>
                Developed and implemented machine learning algorithms for sensor
                data analysis to detect pipeline leaks.
              </p>
              <p>
                Collaborated with domain experts to ensure accurate modeling and
                integration of ML solutions.
              </p>
              <p>
                Achieved a 95% accuracy rate in simulated leak scenarios through
                validation tests.
              </p>
              <p>
                Communicated project impact on safety and operational efficiency
                to varied audiences.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-1">
              <time className="font-mono italic">October 2018 – June 2021</time>
              <div className="text-lg font-black">Software Engineer</div>
              <div className="text-lg font-black">
                Woodstock Electronics Limited
              </div>
              <p>
                Contributed to both frontend and backend development to enhance
                platform functionality.
              </p>
              <p>
                Developed interactive user interfaces using React and other
                modern technologies.
              </p>
              <p>
                Implemented backend components, working with RESTful APIs and
                databases for seamless data exchange.
              </p>
              <p>
                Proactively stayed updated with industry trends and continuously
                enhanced technical skills.
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ExperiencePage;
