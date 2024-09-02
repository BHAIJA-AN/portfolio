import React, { Suspense } from "react";
import TopNavbar from "../components/navbar/Navbar";
const Home = React.lazy(() => import("../components/home/Home"));
const About = React.lazy(() => import("../components/about/About"));
const Skills = React.lazy(() => import("../components/skills/Skills"));
const Project = React.lazy(() => import("../components/projects/Project"));
const Services = React.lazy(() => import("../components/services/Services"));
const Contact = React.lazy(() => import("../components/footer/Footer"));
import Loading from "./Loading";

const Layout = () => {
  return (
    <div className="h-100">
      <TopNavbar />
      <Suspense fallback={<Loading />}>
        <Home />
        <About />
        <Skills />
        <Services />
        <Project />
        <Contact />
      </Suspense>
    </div>
  );
};


export default Layout;
