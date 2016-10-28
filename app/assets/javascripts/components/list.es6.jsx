class List extends React.Component {

  render(){
    let movies = this.props.movies

    return(
      <section className="container">
        <h3>Recent Movies</h3>
        <ul>
          { movies.map( (movie, i) => <Movie data={movie} key={i}/> )}
        </ul>
      </section>
    )
  }
}
