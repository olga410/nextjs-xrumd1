import { useState, usesEffect} from 'react';

export default function Film(){
  let [films, setFilms] = useState([]);
  usesEffect(()=>{
    fetch('https://ghibliapi.herokuapp.com/films')
    .then((response)=>response.json())
    .then((data) => setFilms(data));
  });
  return(
    <div>
      Ma liste de films(films.map((film) => (
        <h3>
          {film.title} - {film.director} -Rotten tomatoes:{film.rt-score}
          </h3>
      )))
    </div>
  )

}