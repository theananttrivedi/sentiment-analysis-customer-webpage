import IndexPage from "./components/IndexPage";
import "./assets/Inter/fonts.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import "./components/FadeInText.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
