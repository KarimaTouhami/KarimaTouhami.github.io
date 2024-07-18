import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Pufficats": {
        title: "pufficats",
        desc:
          "The first iteration of pufficats built with React.js leveraging Material UI.",
        techStack: "JAVASCRIPT (REACT.JS), MATERIAL UI",
        link: "https://github.com/KarimaTouhami/pufficats",
        open: "https://github.com/KarimaTouhami/pufficats",
        image: "/assets/pufficats.png"
      },
      bubbles: {
        title: "bubbles",
        desc:
          "A Three.js simulation featuring a 3D space with animated spheres.",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/KarimaTouhami/bubbles",
        open: "https://github.com/KarimaTouhami/bubbles",
        image: "/assets/bubbles.png"
      }
    };
    const projects = {
      "Pufficats": {
        desc:
          "The first iteration of pufficats built with React.js leveraging Material UI.",
        techStack: "JavaScript (React.js), Material UI",
        link: "https://github.com/KarimaTouhami/pufficats",
        open: "https://github.com/KarimaTouhami/pufficats"
      },
      "bubbles": {
        desc:
          "A Three.js simulation featuring a 3D space with animated spheres.",
        techStack: "Javascript (Three.js)",
        link: "https://github.com/KarimaTouhami/bubbles",
        open: "https://github.com/KarimaTouhami/bubbles"
      },
      "IMachines App": {
        desc:
          "A customer-centric user interface for automating business process management.",
        techStack: "dart (Flatter), C++, Swift",
        link:
          "https://github.com/KarimaTouhami/flutter-main-app"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
