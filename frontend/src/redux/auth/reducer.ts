import { Reducer } from "redux"
import { Auth } from "../../types"
import * as actionTypes from "./action-types"

const initialState: Auth = ({
    is_refreshing: false,
    auth_token: "",
    refresh_token: "",
    last_refresh: new Date(0)
})

type ValidActions = actionTypes.UpdateAuthAction

export const authReducer: Reducer<Auth, ValidActions> = (state = initialState, action): Auth => {
    switch (action.type) {
        case(actionTypes.UPDATE_AUTH):
        return { ...state, ...action.payload}
        default: return state
    }
}
