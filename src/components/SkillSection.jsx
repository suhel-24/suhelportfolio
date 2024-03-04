import { skills } from "../Data/skills";
const SkillSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <div
            id="Skills"
            className="flex flex-col justify-center items-center relative z-10"
          >
            <div className="relative flex flex-col justify-between items-center w-full max-w-6xl gap-3 px-4 py-8 mx-auto sm:px-6 lg:px-8">
              <div className="text-4xl text-center font-semibold mt-5  text-white" id="skills">
                Skills
              </div>
              <div className="text-lg text-center font-medium text-gray-300 mt-5">
                Here are some of my skills on which I have been working on for
                the past 3 years.
              </div>

              <div className="flex flex-wrap justify-center gap-10 mt-5 w-full">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-full max-w-md bg-opacity-85 backdrop-filter backdrop-blur-lg bg-gray-800 border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 dark:border-gray-700"
                  >
                    <div className="text-2xl font-semibold mb-5 text-center text-gray-100 dark:text-white">
                      {skill.title}
                    </div>
                    <div className="flex justify-center flex-wrap gap-3 mb-5">
                      {skill.skills.map((item, index_x) => (
                        <div
                          key={index_x}
                          className="text-md font-normal text-gray-300 dark:text-gray-200 border border-gray-300 dark:border-gray-200 rounded-lg p-3 flex items-center justify-center gap-2"
                        >
                          <img src={item.image} alt="" className="w-6 h-6" />
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
