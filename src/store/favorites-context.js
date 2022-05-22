import { createContext, useState } from "react";

const FavoritesContext = createContext({ favorites: [], totalFavorites: 0 });

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeeptup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeeptup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(
        (favorite) => favorite.meetupId !== meetupId
      );
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((favorite) => favorite.meetupId === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
