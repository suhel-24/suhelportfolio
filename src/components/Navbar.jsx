import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "skills",
    },
    {
      id: 2,
      link: "Projects",
    },
    {
      id: 3,
      link: "About",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  const [menu, setmenu] = useState(true);
  const handleClick=(link)=>{
    setmenu(!menu)
    const section = document.getElementById(link.toLowerCase());
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
  }
  return (
    <div className="text-white flex justify-between items-center w-full px-5 h-20 absolute">
      <div className="">
        <h1 className="text-3xl font-semibold">Sk.Suhel </h1>
      </div>
      <div>
        <ul className="md:flex hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize cursor-pointer text-xl font-medium hover:scale-105 duration-200"
              onClick={() => {
                const section = document.getElementById(link.toLowerCase());
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="block md:hidden cursor-pointer z-10"
        onClick={() => setmenu(!menu)}
      >
        {menu ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      {!menu && (
        <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-500 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize cursor-pointer py-6 text-3xl" onClick={() => handleClick(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
