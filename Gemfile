# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby "2.4.2"

gem "rails", "~> 5.2.1"

gem "active_interaction", "~> 3.7"
gem "activeadmin"
gem "airbrake", "~> 9.2"
gem "bootsnap", ">= 1.1.0", require: false
gem "flipper"
gem "flipper-active_record"
gem "flipper-ui"
gem "mailgun-ruby"
gem "pg", "~> 1.0.0"
gem "puma", "~> 3.7"
gem "webpacker", "~> 3.5"

group :development, :test do
  gem "annotate"
  gem "awesome_print"
  gem "brakeman"
  gem "bundler-audit"
  gem "capybara"
  gem "database_cleaner"
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "faker"
  gem "foreman"
  gem "pry-byebug"
  gem "rails-erd"
  gem "rspec-rails"
  gem "rubocop"
  gem "rubocop-rspec"
  gem "selenium-webdriver"
  gem "shoulda-matchers"
  gem "simplecov"
end

group :development do
  gem "bullet"
  gem "letter_opener"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara-selenium"
  gem "webdrivers"
end
