Rails.application.routes.draw do
  

  root 'message#index'
  resources :greetings
  get '*path', to: 'message#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "greetings#index";
end
