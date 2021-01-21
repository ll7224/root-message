import { post } from "./http";

export const postMessage = (token,params) => post(`/send?access_token=${token}`, params)