class App extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: '/movies/recent',
      method: 'get'
    }).done((response) => {
      this.setState({
        movies: response
      })
    })
  }

  handleMovieSearch(movies){
    this.setState({
      movies: movies
    })
  }

  render(){
    
    return(
      <section className="container">
        <Search filtered_movies={this.handleMovieSearch.bind(this)}/>
        <List movies={this.state.movies}/>
      </section>
    )
  }
}
