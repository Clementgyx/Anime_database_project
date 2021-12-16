import React from "react";

function AnimeCard({ anime }) {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image_url} alt="Anime" />
        </figure>
        <div className="anime_title">
          <div className="sidebar">{anime.title}</div>
        </div>
      </a>
    </article>
  );
}

export default AnimeCard;
