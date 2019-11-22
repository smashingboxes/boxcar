import { Auth, ReduxAction } from "../../types"

export const UPDATE_AUTH = "UPDATE_AUTH"
export type UpdateAuth = typeof UPDATE_AUTH
export interface UpdateAuthAction extends ReduxAction<UpdateAuth, Auth> { }
