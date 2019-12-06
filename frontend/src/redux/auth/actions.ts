import { Dispatch } from "redux"

import { AuthenticationState } from "../../types"
import { UpdateAuthAction, UPDATE_AUTH } from "./action-types"


export function updateAuth(auth: AuthenticationState): UpdateAuthAction {
    return {
        type: UPDATE_AUTH,
        payload: auth
    }
}

// dummy function stubbing out a login call for now
async function loginApiCall(email: string, password: string): Promise<AuthenticationState> {
  return {
    is_refreshing: false,
    auth_token: email,
    refresh_token: password,
    last_refresh: new Date(0)
  }
}

export function logIn(email: string, password: string) {
  return async (dispatch: Dispatch): Promise<AuthenticationState> => {
      try {
          const authResponse = await loginApiCall(email, password)
          dispatch(updateAuth(authResponse))
          return Promise.resolve(authResponse)
      } catch (error) {
          return Promise.reject(error)
      }
  }
}
