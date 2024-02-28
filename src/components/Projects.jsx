import { projectsData } from "../Data/projects";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <div className="relative flex flex-col justify-between items-center w-full max-w-6xl gap-3 px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div
            className="text-4xl text-center font-semibold mt-5 text-gray-900 dark:text-white"
            id="projects"
          >
            Projects
          </div>
          <div className="text-lg text-center font-medium text-gray-700 dark:text-gray-300 mt-5">
            I have worked on wide range of projects. Here are some of my
            projects
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-5 w-full">
            {projectsData.map((project, index) => (
              <div
                key={index}
                onClick={()=>{window.open(project.link)}}
                className="w-full max-w-md backdrop-filter backdrop-blur-lg bg-gray-800 bg-opacity-95 border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  src={project.image}
                  alt="not loaded"
                  className="rounded-t-lg w-[986px] h-[250px]"
                />

                <div className="text-2xl font-semibold mb-3 text-center text-gray-100 dark:text-white pt-4">
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
