# frozen_string_literal: true

require "webdrivers"

Capybara.register_driver :headless_chrome do |app|
  capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
    chromeOptions: { args: %w[headless disable-gpu] }
  )
  Capybara::Selenium::Driver.new(app, browser: :chrome, desired_capabilities: capabilities)
end

RSpec.configure do |config|
  config.include Capybara::DSL
  config.after do
    Capybara.reset_sessions!
  end
  config.before(:each, type: :system) do
    driven_by :headless_chrome
  end
end
