export interface AppComponentProps  {
  auth: AuthenticationState
  login: (email: string, password: string) => void
}

export interface AppState {
  auth: AuthenticationState
}

export interface AuthenticationState {
  is_refreshing: boolean
  auth_token: string,
  refresh_token: string
  last_refresh?: Date
}

export interface Action<T,P> {
  type: T,
  payload: P
}
