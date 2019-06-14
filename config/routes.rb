Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # require 'sidekisq/web'
  # mount Sidekiq::Web => '/sidekiq'

  root to: 'home#index'
  resources :home, only: %i[index create]
end
