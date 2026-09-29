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
                <h4>WEB AND GAME DEVELOPER</h4>
                <h5>Programmer</h5>
              </div>
              <h3>2025–PRESENT</h3>
            </div>
            <p>
              Building websites using Tailwindcss, React, and Next.js, htmal5. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior developer</h4>
                <h5>Hablu Programmer</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked for Hablu programmer. Developed and maintained web applications using Python, Django, and FastAPI.
              Collaborated with cross-functional teams to deliver high-quality software solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blender Artist</h4>
                <h5>Remote</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Created 3D models and animations for various clients using Blender, focusing on character design and environment creation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
