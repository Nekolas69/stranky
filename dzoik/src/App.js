import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, [currentPage]);

  const fetchJokes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://v2.jokeapi.dev/joke/Any?type=single&page=${currentPage}&amount=3`
      );
      setJokes(response.data.jokes);
    } catch (error) {
      console.error("Error fetching jokes: ", error);
    }
    setIsLoading(false);
  };

  const addToFavorites = (joke) => {
    const updatedFavorites = [...favorites, joke];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (joke) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== joke.id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (joke) => {
    return favorites.some((favorite) => favorite.id === joke.id);
  };

  return (
    <div className="App dark-mode">
      <h1>Joik Generator</h1>
      <button onClick={fetchJokes} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load Joikes"}
      </button>
      <div className="jokes">
        {jokes.map((joke) => (
          <div key={joke.id} className="joke">
            <p>{joke.joke}</p>
            <div>
              {isFavorite(joke) ? (
                <button onClick={() => removeFromFavorites(joke)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(joke)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="favorites">
        <h2>Favorites</h2>
        <div>
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite">
              <p>{favorite.joke}</p>
              <button onClick={() => removeFromFavorites(favorite)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
