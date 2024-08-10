
Rails.application.routes.draw do
  get 'users/show'
  resources :rooms do 
    resources :messages
  end
  root 'home#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get "user/:id", to: "users#show", as: "user"
end
