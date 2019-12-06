import { AuthenticationState, Action } from "../../types"

export const UPDATE_AUTH = "auth/update"
export type UpdateAuth = typeof UPDATE_AUTH
export interface UpdateAuthAction extends Action<UpdateAuth, AuthenticationState> { }
