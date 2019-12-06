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

### Bundle Audit

[Bundle Audit](https://github.com/rubysec/bundler-audit) is a tool that enforces that we upgrade
our dependencies if they have vulnerabilities. We have it configured to run as part of our CI/CD
process. It checks all of the gem versions in `Gemfile.lock` against an online database of known
vulnerabilities and if it finds any it prints them out and errors.

If you run into an error in CI/CD relating to bundle-audit, take a look at the "Solution:" line.
Most of the time, the fix is simply to update the gem, which you can do with
`bundle update whatevergem`.

