import Movie from "./Movie";
import "./MovieList.css";

export default function MovieList(props) {
  return (
    <div>
      {props.movies.map((value) => {
        return (
          <>
            <Movie data={value} />
          </>
        );
      })}
    </div>
  );
}
