Rails.application.routes.draw do
  resources :messages
  root "greetings#index"
end
