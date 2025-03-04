import React from "react";

import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return <div className="text-white">{movie.title}</div>;
};

export default MovieCard;
