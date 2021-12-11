// this my state filde types
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

// enum@ gorcoxutyunneri fiqsumn e mek @ndhanur objectum
export enum UserActionTypes{
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR" 
}
///  mer bolor actionneri typern en 
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
///

//miangamic 1 action enq export anum vor@ karox e linel ays 3 tiperi 
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction