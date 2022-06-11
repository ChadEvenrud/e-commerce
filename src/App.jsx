import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/Navigation/navigation.component";

import Home from "./components/routes/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
