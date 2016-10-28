class App extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    $.ajax({

    })
  }

  handleMovieSearch(movie){
    this.setState({
      movie: movie
    })
  }

  render(){

    return(
      <section className="container">
        <Search movies={this.movie.bind(this)}/>
      </section>
    )
  }
}
