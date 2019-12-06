# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def frontend
    render file: "public/index.html", layout: false
  end
end
