import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useRef } from "react";
import axios from "axios";

export default function MovieModal(props) {
  const commintRrf = useRef();
  function handleComment(e) {
    e.preventDefault();
    const comment = commintRrf.current.value;
    const newMovie = { ...props.chosenMovie, comment };
    props.newdata(newMovie, props.chosenMovie.id);
  }

  async function handleAddFav(e, movie) {
    e.preventDefault();
    const dataToBeSent = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comment: movie.comment,
    };
    console.log(dataToBeSent);
    const url = `https://js-prp-course.herokuapp.com/addMovie/`;
    // axios
    //   .post(url, dataToBeSent)
    //   .then((data) => {
    //     console.log(data.data);
    //   })
    //   .catch((error) => console.log(error));
    const response = await fetch(url, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBeSent),
    });
    const data = await response.json();
    console.log(response.status);
    console.log(data);
  }
  return (
    <>
      <Modal show={props.show} onHide={props.MovieModalhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Card.Img
          variant="top"
          src={
            "https://image.tmdb.org/t/p/w500" +
            `${props.chosenMovie.poster_path}`
          }
        />
        <p>
          User Comment:{" "}
          {props.chosenMovie.comment
            ? props.chosenMovie.comment
            : "No Comment is added"}
        </p>
        <Modal.Footer>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                ref={commintRrf}
                type="text"
                placeholder="Enter your comment"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleComment}>
              comment
            </Button>
          </Form>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              handleAddFav(e, props.chosenMovie);
            }}
          >
            Add to Favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
