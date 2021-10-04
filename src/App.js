import "./App.css";
import { lazy, Suspense, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./components/Login"));
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<h5>Loading...</h5>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<HomePage />}/>
          </Routes>
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
