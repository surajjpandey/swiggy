import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/body/Home";
import Search from "./components/body/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path={"/search"} element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
