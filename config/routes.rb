# frozen_string_literal: true

Rails.application.routes.draw do
  root to: "application#home"
  ActiveAdmin.routes(self)

  if Rails.env.development?
    mount Flipper::UI.app(Flipper), at: "/flipper"
  else
    # If you uncomment this line, Flipper UI will be completely unprotected.
    # Boxcar recommends protecting this route with authentication.
    # mount Flipper::UI.app(Flipper), at: '/flipper'
  end
end
