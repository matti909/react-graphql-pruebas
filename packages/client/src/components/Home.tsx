import Clients from "./Client";
import Projects from "./Projects";
import AddClient from "./addClient";
import AddProject from "./addProject";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddProject />
        <AddClient />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
