import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/Navigation/navigation.component";
import Shop from "./components/routes/Shop/shop.component";
import SignIn from "./components/routes/SignIn/signin.component";

import Home from "./components/routes/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
