import { Reducer } from "redux"
import { AuthenticationState } from "../../types"
import * as actionTypes from "./action-types"

const initialState: AuthenticationState = ({
  is_refreshing: false,
  auth_token: "",
  refresh_token: "",
  last_refresh: new Date(0)
})

type ValidActions = actionTypes.UpdateAuthAction

export const authReducer: Reducer<AuthenticationState, ValidActions> = (state = initialState, action): AuthenticationState => {
  switch (action.type) {
    case(actionTypes.UPDATE_AUTH):
      return { ...state, ...action.payload }
    default: return state
  }
}
