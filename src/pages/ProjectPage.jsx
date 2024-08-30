import Project from "../components/Project";
import projectsList from '../data/projects.json';


const ProjectPage = () => {
  return (

    <div className="container mx-auto flex flex-col justify-between py-10 lg:flex-row">
    <div >

      <h1 className="sticky top-[70px] mb-4 text-3xl uppercase text-primary md:text-4xl font-bold">
        Projects
      </h1>
    </div>
      <div className="lg:w-8/12">
        <Project projectsList={projectsList}/>
      </div>
    </div>
  );
};
export default ProjectPage;
