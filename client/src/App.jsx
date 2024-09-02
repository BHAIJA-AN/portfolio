import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
const Layout = React.lazy(() => import("./layout/Layout"));
import "./index.css";
import Loading from "./layout/Loading";

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <Router>
          <Layout />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
