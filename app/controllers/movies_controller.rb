class MoviesController < ApplicationController
  def recent
    response = Unirest.get "http://www.omdbapi.com/?s=ann"
    render json: response.body
  end

  def filter
    response = Unirest.get "http://www.omdbapi.com/?s=#{params[:s]}"
    render json: response.body
  end
end
