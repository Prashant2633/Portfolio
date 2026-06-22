import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development Executive</h4>
                <h5>Wayeva Innovations</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Serving as the primary technical liaison between engineering teams and clients. Translating complex technical workflows into actionable guidance for non-technical partners, and managing project delivery across Agile sprints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Employed Software Engineer</h4>
                <h5>Independent</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Architected and deployed custom applications using GCP, Firebase, and PostgreSQL. Handled client requirements, backend database design, full-stack implementation, and performance monitoring.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer Intern</h4>
                <h5>Skill Enhanced</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Shipped production-grade React.js and Node.js features for a live ed-tech platform. Managed database schema integrations in PostgreSQL, debugged system layers, and delivered client-facing features within Agile sprints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
