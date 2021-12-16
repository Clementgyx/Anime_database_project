import React from "react";

function Sidebar(props) {
  return (
    <div>
      <h3>Top 10 Trending Anime</h3>
      <nav>
        {props.trending.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            <div className="sideimg">
              <img className="sidebarimg" src={anime.image_url} alt="Anime" />
            </div>
            <div className="sidebar">{anime.title}</div>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
