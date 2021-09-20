Rails.application.routes.draw do
  root "articles#new"

  resources :articles, only: :create
end
