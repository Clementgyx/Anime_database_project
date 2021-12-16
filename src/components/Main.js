import React from "react";
import AnimeCard from "./AnimeCard";

function Main(props) {
  return (
    <main>
      <h4>You searched for {props.search}</h4>
      <div className="main-head">
        <form className="search-box" onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime...(min 3 characters long)"
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default Main;
