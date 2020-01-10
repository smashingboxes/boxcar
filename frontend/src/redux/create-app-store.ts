import { applyMiddleware, combineReducers, createStore, Store } from "redux"
import { persistStore, persistReducer, PersistConfig, Persistor } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { AppState } from "../types"
import * as reducers from "./reducers"

const persistConfig: PersistConfig<AppState> = {
  key: "root",
  storage,
  // whitelist: ["list", "of", "whitelisted", "reducers"]
  // blacklist: ["list", "of", "blacklisted", "reducers"]
}

const rootReducer = combineReducers<AppState>({ ...reducers })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (): { store: Store<AppState>, persistor: Persistor } => {
  const store: Store<AppState> = createStore(persistedReducer, undefined, composeWithDevTools(applyMiddleware(thunk)))
  const persistor = persistStore(store)
  return { store, persistor }
}
