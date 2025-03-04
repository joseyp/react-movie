import React from "react";

import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie: { title, poster_path, release_date, original_language, vote_average },
}) => {
  const posterImage = poster_path
    ? `url(https://image.tmdb.org/t/p/w500/${poster_path})`
    : "url(/no-movie-1.png)";

  return (
    <div className="movie-card">
      <div
        className="h-80 w-full bg-cover bg-center max-md:h-120 max-sm:h-110"
        style={{
          backgroundImage: posterImage,
        }}
      ></div>

      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
