class Search extends React.Component {

  findMovie(event){
    let movieSearch = this.refs['search-text']
    $.ajax ({
      url: 'http://www.omdbapi.com/?s='+movie_title
      method: 'get'
    }).done( function(response){
      this.props.movies(response)
    }.bind(this))
  }

  render(){
    return(
      <div class="container">
        <p>Search for a movie</p>
        <form class="" action="/movies" method="get">
          <input ref="search-text" type="text" name="title"/>
          <input type="submit" value="Find Movie"/>
        </form>
      </div>
    )
  }
}
