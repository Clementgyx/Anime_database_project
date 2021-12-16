import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import LoadingSpinner from "./components/LoadingSpinner";
import Categories from "./components/Categories";
import DisplayCarousel from "./components/DisplayCarousel";
function App() {
  const [animeList, setAnimeList] = useState([]);
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // setTimeout(function () {}, 4000);

  //////////////Runs on load and gets the top 10 trending anime
  const getTrending = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTrending(temp.top.slice(0, 10));
  };

  useEffect(() => {
    getTrending();
    // console.log(trending);
  }, []);

  ///////////this takes user input in search bar and runs the query
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(search);
    fetchAnime(search);
  };

  /////////////////updates the anime list state
  const fetchAnime = async (query) => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}?sort=ascending&order_by=title&limit=200`
    ).then((res) => res.json());
    setLoading(false);

    // console.log(temp.results);
    setAnimeList(temp.results);
  };

  /////////////////updates to action category
  const fetchCategoryAction = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=&genre=1&limit=100&order_by=score&sort=descending`
    ).then((res) => res.json());
    setLoading(false);

    // console.log(temp.results);
    setAnimeList(temp.results);
  };
  /////////////////updates to adventure category
  const fetchCategoryAdventure = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=&genre=2&limit=100&order_by=score&sort=descending`
    ).then((res) => res.json());
    setLoading(false);

    // console.log(temp.results);
    setAnimeList(temp.results);
  };

  /////////////////updates to car category
  const fetchCategoryCars = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=&genre=3&limit=100&order_by=score&sort=descending`
    ).then((res) => res.json());
    setLoading(false);

    // console.log(temp.results);
    setAnimeList(temp.results);
  };

  /////////////////updates to comedy category
  const fetchCategoryComedy = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=&genre=4&limit=100&order_by=score&sort=descending`
    ).then((res) => res.json());
    setLoading(false);

    // console.log(temp.results);
    setAnimeList(temp.results);
  };

  /////////////////updates to Avante Garde category
  const fetchCategoryDrama = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=&genre=8&limit=100&order_by=score&sort=descending`
    ).then((res) => res.json());
    setLoading(false);

    // console.log(temp.results);
    setAnimeList(temp.results);
  };

  return (
    <div className="App">
      <Header></Header>
      <DisplayCarousel></DisplayCarousel>
      <Sidebar trending={trending}></Sidebar>
      <Categories
        fetchCategoryAction={fetchCategoryAction}
        fetchCategoryAdventure={fetchCategoryAdventure}
        fetchCategoryCars={fetchCategoryCars}
        fetchCategoryComedy={fetchCategoryComedy}
        fetchCategoryDrama={fetchCategoryDrama}
      ></Categories>
      {loading ? <LoadingSpinner /> : setLoading}
      <Main
        handleSearch={handleSearch}
        search={search}
        animeList={animeList}
        setSearch={setSearch}
      ></Main>
    </div>
  );
}

export default App;
