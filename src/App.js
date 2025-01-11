import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { links } from "./data";
import Error from "./components/Error";

function App() {
  return (
    <div className="flex flex-col h-screen sm:h-[80vh] md:h-[60vh] lg:h-[50vh] w-full overflow-hidden">
      <div className="flex-grow">
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
      </div>
    </div>
  );
}

export default App;
