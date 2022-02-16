import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function FavList() {
  const [favListData, setFavListDta] = useState();

  async function getDataFromDB() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
    const data = await response.json();
    setFavListDta(data);
  }
  useEffect(() => {
    getDataFromDB();
  }, []);
  async function handleDelete(id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/DELETE/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      getDataFromDB();
    }
  }
  return (
    <>
      <h3>My Favorite Movies</h3>
      {favListData &&
        favListData.map((movie) => {
          return (
            <>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleDelete(movie.id);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
    </>
  );
}

export default FavList;
