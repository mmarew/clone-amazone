import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
