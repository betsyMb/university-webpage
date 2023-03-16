// React
import { useState } from "react";
import { IoLogoReddit } from "react-icons/io5";

// Components
import PerformanceContainer from "../PerformanceContainer";

// Styles
import "./styles.css";

export default function SeoInformation() {
  const [answer, setAnswer] = useState<boolean | null>(null);

  function handleClick(answer: "yes" | "no") {
    if (answer === "yes") {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }
  return (
    <div>
      <h3>Do you want to know something cool?</h3>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-primary" onClick={() => handleClick("yes")}>
          Yes
        </button>
        <button className="btn btn-danger" onClick={() => handleClick("no")}>
          Nop
        </button>
      </div>
      {answer === null && <IoLogoReddit className="icon-reddit mt-5" />}
      {answer !== null && (
        <>
          {answer ? (
            <div className="card w-50 m-auto text-black p-4 mt-5 jello-card">
              <PerformanceContainer />
              <p className="text-black">
                SEO is important because search engines aren’t perfect. If you
                don’t take steps to counter their failings, then your website
                will pay the price. For example, if a site doesn’t have a proper
                link structure, then search engines may not crawl and index the
                site properly which can lower rankings. Coding errors can block
                search engines entirely, making it impossible for your site to
                rank, no matter how much time you put into other SEO efforts.{" "}
              </p>
            </div>
          ) : (
            <div className="slide-bck-center m-auto mt-5 bg-danger rounded-circle d-flex align-items-center justify-content-center">
              <div>a</div>
            </div>
          )}
          <button
            className="btn btn-primary mt-5"
            onClick={() => setAnswer(null)}
          >
            Hidden this
          </button>
        </>
      )}
    </div>
  );
}
