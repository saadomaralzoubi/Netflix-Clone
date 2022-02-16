import "./App.css";
import "./components/Home";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList";
import { useEffect, useState } from "react";

function App() {
  const [favListData, setFavListDta] = useState();

  async function getDataFromDB() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/favorite`);
    const data = await response.json();
    setFavListDta(data);
  }
  useEffect(() => {
    getDataFromDB();
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        const [favListData, setFavListDta] = useState();
        <Route
          path="/favList"
          element={<FavList favListData={favListData} />}
        />
      </Routes>
    </>
  );
}

export default App;
