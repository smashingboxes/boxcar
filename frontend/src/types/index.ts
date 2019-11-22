export interface AppState {
  auth: Auth
}

export interface Auth {
  is_refreshing: boolean
  auth_token: string,
  refresh_token: string
  last_refresh?: Date
}

export interface ReduxAction<T,P> {
  type: T,
  payload: P
}
