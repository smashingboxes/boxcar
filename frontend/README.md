# Boxcar

## Note: This is a work in progress, and will evolve as we fully flesh out our react/redux app

### redux-persist

- Official Docs: [redux-persist](https://github.com/rt2zz/redux-persist)
- Currently we are, by default, persisting everything in redux to local storage. If this is not the ideal behavior for this app, you can change the whitelist/blacklist properties in the redux-persist config inside of `create-app-store.ts`. This is done by passing an array with the keys associated with a particular slice of state.
