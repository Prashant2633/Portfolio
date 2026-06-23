import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRASHANT
              <br />
              <span>SHARMA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <span className="landing-role-purple">Full Stack</span>
            </h2>
            <h2 className="landing-info-h2-white">
              <span className="landing-role-white">AI/ML</span>
            </h2>
            <h2 className="landing-info-h2-sub">
              <span className="landing-role-sub">Developer</span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
