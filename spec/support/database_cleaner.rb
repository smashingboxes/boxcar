# frozen_string_literal: true

RSpec.configure do |config|
  config.use_transactional_fixtures = false

  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before do |_example|
    DatabaseCleaner.strategy = :transaction
  end

  config.before(:each, type: :system) do
    unless Capybara.current_driver == :rack_test
      DatabaseCleaner.strategy = :truncation
    end
  end

  config.before do
    DatabaseCleaner.start
  end

  config.append_after do
    DatabaseCleaner.clean
  end
end
