// React
import { useState } from "react";

// Layouts
import { DefaultLayout } from "./layouts";

// Components
import { TechnologyCard } from "./components";

//Technologies data
import { technologies } from "./data";

// Styles
import "./App.css";
import { IoArrowUp } from "react-icons/io5";
import { Link } from "react-router-dom";

function App() {
  const [active, setactive] = useState<number>(0);
  // Handlers
  function handlerClick(index: number) {
    setactive(index);
  }

  return (
    <DefaultLayout>
      <div className="Container vh-100 pt-large text-white px-5">
        <div className="d-flex justify-content-between gap-5 flex-wrap">
          <div>
            <h1>Welcome to my university website!</h1>
            <section>
              <p>
                Here is a brief description of the project and the technologies
                it is based on
              </p>
              <div>
                <ul>
                  {technologies.map((technology, index) => (
                    <li
                      onClick={() => handlerClick(index)}
                      className={`${active === index && "active"} button link`}
                      key={`${technology}-${index}`}
                    >
                      {technology.title}
                    </li>
                  ))}
                </ul>
                <div className="mx-3 mt-5 ">
                  <IoArrowUp />
                  <p className="mt-2">Click some technology!</p>
                </div>
                <p>
                  Do you want to see more?{" "}
                  <Link to={"/login"} className="text-white">Login here!</Link>
                </p>
              </div>
            </section>
          </div>
          <TechnologyCard
            title={technologies[active].title}
            description={technologies[active].description}
            icon={technologies[active].icon}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default App;
