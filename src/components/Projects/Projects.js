import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import placePicker from "../../Assets/Projects/place-picker.png";
import tic_tac_toe from "../../Assets/Projects/tictactoe.png";
import timer from "../../Assets/Projects/timer.png";
import investment from "../../Assets/Projects/investment.png";
import shopping from "../../Assets/Projects/shopping.png";
import project from "../../Assets/Projects/project-mgmt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placePicker}
              isBlog={false}
              title="Place Picker"
              description="Place Picker is a React-based application that helps users manage and explore locations. It features two main sections: one for viewing places the user has visited, and another for discovering new places to visit, sorted by proximity to the user's current location. The visited places section allows users to see and interact with a list of their past visits, while the available places section offers geographically sorted options for new destinations. The app aims to enhance user experience with personalized recommendations and an intuitive interface."
              ghLink="https://github.com/piyush9910/Place-Picker"
              demoLink="https://place-picker-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timer}
              isBlog={false}
              title="Stop Timer Game"
              description="
Stop the Timer is a React-based game where players aim to stop a timer as close to a target time as possible. The game features a start button to begin the countdown and a stop button to halt the timer. The goal is to match the target time accurately, testing players' reflexes and timing skills. The user interface is simple and engaging, making it easy to understand and play. This project demonstrates key React concepts, including state management and event handling, to create an interactive and responsive gaming experience."
              ghLink="https://github.com/piyush9910/Challanges"
              demoLink="https://challanges-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic_tac_toe}
              isBlog={false}
              title="Tic Tac Toe"
              description="
React Tic Tac Toe is a basic implementation of the classic game using React. The app features a 3x3 grid game board where two players take turns clicking on cells to place their marks (X or O). The game alternates between the players, keeping track of whose turn it is, and displays the winner or a draw when the game ends. The user interface is clean and interactive, providing a straightforward and enjoyable gaming experience. This project showcases fundamental React concepts such as state management and component-based architecture."
              ghLink="https://github.com/piyush9910/Tic-Tac-Toe"
              demoLink="https://tic-tac-toe-kohl-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investment}
              isBlog={false}
              title="React Investment Calculator"
              description="An investment calculator built with React helps users estimate the future value of their investments. Users input initial investment amounts, expected annual returns, and investment duration. The calculator then computes and displays the projected growth over time, providing a clear visualization of potential earnings. The interface is intuitive and responsive, ensuring accessibility on various devices. This project showcases React fundamentals like state management and component-based design, offering users a practical tool for financial planning and decision-making.."
              ghLink="https://github.com/piyush9910/React-Investment-Calculator"
              demoLink="https://react-investment-calculator-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project Management Application"
              description="A basic project management app built with React helps users organize and track their projects and tasks. Users can create projects, add tasks with deadlines, assign them to team members, and monitor progress. The app features a user-friendly interface that allows for easy navigation and management of tasks and projects. It includes basic functionalities like task prioritization, status updates, and a visual dashboard for overviewing ongoing projects. This project demonstrates core React concepts such as state management, component architecture, and event handling, providing a solid foundation for more advanced project management solutions."
              ghLink="https://github.com/piyush9910/Project-Management-App"
              demoLink="https://project-management-app-sage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping App"
              description="A basic shopping app built with React allows users to browse, add, and remove items from a shopping cart. The app features a product list with details such as names, prices, and images. Users can add items to their cart, view the cart's contents, and see the total price. The interface is user-friendly and responsive, ensuring a smooth shopping experience on both desktop and mobile devices. This project demonstrates essential React concepts such as state management, component-based architecture, and event handling, providing a foundation for more complex e-commerce applications."
              ghLink="https://github.com/piyush9910/Shopping-App"
              demoLink="https://shopping-app-five-gamma.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
