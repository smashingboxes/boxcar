# PROJECT_TITLE

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

### Bundle Audit

If you run into an error in the specs relating to bundle-audit, giving a solution line like 
Solution: upgrade to ~> 5.0.0.beta1.1, ~> 4.2.5.1, ~> 4.1.14.1, ~> 3.2.22.1, you need to run 
`bundle exec bundle-audit --update`. If this doesn't work, you'll need to manually update the 
gem (e.g. `bundle update nokogiri`) and commit the changes.
