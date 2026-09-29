import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    // Only used to remove class on mount if needed
    containerRef.current.forEach((container) => {
      if (container) {
        container.classList.remove("what-noTouch");
      }
    });
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
            onClick={(e) => handleClick(e.currentTarget)}
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
              <h3>Web and game development</h3>
              <h4>RAG & Agentic Workflows</h4>
              <p>
                I build web and game applications with a focus on AI integration,
                using React, Next.js, TailwindCSS, and Blender. I create RAG pipelines
                and agentic workflows to enhance user experiences and automate tasks.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-skillset">
                <div className="what-content-flex">
                  <div className="what-tags">Next.js</div>
                  <div className="what-tags">React</div>
                  <div className="what-tags">TailwindCSS</div>
                  <div className="what-tags">Blender</div>
                  <div className="what-tags">Node.js</div>
                  <div className="what-tags">Unity</div>
                  <div className="what-tags">C++</div>
                  <div className="what-tags">JavaScript</div>
                  
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
            onClick={(e) => handleClick(e.currentTarget)}
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
              <h3>Designings</h3>
              <h4>Scalable Systems</h4>
              <p>
                I make 2d and 3d designs for websites, games, and applications. I focus on creating scalable systems that can handle growth and complexity, ensuring that the design remains effective and efficient as the project evolves. 
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-skillset">
                <div className="what-content-flex">
                  <div className="what-tags">Blender</div>
                  <div className="what-tags">Photoshop</div>
                  <div className="what-tags">Illustrator</div>
                  <div className="what-tags">Figma</div>
                  <div className="what-tags">Sketch</div>
                  <div className="what-tags">Inkscape</div>
                  <div className="what-tags">GIMP</div>
                
                </div>
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
