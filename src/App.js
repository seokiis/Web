import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Learned from "./pages/Learned";
import Project from "./pages/Project";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/learned" element={<Learned />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
