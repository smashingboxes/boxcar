// Some settings automatically inherited from .editorconfig
// taken from https://github.com/iamturns/create-exposed-app which is linked from the airbnb linting rules
module.exports = {
  // Why include an unnecessary character at the end of every line? Break the habit (automatically)!
  semi: false,
  // Trailing commas help with git merging and conflict resolution
  trailingComma: "all",
  overrides: [
    {
      files: "../.editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
}
