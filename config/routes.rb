# frozen_string_literal: true

Rails.application.routes.draw do
  root to: "application#home"
  ActiveAdmin.routes(self)

  if Rails.env.development?
    mount Flipper::UI.app(Flipper), at: "/flipper"
  end
end
