import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/Navigation/navigation.component";
import Shop from "./components/routes/Shop/shop.component";
import Authenticate from "./components/routes/Authentication/authentication.component";

import Home from "./components/routes/home.component";
import CheckOut from "./components/routes/CheckOut/checkout.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/auth" element={<Authenticate />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
