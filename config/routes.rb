Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root 'games#root'
  root to: 'root#index'
  resources :games
  get 'planning', to: 'games#planning'
  get 'playing', to: 'games#playing'
  get 'completed', to: 'games#completed'
  get 'dropped', to: 'games#dropped'
end
