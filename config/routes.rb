Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'movies/recent', to: 'movies#recent'
  post 'movies', to: 'movies#filter'
  root to: 'static#index'
end
