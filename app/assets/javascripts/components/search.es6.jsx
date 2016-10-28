class Search extends React.Component {

  findMovie(event){
    let movieSearch = this.refs['search-text']
    $.ajax ({
      url: 'http://www.omdbapi.com/?s=ann',
      method: 'get'
    }).done( function(response){
      this.props.filtered_movies(response)
    }.bind(this))
  }

  render(){
    return(
      <header class="container">
        <div>Search for a movie</div>
        <form onChange={(event) => this.findMovie(event)}>
          <input ref="search-text" type="text" name="title"/>
          <input type="submit" value="Find Movie"/>
        </form>
      </header>
    )
  }
}
