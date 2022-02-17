import "./App.css";
import "./components/Home";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        const [favListData, setFavListDta] = useState();
        <Route path="/favList" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
