# Racxob

*TODO: Project description*

## Table of Contents

- [Stack](#stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Seeded Logins](#seeded-logins)

## Stack

- Rails - ~> 5.2.1
- Ruby - 2.4.2
- PostgreSQL

## Getting Started

### Prerequisites

If you haven't installed ruby, bundler, postgresql, selenium-webdriver, and chromedriver do that first. 

```sh
brew cask install chromedriver
brew cask install selenium-webdriver
brew cask install postgresql
```

### Installation
Then, do the following to set up this app:

```sh
git clone <REPO_URL>
cd <APP_DIR>
bundle install
cp .env.example .env
bundle exec rails db:setup
```

### Usage

To run the app locally:
```sh
bundle exec foreman start
```
Or run two sepearate processes for `bundle exec rails s` and `bin/webpack-dev-server`

Then navigate to http://localhost:3000

### Seeded logins

For a list of credentials you can use to log into the app, check [the seeds file](db/seeds.rb).
These logins are created via `rails db:setup` above.
