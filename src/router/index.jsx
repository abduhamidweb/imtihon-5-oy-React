// start Router domm
import { Routes, Route } from "react-router-dom";
import Followers from "../components/Followers/Followers";
import Following from "../components/Following/Following";
import Overview from "../components/Overview/Overview";
import Packages from "../components/Packages/Packages";
import Projects from "../components/Projects/Projects";
import Repositories from "../components/Repositories/Repositories";
import Stars from "../components/Stars/Stars";
import "./style.css"
const index = () => {
  return (
    <>
      <main>
        <section>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/repo" element={<Repositories />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/following"element={<Following />}/>
          </Routes>
        </section>
      </main>
    </>
  );
};

export default index;
