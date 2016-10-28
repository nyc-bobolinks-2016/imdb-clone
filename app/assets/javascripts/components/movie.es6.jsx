class Movie extends React.Component {
  render(){
    let { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Metascore, imdbRating, imdbVotes, imdbID, Type }
    return (
      <div className="container">
        <div className="movie">
          <img className="poster" src={Poster} alt="" />
          <div className="movie-details">
            <ul>
              <li className="">{Title}</li>
              <li className="">{Year}</li>
              <li className="">{Rated}</li>
              <li className="">{Released}</li>
              <li className="">{Runtime}</li>
              <li className="">{Genre}</li>
              <li className="">{Director}</li>
              <li className="">{Writer}</li>
              <li className="">{Actors}</li>
              <li className="">{Plot}</li>
              <li className="">{Language}</li>
              <li className="">{Country}</li>
              <li className="">{Awards}</li>
              <li className="">{Metascore}</li>
              <li className="">{imdbRating}</li>
              <li className="">{imdbVotes}</li>
              <li className="">{imdbID}</li>
              <li className="">{Type}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
