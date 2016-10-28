class MoviesController < ApplicationController
  require 'unirest'

  def recent
    response = Unirest.get "http://www.omdbapi.com/?y#{Time.now.year}"
    render json: movies
  end
end
