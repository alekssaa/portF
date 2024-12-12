import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { links } from "./data";
import Error from "./components/Error";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {links.map((link) => {
            return (
              <Route key={link.id} path={link.url} element={link.component} />
            );
          })}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
