import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const container = document.querySelector(".work-container");
      if (!container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => {
          setTranslateX();
          return `+=${translateX}`;
        },
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinType: ScrollTrigger.isTouch ? "fixed" : "transform",
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const projects = [
    {
      title: "PRISMORA — Agentic AI Platform",
      category: "Agentic AI Voice Platform",
      tech: "Python, FastAPI, LangGraph, Claude API, OpenAI, React.js",
      image: "/images/placeholder.webp"
    },
    {
      title: "AI Code Reviewer",
      category: "Automated Security & Logic Tool",
      tech: "React.js, Node.js, Claude API, PostgreSQL, JWT, REST",
      image: "/images/placeholder.webp"
    },
    {
      title: "Agent Function-Call Data Generator",
      category: "AI Training Pipeline Tool",
      tech: "Python, Streamlit, OpenAI API, Claude API, LangChain, JSON Schema",
      image: "/images/placeholder.webp"
    },
    {
      title: "Real-Time Analytics Platform",
      category: "TimescaleDB on GCP",
      tech: "PostgreSQL, TimescaleDB, GCP, Kubernetes, PL/pgSQL, Docker",
      image: "/images/placeholder.webp"
    },
    {
      title: "AuctionX",
      category: "Decentralised Auction Platform",
      tech: "Solidity, Ethereum, MetaMask, React.js, Web3.js, Smart Contracts",
      image: "/images/placeholder.webp"
    },
    {
      title: "Sarvam AI Voice Chatbot",
      category: "Multilingual Conversational Interface",
      tech: "Python, Sarvam AI API, React.js, NLP, REST APIs, MongoDB",
      image: "/images/placeholder.webp"
    },
    {
      title: "Hiring Search Tool",
      category: "Production Boolean Query Platform",
      tech: "Node.js, PostgreSQL, React.js, Firebase, GCP",
      image: "/images/placeholder.webp"
    },
    {
      title: "E-Commerce RL Recommendation Engine",
      category: "Reinforcement Learning Web App",
      tech: "FastAPI, GCP, Docker, React.js, Q-Learning, SARSA",
      image: "/images/placeholder.webp"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
