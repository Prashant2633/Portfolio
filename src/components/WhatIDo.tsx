import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FULLSTACK</h3>
              <h4>Description</h4>
              <p>
                Building secure, scalable, and responsive full-stack applications with optimized database designs and modern cloud integrations.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">React.js</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">WebSockets</div>
                <div className="what-tags">JWT (JSON Web Tokens)</div>
                <div className="what-tags">OAuth 2.0</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">TimescaleDB</div>
                <div className="what-tags">BigQuery</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">GCP</div>
                <div className="what-tags">AWS</div>
                <div className="what-tags">Azure</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Kubernetes</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Vercel</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI / ML</h3>
              <h4>Description</h4>
              <p>
                Orchestrating autonomous agentic workflows, building conversational systems, engineering prompt-injection protections, and implementing reinforcement learning algorithms.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Machine Learning (ML)</div>
                <div className="what-tags">Deep Learning (DL)</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">Scikit-Learn</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">Hugging Face</div>
                <div className="what-tags">LLMs (Large Language Models)</div>
                <div className="what-tags">RAG (Retrieval Augmented Generation)</div>
                <div className="what-tags">MCP (Model Context Protocol)</div>
                <div className="what-tags">LangGraph</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">Claude API</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">Sarvam AI</div>
                <div className="what-tags">Reinforcement Learning (RL)</div>
                <div className="what-tags">RLHF (Reinforcement Learning from Human Feedback)</div>
                <div className="what-tags">Apache Kafka</div>
                <div className="what-tags">Apache Airflow</div>
                <div className="what-tags">Apache Spark</div>
                <div className="what-tags">Streamlit</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Tableau</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
